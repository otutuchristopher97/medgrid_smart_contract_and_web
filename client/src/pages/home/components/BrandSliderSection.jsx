import React from "react";

const BrandSliderSection = () => {
  return (
    <div className="brand_slider overflow-hidden pb-15 bg9-color">
      <div className="container-fluid pt-120">
        <div className="row">
          <div className="hero_area__sliderarea px-0">
            <span className="hero_area__backgroundrote d-block"></span>
            <div className="hero_area__sliders bg4-color">
              <div className="swiper brad-carousel overflow-visible d-center">
                <div className="brandslider swiper-wrapper d-flex align-items-center mt-5 mt-md-0">
                  <div className="swiper-slide">
                    <div className="items-wrapper">
                      <img src="/png/ripple.png" alt="Brand" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="items-wrapper">
                      <img src="/png/coinbase.png" alt="Brand" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="items-wrapper">
                      <img src="/png/binance.png" alt="Brand" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="items-wrapper">
                      <img src="/png/bitfinex.png" alt="Brand" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="items-wrapper">
                      <img src="/png/coinbase.png" alt="Brand" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="items-wrapper">
                      <img src="/png/steemit.png" alt="Brand" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="items-wrapper">
                      <img src="/png/bitfinex.png" alt="Brand" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="items-wrapper">
                      <img src="/png/coinbase.png" alt="Brand" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSliderSection;
