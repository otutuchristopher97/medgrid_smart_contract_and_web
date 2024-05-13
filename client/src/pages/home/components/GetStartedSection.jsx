import React from "react";
import { Link } from "react-router-dom";

const GetStartedSection = () => {
  return (
    <section className="get_started pt-120 pb-120 bg7-colo">
      <div className="container">
        <div className="row justify-content-center justify-content-sm-between align-items-center gy-5 gy-md-6 mb-10 mb-mb-15 pb-8 pb-md-10">
          <div className="col-lg-5 col-lg-5 col-xxl-4">
            <h2 className="text-center text-sm-start wow fadeInUp">
              How to get started
            </h2>
          </div>
          <div className="col-lg-7 col-lg-6 col-xxl-5">
            <p className="roboto text-center text-sm-start wow fadeInUp">
              Our comprehensive cybersecurity platform, driven by artificial
              intelligence, not only safeguards your organization but also
              educates your workforce.
            </p>
          </div>
        </div>
        <div className="row bg1-color rounded-4">
          <div className="col-md-6 col-xl-4 col-xxl-3 p-xxl-0">
            <div className="get_started__item px-5 py-13 text-center position-relative wow fadeInUp">
              <span className="get_started__item-icn py-3 px-4 rounded-5 bg1-color mb-5 mb-md-6">
                <i className="ti ti-user fs-four"></i>
              </span>
              <h4 className="p1-color mb-5 mb-md-6">Fund wallet and Connect</h4>
              <span className="roboto mb-8 mb-mb-10 d-block">
                Fund your wallet with Polygon Matic Token and connect it
                MediGrid Protocol
              </span>
              <Link
                to="/get-started"
                className="cmn-btn third-alt py-3 px-5 px-md-6"
              >
                Register now
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 col-xxl-3 p-xxl-0">
            <div className="get_started__item px-5 py-13 text-center position-relative wow fadeInUp">
              <span className="get_started__item-icn py-3 px-4 rounded-5 bg1-color mb-5 mb-md-6">
                <i className="ti ti-shield-filled fs-four"></i>
              </span>
              <h4 className="p1-color mb-5 mb-md-6">Onboarding processes</h4>
              <span className="roboto mb-8 mb-mb-10 d-block">
                Join a network and complete the onbording processes specific to
                the network
              </span>
              <Link
                to="/get-started"
                className="cmn-btn third-alt py-3 px-5 px-md-6"
              >
                Register now
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 col-xxl-3 p-xxl-0">
            <div className="get_started__item px-5 py-13 text-center position-relative wow fadeInUp">
              <span className="get_started__item-icn py-3 px-4 rounded-5 bg1-color mb-5 mb-md-6">
                <i className="ti ti-home-dollar fs-four"></i>
              </span>
              <h4 className="p1-color mb-5 mb-md-6">Account Verification </h4>
              <span className="roboto mb-8 mb-mb-10 d-block">
                For verified Manufacturer's, you can proceed to managing your
                medical products on MediGrid.
              </span>
              <Link
                to="/get-started"
                className="cmn-btn third-alt py-3 px-5 px-md-6"
              >
                Register now
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 col-xxl-3 p-xxl-0">
            <div className="get_started__item px-5 py-13 text-center position-relative wow fadeInUp">
              <span className="get_started__item-icn py-3 px-4 rounded-5 bg1-color mb-5 mb-md-6">
                <i className="ti ti-user fs-four"></i>
              </span>
              <h4 className="p1-color mb-5 mb-md-6">Start your journey</h4>
              <span className="roboto mb-8 mb-mb-10 d-block">
                For verified distributors, your can to inittaing supply chain
                requests.
              </span>
              <Link
                to="/get-started"
                className="cmn-btn third-alt py-3 px-5 px-md-6"
              >
                Register now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
