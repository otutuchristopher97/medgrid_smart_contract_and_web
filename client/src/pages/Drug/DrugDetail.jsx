import React, { useState, useEffect } from "react";
import { useStateContext } from "../../context";
import { getRandomNumber, icons, UserStatus, UserType } from "../../utils";
import { useParams } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import PropagateLoader from "react-spinners/PropagateLoader";

const currentUser = JSON.parse(localStorage.getItem("authUser"));

const DrugDetail = () => {
  const { getDrug, isContractLoading, approveOrDeclineUser } =
    useStateContext();

  const [drug, setDrug] = useState({});
  const [loading, setLoading] = useState(true);
  // const [reviewLoading, setReviewLoading] = useState(false);
  let [color, setColor] = useState("#000");

  const { drugId } = useParams();

  // const showSwal = (status) => {
  //   withReactContent(Swal).fire({
  //     title: "Are you sure?",
  //     text: "This data will update organization and either grant organization access or revoke access to the network",
  //     icon: "info",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, continue!",
  //     preConfirm: () => {
  //       setReviewLoading((prev) => !prev);
  //       approveOrDeclineUser(address, status);
  //     },
  //   });
  // };

  useEffect(() => {
    const getDrugInformation = async () => {
      if (!isContractLoading) {
        const drugDetails = await getDrug(drugId);
        setDrug(drugDetails);

        setLoading((prev) => !prev);
      }
    };

    getDrugInformation();
  }, [drugId, getDrug, isContractLoading, loading]);

  return (
    <>
      {loading && (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton count={3} />
        </SkeletonTheme>
      )}

      {Object.keys(drug).length > 0 && (
        <section className="cyber_arena pt-120 pb-120 bg5-color">
          <div className="container pt-17 pt-sm-20 pt-lg-0">
            <div className="row ">
              <div className="col-12">
                <div className="cyber_arena__tophead d-flex align-items-center justify-content-between flex-wrap gap-4 mb-10 mb-md-15 wow fadeInUp">
                  <div className="cyber_arena__tphead d-flex align-items-center gap-3 flex-wrap">
                    <div className="cyber_arena__tphead-itemone d-flex align-items-center gap-3 gap-sm-6 flex-wrap">
                      <div className="cyber_arena__tphead-icon">
                        <img
                          src={icons[getRandomNumber(icons.length)]}
                          alt="Icon"
                        />
                      </div>
                      <a
                        href="javascript:void(0)"
                        className="cyber_arena__tphead-name"
                      >
                        <h2>{drug?.data?.code?.coding[0].display}</h2>
                      </a>
                    </div>
                    <div className="cyber_arena__tphead-itemtwo d-flex align-items-center gap-3">
                      <i className="ti ti-share fs-four"></i>
                      <button
                        type="button"
                        className="px-5 py-2 fs-four bg1-color rounded-1"
                      >
                        {drug?.data?.code?.coding[0].code}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="counter_section__area d-flex align-items-center justify-content-center justify-content-sm-evenly flex-wrap gap-5 br2 p-3 p-sm-6 p-md-8 rounded-20 bg1-color mb-10 mb-md-15">
                <div className="cyber_arena__item text-center">
                  <div className="cyber_arena__countdown counters d-flex align-items-center justify-content-center">
                    <span
                      className="odometer hero_area__countdown-number fs-three fw_500"
                      data-odometer-final="4390.13"
                    ></span>
                    <span className="fs-three fw_500">
                      {drug?.data?.status ? "Available" : "Unavailable"}
                    </span>
                  </div>
                  <span className="text-center fs-ten">Availability</span>
                </div>
                <span className="v-line lgx mb-20 pb-6 d-none d-md-block"></span>
                <div className="cyber_arena__item text-center">
                  <div className="cyber_arena__countdown counters d-flex align-items-center justify-content-center">
                    {/* <span className="fs-three fw_500">$</span> */}
                    <span
                      className="odometer hero_area__countdown-number fs-three fw_500"
                      data-odometer-final="47,600"
                    ></span>
                    {/* <span className="fs-three fw_500">/</span> */}
                    <span className="fs-three fw_500">
                      {drug?.data?.ingredients.length}
                    </span>
                    <span
                      className="odometer hero_area__countdown-number fs-three fw_500"
                      data-odometer-final="50,000"
                    ></span>
                  </div>
                  <span className="text-center fs-ten">Ingredients Count</span>
                </div>
                <span className="v-line lgx mb-20 pb-6 d-none d-md-block"></span>
                <div className="cyber_arena__item">
                  <div className="cyber_arena__countdown counters d-flex align-items-center justify-content-center">
                    <span
                      className="odometer hero_area__countdown-number fs-three fw_500"
                      data-odometer-final="28,751"
                    >
                      {new Date(drug?.data?.batch?.expirationDate).getTime() <
                      new Date(Date.now()).getTime()
                        ? "Expired"
                        : "Unexpired"}
                    </span>
                  </div>
                  <span className="text-center fs-ten">Has Expired</span>
                </div>
              </div>
            </div>
            <div className="row gy-5 gy-sm-6 mb-10 mb-md-15">
              <div className="col-12">
                <h5 className="roboto mb-3 mb-md-5 wow fadeInUp">
                  Medical Organization
                </h5>

                <h3 className="cyber_arena__tstyle mb-5 mb-md-6 wow fadeInUp">
                  {drug?.orgName}
                </h3>

                <div className="d-flex">
                  <div className="col-md-8 col-xl-9">
                    <div className="cyber_arena__totalcard p-6 p-md-8 br2 bg1-color rounded-20 h-100">
                      <div className="d-flex align-items-center justify-content-between mb-6 mb-md-8 gap-4 flex-wrap flex-sm-nowrap">
                        <div className="cyber_arena__totalcard-title">
                          <span className="mb-3 fs-ten">
                            Medication Details
                          </span>
                          <div className="d-flex align-items-end gap-2"></div>
                        </div>
                      </div>
                      <div className="mb-4 cyber_arena__nastcard p-5 p-md-6 rounded-20 bg1-color d-flex flex-column gap-4 gap-md-6 br2">
                        <div className="d-flex mb-2 flex-column justify-content-end gap-4 flex-wrap flex-sm-nowrap">
                          <span>
                            <h5 className="mb-1">
                              Medication Amount in package
                            </h5>
                          </span>
                          <div className="d-flex">
                            <span> Numerator Value: </span>
                            <p> {drug?.data?.amount?.numerator?.value} </p>
                          </div>
                          <div className="d-flex">
                            <span> Denominator Value: </span>
                            <p> {drug?.data?.amount?.denominator?.value} </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap flex-sm-nowrap">
                          <span>Expiration Date</span>
                          <span> {drug?.data?.batch?.expirationDate}</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap flex-sm-nowrap">
                          <span>Package Number</span>
                          <span> {drug?.data?.batch?.lotNumber}</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap flex-sm-nowrap">
                          <span>Medication Form</span>
                          <span>{drug?.data?.form?.coding[0].display}</span>
                        </div>
                      </div>
                      <div className="cyber_arena__nastcard p-5 p-md-6 rounded-20 bg1-color d-flex flex-column gap-4 gap-md-6 br2">
                        <div className="d-flex mb-2 flex-column justify-content-end gap-4 flex-wrap flex-sm-nowrap">
                          <span>
                            <h5 className="mb-1">Medication Ingredients</h5>
                          </span>
                        </div>

                        <table className="table-responsive">
                          <thead>
                            <tr>
                              <th style={{ pading: "4px" }}>S/N</th>
                              <th>Name</th>
                              <th>Code</th>
                              <th>Strength</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {drug?.data.ingredients.map((e, i) => (
                              <tr key={i}>
                                <td>{i + 1}</td>
                                <td>
                                  {e?.itemCodeableConcept?.coding[0].display}
                                </td>
                                <td style={{ padding: "10px" }}>
                                  {e?.itemCodeableConcept?.coding[0].code}
                                </td>
                                <td colspan="2" style={{ padding: "5px" }}>
                                  {e?.strength?.numerator.value}/
                                  {e?.strength?.denominator.value}(
                                  {e?.strength?.numerator?.code})
                                </td>
                              </tr>
                            ))}
                            <tr></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {(currentUser.isAdmin ||
                    currentUser?.userType === UserType.DISTRIBUTOR) && (
                    <div className="col-md-4 col-xl-3">
                      <div className="cyber_arena__totalcardtwo bg1-color rounded-20 br2 py-7 py-md-9 px-5 px-md-6 br2 text-center">
                        <div className="cyber_arena__tophead-viewbtn">
                          <div className="cyber_arena__tophead-viewbtn">
                            <a
                              // href={user.data.doc}
                              target="_blank"
                              className="d-inline-flex align-items-center rounded-2 gap-2 roboto py-3 px-5 px-md-6 bg8-color p7-color fw-bold"
                            >
                              Request Supply
                              <i className="ti ti-chevron-right fs-five fw-bold"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DrugDetail;
