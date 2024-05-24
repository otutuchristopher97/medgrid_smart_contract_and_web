import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context";
import { getRandomNumber, UserStatus, UserType } from "../../utils";
import { icons } from "../../utils";

const Members = () => {
  const { address, getUsers, isContractLoading, getMemberShipFee } =
    useStateContext();

  const [loading, setLoading] = useState(true);

  const [users, setUsers] = useState([]);

  const [fee, setFee] = useState({});

  // const [latestUsers, setlatestUsers] = useState([]);

  const fetchFee = async () => {
    const fee = await getMemberShipFee();
    setFee(fee);
  };

  const fetchAllUsers = async () => {
    if (!isContractLoading) {
      const users = await getUsers();
      //   setUsers(users);
      // if (users.length <= 4) {
      //   setlatestUsers(users);
      // } else {
      //   const latests = users.filter((user, i) => i <= 4);
      //   setlatestUsers(latests);

      //   setUsers(users);
      // }

      setUsers(users);

      setLoading(false);

      console.log("loading is....", loading);

      console.log(users);
    }
  };

  console.log("contract state loading", isContractLoading);

  useEffect(() => {
    fetchAllUsers();
    fetchFee();
  }, [address, isContractLoading]);

  return (
    <>
      <section className="completed_project pt-120 pb-120">
        <div className="container">
          <div className="row gy-5 gy-md-6">
            <div
              className="completed_project__title mb-10 mb-md-15
                "
            >
              <h2 className="wow fadeInUp">Registered Members</h2>
            </div>

            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              {loading ? (
                <Skeleton count={3} />
              ) : (
                <>
                  {users.map((user, i) => (
                    <div className="col-md-6 col-xl-4" key={i + 1}>
                      <div className="completed_project__item br2 rounded-3 bg1-color px-5 px-md-6 py-3 py-sm-6 py-lg-10 wow fadeInUp">
                        <div className="completed_project__itemhead d-flex gap-3 mb-7 mb-md-10">
                          <div className="completed_project__itemhead-icon">
                            <img
                              src={icons[getRandomNumber(icons.length)]}
                              alt="Icon"
                            />
                          </div>
                          <div className="completed_project__itemhead-content">
                            <a href="javascript:void(0)">
                              <h3 className="mb-1">
                                {user?.data?.orgData?.name || ""}
                              </h3>
                            </a>
                            <span className="fs-five">
                              {user?.data?.orgData?.alias || ""}
                            </span>
                          </div>
                        </div>
                        <div className="completed_project__roitotal d-flex align-items-center justify-content-between gap-2 mb-5 mb-md-6">
                          <div className="text-start">
                            <span className="fs-five mb-1">Status:</span>
                            <h3 className="p2-color">
                              {user?.status === UserStatus.VERIFIED
                                ? "Verified"
                                : "Unverified"}
                            </h3>
                          </div>
                          <div className="text-end mb-3">
                            <Link
                              to={`/members/${user?.owner}`}
                              className="cmn-btn py-3 h-25 px-5 px-md-6 d-block w-100"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                        <div className="text-left mb-3">
                          <span className="fs-five mb-1">User Type</span>
                          <h3>Manufacturer</h3>
                        </div>
                        <div className="completed_project__ccard p-2 p-sm-3 p-lg-4 rounded-2 bg1-color br2">
                          <div className="completed_project__ccard-citem d-flex align-items-center justify-content-between mb-3">
                            <span className="roboto">Membership Fee</span>
                            <span className="roboto">
                              {user?.userType === UserType.MANUFACTURER
                                ? fee.manMemFee
                                : fee.distMemFee}
                              MATIC
                            </span>
                          </div>
                          <div className="completed_project__ccard-citem d-flex align-items-center justify-content-between mb-3">
                            <span className="roboto">Payment status</span>
                            <span className="roboto">
                              {user?.hasPaidFee ? "PAID" : "UNPAID"}
                            </span>
                          </div>
                          <div className="completed_project__ccard-citem d-flex align-items-center justify-content-between flex-wrap mb-3">
                            <span className="roboto">Verification Docs</span>
                            <span className="roboto">
                              {user?.hasDoc ? "Available" : "Unavailable"}
                            </span>
                          </div>
                          <div className="completed_project__ccard-citem d-flex align-items-center justify-content-between flex-wrap mb-3">
                            <span className="roboto">Organization Owner</span>
                            <span className="roboto">{user?.owner}</span>
                          </div>
                          {/* <div className="completed_project__ccard-citem d-flex align-items-center justify-content-between flex-wrap mb-3">
                            <span className="roboto">Verification Status</span>
                            <span className="roboto">Verified</span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </SkeletonTheme>
          </div>
        </div>
      </section>

      {/* <section className="pools_table pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="pools_table__title mb-5 mb-md-6">
              <h2 className="mb-5 mb-md-6 wow fadeInUp">Pools</h2>
              <p className="roboto wow fadeInUp">
                Access DApps via the Bybit Wallet extension or the respective
                mobile app
              </p>
            </div>
            <div className="pools_table__part">
              <div className="singletab">
                <ul className="tablinks d-flex align-items-center gap-5 gap-sm-10 gap-md-15 gap-lg-19 mb-6 mb-md-8 wow fadeInUp">
                  <li className="nav-links clickable-active active">
                    <button className="tablink ">All</button>
                  </li>
                  <li className="nav-links clickable-active">
                    <button className="tablink ">Events</button>
                  </li>
                  <li className="nav-links clickable-active">
                    <button className="tablink ">Single Asset</button>
                  </li>
                </ul>
                <div className="tabcontents">
                  <div className="tabitem active wow fadeInUp">
                    <div className="pools_table__totalitem overflow-auto">
                      <table>
                        <th>Pool Name</th>
                        <th>
                          <div className="d-flex align-items-center gap-1">
                            <span>Current APY</span>
                            <div className="d-flex flex-column gap-0">
                              <i className="ti ti-caret-up-filled fs-nine cpoint pools_table__totalitem-ticonone"></i>
                              <i className="ti ti-caret-down-filled fs-nine cpoint pools_table__totalitem-ticontwo"></i>
                            </div>
                          </div>
                        </th>
                        <th>
                          <div className="d-flex align-items-center gap-1">
                            <span>CNetwork</span>
                            <div className="d-flex flex-column gap-0">
                              <i className="ti ti-caret-up-filled fs-nine cpoint pools_table__totalitem-ticonone"></i>
                              <i className="ti ti-caret-down-filled fs-nine cpoint pools_table__totalitem-ticontwo"></i>
                            </div>
                          </div>
                        </th>
                        <th>
                          <div className="d-flex align-items-center gap-1">
                            <span>TVL</span>
                            <div className="d-flex flex-column gap-0">
                              <i className="ti ti-caret-up-filled fs-nine cpoint pools_table__totalitem-ticonone"></i>
                              <i className="ti ti-caret-down-filled fs-nine cpoint pools_table__totalitem-ticontwo"></i>
                            </div>
                          </div>
                        </th>
                        <th>Type</th>
                        <th>Action</th>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon2.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon1.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">USDC</span>
                                <span className="roboto">LDO</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">26.80%</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src="/png/tableicon12.png" alt="Icons" />
                              <img
                                className="pools_table__totalitem-img"
                                src="/png/tableicon11.png"
                                alt="Icons"
                              />
                              <img
                                className="pools_table__totalitem-img"
                                src="/png/tableicon12.png"
                                alt="Icons"
                              />
                              <img
                                className="pools_table__totalitem-img"
                                src="/png/tableicon11.png"
                                alt="Icons"
                              />
                              <img
                                className="pools_table__totalitem-img"
                                src="/png/tableicon12.png"
                                alt="Icons"
                              />
                            </div>
                          </td>
                          <td>$181.48 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8 p1-color"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon5.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/png/tableicon4.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto">stETH-ng</span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">3.15%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Ethereum</span>
                            </div>
                          </td>
                          <td>$ 96.88 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon7.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/png/tableicon6.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">yCRV</span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">12.68%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Ethereum</span>
                            </div>
                          </td>
                          <td>$5.27 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon2.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon8.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">
                                  Overnight
                                </span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">3.01%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Arbitrum</span>
                            </div>
                          </td>
                          <td>$194.89 K</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon5.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/png/tableicon9.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">FRAXBP</span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">5.52%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Arbitrum</span>
                            </div>
                          </td>
                          <td>$2.42 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon4.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon10.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">cvxeth</span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">8.72%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Ethereum</span>
                            </div>
                          </td>
                          <td>$2.42 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon2.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon6.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">ironback</span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">10.09%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Ethereum</span>
                            </div>
                          </td>
                          <td>$6.85 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon7.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon5.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">yCRV</span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">12.68%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Arbitrum</span>
                            </div>
                          </td>
                          <td>$5.27 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon2.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon8.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">
                                  Overnight
                                </span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">3.01%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Polygon</span>
                            </div>
                          </td>
                          <td>$194.89 K</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon5.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon9.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">FRAXBP</span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">5.52%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Polygon</span>
                            </div>
                          </td>
                          <td>$2.42 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div className="pools_table__pagination mt-6 mt-md-8">
                      <nav>
                        <ul className="d-flex align-items-center gap-3 gap-md-5">
                          <li className="px-3 py-2 br1 rounded-5 d-center">
                            <i className="ti ti-chevron-left fs-four p1-color"></i>
                          </li>
                          <li className="px-5 py-3 br1 rounded-5 d-center">
                            <span className="p1-color fs-five">1</span>
                          </li>
                          <li className="px-5 py-3 br1 rounded-5 d-center">
                            <span className="p1-color fs-five">2</span>
                          </li>
                          <li className="px-5 py-3 br1 rounded-5 d-center">
                            <span className="p1-color fs-five">3</span>
                          </li>
                          <li className="px-3 py-2 br1 rounded-5 d-center">
                            <i className="ti ti-chevron-right fs-four p1-color"></i>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="tabitem wow fadeInUp">
                    <div className="pools_table__totalitem overflow-auto">
                      <table>
                        <th>Pool Name</th>
                        <th>
                          <div className="d-flex align-items-center gap-1">
                            <span>Current APY</span>
                            <div className="d-flex flex-column gap-0">
                              <i className="ti ti-caret-up-filled fs-nine cpoint"></i>
                              <i className="ti ti-caret-down-filled fs-nine cpoint"></i>
                            </div>
                          </div>
                        </th>
                        <th>
                          <div className="d-flex align-items-center gap-1">
                            <span>CNetwork</span>
                            <div className="d-flex flex-column gap-0">
                              <i className="ti ti-caret-up-filled fs-nine cpoint"></i>
                              <i className="ti ti-caret-down-filled fs-nine cpoint"></i>
                            </div>
                          </div>
                        </th>
                        <th>
                          <div className="d-flex align-items-center gap-1">
                            <span>TVL</span>
                            <div className="d-flex flex-column gap-0">
                              <i className="ti ti-caret-up-filled fs-nine cpoint"></i>
                              <i className="ti ti-caret-down-filled fs-nine cpoint"></i>
                            </div>
                          </div>
                        </th>
                        <th>Type</th>
                        <th>Action</th>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon2.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon1.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">USDC</span>
                                <span className="roboto">LDO</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">26.80%</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src="/png/tableicon12.png" alt="Icons" />
                              <img
                                className="pools_table__totalitem-img"
                                src="/tableicon11.png"
                                alt="Icons"
                              />
                              <img
                                className="pools_table__totalitem-img"
                                src="/tableicon12.png"
                                alt="Icons"
                              />
                              <img
                                className="pools_table__totalitem-img"
                                src="/tableicon11.png"
                                alt="Icons"
                              />
                              <img
                                className="pools_table__totalitem-img"
                                src="/tableicon12.png"
                                alt="Icons"
                              />
                            </div>
                          </td>
                          <td>$181.48 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8 p1-color"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon5.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon4.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto">stETH-ng</span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">3.15%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Ethereum</span>
                            </div>
                          </td>
                          <td>$ 96.88 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon7.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon6.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">yCRV</span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">12.68%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Ethereum</span>
                            </div>
                          </td>
                          <td>$5.27 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon2.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon8.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">
                                  Overnight
                                </span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">3.01%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Arbitrum</span>
                            </div>
                          </td>
                          <td>$194.89 K</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon5.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon9.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">FRAXBP</span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">5.52%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Arbitrum</span>
                            </div>
                          </td>
                          <td>$2.42 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon4.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon10.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">cvxeth</span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">8.72%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Ethereum</span>
                            </div>
                          </td>
                          <td>$2.42 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon2.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon6.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">ironback</span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">10.09%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Ethereum</span>
                            </div>
                          </td>
                          <td>$6.85 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon7.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon5.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">yCRV</span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">12.68%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Arbitrum</span>
                            </div>
                          </td>
                          <td>$5.27 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon2.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon8.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">
                                  Overnight
                                </span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">3.01%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Polygon</span>
                            </div>
                          </td>
                          <td>$194.89 K</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon5.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon9.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">FRAXBP</span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">5.52%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Polygon</span>
                            </div>
                          </td>
                          <td>$2.42 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div className="pools_table__pagination mt-6 mt-md-8">
                      <nav>
                        <ul className="d-flex align-items-center gap-3 gap-md-5">
                          <li className="px-3 py-2 br1 rounded-5 d-center">
                            <i className="ti ti-chevron-left fs-four p1-color"></i>
                          </li>
                          <li className="px-5 py-3 br1 rounded-5 d-center">
                            <span className="p1-color fs-five">1</span>
                          </li>
                          <li className="px-5 py-3 br1 rounded-5 d-center">
                            <span className="p1-color fs-five">2</span>
                          </li>
                          <li className="px-5 py-3 br1 rounded-5 d-center">
                            <span className="p1-color fs-five">3</span>
                          </li>
                          <li className="px-3 py-2 br1 rounded-5 d-center">
                            <i className="ti ti-chevron-right fs-four p1-color"></i>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="tabitem wow fadeInUp">
                    <div className="pools_table__totalitem overflow-auto">
                      <table>
                        <th>Pool Name</th>
                        <th>
                          <div className="d-flex align-items-center gap-1">
                            <span>Current APY</span>
                            <div className="d-flex flex-column gap-0">
                              <i className="ti ti-caret-up-filled fs-nine cpoint"></i>
                              <i className="ti ti-caret-down-filled fs-nine cpoint"></i>
                            </div>
                          </div>
                        </th>
                        <th>
                          <div className="d-flex align-items-center gap-1">
                            <span>CNetwork</span>
                            <div className="d-flex flex-column gap-0">
                              <i className="ti ti-caret-up-filled fs-nine cpoint"></i>
                              <i className="ti ti-caret-down-filled fs-nine cpoint"></i>
                            </div>
                          </div>
                        </th>
                        <th>
                          <div className="d-flex align-items-center gap-1">
                            <span>TVL</span>
                            <div className="d-flex flex-column gap-0">
                              <i className="ti ti-caret-up-filled fs-nine cpoint"></i>
                              <i className="ti ti-caret-down-filled fs-nine cpoint"></i>
                            </div>
                          </div>
                        </th>
                        <th>Type</th>
                        <th>Action</th>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon2.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon1.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">USDC</span>
                                <span className="roboto">LDO</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">26.80%</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src="/png/tableicon12.png" alt="Icons" />
                              <img
                                className="pools_table__totalitem-img"
                                src="/tableicon11.png"
                                alt="Icons"
                              />
                              <img
                                className="pools_table__totalitem-img"
                                src="/tableicon12.png"
                                alt="Icons"
                              />
                              <img
                                className="pools_table__totalitem-img"
                                src="/tableicon11.png"
                                alt="Icons"
                              />
                              <img
                                className="pools_table__totalitem-img"
                                src="/tableicon12.png"
                                alt="Icons"
                              />
                            </div>
                          </td>
                          <td>$181.48 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8 p1-color"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon5.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon4.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto">stETH-ng</span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">3.15%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Ethereum</span>
                            </div>
                          </td>
                          <td>$ 96.88 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon7.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon6.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">yCRV</span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">12.68%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Ethereum</span>
                            </div>
                          </td>
                          <td>$5.27 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon2.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon8.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">
                                  Overnight
                                </span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">3.01%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Arbitrum</span>
                            </div>
                          </td>
                          <td>$194.89 K</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon5.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon9.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">FRAXBP</span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">5.52%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Arbitrum</span>
                            </div>
                          </td>
                          <td>$2.42 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon4.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon10.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">cvxeth</span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">8.72%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Ethereum</span>
                            </div>
                          </td>
                          <td>$2.42 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon2.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon6.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">ironback</span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">10.09%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Ethereum</span>
                            </div>
                          </td>
                          <td>$6.85 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon7.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon5.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">yCRV</span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">12.68%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Arbitrum</span>
                            </div>
                          </td>
                          <td>$5.27 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon2.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon8.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">
                                  Overnight
                                </span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">3.01%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Polygon</span>
                            </div>
                          </td>
                          <td>$194.89 K</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                              <div className="d-flex align-items-center">
                                <img src="/png/tableicon5.png" alt="Icons" />
                                <img
                                  className="pools_table__totalitem-img"
                                  src="/tableicon9.png"
                                  alt="Icons"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="roboto fw-bold">FRAXBP</span>
                                <span className="roboto">curve</span>
                              </div>
                            </div>
                          </td>
                          <td className="p1-color fs-ten">5.52%</td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <img src="/png/tableicon3.png" alt="Icons" />
                              <span>Polygon</span>
                            </div>
                          </td>
                          <td>$2.42 M</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <span>Flexi-Term</span>
                              <a
                                className="py-1 px-2 bg1-color rounded-1 p1-color"
                                href="javascript:void(0)"
                              >
                                Withdraw
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              className="cmn-btn py-2 px-6 px-md-8"
                              href="javascript:void(0)"
                            >
                              Stack
                            </a>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div className="pools_table__pagination mt-6 mt-md-8">
                      <nav>
                        <ul className="d-flex align-items-center gap-3 gap-md-5">
                          <li className="px-3 py-2 br1 rounded-5 d-center">
                            <i className="ti ti-chevron-left fs-four p1-color"></i>
                          </li>
                          <li className="px-5 py-3 br1 rounded-5 d-center">
                            <span className="p1-color fs-five">1</span>
                          </li>
                          <li className="px-5 py-3 br1 rounded-5 d-center">
                            <span className="p1-color fs-five">2</span>
                          </li>
                          <li className="px-5 py-3 br1 rounded-5 d-center">
                            <span className="p1-color fs-five">3</span>
                          </li>
                          <li className="px-3 py-2 br1 rounded-5 d-center">
                            <i className="ti ti-chevron-right fs-four p1-color"></i>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Members;
