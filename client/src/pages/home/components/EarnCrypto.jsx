import React from "react";

const EarnCrypto = () => {
  return (
    <section className="earn_crypto pt-120 pb-120">
      <div className="container">
        <div className="row gy-5 gy-md-6">
          <div className="col-12">
            <div className="earn_crypto__title text-sm-center mb-7 mb-md-11 wow fadeInUp">
              <h2>
                Earn crypto flexibly with{" "}
                <span className="p1-color">Bitco</span>
              </h2>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="earn_crypto__cardone bg7-color br2 rounded-4 p-6 p-md-8 h-100 wow fadeInUp">
              <div className="d-flex align-items-start justify-content-between flex-wrap gap-3 mb-8 mb-sm-10 mb-md-15">
                <div>
                  <h2 className="mb-3">Staking</h2>
                  <span>Calculate my earnings</span>
                </div>
                <div className="text-end bg1-color br2 rounded-3 ps-1 pe-2">
                  <div className="apex_section__slider-selector markets_section__rcard-selector">
                    <div className="f-group">
                      <select id="select3" className="f-control f-dropdown">
                        <option
                          value="1"
                          selected
                          data-image="../png/solanalogo.png"
                        >
                          SOL
                        </option>
                        <option
                          value="2"
                          data-image="/png/currencycategory5333a.png"
                        >
                          ETH
                        </option>
                        <option
                          value="3"
                          data-image="/png/currencycategory6bd4a.png"
                        >
                          LFC
                        </option>
                        <option
                          value="4"
                          data-image="/png/currencycategory71949.png"
                        >
                          TLP
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 justify-content-between flex-wrap mb-5 mb-md-6">
                <div>
                  <span className="mb-3">How many coins do you hold?</span>
                  <div className="d-flex align-items-end gap-2">
                    <h1 className="fw_500">18166</h1>
                    <span className="mb-2">SOL</span>
                  </div>
                </div>
                <div>
                  <span className="mb-3">Estimate Annual Reward</span>
                  <h1 className="fw_500 p1-color text-sm-end">41.12%</h1>
                </div>
              </div>
              <div className="earn_crypto__wrapper mb-8 mb-md-10 w-100">
                <progress
                  className="w-100"
                  id="progress-bar"
                  value="40"
                  max="100"
                ></progress>
              </div>
              <div className="earn_crypto__rangeslider">
                <div className="slidecontainer">
                  <div className="d-flex align-items-center gap-3 justify-content-between flex-wrap mb-5 mb-md-6">
                    <div>
                      <span className="mb-3">How many coins do you hold?</span>
                      <div className="d-flex align-items-end gap-2">
                        <h1 className="fw_500">18166</h1>
                        <span className="mb-2">SOL</span>
                      </div>
                    </div>
                    <div>
                      <span className="mb-3">Estimate Annual Reward</span>
                      <h1 className="fw_500 p1-color text-sm-end">
                        <span id="demo"></span>%
                      </h1>
                      <h1></h1>
                    </div>
                  </div>
                  <div className="range-style overflow-hidden position-relative w-100">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value="50"
                      className="slider w-100 rounded-5"
                      id="myRange"
                    />
                  </div>
                  <div>
                    <input
                      type="range"
                      className="win10-thumb"
                      min="0"
                      max="100"
                      value="25"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center gap-1 mb-5 mb-md-6 justify-content-between flex-wrap">
                <span>Daily Earnings:</span>
                <span>0.019178 SOL 0.74 USD</span>
              </div>
              <div className="d-flex align-items-center gap-1 mb-5 mb-md-6 justify-content-between flex-wrap">
                <span>Monthly Earnings:</span>
                <span>0.583333 SOL 22 USD</span>
              </div>
              <div className="d-flex align-items-center gap-1 mb-9 mb-md-11 justify-content-between flex-wrap">
                <span>Yearly Earnings:</span>
                <span>7 SOL 270 USD</span>
              </div>
              <a
                href="staking-details.html"
                className="cmn-btn py-3 px-5 px-md-6 d-block "
              >
                Start saving
              </a>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="earn_crypto__cardtwo bg7-color br2 rounded-4 p-6 p-md-8 h-100 wow fadeInUp">
              <h2 className="mb-3">Savings</h2>
              <span className="mb-8 mb-md-10">Earn daily rewards</span>
              <div className="d-flex align-items-center justify-content-between flex-wrap flex-xl-nowrap gap-5 gap-md-6 mb-5 mb-md-6">
                <div className="bg1-color p-5 p-md-6 br2 rounded-3 w-100 ">
                  <div className="d-flex align-items-center flex-wrap gap-3 mb-4">
                    <img src="/png/ethereum5053.png" alt="Icon" />
                    <div className="d-flex flex-column">
                      <h5 className="mb-1">Tether USDT</h5>
                      <span>USDC</span>
                    </div>
                  </div>
                  <span className="fs-ten">Annual reward 3%</span>
                </div>
                <div className="bg1-color p-5 p-md-6 br2 rounded-3 w-100 ">
                  <div className="d-flex align-items-center flex-wrap gap-3 mb-4">
                    <img src="/png/ethereum5050.png" alt="Icon" />
                    <div className="d-flex flex-column">
                      <h5 className="mb-1">Ethereum</h5>
                      <span>USDC</span>
                    </div>
                  </div>
                  <span className="fs-ten">Annual reward 1%</span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between flex-wrap flex-xl-nowrap gap-5 gap-md-6 mb-9 mb-md-13">
                <div className="bg1-color p-5 p-md-6 br2 rounded-3 w-100 ">
                  <div className="d-flex align-items-center flex-wrap gap-3 mb-4">
                    <img src="/png/ethereum5052.png" alt="Icon" />
                    <div className="d-flex flex-column">
                      <h5 className="mb-1">Bitcoin</h5>
                      <span>BTC</span>
                    </div>
                  </div>
                  <span className="fs-ten">Annual reward 0.5%</span>
                </div>
                <div className="bg1-color p-5 p-md-6 br2 rounded-3 w-100 ">
                  <div className="d-flex align-items-center flex-wrap gap-3 mb-4">
                    <img src="/png/ethereum5051.png" alt="Icon" />
                    <div className="d-flex flex-column">
                      <h5 className="mb-1">USD Coin</h5>
                      <span>USDC</span>
                    </div>
                  </div>
                  <span className="fs-ten">Annual reward 3%</span>
                </div>
              </div>
              <a
                href="staking-details.html"
                className="cmn-btn py-3 px-5 px-md-6 d-block "
              >
                Start saving
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnCrypto;
