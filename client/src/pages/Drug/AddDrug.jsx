import React, { useState, useEffect } from "react";
import Banner from "../../ui/Banner";
import Input from "../../lib/Input";
import Select from "../../lib/form/Select";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useStateContext } from "../../context";

import { medicationForm, units, defaultIngredientState } from "../../constant";

import { UserType } from "../../utils";

const Ingredient = ({
  index,
  handleChangeInputData,
  handleRemoveIngredient,
}) => {
  const [formData, setFormData] = useState(defaultIngredientState);

  const handleChange = (e) => {
    const updatedFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedFormData);
    handleChangeInputData(index, updatedFormData);
  };

  return (
    <div
      className="row mb-4"
      style={{
        background: "#19875438",
        borderRadius: "10px",
        padding: "25px",
      }}
    >
      {index > 0 && (
        <div className="d-flex justify-content-end">
          <button
            onClick={() => handleRemoveIngredient(index)}
            type="button"
            className="d-flex bg-danger p-2"
            style={{
              border: "2px solid transparent",
              borderRadius: "3px",
              position: "absolute",
              right: 200,
              marginTop: "-35px",
            }}
          >
            Remove
            <img
              alt="remove icon"
              width="20px"
              height="20px"
              src="/png/remove-icon.svg"
              className=""
            />
          </button>
        </div>
      )}
      <div className="row">
        <div className="col-3 col-xs-12">
          <Input
            type="text"
            value={formData.code}
            onChange={handleChange}
            placeholder="234565756"
            label="Ingriedient Code"
            name="code"
          />
        </div>

        <div className="col-5 col-xs-12">
          <Input
            type="text"
            value={formData.codeDisplay}
            onChange={handleChange}
            placeholder="Propanol"
            label="Ingriedient Code Display"
            name="codeDisplay"
          />
        </div>

        <div className="col-4 col-xs-12">
          <Input
            type="text"
            value={formData.codeSystem}
            onChange={handleChange}
            placeholder="http://hl7.org/fhir/sid/ndc"
            label="Ingriedient Code system"
            name="codeSystem"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-xs-12">
          <div>Specify Amount</div>
          <div className="row">
            <div className="col-6 colxs-12">
              <Input
                type="number"
                value={formData.amountNum}
                onChange={handleChange}
                placeholder="Numerator"
                label="Numerator value"
                name="amountNum"
              />
            </div>
            <div className="col-6 colxs-12">
              <Select
                value={formData.amountNumUnit}
                options={units}
                onChange={handleChange}
                label="Select Unit"
                name="amountNumUnit"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6 colxs-12">
              <Input
                type="number"
                value={formData.amountDenom}
                onChange={handleChange}
                placeholder="Denominator"
                label="Denominator value"
                name="amountDenom"
              />
            </div>
            <div className="col-6 colxs-12">
              <Select
                value={formData.amountDenomUnit}
                options={units}
                onChange={handleChange}
                label="Select Unit"
                name="amountDenomUnit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddDrug = () => {
  const [loading, setIsLoading] = useState(false);
  let [color, setColor] = useState("#000");
  const [org, setOrg] = useState({});

  const {
    address,
    walletConnect,
    isContractLoading,
    getUserDetail,
    addMedication,
  } = useStateContext();

  const [formData, setFormData] = useState({
    id: "",
    code: "",
    codeDisplay: "",
    codeSystem: "",
    form: "",
    amountNum: "",
    amountNumUnit: "",
    amountDenom: "",
    amountDenomUnit: "",
    batchNumber: "",
    expirationDate: "",
  });

  const [ingredientData, setIngredientData] = useState([
    defaultIngredientState,
  ]);

  const getAndUpdateCurrentUser = async () => {
    try {
      const org = await getUserDetail(address);
      setOrg(org);
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Oops!",
        text: "You are not not subscribed to the network. Please kindly register as Manufacturer ",
        icon: "error",
      });
    }
  };

  const addIngredient = () => {
    setIngredientData([...ingredientData, defaultIngredientState]);
  };

  const handleChangeInputData = (index, data) => {
    const newIngredientData = [...ingredientData];
    newIngredientData[index] = data;
    setIngredientData(newIngredientData);
  };

  const handleRemoveIngredient = (index) => {
    const filterIngredient = ingredientData.filter((_, i) => i !== index);
    setIngredientData(filterIngredient);
  };

  const showSwal = (e) => {
    e.preventDefault();
    withReactContent(Swal).fire({
      title: "Are you sure?",
      text: "This data will be persisted on chain and cannot be updated afterwards",
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (address) {
      if (
        !formData.code ||
        !formData.codeDisplay ||
        !formData.codeSystem ||
        !formData.form ||
        !formData.batchNumber ||
        !formData.expirationDate
      ) {
        Swal.fire({
          title: "Oops! All fields are required!",
          text: "You have not fill all fields required",
          icon: "error",
        });

        setIsLoading((prev) => !prev);

        return;
      }

      if (!Object.keys(org).length) {
        Swal.fire({
          title: "Oops!",
          text: "You are not not subscribed to the network. Please kindly register as Manufacturer ",
          icon: "error",
        });

        setIsLoading((prev) => !prev);

        return;
      }

      if (org?.userType !== UserType.MANUFACTURER && !org?.isVerified) {
        Swal.fire({
          title: "Oops!",
          text: "Only  verified system manufacturers can add drugs",
          icon: "error",
        });
        setIsLoading((prev) => !prev);

        return;
      }
      const orgId = org?.data?.orgData?.identifier[0]?.value;

      const medicationFhirResource = buildFhirMedicationResource(orgId);

      await addMedication(medicationFhirResource, org.ipfs);

      setIsLoading((prev) => !prev);
    } else {
      await walletConnect();
    }
  };

  const buildFhirMedicationResource = (orgId) => {
    const id = uuidv4();

    const form = medicationForm.find((d) => d.value === formData.form);

    const ingredients = ingredientData.map((ingredient) => ({
      itemCodeableConcept: {
        coding: [
          {
            system: ingredient.codeSystem,
            code: ingredient.code,
            display: ingredient.codeDisplay,
          },
        ],
      },
      strength: {
        numerator: {
          value: ingredient.amountNum,
          system: "http://unitsofmeasure.org",
          code: ingredient.amountNumUnit,
        },
        denominator: {
          value: ingredient.amountDenom,
          system: "http://unitsofmeasure.org",
          code: ingredient.amountDenomUnit,
        },
      },
    }));

    const resource = {
      id,
      resourceType: "Medication",
      identifier: [
        {
          use: "usual",
          type: {
            text: "MedGrid organization identifier",
          },
          system: "ipfs://medigrid.fhir.com",
          value: id,
        },
      ],
      code: {
        coding: [
          {
            system: formData.codeSystem,
            code: formData.codeSystem,
            display: formData.codeDisplay,
          },
        ],
      },
      active: true,
      type: [
        {
          coding: [
            {
              system: formData.codeSystem,
              code: formData.code,
              display: formData.codeDisplay,
            },
          ],
        },
      ],
      manufacturer: {
        reference: `Organization/${orgId}`,
      },
      form: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: formData.form,
            display: form ? form.value : "",
          },
        ],
      },
      ingredients,
      status: "active",
      amount: {
        numerator: {
          value: formData.amountNum,
          system: "http://unitsofmeasure.org",
          code: formData.amountNumUnit,
        },
        denominator: {
          value: formData.amountDenom,
          system: "http://unitsofmeasure.org",
          code: formData.amountDenomUnit,
        },
      },
      batch: {
        lotNumber: formData.batchNumber,
        expirationDate: formData.expirationDate,
      },
    };

    return resource;
  };

  useEffect(() => {
    if (!isContractLoading) {
      getAndUpdateCurrentUser();
    }
  }, [address, isContractLoading]);

  return (
    <>
      <Banner title="Add a new Medication" />
      <section className="rewards_section bg5-color pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="rewards_section__content">
              <div className="rewards_section__tabs">
                <div className="singletab">
                  <div className="rewards_section__ongoing p-6 p-md-8 rounded-20 bg9-color br2 mb-10 mb-md-15 wow fadeInUp">
                    <div className="rewards_section__cards d-flex align-items-center flex-wrap flex-xxl-nowrap gap-5 gap-md-6">
                      <div className="rewards_section__cards-decs me-xl-10 me-xxl-20 w-100">
                        <div className="buy_crypto__formarea p-6 p-px-8 rounded-20 bg7-color wow fadeInUp">
                          <form className="w-100">
                            <div className="row">
                              {/* <div className="col"> */}
                              <div className="row mb-6">
                                <h5
                                  className="mb-5 pb-2"
                                  style={{ borderBottom: "2px solid #fff" }}
                                >
                                  Describe Medication Code
                                </h5>
                                <div className="col-3 col-xs-12">
                                  <Input
                                    type="text"
                                    value={formData.code}
                                    onChange={handleChange}
                                    placeholder="234565756"
                                    label="Medication Code"
                                    name="code"
                                  />
                                </div>

                                <div className="col-5 col-xs-12">
                                  <Input
                                    type="text"
                                    value={formData.codeDisplay}
                                    onChange={handleChange}
                                    placeholder="Propanol"
                                    label="Medication Code Display"
                                    name="codeDisplay"
                                  />
                                </div>

                                <div className="col-4 col-xs-12">
                                  <Input
                                    type="text"
                                    value={formData.codeSystem}
                                    onChange={handleChange}
                                    placeholder="http://hl7.org/fhir/sid/ndc"
                                    label="Medication Code system"
                                    name="codeSystem"
                                  />
                                </div>
                              </div>

                              <div className="row mb-6">
                                <h5
                                  className="mb-5 pb-2"
                                  style={{ borderBottom: "2px solid #fff" }}
                                >
                                  Describe Medication Form and Amount
                                </h5>
                                <div className="col-6 col-xs-12">
                                  <Select
                                    value={formData.form}
                                    options={medicationForm}
                                    onChange={handleChange}
                                    label="Select Medication Form"
                                    name="form"
                                  />
                                </div>

                                <div className="col-6 col-xs-12">
                                  <div>Specify Amount</div>
                                  <div className="row">
                                    <div className="col-6 colxs-12">
                                      <Input
                                        type="number"
                                        value={formData.amountNum}
                                        onChange={handleChange}
                                        placeholder="Numerator"
                                        label="Numerator value"
                                        name="amountNum"
                                      />
                                    </div>
                                    <div className="col-6 colxs-12">
                                      <Select
                                        value={formData.amountNumUnit}
                                        options={units}
                                        onChange={handleChange}
                                        label="Select Unit"
                                        name="amountNumUnit"
                                      />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-6 colxs-12">
                                      <Input
                                        type="number"
                                        value={formData.amountDenom}
                                        onChange={handleChange}
                                        placeholder="Denominator"
                                        label="Denominator value"
                                        name="amountDenom"
                                      />
                                    </div>
                                    <div className="col-6 colxs-12">
                                      <Select
                                        value={formData.amountDenomUnit}
                                        options={units}
                                        onChange={handleChange}
                                        label="Select Unit"
                                        name="amountDenomUnit"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="row mb-6">
                                <h5
                                  className="mb-5 pb-2"
                                  style={{ borderBottom: "2px solid #fff" }}
                                >
                                  Describe Medication Package
                                </h5>
                                <div className="col-6 col-xs-12">
                                  <Input
                                    type="text"
                                    value={formData.batchNumber}
                                    onChange={handleChange}
                                    placeholder="234565756"
                                    label="Batch Number"
                                    name="batchNumber"
                                  />
                                </div>

                                <div className="col-6 col-xs-12">
                                  <Input
                                    type="date"
                                    value={formData.expirationData}
                                    onChange={handleChange}
                                    placeholder="Date of expiration"
                                    label="Packaged Medication expiration data"
                                    name="expirationDate"
                                  />
                                </div>
                              </div>

                              <div className="row mb-6">
                                <h5
                                  className="mb-5 pb-2"
                                  style={{ borderBottom: "2px solid #fff" }}
                                >
                                  Describe Medication Ingredients
                                </h5>

                                {ingredientData.map((_, index) => (
                                  <Ingredient
                                    key={index}
                                    index={index}
                                    handleChangeInputData={
                                      handleChangeInputData
                                    }
                                    handleRemoveIngredient={
                                      handleRemoveIngredient
                                    }
                                  />
                                ))}

                                {/* */}
                                <div class="d-flex justify-content-end mt-2">
                                  <button
                                    onClick={addIngredient}
                                    type="button"
                                    style={{
                                      background: "#19875438",
                                      borderRadius: "3px",
                                      width: "180px",
                                      marginRight: "-8px",
                                    }}
                                    className="d-flex p-2"
                                  >
                                    Add Ingredient
                                    <img
                                      alt="remove icon"
                                      width="20px"
                                      height="20px"
                                      src="/png/add-icon.svg"
                                      className=""
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <button
                              //   onClick={()=>
                              onClick={showSwal}
                              disabled={loading}
                              type="submit"
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

export default AddDrug;
