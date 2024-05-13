import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero_area pt-120 pb-16 position-relative">
      <div className="container z-1">
        <div className="row justify-content-center mt-8 mt-sm-13 mt-md-0">
          <div className="col-xl-9">
            <div className="hero_area__content pt-17 pt-sm-20 pt-lg-0 text-center">
              <span className="fs-five py-2 px-3 px-sm-5 mb-4 wow fadeInUp"></span>
              <h1 className="display-three mb-5 mb-md-6 wow fadeInUp">
                Decentralized Medical Products Verification and Supply Chain
                Protocol
              </h1>
              <p className="mb-8 mb-md-10 wow fadeInUp">
                MediGrid offers comprehensive ecocystem for managing medical
                products, verifying authencity of proven products <br /> from
                trusted manaufactures and managing medical supply requests.
                {/* intelligence, not only <br /> safeguards your organization but
                also educates your workforce. */}
              </p>
              <div className="d-flex align-items-center justify-content-center flex-wrap gap-4 gap-md-6 mb-10 mb-md-13 wow fadeInUp">
                <Link
                  className="hero_area__content-btnone cmn-btn px-6 px-md-8 py-3 d-center gap-3"
                  to="/get-started"
                >
                  Get Started
                  <i className="ti ti-chevron-right fs-five px-1 bg4-color p6-color rounded-3 fw-bolder"></i>
                </Link>
                <Link
                  className="hero_area__content-btntwo cmn-btn third-alt px-6 px-md-8 py-3 d-center gap-3"
                  to="/register/manufacturer"
                >
                  Join as Manufacturer
                  <i className="ti ti-chevron-right fs-five px-1 bg2-color rounded-3 fw-bolder"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="hero_area__thumb wow fadeInUp position-relative">
              <img
                className="rounded-5"
                src="/png/hero-banner.png"
                alt="Hero Banner"
                width={100}
              />
              <img
                className="hero_area__thumb-style leftright-animation position-absolute"
                src="/png/round-image-for-home-page.png"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero_area__shape">
        <img
          className="position-absolute rotated_animattwo"
          src="/png/hero-shape.png"
          alt="Shape"
        />
      </div>
      <div className="hero_area__lishtone">
        <img
          className="position-absolute opacity-75"
          src="/png/lightone.png"
          alt="light"
        />
      </div>
      <div className="hero_area__lishttwo">
        <img
          className="position-absolute opacity-75"
          src="/png/lighttwo.png"
          alt="light"
        />
      </div>
    </section>
  );
};

export default HeroSection;
