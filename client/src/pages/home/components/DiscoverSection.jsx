import React, { useState, useEffect } from "react";
import { useStateContext } from "../../../context";
import { icons } from "../../../utils";
import { getRandomNumber, UserStatus, UserType } from "../../../utils";
import { Link } from "react-router-dom";
const DiscoverSection = () => {
  const { address, getDrugs, isContractLoading } = useStateContext();
  const [loading, setLoading] = useState(false);

  const [drugs, setDrugs] = useState([]);

  const fetchAllDrugs = async () => {
    try {
      if (!isContractLoading) {
        const drugs = await getDrugs();

        if (drugs) {
          setDrugs(drugs);
        }
        setLoading((prev) => !!prev);
      }
    } catch (error) {
      setLoading((prev) => !prev);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllDrugs();
  }, [address, isContractLoading, loading]);

  return (
    <section className="discover_web3 pools_tables pt-120 pb-120 bg9-color">
      <div className="container">
        <div className="row">
          <div className="discover_web3__title pools_table__title mb-5 mb-md-6 d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap gap-5">
            <div className="discover_web3__title-left">
              <h2 className="mb-5 mb-md-6 wow fadeInUp">
                Latest Medical Products
              </h2>
              <p className="roboto wow fadeInUp">
                Access Latest Medical Products via MedGrid protocol Dapp
              </p>
            </div>
            <a
              href="staking.html"
              className="cmn-btn py-2 py-md-3 px-5 px-md-6 wow fadeInUp"
            >
              VIEW ALL
            </a>
          </div>
          <div className="discover_web3__part pools_table__part">
            <div className="singletab">
              <ul className="tablinks d-flex align-items-center gap-5 gap-sm-10 gap-md-15 gap-lg-19 mb-6 mb-md-8 wow fadeInUp">
                <li className="nav-links">
                  <button className="tablink clickable-active active">
                    Drugs
                  </button>
                </li>
                {/* <li className="nav-links">
                  <button className="tablink clickable-active">GameFi</button>
                </li>
                <li className="nav-links">
                  <button className="tablink clickable-active">NFT</button>
                </li> */}
              </ul>
              <div className="tabcontents wow fadeInUp">
                <div className="tabitem active overflow-auto">
                  <div className="pools_table__totalitem">
                    <table>
                      <tr>
                        <th>Manufacturer</th>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Drug Form</th>
                        <th>Batch Number</th>
                        <th>Expiration Date</th>
                        <th>View</th>
                      </tr>

                      {loading ? (
                        <tr>Loading....</tr>
                      ) : drugs.length === 0 ? (
                        <tr>Loading...</tr>
                      ) : (
                        drugs.map((drug) => (
                          <tr key={drug.id}>
                            <td>
                              <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                                <div className="d-flex align-items-center gap-4">
                                  <span>{drug.id}</span>
                                  <img
                                    src={icons[getRandomNumber(icons.length)]}
                                    alt="Icons"
                                  />
                                </div>
                                <div className="d-flex flex-column">
                                  <span> {drug?.orgName}</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center gap-1">
                                {/* <span>Ethereum</span> */}
                                <div className="d-flex flex-column">
                                  <Link
                                    to={`/drugs/${drug.id}`}
                                    className="roboto fw-bold"
                                  >
                                    {drug?.data?.code?.coding[0]?.display}
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span> {drug?.data?.code?.coding[0]?.code}</span>
                            </td>
                            <td> {drug?.data?.form?.coding[0]?.display}</td>
                            <td>{drug?.data?.batch?.lotNumber}</td>
                            <td>{drug?.data?.batch?.expirationDate}</td>
                            <td>
                              <Link
                                to={`drugs/${drug.id}`}
                                className="btn btn-info"
                                type="button"
                              >
                                View Details
                              </Link>
                            </td>
                          </tr>
                        ))
                      )}

                      {/* <tr>
                        <td>
                          <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                            <div className="d-flex align-items-center gap-4">
                              <span>2</span>
                              <img src="/png/cryptocurrency.png" alt="Icons" />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="roboto fw-bold">
                                Calvin Peters
                              </span>
                              <span className="roboto">LDO</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <img src="/png/tableicon3.png" alt="Icons" />
                            <span>Ethereum</span>
                          </div>
                        </td>
                        <td>
                          <span>$215.7</span>
                          <div className="d-flex align-items-center">
                            <span className="fs-seven p1-color">+4.65%</span>
                            <i className="ti ti-arrow-narrow-up fs-five p1-color"></i>
                          </div>
                        </td>
                        <td>$141 M</td>
                        <td>$147.5 B</td>
                        <td>$255 B</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                            <div className="d-flex align-items-center gap-4">
                              <span>3</span>
                              <img
                                src="/png/cryptocurrency56304.png"
                                alt="Icons"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="roboto fw-bold">
                                Mason Patton
                              </span>
                              <span className="roboto">LDO</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <img src="/png/tableicon3.png" alt="Icons" />
                            <span>Ethereum</span>
                          </div>
                        </td>
                        <td>
                          <span>$912.7</span>
                          <div className="d-flex align-items-center">
                            <span className="fs-seven p1-color">+4.65%</span>
                            <i className="ti ti-arrow-narrow-up fs-five p1-color"></i>
                          </div>
                        </td>
                        <td>$155 M</td>
                        <td>$28.5 B</td>
                        <td>392 B</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                            <div className="d-flex align-items-center gap-4">
                              <span>4</span>
                              <img src="/png/cryptocurrency.png" alt="Icons" />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="roboto fw-bold">
                                Alfred Kelley
                              </span>
                              <span className="roboto">LDO</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <img src="../png/tableicon3.png" alt="Icons" />
                            <span>Ethereum</span>
                          </div>
                        </td>
                        <td>
                          <span>$640.7</span>
                          <div className="d-flex align-items-center">
                            <span className="fs-seven p1-color">+4.65%</span>
                            <i className="ti ti-arrow-narrow-up fs-five p1-color"></i>
                          </div>
                        </td>
                        <td>$198 M</td>
                        <td>$215.5 B</td>
                        <td>$631 B</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                            <div className="d-flex align-items-center gap-4">
                              <span>5</span>
                              <img
                                src="../png/cryptocurrency56304.png"
                                alt="Icons"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="roboto fw-bold">
                                Alejandro Hogan
                              </span>
                              <span className="roboto">LDO</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <img src="../png/tableicon3.png" alt="Icons" />
                            <span>Ethereum</span>
                          </div>
                        </td>
                        <td>
                          <span>$198.7</span>
                          <div className="d-flex align-items-center">
                            <span className="fs-seven p1-color">+4.65%</span>
                            <i className="ti ti-arrow-narrow-up fs-five p1-color"></i>
                          </div>
                        </td>
                        <td>$82 M</td>
                        <td>330.59 B</td>
                        <td>912 B</td>
                      </tr> */}
                    </table>
                  </div>
                </div>
                {/* <div className="tabitem overflow-auto">
                  <div className="pools_table__totalitem">
                    <table>
                      <tr>
                        <th>Rankings</th>
                        <th>Blockchain</th>
                        <th>Token Price</th>
                        <th>24H Volume</th>
                        <th>Market Cap</th>
                        <th>TVL</th>
                      </tr>
                      <tr>
                        <td>
                          <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                            <div className="d-flex align-items-center gap-4">
                              <span>1</span>
                              <img
                                src="../png/cryptocurrency56304.png"
                                alt="Icons"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="roboto fw-bold">
                                Milton Wagner
                              </span>
                              <span className="roboto">LDO</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <img src="../png/tableicon3.png" alt="Icons" />
                            <span>Ethereum</span>
                          </div>
                        </td>
                        <td>
                          <span>$936.7</span>
                          <div className="d-flex align-items-center">
                            <span className="fs-seven p1-color">+4.65%</span>
                            <i className="ti ti-arrow-narrow-up fs-five p1-color"></i>
                          </div>
                        </td>
                        <td>$218 M</td>
                        <td>$79.5 B</td>
                        <td>005 B</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                            <div className="d-flex align-items-center gap-4">
                              <span>2</span>
                              <img
                                src="../png/cryptocurrency.png"
                                alt="Icons"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="roboto fw-bold">
                                Calvin Peters
                              </span>
                              <span className="roboto">LDO</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <img src="../png/tableicon3.png" alt="Icons" />
                            <span>Ethereum</span>
                          </div>
                        </td>
                        <td>
                          <span>$215.7</span>
                          <div className="d-flex align-items-center">
                            <span className="fs-seven p1-color">+4.65%</span>
                            <i className="ti ti-arrow-narrow-up fs-five p1-color"></i>
                          </div>
                        </td>
                        <td>$141 M</td>
                        <td>$147.5 B</td>
                        <td>$255 B</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                            <div className="d-flex align-items-center gap-4">
                              <span>3</span>
                              <img
                                src="../png/cryptocurrency56304.png"
                                alt="Icons"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="roboto fw-bold">
                                Mason Patton
                              </span>
                              <span className="roboto">LDO</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <img src="../png/tableicon3.png" alt="Icons" />
                            <span>Ethereum</span>
                          </div>
                        </td>
                        <td>
                          <span>$912.7</span>
                          <div className="d-flex align-items-center">
                            <span className="fs-seven p1-color">+4.65%</span>
                            <i className="ti ti-arrow-narrow-up fs-five p1-color"></i>
                          </div>
                        </td>
                        <td>$155 M</td>
                        <td>$28.5 B</td>
                        <td>392 B</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                            <div className="d-flex align-items-center gap-4">
                              <span>4</span>
                              <img
                                src="../png/cryptocurrency.png"
                                alt="Icons"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="roboto fw-bold">
                                Alfred Kelley
                              </span>
                              <span className="roboto">LDO</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <img src="../png/tableicon3.png" alt="Icons" />
                            <span>Ethereum</span>
                          </div>
                        </td>
                        <td>
                          <span>$640.7</span>
                          <div className="d-flex align-items-center">
                            <span className="fs-seven p1-color">+4.65%</span>
                            <i className="ti ti-arrow-narrow-up fs-five p1-color"></i>
                          </div>
                        </td>
                        <td>$198 M</td>
                        <td>$215.5 B</td>
                        <td>$631 B</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                            <div className="d-flex align-items-center gap-4">
                              <span>5</span>
                              <img
                                src="../png/cryptocurrency56304.png"
                                alt="Icons"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="roboto fw-bold">
                                Alejandro Hogan
                              </span>
                              <span className="roboto">LDO</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <img src="../png/tableicon3.png" alt="Icons" />
                            <span>Ethereum</span>
                          </div>
                        </td>
                        <td>
                          <span>$198.7</span>
                          <div className="d-flex align-items-center">
                            <span className="fs-seven p1-color">+4.65%</span>
                            <i className="ti ti-arrow-narrow-up fs-five p1-color"></i>
                          </div>
                        </td>
                        <td>$82 M</td>
                        <td>330.59 B</td>
                        <td>912 B</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="tabitem overflow-auto">
                  <div className="pools_table__totalitem">
                    <table>
                      <tr>
                        <th>Rankings</th>
                        <th>Blockchain</th>
                        <th>Token Price</th>
                        <th>24H Volume</th>
                        <th>Market Cap</th>
                        <th>TVL</th>
                      </tr>
                      <tr>
                        <td>
                          <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                            <div className="d-flex align-items-center gap-4">
                              <span>1</span>
                              <img
                                src="../png/cryptocurrency56304.png"
                                alt="Icons"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="roboto fw-bold">
                                Milton Wagner
                              </span>
                              <span className="roboto">LDO</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <img src="../png/tableicon3.png" alt="Icons" />
                            <span>Ethereum</span>
                          </div>
                        </td>
                        <td>
                          <span>$936.7</span>
                          <div className="d-flex align-items-center">
                            <span className="fs-seven p1-color">+4.65%</span>
                            <i className="ti ti-arrow-narrow-up fs-five p1-color"></i>
                          </div>
                        </td>
                        <td>$218 M</td>
                        <td>$79.5 B</td>
                        <td>005 B</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                            <div className="d-flex align-items-center gap-4">
                              <span>2</span>
                              <img
                                src="../png/cryptocurrency.png"
                                alt="Icons"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="roboto fw-bold">
                                Calvin Peters
                              </span>
                              <span className="roboto">LDO</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <img src="../png/tableicon3.png" alt="Icons" />
                            <span>Ethereum</span>
                          </div>
                        </td>
                        <td>
                          <span>$215.7</span>
                          <div className="d-flex align-items-center">
                            <span className="fs-seven p1-color">+4.65%</span>
                            <i className="ti ti-arrow-narrow-up fs-five p1-color"></i>
                          </div>
                        </td>
                        <td>$141 M</td>
                        <td>$147.5 B</td>
                        <td>$255 B</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                            <div className="d-flex align-items-center gap-4">
                              <span>3</span>
                              <img
                                src="../png/cryptocurrency56304.png"
                                alt="Icons"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="roboto fw-bold">
                                Mason Patton
                              </span>
                              <span className="roboto">LDO</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <img src="../png/tableicon3.png" alt="Icons" />
                            <span>Ethereum</span>
                          </div>
                        </td>
                        <td>
                          <span>$912.7</span>
                          <div className="d-flex align-items-center">
                            <span className="fs-seven p1-color">+4.65%</span>
                            <i className="ti ti-arrow-narrow-up fs-five p1-color"></i>
                          </div>
                        </td>
                        <td>$155 M</td>
                        <td>$28.5 B</td>
                        <td>392 B</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                            <div className="d-flex align-items-center gap-4">
                              <span>4</span>
                              <img
                                src="../png/cryptocurrency.png"
                                alt="Icons"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="roboto fw-bold">
                                Alfred Kelley
                              </span>
                              <span className="roboto">LDO</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <img src="../png/tableicon3.png" alt="Icons" />
                            <span>Ethereum</span>
                          </div>
                        </td>
                        <td>
                          <span>$640.7</span>
                          <div className="d-flex align-items-center">
                            <span className="fs-seven p1-color">+4.65%</span>
                            <i className="ti ti-arrow-narrow-up fs-five p1-color"></i>
                          </div>
                        </td>
                        <td>$198 M</td>
                        <td>$215.5 B</td>
                        <td>$631 B</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="pools_table__totalitem-ftd d-flex align-items-center gap-3 gap-md-4 ms-3 ms-md-6">
                            <div className="d-flex align-items-center gap-4">
                              <span>5</span>
                              <img
                                src="../png/cryptocurrency56304.png"
                                alt="Icons"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <span className="roboto fw-bold">
                                Alejandro Hogan
                              </span>
                              <span className="roboto">LDO</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <img src="../png/tableicon3.png" alt="Icons" />
                            <span>Ethereum</span>
                          </div>
                        </td>
                        <td>
                          <span>$198.7</span>
                          <div className="d-flex align-items-center">
                            <span className="fs-seven p1-color">+4.65%</span>
                            <i className="ti ti-arrow-narrow-up fs-five p1-color"></i>
                          </div>
                        </td>
                        <td>$82 M</td>
                        <td>330.59 B</td>
                        <td>912 B</td>
                      </tr>
                    </table>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
