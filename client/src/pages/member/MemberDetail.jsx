import React, { useState, useEffect } from "react";
import { useStateContext } from "../../context";
import { getRandomNumber, icons, UserStatus, UserType } from "../../utils";
import { useParams } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import PropagateLoader from "react-spinners/PropagateLoader";

const MemberDetail = () => {
  const { getUserDetail, isContractLoading, approveOrDeclineUser } =
    useStateContext();

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [reviewLoading, setReviewLoading] = useState(false);
  let [color, setColor] = useState("#000");

  const { address } = useParams();

  const currentUser = JSON.parse(localStorage.getItem("authUser"));

  const showSwal = (status) => {
    withReactContent(Swal).fire({
      title: "Are you sure?",
      text: "This data will update organization and either grant organization access or revoke access to the network",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, continue!",
      preConfirm: () => {
        setReviewLoading((prev) => !prev);
        approveOrDeclineUser(address, status);
      },
    });
  };

  useEffect(() => {
    const getUserInformation = async () => {
      if (!isContractLoading) {
        const details = await getUserDetail(address);
        setUser(details);
        console.log();
        setLoading((prev) => !prev);
      }
    };

    getUserInformation();
  }, [address, getUserDetail, isContractLoading]);

  return (
    <>
      {loading && (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton count={3} />
        </SkeletonTheme>
      )}

      {Object.keys(user).length > 0 && (
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
                        <h2>{user?.data?.orgData?.name}</h2>
                      </a>
                    </div>
                    <div className="cyber_arena__tphead-itemtwo d-flex align-items-center gap-3">
                      <i className="ti ti-share fs-four"></i>
                      <button
                        type="button"
                        className="px-5 py-2 fs-four bg1-color rounded-1"
                      >
                        {user.data.orgData.alias}
                      </button>
                    </div>
                  </div>

                  {currentUser.isAdmin && (
                    <div className="cyber_arena__tophead-viewbtn">
                      <a
                        href={user.data.doc}
                        target="_blank"
                        className="d-inline-flex align-items-center rounded-2 gap-2 roboto py-3 px-5 px-md-6 bg8-color p7-color fw-bold"
                      >
                        View Document
                        <i className="ti ti-chevron-right fs-five fw-bold"></i>
                      </a>
                    </div>
                  )}
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
                      {user.hasDoc ? "Available" : "Unavailable"}
                    </span>
                  </div>
                  <span className="text-center fs-ten">Has Document</span>
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
                      {user.hasPaidFee ? "PAID" : "UNPAID"}
                    </span>
                    <span
                      className="odometer hero_area__countdown-number fs-three fw_500"
                      data-odometer-final="50,000"
                    ></span>
                  </div>
                  <span className="text-center fs-ten">Has Paid Fee</span>
                </div>
                <span className="v-line lgx mb-20 pb-6 d-none d-md-block"></span>
                <div className="cyber_arena__item">
                  <div className="cyber_arena__countdown counters d-flex align-items-center justify-content-center">
                    <span
                      className="odometer hero_area__countdown-number fs-three fw_500"
                      data-odometer-final="28,751"
                    >
                      {user.isVerified ? "Verified" : "Unverified"}
                    </span>
                  </div>
                  <span className="text-center fs-ten">Account Verified</span>
                </div>
              </div>
            </div>
            <div className="row gy-5 gy-sm-6 mb-10 mb-md-15">
              <div className="col-12">
                <h3 className="cyber_arena__tstyle mb-5 mb-md-6 wow fadeInUp">
                  Organization Details
                </h3>
                <p className="roboto mb-3 mb-md-5 wow fadeInUp">{`${
                  user.data.orgData.name
                } is a  ${
                  user.userType === UserType.MANUFACTURER
                    ? "Manufacturer"
                    : "Distributor"
                } applying to join MediGrid protocol`}</p>
              </div>
              <div className="col-md-8 col-xl-9">
                <div className="cyber_arena__totalcard p-6 p-md-8 br2 bg1-color rounded-20 h-100">
                  <div className="d-flex align-items-center justify-content-between mb-6 mb-md-8 gap-4 flex-wrap flex-sm-nowrap">
                    <div className="cyber_arena__totalcard-title">
                      <span className="mb-3 fs-ten">Organization Address</span>
                      <div className="d-flex align-items-end gap-2">
                        <span className="fs-four p1-color fw-bold">
                          {user.data.orgData.address[0].text}
                        </span>
                        <span className="fs-ten">USDT</span>
                      </div>
                    </div>
                    {/* <div className="cyber_arena__totalcard-title text-sm-end">
                      <span className="mb-3 fs-ten">Total Issued</span>
                      <div className="d-flex align-items-end gap-2">
                        <span className="fs-four p1-color fw-bold">
                          3,472,222
                        </span>
                        <span className="fs-ten">CAT</span>
                      </div>
                    </div> */}
                  </div>
                  <div className="cyber_arena__nastcard p-5 p-md-6 rounded-20 bg1-color d-flex flex-column gap-4 gap-md-6 br2">
                    <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap flex-sm-nowrap">
                      <span>Contact Person Name</span>
                      <span> {user.data.orgData.contact[0].name.text}</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap flex-sm-nowrap">
                      <span>Contact Person Email</span>
                      <span>
                        {user.data.orgData.contact[0].telecom[0].value}
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap flex-sm-nowrap">
                      <span>Organization Type</span>
                      <span>{user.data.orgData.type[0].coding[0].display}</span>
                    </div>

                    <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap flex-sm-nowrap">
                      <span>Owner Address</span>
                      <span>{address}</span>
                    </div>
                  </div>
                </div>
              </div>

              {currentUser.isAdmin && (
                <div className="col-md-4 col-xl-3">
                  <div className="cyber_arena__totalcardtwo bg1-color rounded-20 br2 py-7 py-md-9 px-5 px-md-6 br2 text-center">
                    <div className="cyber_arena__tophead-viewbtn">
                      {!user.isVerified ? (
                        <>
                          <button
                            onClick={() => showSwal(true)}
                            disabled={reviewLoading}
                            className="d-inline-flex align-items-center rounded-2 gap-2 mb-3 roboto py-3 px-5 px-md-6 bg8-color p7-color fw-bold"
                          >
                            {!reviewLoading ? (
                              "Approve Organization"
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
                                  loading={reviewLoading}
                                  aria-label="Loading Spinner"
                                  data-testid="loader"
                                />
                              </div>
                            )}

                            <i className="ti ti-chevron-right fs-five fw-bold"></i>
                          </button>
                          <button
                            onClick={() => showSwal(false)}
                            disabled={reviewLoading}
                            type="button"
                            className="d-inline-flex align-items-center rounded-2 gap-2 roboto py-3 px-5 px-md-6 bg8-color p7-color fw-bold"
                          >
                            {!reviewLoading ? (
                              "Reject Organization"
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
                                  loading={reviewLoading}
                                  aria-label="Loading Spinner"
                                  data-testid="loader"
                                />
                              </div>
                            )}
                            <i className="ti ti-chevron-right fs-five fw-bold"></i>
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            className="d-inline-flex align-items-center rounded-2 gap-2 roboto py-3 px-5 px-md-6 bg8-color p7-color fw-bold"
                          >
                            Account verified
                            <i className="ti ti-chevron-right fs-five fw-bold"></i>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default MemberDetail;
