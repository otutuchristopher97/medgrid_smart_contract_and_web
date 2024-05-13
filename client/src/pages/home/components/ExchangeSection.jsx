import React from "react";

const ExchangeSection = () => {
  return (
    <section className="ready_exhange pt-120 pb-120 bg4-color position-relative">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-xl-7 col-xxl-6">
            <div className="ready_exhange__content text-center">
              <h2 className="mb-5 mb-md-6 wow fadeInUp">Ready to Exchange?</h2>
              <p className="mb-8 mb-md-10 wow fadeInUp">
                Unlock your Coinx account now to trade crypto seamlessly,
                without any fees for buying, selling, or exchanging. Get started
                today!
              </p>
              <div className="ready_exhange__changenow d-flex align-items-center justify-content-center gap-4 gap-sm-8 gap-lg-10">
                <a
                  href="swap.html"
                  className="cmn-btn py-3 px-5 px-6 wow fadeInUp"
                >
                  Exchange Now
                </a>
                <div className="ready_exhange__changenow-brand wow fadeInUp">
                  <a href="javascript:void(0)">
                    <i className="ti ti-brand-google-play p1-color fs-three"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="ti ti-brand-apple p1-color fs-three"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="ti ti-brand-pinterest p1-color fs-three"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="ti ti-brand-behance p1-color fs-three"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExchangeSection;
