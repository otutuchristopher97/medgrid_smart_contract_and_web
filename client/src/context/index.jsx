import React, { useContext, createContext } from "react";

import {
  useAddress,
  useContract,
  useConnect,
  metamaskWallet,
  useContractWrite,
  useContractRead,
  useStorageUpload,
  useStorage,
  useDisconnect,
  useLogin,
} from "@thirdweb-dev/react";
import { PolygonAmoyTestnet } from "@thirdweb-dev/chains";

import { ethers } from "ethers";
import Swal from "sweetalert2";

import {
  ChainId,
  EditionMetadataWithOwnerOutputSchema,
} from "@thirdweb-dev/sdk";

import {
  calculateBarPercentage,
  formattedUser,
  formattedUsers,
} from "../utils";

const metamaskConfig = metamaskWallet();

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract, isLoading, isError } = useContract(
    "0x6C02BbB3116ddA500d983015f0618dd99444a63D"
  );
  // 0x0c4A0218352c49C8605f6df7f544c70FC0c2E445

  // 0xd5EBe541AeDB4A2a412173718a8bA75BEd6474c9

  // 0x0c4a0218352c49c8605f6df7f544c70fc0c2e445;

  const disconnect = useDisconnect();

  const connect = useConnect();

  const { mutateAsync: upload } = useStorageUpload();

  const { mutateAsync: createManufacturer } = useContractWrite(
    contract,
    "createManufacturer"
  );

  const { mutateAsync: createDistributor } = useContractWrite(
    contract,
    "createDistributor"
  );

  const { mutateAsync: verifyUserAccount } = useContractWrite(
    contract,
    "verifyUserAccount"
  );

  const { mutateAsync: addDrug } = useContractWrite(contract, "addDrug");

  const walletConnect = async () => {
    let isAdmin = false;

    try {
      const wallet = await connect(metamaskConfig);

      const userAddress = await wallet.getAddress();
      // check if user is admin
      const admin = await getAdmin(userAddress);

      isAdmin = admin;

      const user = await getUser(userAddress);

      const data = formattedUser(user);

      localStorage.setItem("authUser", JSON.stringify({ ...data, isAdmin }));

      console.log("connected to ", wallet);
    } catch (error) {
      console.error(error);
      localStorage.setItem("authUser", JSON.stringify({ isAdmin: isAdmin }));
    }
  };

  const { mutateAsync: updateUserDoc } = useContractWrite(
    contract,
    "updateUserDoc"
  );

  const { mutateAsync: payMembershipFee } = useContractWrite(
    contract,
    "payMembershipFee"
  );

  // const connect = useMetamask();

  const address = useAddress();

  const storage = useStorage();

  const uploadToIpfs = async (dataToUpload) => {
    console.log(dataToUpload);
    // And upload the data with the upload function
    const uris = await upload({
      data: [dataToUpload],
      options: { uploadWithoutDirectory: true },
    });
    return uris;
  };

  const addNewUser = async (orgFhirResource, userType) => {
    try {
      // Upload to IPFS
      const data = await uploadToIpfs(orgFhirResource);

      // // https://gateway.pinata.cloud/ipfs/QmXJ7MQxdB2cR7SshhH7UpYgCeYTdRNCmeuZB8DzYoeTrV
      // QmXJ7MQxdB2cR7SshhH7UpYgCeYTdRNCmeuZB8DzYoeTrV

      const dataUrl = data[0].split("//")[1];

      if (userType === "manufacturer") {
        //   create a new campaign
        await createManufacturer({
          args: [dataUrl],
        });

        console.log("URL of user", dataUrl);
      } else {
        await createDistributor({
          args: [dataUrl],
        });
      }

      Swal.fire({
        title: "Submitted",
        text: "Organization added sucesfully",
        icon: "success",
      });

      console.log("contract call success", data);
    } catch (error) {
      console.error(error.message);

      Swal.fire({
        title: "Oops!",
        text: "Error occured while subitting organization ",
        icon: "error",
      });
      console.log("contract call failure", error);
    }
  };

  const addMedication = async (medicationFhirResource) => {
    try {
      // Upload to IPFS
      const data = await uploadToIpfs(medicationFhirResource);

      // // https://gateway.pinata.cloud/ipfs/QmXJ7MQxdB2cR7SshhH7UpYgCeYTdRNCmeuZB8DzYoeTrV
      // QmXJ7MQxdB2cR7SshhH7UpYgCeYTdRNCmeuZB8DzYoeTrV

      const dataUrl = data[0].split("//")[1];
      await addDrug({
        args: [dataUrl],
      });

      console.log("URL of data", dataUrl);

      Swal.fire({
        title: "Submitted",
        text: "Drug added sucesfully on chain",
        icon: "success",
      });
      window.location.reload();
      console.log("contract call success", data);
    } catch (error) {
      console.error(error.message);

      Swal.fire({
        title: "Oops!",
        text: "Error occured while adding drug. Please reload your page and try again",
        icon: "error",
      });
      console.log("contract call failure", error);
    }
  };

  const uploadVerificationDoc = async (fileUrl) => {
    try {
      const user = await getUser();

      console.log("user is here", user);

      const org = await downloadFromIPFs(user.data);

      const updatedDoc = { orgData: org, doc: fileUrl };

      const updatedData = await uploadToIpfs(updatedDoc);

      const dataUrl = updatedData[0].split("//")[1];

      console.log("================= verification document", fileUrl);

      await updateUserDoc({
        args: [dataUrl],
      });

      Swal.fire({
        title: "Submitted",
        text: "Uploaded verificaation document",
        icon: "success",
      });
    } catch (error) {
      console.error(error.message);
      Swal.fire({
        title: "Oops!",
        text: "Error uploading verification document. Please reload your page and try again",
        icon: "error",
      });
      console.log("contract call failure", error);
    }
  };

  const getMemberShipFee = async () => {
    if (contract) {
      const fee = await contract.call("getMemberShipFee");
      const formattedFee = {
        distMemFee: Number(ethers.utils.formatEther(fee.distMemFee)),
        manMemFee: Number(ethers.utils.formatEther(fee.manMemFee)),
      };
      return formattedFee;
    }
  };

  const getAdmin = async (userAddress) => {
    if (contract) {
      const admin = await contract.call("admin");
      return (
        ethers.utils.getAddress(admin) === ethers.utils.getAddress(userAddress)
      );
    }
  };

  const initiateMemFeePayment = async (value) => {
    try {
      console.log("Value", ethers.utils.parseEther(value));
      await payMembershipFee({
        args: [],
        overrides: {
          value: ethers.utils.parseEther(value),
        },
      });
      Swal.fire({
        title: "Submitted",
        text: "Payment submitted succesfully",
        icon: "success",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Error occcured while submitting payment",
        icon: "error",
      });
    }
  };

  const getUsers = async () => {
    try {
      const users = await contract.call("getUsers");

      console.log(users);

      // users = users.filter((user, i) => ![0, 1].includes(i));

      const cleanUsers = [];

      for (const user of users) {
        const cleanUser = formattedUser(user);
        cleanUser["owner"] = user.userAddress;
        cleanUser["data"] = await downloadFromIPFs(user.data);
        cleanUsers.push(cleanUser);
      }

      return cleanUsers;
    } catch (error) {
      console.error(error);
    }
  };

  const getUser = async (userAddress = undefined) => {
    const user = await contract.call("getUser", [`${userAddress || address}`]);

    return user;
  };

  const getUserDetail = async (address) => {
    try {
      const user = await getUser(address);
      const cleanUser = formattedUser(user);
      cleanUser["owner"] = user.userAddress;
      cleanUser["data"] = await downloadFromIPFs(user.data);

      console.log(cleanUser);
      return cleanUser;
    } catch (error) {
      console.error(error);
    }
  };

  const downloadFromIPFs = async (ipfsStr) => {
    const uri = `ipfs://${ipfsStr}`;
    const url = storage.resolveScheme(uri);

    const data = await storage.downloadJSON(url);

    return data;
  };

  const approveOrDeclineUser = async (userAddress, status) => {
    try {
      if (contract) {
        //   create a new campaign
        await verifyUserAccount({
          args: [userAddress, status],
        });

        if (status) {
          Swal.fire({
            title: "Approved",
            text: "Organnization has been succesfully approves to join the network",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Updated",
            text: "Organization status has been updated successfully",
            icon: "success",
          });
        }
      }
    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text: "Error occured while verifying the user's account. Please reload your page and try again",
        icon: "error",
      });
    }

    // return data;
  };

  // const formatCampaignData = (campaign, ipfsData, index) => {
  //   const formattedCampaign = {
  //     owner: campaign.owner,
  //     title: ipfsData.title || "",
  //     description: ipfsData.description || "",
  //     image: ipfsData.image || "",
  //     target: ethers.utils.formatEther(ipfsData.target),
  //     deadline: campaign.deadline.toString(),
  //     category: Number(campaign.category.toString()),
  //     dateCreated: ipfsData.dateCreated || "",
  //     amountCollected: ethers.utils.formatEther(campaign.amountCollected),
  //     campaignId: index + 1,
  //     creator: ipfsData.name || "James Dawson",
  //     percentRaised: calculateBarPercentage(
  //       Number(ethers.utils.formatEther(ipfsData.target)),
  //       Number(ethers.utils.formatEther(campaign.amountCollected))
  //     ),

  //     donations: campaign.donations.map((donation, index) => ({
  //       donation,
  //       donator: campaign.donators[index],
  //     })),
  //   };

  //   return formattedCampaign;
  // };

  // const getCampaigns = async () => {
  //   const campaigns = await contract.call("getCampaigns");

  //   const formattedCampaigns = [];

  //   let index = 0;

  //   for (const campaign of campaigns) {
  //     const data = await downloadFromIPFs(campaign.data);

  //     formattedCampaigns.push(formatCampaignData(campaign, data, index));

  //     index++;
  //   }

  //   formattedCampaigns.reverse();

  //   return formattedCampaigns;
  // };

  // const getUserCampaigns = async () => {
  //   const allCampaigns = await getCampaigns();

  //   const filteredCampaigns = allCampaigns.filter(
  //     (campaign) => campaign.owner === address
  //   );

  //   return filteredCampaigns;
  // };

  // const getDonations = async (pId) => {
  //   const donations = await contract.call("getDonators", [pId]);
  //   const numberOfDonations = donations[0].length;

  //   const parsedDonations = [];

  //   for (let i = 0; i < numberOfDonations; i++) {
  //     parsedDonations.push({
  //       donator: donations[0][i],
  //       donation: ethers.utils.formatEther(donations[1][i].toString()),
  //     });
  //   }

  //   return parsedDonations;
  // };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        walletConnect,
        addNewUser,
        disconnect,
        uploadVerificationDoc,
        getMemberShipFee,
        initiateMemFeePayment,
        getUsers,
        getUserDetail,
        approveOrDeclineUser,
        getAdmin,
        addMedication,
        isContractLoading: isLoading,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
