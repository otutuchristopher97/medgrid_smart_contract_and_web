import React from "react";

const OneStepShop = () => {
  return (
    <section className="one_stepshop bg4-color pt-120 pb-120">
      <div className="container">
        <div className="row gy-5 gy-md-6 align-items-end justify-content-between mb-10 mb-md-15">
          <div className="col-md-7 col-lg-6">
            <h2 className="wow fadeInUp">
              Your one-step shop for crypto trading
            </h2>
          </div>
          <div className="col-md-4 col-xl-3 col-xxl-2 text-md-end">
            <a href="pricing-plan.html" className="cmn-btn py-3 px-5 px-md-6">
              VIEW MORE <i className="ti ti-chevron-right fs-five"></i>
            </a>
          </div>
        </div>
        <div className="row gy-5 gy-md-6 justify-content-center">
          <div className="col-md-6 col-xl-4">
            <div className="one_stepshop__item br2 rounded-4 py-8 py-md-10 px-6 px-md-8 text-center wow fadeInUp">
              <img
                className="mb-4 mb-md-5"
                src="/png/radeallassets.png"
                alt="Icon"
              />
              <h4 className="mb-4 mb-md-5">Trade all the trending assets</h4>
              <p className="mb-6 mb-md-8">
                Discover over 400 cryptocurrencies including all the trending
                new listings.
              </p>
              <div className="d-flex align-items-center justify-content-center gap-1">
                <span className="fs-four">400+</span>
                <span className="roboto">cryptocurrencies</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="one_stepshop__item br2 rounded-4 py-8 py-md-10 px-6 px-md-7 text-center wow fadeInUp">
              <img
                className="mb-4 mb-md-5"
                src="/png/hedgepoloniex.png"
                alt="Icon"
              />
              <h4 className="mb-4 mb-md-5">Hedge with Poloniex Futures</h4>
              <p className="mb-6 mb-md-8">
                Discover over 400 cryptocurrencies including all the trending
                new listings.
              </p>
              <div className="d-flex align-items-center justify-content-center gap-1">
                <span className="fs-four">100x</span>
                <span className="roboto">Max leverage</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="one_stepshop__item br2 rounded-4 py-8 py-md-10 px-6 px-md-8 text-center wow fadeInUp">
              <img
                className="mb-4 mb-md-5"
                src="/png/crossmargin.png"
                alt="Icon"
              />
              <h4 className="mb-4 mb-md-5">Cross Margin Trading</h4>
              <p className="mb-6 mb-md-8">
                Discover over 400 cryptocurrencies including all the trending
                new listings.
              </p>
              <div className="d-flex align-items-center justify-content-center gap-1">
                <span className="roboto">cryptocurrencies</span>
                <span className="fs-four">1%</span>
                <span className="roboto">cryptocurrencies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneStepShop;
