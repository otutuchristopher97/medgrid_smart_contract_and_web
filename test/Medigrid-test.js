const { expect } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");

// const donatedAmount = ethers.utils.parseUnits("1", "ether");

const UserStatus = {
  UNVERIFIED: 0,
  VERIFIED: 1,
};

const UserType = {
  ADMIN: 0,
  MANUFACTURER: 1,
  DISTRIBUTOR: 2,
};

const createManufacturer = {
  data: "https://google.com",
  id: 1,
};

const createDistributor = {
  data: "ipfs://google.com",
  id: 1,
};

const currentCampaignNos = 1;

const createDrug = {
  data: "https://www.youtube.com/watch?v",
  id: 1,
};
const contractName = "MediGrid";

const parsedCampaign = (campaign) => {
  return {
    owner: campaign.owner,
    data: campaign.data,
    deadline: Number(campaign.deadline.toString()),
    donators: campaign.donators,
    donations: campaign.donations,
    amountCollected: Number(campaign.amountCollected.toString()),
    category: Number(campaign.category.toString()),
  };
};

const formattedUsers = (users) => {
  return users.map((user) => {
    return {
      id: ethers.toNumber(user._id),
      status: ethers.toNumber(user.status),
      userType: ethers.toNumber(user.userType),
      hasDoc: user.hasDoc,
      isVerified: user.isVerified,
    };
  });
};

const extractDonorsAndDonations = (result) => {
  return {
    donors: result[0],
    donations: result[1],
  };
};

const parsedCampaigns = (unformattedCampaign) => {
  return unformattedCampaign.map((campaign) => {
    return {
      ...parsedCampaign(campaign),
    };
  });
};

// const desiredCampaign = {
//   // address: ownerAddress,
//   deadline: new Date("2023-05-13").getTime(),
//   categoryId: campaignCategory.id,
//   data: "ipfs://localhost.com",
// };

describe("Medigrid", function () {
  let mediGrid;
  let mediGridAddress;

  beforeEach(async () => {
    mediGrid = await ethers.deployContract("MediGrid");
    // const result = await mediGrid.deployed();
    mediGridAddress = mediGrid.address;
  });

  describe("Test User", () => {
    it("Should return the contract name", async function () {
      const desiredName = ethers.encodeBytes32String(contractName);

      const expectedName = await mediGrid.NAME();

      expect(expectedName).to.equal(desiredName);
    });

    it("Should create a manufacturer", async function () {
      const newManufacturerTx = await mediGrid.createManufacturer(
        createManufacturer.data
      );
      const [owner1] = await ethers.getSigners();

      await newManufacturerTx.wait();

      const manufacturerCreated = await mediGrid.getUser(owner1.address);

      expect(Number(manufacturerCreated._id.toString())).to.equal(
        createManufacturer.id
      );
      expect(manufacturerCreated.data).to.equal(createManufacturer.data);
      expect(Number(manufacturerCreated.status.toString())).to.equal(
        UserStatus.UNVERIFIED
      );
      expect(Number(manufacturerCreated.userType.toString())).to.equal(
        UserType.MANUFACTURER
      );
      expect(manufacturerCreated.hasPaidFee).to.equal(false);
      expect(manufacturerCreated.hasDoc).to.equal(false);
      expect(manufacturerCreated.hasVerifiedDoc).to.equal(false);
      expect(manufacturerCreated.isVerified).to.equal(false);
    });

    it("Should create a distributor", async function () {
      const [_, distributorWallet] = await ethers.getSigners();

      const newDistributorTx = await mediGrid
        .connect(distributorWallet)
        .createDistributor(createDistributor.data);

      await newDistributorTx.wait();

      const distributorCreated = await mediGrid.getUser(
        distributorWallet.address
      );

      expect(Number(distributorCreated._id.toString())).to.equal(
        createDistributor.id
      );
      expect(distributorCreated.data).to.equal(createDistributor.data);

      expect(Number(distributorCreated.status.toString())).to.equal(
        UserStatus.UNVERIFIED
      );
      expect(Number(distributorCreated.userType.toString())).to.equal(
        UserType.DISTRIBUTOR
      );

      expect(distributorCreated.hasDoc).to.equal(false);
      expect(distributorCreated.hasPaidFee).to.equal(false);
      expect(distributorCreated.hasVerifiedDoc).to.equal(false);
      expect(distributorCreated.isVerified).to.equal(false);
    });

    it("Should create a user update user document", async function () {
      const [_, distributorWallet] = await ethers.getSigners();

      const newDistributorTx = await mediGrid
        .connect(distributorWallet)
        .createDistributor(createDistributor.data);

      await newDistributorTx.wait();

      // Update user document
      const newDistributorDocTx = await mediGrid
        .connect(distributorWallet)
        .updateUserDoc(createDistributor.data);

      await newDistributorDocTx.wait();

      const distributorUpdated = await mediGrid.getUser(
        distributorWallet.address
      );

      expect(Number(distributorUpdated._id.toString())).to.equal(
        createDistributor.id
      );
      expect(distributorUpdated.data).to.equal(createDistributor.data);

      expect(distributorUpdated.hasDoc).to.equal(true);

      expect(ethers.toNumber(distributorUpdated.dateUpdated)).to.not.equal(0);
    });

    it("Should verify updated user's document as admin", async function () {
      const [adminWallet, distributorWallet] = await ethers.getSigners();

      const newDistributorTx = await mediGrid
        .connect(distributorWallet)
        .createDistributor(createDistributor.data);

      await newDistributorTx.wait();

      // User add document
      const newDistributorDocTx = await mediGrid
        .connect(distributorWallet)
        .updateUserDoc(createDistributor.data);

      await newDistributorDocTx.wait();

      const distributorUpdated = await mediGrid.getUser(
        distributorWallet.address
      );

      expect(Number(distributorUpdated._id.toString())).to.equal(
        createDistributor.id
      );
      expect(distributorUpdated.data).to.equal(createDistributor.data);
      expect(distributorUpdated.hasVerifiedDoc).to.equal(false);
      expect(ethers.toNumber(distributorUpdated.dateUpdated)).to.not.equal(0);
    });

    it("shoud get defualt membership fee", async () => {
      const fixedDigits = 10000000;

      const expectedManuFacturerFee = 0.0002;

      const expectedDistributorFee = 0.0001;

      const fee = await mediGrid.getMemberShipFee();

      expect(ethers.toNumber(fee.manMemFee) / fixedDigits).to.equal(
        expectedManuFacturerFee
      );
      expect(ethers.toNumber(fee.distMemFee) / fixedDigits).to.equal(
        expectedDistributorFee
      );
    });

    it("shoud update defualt membership fee by admin", async () => {
      const fixedDigits = 10000000;

      const [adminWallet, distributorWallet] = await ethers.getSigners();

      // Admin update memebershisp fee
      const newUpdatedUserFeeTx = await mediGrid
        .connect(adminWallet)
        .updateUserFee(ethers.toBigInt(5000), ethers.toBigInt(4000));

      await newUpdatedUserFeeTx.wait();

      const expectedManuFacturerFee = 0.0005;

      const expectedDistributorFee = 0.0004;

      const fee = await mediGrid.getMemberShipFee();

      expect(ethers.toNumber(fee.manMemFee) / fixedDigits).to.equal(
        expectedManuFacturerFee
      );
      expect(ethers.toNumber(fee.distMemFee) / fixedDigits).to.equal(
        expectedDistributorFee
      );
    });

    it("Should fetch all users", async function () {
      const [_, manufacturerWallet, distributorWallet] =
        await ethers.getSigners();

      const newDistributorTx = await mediGrid
        .connect(distributorWallet)
        .createDistributor(createDistributor.data);

      await newDistributorTx.wait();

      const newManufacturerTx = await mediGrid
        .connect(manufacturerWallet)
        .createManufacturer(createManufacturer.data);

      await newManufacturerTx.wait();

      const unformattedUsers = await mediGrid.getUsers();

      const userCount = await mediGrid.getUserCount();

      const users = formattedUsers(unformattedUsers);

      expect(users[0].id).to.equal(createDistributor.id);
      expect(users[0].status).to.equal(UserStatus.UNVERIFIED);
      expect(users[0].userType).to.equal(UserType.DISTRIBUTOR);
      expect(users[0].hasDoc).to.equal(false);
      expect(users[0].isVerified).to.equal(false);

      expect(users[1].id).to.equal(createManufacturer.id + 1);
      expect(users[1].status).to.equal(UserStatus.UNVERIFIED);
      expect(users[1].userType).to.equal(UserType.MANUFACTURER);
      expect(users[1].hasDoc).to.equal(false);
      expect(users[1].isVerified).to.equal(false);

      expect(ethers.toNumber(userCount)).to.equal(2);
    });

    it("Should pay membership fee as a distributor", async function () {
      const [adminWallet, distributorWallet] = await ethers.getSigners();

      const newDistributorTx = await mediGrid
        .connect(distributorWallet)
        .createDistributor(createDistributor.data);

      await newDistributorTx.wait();

      // User add document
      const newDistributorDocTx = await mediGrid
        .connect(distributorWallet)
        .updateUserDoc(createDistributor.data);

      await newDistributorDocTx.wait();

      // Update user membership fee
      const newDistributorPaymentTx = await mediGrid
        .connect(distributorWallet)
        .payMembershipFee();

      // Admin Verify User document
      const newDistributorVerifyDocTx = await mediGrid
        .connect(adminWallet)
        .verifyUserAccount(distributorWallet.address, true);

      await newDistributorVerifyDocTx.wait();

      await newDistributorPaymentTx.wait();

      const distributorUpdated = await mediGrid.getUser(
        distributorWallet.address
      );

      expect(ethers.toNumber(distributorUpdated._id)).to.equal(
        createDistributor.id
      );
      expect(distributorUpdated.data).to.equal(createDistributor.data);

      expect(ethers.toNumber(distributorUpdated.status)).to.equal(
        UserStatus.VERIFIED
      );
      expect(distributorUpdated.isVerified).to.equal(true);

      expect(distributorUpdated.hasVerifiedDoc).to.equal(true);

      expect(ethers.toNumber(distributorUpdated.dateUpdated)).to.not.equal(0);
    });
  });

  describe("Test Drug", () => {
    it("Should create drug", async function () {
      const [adminWallet, manufacturerWallet] = await ethers.getSigners();

      const newManufacturerTx = await mediGrid
        .connect(manufacturerWallet)
        .createManufacturer(createManufacturer.data);
      await newManufacturerTx.wait();
      // User add document
      const newManufacturerDocTx = await mediGrid
        .connect(manufacturerWallet)
        .updateUserDoc(createManufacturer.data);

      await newManufacturerDocTx.wait();
      // Update user membership fee

      const newManufacturerPaymentTx = await mediGrid
        .connect(manufacturerWallet)
        .payMembershipFee();

      await newManufacturerPaymentTx.wait();
      // Admin Verify User document
      const newManufacturerVerifyDocTx = await mediGrid
        .connect(adminWallet)
        .verifyUserAccount(manufacturerWallet.address, true);

      await newManufacturerVerifyDocTx.wait();

      // Should create drug
      const createDrugTrx = await mediGrid
        .connect(manufacturerWallet)
        .addDrug(createDrug.data);

      await createDrugTrx.wait();

      const drug = await mediGrid.getDrug(createDrug.id);

      expect(ethers.toNumber(drug.id)).to.equal(createDrug.id);
      expect(drug.data).to.equal(createDrug.data);
    });

    it("Should update drug", async function () {
      const [adminWallet, manufacturerWallet] = await ethers.getSigners();

      const newManufacturerTx = await mediGrid
        .connect(manufacturerWallet)
        .createManufacturer(createManufacturer.data);
      await newManufacturerTx.wait();
      // User add document
      const newManufacturerDocTx = await mediGrid
        .connect(manufacturerWallet)
        .updateUserDoc(createManufacturer.data);

      await newManufacturerDocTx.wait();
      // Update user membership fee

      const newManufacturerPaymentTx = await mediGrid
        .connect(manufacturerWallet)
        .payMembershipFee();

      await newManufacturerPaymentTx.wait();
      // Admin Verify User document
      const newManufacturerVerifyDocTx = await mediGrid
        .connect(adminWallet)
        .verifyUserAccount(manufacturerWallet.address, true);

      await newManufacturerVerifyDocTx.wait();

      // Should create drug
      const createDrugTrx = await mediGrid
        .connect(manufacturerWallet)
        .addDrug(createDrug.data);

      await createDrugTrx.wait();

      // Should update drug
      const updatedeDrugTrx = await mediGrid
        .connect(manufacturerWallet)
        .updateDrug(1, createDrug.data);

      await updatedeDrugTrx.wait();

      const drug = await mediGrid.getDrug(createDrug.id);

      expect(ethers.toNumber(drug.id)).to.equal(createDrug.id);
      expect(drug.data).to.equal(createDrug.data);
      expect(drug.dateUpdated).to.not.equal(0);
    });

    it("Should fetch manufacturers drugs", async function () {
      const [adminWallet, manufacturerWallet] = await ethers.getSigners();

      const newManufacturerTx = await mediGrid
        .connect(manufacturerWallet)
        .createManufacturer(createManufacturer.data);
      await newManufacturerTx.wait();
      // User add document
      const newManufacturerDocTx = await mediGrid
        .connect(manufacturerWallet)
        .updateUserDoc(createManufacturer.data);

      await newManufacturerDocTx.wait();
      // Update user membership fee

      const newManufacturerPaymentTx = await mediGrid
        .connect(manufacturerWallet)
        .payMembershipFee();

      await newManufacturerPaymentTx.wait();
      // Admin Verify User document
      const newManufacturerVerifyDocTx = await mediGrid
        .connect(adminWallet)
        .verifyUserAccount(manufacturerWallet.address, true);

      await newManufacturerVerifyDocTx.wait();

      // Should create drug
      const createDrugTrx = await mediGrid
        .connect(manufacturerWallet)
        .addDrug(createDrug.data);

      await createDrugTrx.wait();

      const drugs = await mediGrid.getManufacturerDrugs(
        manufacturerWallet.address
      );

      expect(ethers.toNumber(drugs[0].id)).to.equal(createDrug.id);
      expect(drugs[0].data).to.equal(createDrug.data);
      expect(drugs[0].dateCreated).to.not.equal(0);
    });

    it("Should fetch all drugs", async function () {
      const [adminWallet, manufacturerWallet] = await ethers.getSigners();

      const newManufacturerTx = await mediGrid
        .connect(manufacturerWallet)
        .createManufacturer(createManufacturer.data);
      await newManufacturerTx.wait();
      // User add document
      const newManufacturerDocTx = await mediGrid
        .connect(manufacturerWallet)
        .updateUserDoc(createManufacturer.data);

      await newManufacturerDocTx.wait();
      // Update user membership fee

      const newManufacturerPaymentTx = await mediGrid
        .connect(manufacturerWallet)
        .payMembershipFee();

      await newManufacturerPaymentTx.wait();
      // Admin Verify User document
      const newManufacturerVerifyDocTx = await mediGrid
        .connect(adminWallet)
        .verifyUserAccount(manufacturerWallet.address, true);

      await newManufacturerVerifyDocTx.wait();

      // Should create drug
      const createDrugTrx = await mediGrid
        .connect(manufacturerWallet)
        .addDrug(createDrug.data);

      await createDrugTrx.wait();

      const drugs = await mediGrid.getAllDrugs();

      expect(ethers.toNumber(drugs[0].id)).to.equal(createDrug.id);
      expect(drugs[0].data).to.equal(createDrug.data);
      expect(drugs[0].dateCreated).to.not.equal(0);
      expect(ethers.toNumber(await mediGrid.getTotalDrugCount())).to.equal(1);
    });
  });
});
