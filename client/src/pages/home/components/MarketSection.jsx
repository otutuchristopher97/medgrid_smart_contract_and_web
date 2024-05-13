import React from "react";

const MarketSection = () => {
  return (
    <section className="market_more what_trending bg5-color pt-120 pb-120">
      <div className="container">
        <div className="row categories__header mb-4 mb-md-6">
          <div className="col-xl-7 col-lg-8 col-sm-8">
            <div className="categories__title d-flex align-items-center gap-5 gap-md-6 wow fadeInUp">
              <h2 className="mb-3 mb-md-4">Markets</h2>
              <a
                href="javascript:void(0)"
                className="roboto d-flex align-items-center gap-2 p1-color"
              >
                More Market
                <i className="ti ti-chevron-right p1-color"></i>
              </a>
            </div>
          </div>
          <div className="col-xl-5 col-lg-4 col-sm-4 categories_top_btn categories_top_btntwo categories_top_btnthree categories_top_btnfour mt-6 mt-sm-0">
            <div className="slider-btn d-center justify-content-start justify-content-sm-end gap-4">
              <button
                type="button"
                aria-label="Slide Prev"
                className="ara-prev d-center cmn-btn third-alt px-2 py-1 rounded-5"
              >
                <i className="ti ti-chevron-left fs-four"></i>
              </button>
              <button
                type="button"
                aria-label="Slide Next"
                className="ara-next d-center cmn-btn px-2 py-1 rounded-5"
              >
                <i className="ti ti-chevron-right fs-four"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="singletab">
            <ul className="tablinks d-flex align-items-center gap-3 flex-wrap mb-10 mb-md-15 wow fadeInUp">
              <li className="nav-links">
                <button className="tablink clickable-active active  py-3 px-5 px-md-6 rounded-2 br2">
                  Staking
                </button>
              </li>
              <li className="nav-links">
                <button className="tablink clickable-active  py-3 px-5 px-md-6 rounded-2 br2">
                  IDO
                </button>
              </li>
              <li className="nav-links">
                <button className="tablink clickable-active py-3 px-5 px-md-6 rounded-2 br2">
                  Swap
                </button>
              </li>
              <li className="nav-links">
                <button className="tablink clickable-active py-3 px-5 px-md-6 rounded-2 br2">
                  Buy Crypto
                </button>
              </li>
            </ul>
            <div className="tabcontents">
              <div className="tabitem active">
                <div className="swiper categories_top">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="items-wrapper">
                        <div className="market_more__item text-center py-8 py-md-10  px-5 px-md-6 bg1-color rounded-3">
                          <div className="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                            <div className="d-flex align-items-center">
                              <img
                                className="mb-3 mb-md-4"
                                src="/png/homeicon2.png"
                                alt="icon"
                              />
                              <img
                                className="imgstyle mb-3 mb-md-4"
                                src="/png/homeicon3.png"
                                alt="icon"
                              />
                            </div>
                            <div className="text-start">
                              <h3 className="mb-1">yCRV</h3>
                              <span className="mb-5 mb-md-6 d-block ">
                                Lido Dao
                              </span>
                            </div>
                          </div>
                          <span className="fs-one p1-color fw_500 mb-1 d-block ">
                            11.31%
                          </span>
                          <span className="mb-8 mb-md-10 d-block fs-five">
                            Apy
                          </span>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>TVL</span>
                            <span>$4.96 M</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                            <span>Network</span>
                            <span>Ethereum</span>
                          </div>
                          <a
                            href="staking-details.html"
                            className="cmn-btn third-alt py-3 px-5 px-md-6 w-100 "
                          >
                            Stack
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="items-wrapper">
                        <div className="market_more__item text-center py-8 py-md-10  px-5 px-md-6 bg1-color rounded-3">
                          <div className="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                            <div className="d-flex align-items-center">
                              <img
                                className="mb-3 mb-md-4"
                                src="/png/homeicon4.png"
                                alt="icon"
                              />
                            </div>
                            <div className="text-start">
                              <h3 className="mb-1">cvxeth</h3>
                              <span className="mb-5 mb-md-6 d-block ">
                                curve
                              </span>
                            </div>
                          </div>
                          <span className="fs-one p1-color fw_500 mb-1 d-block ">
                            9.71%
                          </span>
                          <span className="mb-8 mb-md-10 d-block fs-five">
                            Apy
                          </span>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>TVL</span>
                            <span>$16.66 M</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                            <span>Network</span>
                            <span>Ethereum</span>
                          </div>
                          <a
                            href="staking-details.html"
                            className="cmn-btn third-alt py-3 px-5 px-md-6 w-100 "
                          >
                            Stack
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="items-wrapper">
                        <div className="market_more__item text-center py-8 py-md-10  px-5 px-md-6 bg1-color rounded-3">
                          <div className="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                            <div className="d-flex align-items-center">
                              <img
                                className="mb-3 mb-md-4"
                                src="/png/homeicon5.png"
                                alt="icon"
                              />
                            </div>
                            <div className="text-start">
                              <h3 className="mb-1">GLP</h3>
                              <span className="mb-5 mb-md-6 d-block ">gmx</span>
                            </div>
                          </div>
                          <span className="fs-one p1-color fw_500 mb-1 d-block ">
                            7.79%
                          </span>
                          <span className="mb-8 mb-md-10 d-block fs-five">
                            Apy
                          </span>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>TVL</span>
                            <span>$4.96 M</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                            <span>Network</span>
                            <span>Ethereum</span>
                          </div>
                          <a
                            href="staking-details.html"
                            className="cmn-btn third-alt py-3 px-5 px-md-6 w-100 "
                          >
                            Stack
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="items-wrapper">
                        <div className="market_more__item text-center py-8 py-md-10  px-5 px-md-6 bg1-color rounded-3">
                          <div className="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                            <div className="d-flex align-items-center">
                              <img
                                className="mb-3 mb-md-4"
                                src="/png/homeicon3.png"
                                alt="icon"
                              />
                              <img
                                className="imgstyle mb-3 mb-md-4"
                                src="/png/homeicon6.png"
                                alt="icon"
                              />
                            </div>
                            <div className="text-start">
                              <h3 className="mb-1">yCRV</h3>
                              <span className="mb-5 mb-md-6 d-block ">
                                Lido Dao
                              </span>
                            </div>
                          </div>
                          <span className="fs-one p1-color fw_500 mb-1 d-block ">
                            11.31%
                          </span>
                          <span className="mb-8 mb-md-10 d-block fs-five">
                            Apy
                          </span>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>TVL</span>
                            <span>$43.96 M</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                            <span>Network</span>
                            <span>Ethereum</span>
                          </div>
                          <a
                            href="staking-details.html"
                            className="cmn-btn third-alt py-3 px-5 px-md-6 w-100 "
                          >
                            Stack
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tabitem">
                <div className="swiper categories_toptwo">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="items-wrapper">
                        <div className="market_more__item text-center py-8 py-md-10  px-5 px-md-6 bg1-color rounded-3">
                          <div className="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                            <div className="d-flex align-items-center">
                              <img
                                className="mb-3 mb-md-4"
                                src="/png/homeicon2.png"
                                alt="icon"
                              />
                              <img
                                className="imgstyle mb-3 mb-md-4"
                                src="/png/homeicon3.png"
                                alt="icon"
                              />
                            </div>
                            <div className="text-start">
                              <h3 className="mb-1">yCRV</h3>
                              <span className="mb-5 mb-md-6 d-block ">
                                Lido Dao
                              </span>
                            </div>
                          </div>
                          <span className="fs-one p1-color fw_500 mb-1 d-block ">
                            11.31%
                          </span>
                          <span className="mb-8 mb-md-10 d-block fs-five">
                            Apy
                          </span>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>TVL</span>
                            <span>$4.96 M</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                            <span>Network</span>
                            <span>Ethereum</span>
                          </div>
                          <a
                            href="staking-details.html"
                            className="cmn-btn third-alt py-3 px-5 px-md-6 w-100 "
                          >
                            Stack
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="items-wrapper">
                        <div className="market_more__item text-center py-8 py-md-10  px-5 px-md-6 bg1-color rounded-3">
                          <div className="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                            <div className="d-flex align-items-center">
                              <img
                                className="mb-3 mb-md-4"
                                src="/png/homeicon4.png"
                                alt="icon"
                              />
                            </div>
                            <div className="text-start">
                              <h3 className="mb-1">cvxeth</h3>
                              <span className="mb-5 mb-md-6 d-block ">
                                curve
                              </span>
                            </div>
                          </div>
                          <span className="fs-one p1-color fw_500 mb-1 d-block ">
                            9.71%
                          </span>
                          <span className="mb-8 mb-md-10 d-block fs-five">
                            Apy
                          </span>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>TVL</span>
                            <span>$16.66 M</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                            <span>Network</span>
                            <span>Ethereum</span>
                          </div>
                          <a
                            href="staking-details.html"
                            className="cmn-btn third-alt py-3 px-5 px-md-6 w-100 "
                          >
                            Stack
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="items-wrapper">
                        <div className="market_more__item text-center py-8 py-md-10  px-5 px-md-6 bg1-color rounded-3">
                          <div className="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                            <div className="d-flex align-items-center">
                              <img
                                className="mb-3 mb-md-4"
                                src="/png/homeicon5.png"
                                alt="icon"
                              />
                            </div>
                            <div className="text-start">
                              <h3 className="mb-1">GLP</h3>
                              <span className="mb-5 mb-md-6 d-block ">gmx</span>
                            </div>
                          </div>
                          <span className="fs-one p1-color fw_500 mb-1 d-block ">
                            7.79%
                          </span>
                          <span className="mb-8 mb-md-10 d-block fs-five">
                            Apy
                          </span>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>TVL</span>
                            <span>$4.96 M</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                            <span>Network</span>
                            <span>Ethereum</span>
                          </div>
                          <a
                            href="staking-details.html"
                            className="cmn-btn third-alt py-3 px-5 px-md-6 w-100 "
                          >
                            Stack
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="items-wrapper">
                        <div className="market_more__item text-center py-8 py-md-10  px-5 px-md-6 bg1-color rounded-3">
                          <div className="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                            <div className="d-flex align-items-center">
                              <img
                                className="mb-3 mb-md-4"
                                src="/png/homeicon3.png"
                                alt="icon"
                              />
                              <img
                                className="imgstyle mb-3 mb-md-4"
                                src="/png/homeicon6.png"
                                alt="icon"
                              />
                            </div>
                            <div className="text-start">
                              <h3 className="mb-1">yCRV</h3>
                              <span className="mb-5 mb-md-6 d-block ">
                                Lido Dao
                              </span>
                            </div>
                          </div>
                          <span className="fs-one p1-color fw_500 mb-1 d-block ">
                            11.31%
                          </span>
                          <span className="mb-8 mb-md-10 d-block fs-five">
                            Apy
                          </span>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>TVL</span>
                            <span>$43.96 M</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                            <span>Network</span>
                            <span>Ethereum</span>
                          </div>
                          <a
                            href="staking-details.html"
                            className="cmn-btn third-alt py-3 px-5 px-md-6 w-100 "
                          >
                            Stack
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tabitem">
                <div className="swiper categories_topthree">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="items-wrapper">
                        <div className="market_more__item text-center py-8 py-md-10  px-5 px-md-6 bg1-color rounded-3">
                          <div className="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                            <div className="d-flex align-items-center">
                              <img
                                className="mb-3 mb-md-4"
                                src="/png/homeicon2.png"
                                alt="icon"
                              />
                              <img
                                className="imgstyle mb-3 mb-md-4"
                                src="/png/homeicon3.png"
                                alt="icon"
                              />
                            </div>
                            <div className="text-start">
                              <h3 className="mb-1">yCRV</h3>
                              <span className="mb-5 mb-md-6 d-block ">
                                Lido Dao
                              </span>
                            </div>
                          </div>
                          <span className="fs-one p1-color fw_500 mb-1 d-block ">
                            11.31%
                          </span>
                          <span className="mb-8 mb-md-10 d-block fs-five">
                            Apy
                          </span>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>TVL</span>
                            <span>$4.96 M</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                            <span>Network</span>
                            <span>Ethereum</span>
                          </div>
                          <a
                            href="staking-details.html"
                            className="cmn-btn third-alt py-3 px-5 px-md-6 w-100 "
                          >
                            Stack
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="items-wrapper">
                        <div className="market_more__item text-center py-8 py-md-10  px-5 px-md-6 bg1-color rounded-3">
                          <div className="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                            <div className="d-flex align-items-center">
                              <img
                                className="mb-3 mb-md-4"
                                src="/png/homeicon4.png"
                                alt="icon"
                              />
                            </div>
                            <div className="text-start">
                              <h3 className="mb-1">cvxeth</h3>
                              <span className="mb-5 mb-md-6 d-block ">
                                curve
                              </span>
                            </div>
                          </div>
                          <span className="fs-one p1-color fw_500 mb-1 d-block ">
                            9.71%
                          </span>
                          <span className="mb-8 mb-md-10 d-block fs-five">
                            Apy
                          </span>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>TVL</span>
                            <span>$16.66 M</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                            <span>Network</span>
                            <span>Ethereum</span>
                          </div>
                          <a
                            href="staking-details.html"
                            className="cmn-btn third-alt py-3 px-5 px-md-6 w-100 "
                          >
                            Stack
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="items-wrapper">
                        <div className="market_more__item text-center py-8 py-md-10  px-5 px-md-6 bg1-color rounded-3">
                          <div className="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                            <div className="d-flex align-items-center">
                              <img
                                className="mb-3 mb-md-4"
                                src="/png/homeicon5.png"
                                alt="icon"
                              />
                            </div>
                            <div className="text-start">
                              <h3 className="mb-1">GLP</h3>
                              <span className="mb-5 mb-md-6 d-block ">gmx</span>
                            </div>
                          </div>
                          <span className="fs-one p1-color fw_500 mb-1 d-block ">
                            7.79%
                          </span>
                          <span className="mb-8 mb-md-10 d-block fs-five">
                            Apy
                          </span>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>TVL</span>
                            <span>$4.96 M</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                            <span>Network</span>
                            <span>Ethereum</span>
                          </div>
                          <a
                            href="staking-details.html"
                            className="cmn-btn third-alt py-3 px-5 px-md-6 w-100 "
                          >
                            Stack
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="items-wrapper">
                        <div className="market_more__item text-center py-8 py-md-10  px-5 px-md-6 bg1-color rounded-3">
                          <div className="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                            <div className="d-flex align-items-center">
                              <img
                                className="mb-3 mb-md-4"
                                src="/png/homeicon3.png"
                                alt="icon"
                              />
                              <img
                                className="imgstyle mb-3 mb-md-4"
                                src="/png/homeicon6.png"
                                alt="icon"
                              />
                            </div>
                            <div className="text-start">
                              <h3 className="mb-1">yCRV</h3>
                              <span className="mb-5 mb-md-6 d-block ">
                                Lido Dao
                              </span>
                            </div>
                          </div>
                          <span className="fs-one p1-color fw_500 mb-1 d-block ">
                            11.31%
                          </span>
                          <span className="mb-8 mb-md-10 d-block fs-five">
                            Apy
                          </span>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>TVL</span>
                            <span>$43.96 M</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                            <span>Network</span>
                            <span>Ethereum</span>
                          </div>
                          <a
                            href="staking-details.html"
                            className="cmn-btn third-alt py-3 px-5 px-md-6 w-100 "
                          >
                            Stack
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tabitem">
                <div className="swiper categories_topfour">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="items-wrapper">
                        <div className="market_more__item text-center py-8 py-md-10  px-5 px-md-6 bg1-color rounded-3">
                          <div className="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                            <div className="d-flex align-items-center">
                              <img
                                className="mb-3 mb-md-4"
                                src="/png/homeicon2.png"
                                alt="icon"
                              />
                              <img
                                className="imgstyle mb-3 mb-md-4"
                                src="/png/homeicon3.png"
                                alt="icon"
                              />
                            </div>
                            <div className="text-start">
                              <h3 className="mb-1">yCRV</h3>
                              <span className="mb-5 mb-md-6 d-block ">
                                Lido Dao
                              </span>
                            </div>
                          </div>
                          <span className="fs-one p1-color fw_500 mb-1 d-block ">
                            11.31%
                          </span>
                          <span className="mb-8 mb-md-10 d-block fs-five">
                            Apy
                          </span>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>TVL</span>
                            <span>$4.96 M</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                            <span>Network</span>
                            <span>Ethereum</span>
                          </div>
                          <a
                            href="staking-details.html"
                            className="cmn-btn third-alt py-3 px-5 px-md-6 w-100 "
                          >
                            Stack
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="items-wrapper">
                        <div className="market_more__item text-center py-8 py-md-10  px-5 px-md-6 bg1-color rounded-3">
                          <div className="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                            <div className="d-flex align-items-center">
                              <img
                                className="mb-3 mb-md-4"
                                src="/png/homeicon4.png"
                                alt="icon"
                              />
                            </div>
                            <div className="text-start">
                              <h3 className="mb-1">cvxeth</h3>
                              <span className="mb-5 mb-md-6 d-block ">
                                curve
                              </span>
                            </div>
                          </div>
                          <span className="fs-one p1-color fw_500 mb-1 d-block ">
                            9.71%
                          </span>
                          <span className="mb-8 mb-md-10 d-block fs-five">
                            Apy
                          </span>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>TVL</span>
                            <span>$16.66 M</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                            <span>Network</span>
                            <span>Ethereum</span>
                          </div>
                          <a
                            href="staking-details.html"
                            className="cmn-btn third-alt py-3 px-5 px-md-6 w-100 "
                          >
                            Stack
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="items-wrapper">
                        <div className="market_more__item text-center py-8 py-md-10  px-5 px-md-6 bg1-color rounded-3">
                          <div className="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                            <div className="d-flex align-items-center">
                              <img
                                className="mb-3 mb-md-4"
                                src="/png/homeicon5.png"
                                alt="icon"
                              />
                            </div>
                            <div className="text-start">
                              <h3 className="mb-1">GLP</h3>
                              <span className="mb-5 mb-md-6 d-block ">gmx</span>
                            </div>
                          </div>
                          <span className="fs-one p1-color fw_500 mb-1 d-block ">
                            7.79%
                          </span>
                          <span className="mb-8 mb-md-10 d-block fs-five">
                            Apy
                          </span>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>TVL</span>
                            <span>$4.96 M</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                            <span>Network</span>
                            <span>Ethereum</span>
                          </div>
                          <a
                            href="staking-details.html"
                            className="cmn-btn third-alt py-3 px-5 px-md-6 w-100 "
                          >
                            Stack
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="items-wrapper">
                        <div className="market_more__item text-center py-8 py-md-10  px-5 px-md-6 bg1-color rounded-3">
                          <div className="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                            <div className="d-flex align-items-center">
                              <img
                                className="mb-3 mb-md-4"
                                src="/png/homeicon3.png"
                                alt="icon"
                              />
                              <img
                                className="imgstyle mb-3 mb-md-4"
                                src="/png/homeicon6.png"
                                alt="icon"
                              />
                            </div>
                            <div className="text-start">
                              <h3 className="mb-1">yCRV</h3>
                              <span className="mb-5 mb-md-6 d-block ">
                                Lido Dao
                              </span>
                            </div>
                          </div>
                          <span className="fs-one p1-color fw_500 mb-1 d-block ">
                            11.31%
                          </span>
                          <span className="mb-8 mb-md-10 d-block fs-five">
                            Apy
                          </span>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>TVL</span>
                            <span>$43.96 M</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                            <span>Network</span>
                            <span>Ethereum</span>
                          </div>
                          <a
                            href="staking-details.html"
                            className="cmn-btn third-alt py-3 px-5 px-md-6 w-100 "
                          >
                            Stack
                          </a>
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
  );
};

export default MarketSection;
