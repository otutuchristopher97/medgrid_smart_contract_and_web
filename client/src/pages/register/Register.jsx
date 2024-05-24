import React, { useState, useEffect } from "react";
import Banner from "../../ui/Banner";
import Input from "../../lib/Input";
import Select from "../../lib/form/Select";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useStateContext } from "../../context";

const organizationType = {
  system: "http://terminology.hl7.org/CodeSystem/organization-type",
  types: [
    {
      prov: "Healthcare Provider",
    },
    { dept: "Hospital Department" },
    { team: "Organizational team" },
    { govt: "Government" },
    { ins: "Insurance Company" },
    { edu: "Educational Institute" },
    { bus: "Non-Healthcare Business or Corporation" },
    { other: "Other" },
    { crs: "Clinical Research Sponsor" },
  ],
};

const types = organizationType.types.map((type) => ({
  value: Object.keys(type)[0],
  text: Object.values(type)[0],
}));

const Register = () => {
  const [loading, setIsLoading] = useState(false);
  let [color, setColor] = useState("#000");
  const [file, setFile] = useState();
  const [verifyLoading, setIsVerifyLoading] = useState(false);
  const [paymentLoading, setIsPaymentLoading] = useState(false);

  const [fee, setFee] = useState(0);

  const {
    address,
    addNewUser,
    walletConnect,
    isContractLoading,
    uploadVerificationDoc,
    getMemberShipFee,
    initiateMemFeePayment,
  } = useStateContext();

  const fetchFee = async () => {
    const fee = await getMemberShipFee();
    setFee(fee);
  };

  const [formData, setFormData] = useState({
    name: "",
    alias: "",
    type: "",
    email: "",
    phone: "",
    address: "",
    contactFullName: "",
    contactPersonEmail: "",
  });

  const showSwal = () => {
    withReactContent(Swal).fire({
      title: "Are you sure?",
      text: "This data will be persisted on chain and reviewed by protocol reviewers",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, continue!",
      preConfirm: () => {
        setIsLoading((prev) => !prev);
        handleSubmit();
      },
    });
  };

  const showVerifySwal = () => {
    withReactContent(Swal).fire({
      title: "Are you sure?",
      text: "This data will be persisted on chain and reviewed by protocol reviewers",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, continue!",
      preConfirm: () => {
        setIsVerifyLoading((prev) => !prev);
        handleVerificationDocSubmission();
      },
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadToCloudinary = async () => {
    try {
      const url = `https://api.cloudinary.com/v1_1/idysman/upload`;
      const fd = new FormData();
      fd.append("upload_preset", "MEDGRID_DOCS");
      fd.append("file", file);

      const response = await fetch(url, {
        method: "POST",
        body: fd,
      });
      const data = await response.json();
      console.log(data);
      // File uploaded successfully
      return data.secure_url;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleVerificationDocSubmission = async () => {
    if (address) {
      const url = await uploadToCloudinary();
      await uploadVerificationDoc(url);
      setIsVerifyLoading((prev) => !prev);
    } else {
      await walletConnect();
    }
  };

  const handleSubmit = async () => {
    if (address) {
      if (
        !formData.name ||
        !formData.alias ||
        !formData.type ||
        !formData.email ||
        !formData.phone ||
        !formData.address ||
        !formData.contactFullName ||
        !formData.contactPersonEmail
      ) {
        Swal.fire({
          title: "Oops! All fields are required!",
          text: "You have not fill al fields required",
          icon: "error",
        });

        return;
      }

      await addNewUser(buildFhirOrgResource(), "manufacturer");
      setIsLoading((prev) => !prev);
    } else {
      await walletConnect();
    }
  };

  const buildFhirOrgResource = () => {
    const typeText = organizationType.types.find(
      (type) => Object.keys(type)[0] === formData.type
    );

    const resource = {
      resourceType: "Organization",
      identifier: [
        {
          use: "usual",
          type: {
            text: "MedGrid organization identifier",
          },
          system: "ipfs://medigrid.fhir.com",
          value: uuidv4(),
        },
      ],
      active: true,
      type: [
        {
          coding: [
            {
              system: organizationType.system,
              code: formData.type,
              display: typeText ? typeText[formData.type] : "Others",
            },
          ],
        },
      ],
      name: formData.name,
      alias: formData.alias,
      telecom: [
        {
          system: "phone",
          value: formData.phone,
          use: "work",
        },
        {
          system: "email",
          value: formData.email,
          use: "work",
        },
      ],
      address: [
        {
          use: "work",
          type: "physical",
          text: formData.address,
        },
      ],
      contact: [
        {
          name: {
            use: "usual",
            text: formData.contactFullName,
          },

          telecom: [
            {
              system: "email",
              value: formData.contactPersonEmail,
              use: "work",
            },
          ],
        },
      ],
    };

    return resource;
  };

  const handlePaymentInitiation = async () => {
    if (address) {
      if (fee) {
        setIsPaymentLoading((prev) => !prev);
        await initiateMemFeePayment(`${fee.manMemFee}`);

        setIsPaymentLoading((prev) => !prev);
      }
    } else {
      await walletConnect();
    }
  };

  useEffect(() => {
    if (!isContractLoading) {
      console.log("I a here to fetch fee");
      fetchFee();
      //   }, [address, isContractLoading]);
    }
  }, [address, isContractLoading]);

  return (
    <>
      <Banner title="Join MedGrid As A Manufacturer" />
      <section className="rewards_section bg5-color pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="rewards_section__content">
              <div className="rewards_section__tabs">
                <div className="singletab">
                  <ul className="tablinks d-flex align-items-center flex-wrap flex-sm-nowrap gap-4 gap-sm-8 gap-md-10 mb-10 mb-md-15 wow fadeInUp">
                    <li className="nav-links position-relative">
                      <button className="tablink active d-flex align-items-center gap-2 gap-md-3 clickable-active fs-four">
                        <span className="bg2-color px-1 rounded-5">
                          <i className="ti ti-coin p4-color"></i>
                        </span>
                        Organization information
                      </button>
                    </li>
                    <li className="nav-links position-relative">
                      <button className="tablink d-flex align-items-center gap-2 gap-md-3 clickable-active fs-four">
                        <span className="bg2-color px-1 rounded-5">
                          <i className="ti ti-coin p4-color"></i>
                        </span>
                        Verification
                      </button>
                    </li>
                    <li className="nav-links position-relative">
                      <button className="tablink d-flex align-items-center gap-2 gap-md-3 clickable-active fs-four">
                        <span className="bg2-color px-1 rounded-5">
                          <i className="ti ti-coin p4-color"></i>
                        </span>
                        Registration Payment
                      </button>
                    </li>
                  </ul>

                  <div className="tabcontents">
                    <div className="tabitem active">
                      <div className="rewards_section__tabone">
                        <div className="rewards_section__ongoing p-6 p-md-8 rounded-20 bg9-color br2 mb-10 mb-md-15 wow fadeInUp">
                          <div className="rewards_section__cards d-flex align-items-center flex-wrap flex-xxl-nowrap gap-5 gap-md-6">
                            {/* <div className="rewards_section__cards-thumb">
                              <img
                                src="/png/swapcard.png"
                                className="rounded-4"
                                alt="Icons"
                              />
                            </div> */}
                            <div className="rewards_section__cards-decs me-xl-10 me-xxl-20 w-100">
                              <div className="buy_crypto__formarea p-6 p-px-8 rounded-20 bg7-color wow fadeInUp">
                                <form className="w-100">
                                  <div className="row">
                                    <div className="col">
                                      <Input
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Name"
                                        label="Organization Name"
                                        name="name"
                                      />
                                    </div>
                                    <div className="col">
                                      <Input
                                        type="text"
                                        value={formData.alias}
                                        onChange={handleChange}
                                        placeholder="Alias"
                                        label="Organization Alias"
                                        name="alias"
                                      />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col">
                                      <Select
                                        value={formData.type}
                                        options={types}
                                        onChange={handleChange}
                                        label="Select Organization type"
                                        name="type"
                                      />
                                    </div>
                                    <div className="col">
                                      <Input
                                        type="text"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        label="Oganization Email"
                                        name="email"
                                      />
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col">
                                      <Input
                                        type="text"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone"
                                        label="Organization Phone Number"
                                        name="phone"
                                      />
                                    </div>
                                    <div className="col">
                                      <Input
                                        type="text"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="Address"
                                        label="Organization Address"
                                        name="address"
                                      />
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col">
                                      <Input
                                        type="text"
                                        value={formData.contactFullName}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        label="Contact Person Fullname"
                                        name="contactFullName"
                                      />
                                    </div>
                                    <div className="col">
                                      <Input
                                        required={true}
                                        type="text"
                                        value={formData.contactPersonEmail}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        label="Contact Person Email"
                                        name="contactPersonEmail"
                                      />
                                    </div>
                                  </div>
                                  <button
                                    //   onClick={()=>
                                    onClick={showSwal}
                                    disabled={loading}
                                    type="button"
                                    className="cmn-btn py-3 h-25 px-5 px-md-6 d-block w-100"
                                  >
                                    {!loading ? (
                                      "Submit"
                                    ) : (
                                      <PropagateLoader
                                        color={color}
                                        style={{
                                          display: "block",
                                          margin: "0 auto",
                                          height: "15px",
                                        }}
                                        loading={loading}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                      />
                                    )}
                                  </button>
                                </form>
                              </div>
                            </div>
                            {/* <div className="rewards_section__cards-btn">
                              <a
                                href="login.html"
                                className="py-3 px-6 cmn-btn"
                              >
                                Login
                              </a>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tabitem">
                      <div className="rewards_section__tabone">
                        <div className="rewards_section__upcomming p-6 p-md-8 rounded-20 br2 bg1-color mb-10 mb-md-15">
                          <div className="rewards_section__upcomming-one mb-8 mb-md-6">
                            <div className="rewards_section__card d-flex flex-wrap flex-xxl-nowrap gap-5 gap-md-6">
                              <div className="rewards_section__card-decs me-xl-10 me-xxl-20 w-100 extend">
                                <div className="buy_crypto__formarea p-6 p-px-8 rounded-20 bg7-color wow fadeInUp">
                                  <form className="w-100">
                                    <div className="row">
                                      <Input
                                        type="file"
                                        value=""
                                        onChange={handleFileChange}
                                        placeholder="Name"
                                        label="Organization verification document"
                                        name="file"
                                      />
                                      <div>
                                        {file && (
                                          <p className="p-1">{file.name}</p>
                                        )}
                                      </div>
                                    </div>
                                    <button
                                      onClick={showVerifySwal}
                                      disabled={verifyLoading}
                                      type="button"
                                      className="cmn-btn py-3 h-25 px-5 px-md-6 d-block w-100"
                                    >
                                      {!verifyLoading ? (
                                        "Submit Document"
                                      ) : (
                                        <div className="d-flex justify-content-center">
                                          <i
                                            className="bg-green"
                                            style={{
                                              marginLeft: "-10px;",
                                              display: "inline-block",
                                            }}
                                          >
                                            Processing
                                          </i>
                                          <PropagateLoader
                                            color={color}
                                            loading={verifyLoading}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"
                                          />
                                        </div>
                                      )}
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tabitem">
                      <div className="rewards_section__tabone">
                        <div className="rewards_section__upcomming p-6 p-md-8 rounded-20 br2 bg1-color">
                          <div className="rewards_section__upcomming-one mb-8 mb-md-6">
                            <div className="rewards_section__card d-flex flex-wrap flex-xxl-nowrap gap-5 gap-md-6">
                              <div
                                className="rewards_section__card-thumb"
                                style={{ position: "relative" }}
                              >
                                <img
                                  src="/png/matic.png"
                                  className="rounded-4"
                                  alt="Icons"
                                />
                                {fee ? (
                                  <span
                                    style={{
                                      position: "absolute",
                                      top: 0,
                                      right: 0,
                                      fontSize: "50px",
                                      margin: "5px",
                                      display: "block",
                                      paddingRight: "15px",
                                      marginTop: "30px",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {fee.manMemFee} MATIC
                                  </span>
                                ) : (
                                  <>Loading...</>
                                )}
                              </div>
                              <div className="rewards_section__card-decs me-xl-10 me-xxl-2 w-100">
                                <h4 className="mb-5 mb-md-6">
                                  Participate in MedGrid protocol
                                </h4>
                                <ul className="d-flex flex-column gap-1">
                                  <li>
                                    This is one-time Membership fee to join the
                                    protocol
                                  </li>
                                  <li>
                                    This matic token gives you participatory
                                    right ini protocol to connect with verified
                                    medical providers
                                  </li>
                                </ul>
                                <div className="rewards_section__card-btn mt-4">
                                  <button
                                    onClick={handlePaymentInitiation}
                                    className="py-3 px-6 cmn-btn w-100"
                                  >
                                    {!paymentLoading ? (
                                      "Make Payment"
                                    ) : (
                                      <div className="d-flex justify-content-center">
                                        <i
                                          className="bg-green"
                                          style={{
                                            marginLeft: "-10px;",
                                            display: "inline-block",
                                          }}
                                        >
                                          Processing
                                        </i>
                                        <PropagateLoader
                                          color={color}
                                          loading={paymentLoading}
                                          aria-label="Loading Spinner"
                                          data-testid="loader"
                                        />
                                      </div>
                                    )}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
