import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer pt-120 bg5-color">
      <div className="container">
        <div className="row gy-8 pb-120 justify-content-between">
          <div className="col-md-12 col-lg-6 col-xxl-5">
            <div className="footer__decs wow fadeInUp">
              <a href="index-2.html">
                <h2>MedGrid</h2>
              </a>
              <p className="mt-5 mt-md-6 mb-8 mb-md-10 wow fadeInUp">
                MediGrid offers comprehensive ecocystem for managing medical
                products, verifying authencity of proven products from trusted
                manaufactures and managing medical supply requests
              </p>
              <div className="footer__decs-subscribe mb-9 mb-md-12 wow fadeInUp">
                <form className="d-flex align-items-center rounded-1 py-2 pe-2">
                  <input type="email" placeholder="Enter your email" />
                  <button className="cmn-btn py-3  px-8 rounded-1 d-center gap-2">
                    Subscribe
                    <i className="ti ti-send fs-five d-none d-md-block"></i>
                  </button>
                </form>
              </div>
              <div className="contact_info__card-social d-flex align-items-center justify-content-start gap-2 gap-md-3 wow fadeInUp">
                <a href="javascript:void(0)">
                  <i className="ti ti-brand-facebook-filled p4-color fs-four fw-normal p-2"></i>
                </a>
                <a href="javascript:void(0)">
                  <i className="ti ti-brand-linkedin p4-color fs-four fw-normal p-2"></i>
                </a>
                <a href="javascript:void(0)">
                  <i className="ti ti-brand-instagram p4-color fs-four fw-normal p-2"></i>
                </a>
                <a href="javascript:void(0)">
                  <i className="ti ti-brand-twitter-filled p4-color fs-four fw-normal p-2"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="col-6 col-sm-3 col-md-4 col-lg-3 col-xxl-2 ms-xxl-20">
            <div className="footer__discover">
              <h4 className="mb-6 mb-sm-8 mb-md-10 wow fadeInUp">Company</h4>
              <div className="footer__discover-nav">
                <ul className="d-flex flex-column gap-4 gap-md-5">
                  <li className="dropdown d-flex align-items-center wow fadeInUp">
                    <i className="ti ti-arrow-badge-right fs-ten s2-color"></i>
                    <a href="javascript:void(0)">About Coinx Wallet</a>
                  </li>
                  <li className="dropdown d-flex align-items-center wow fadeInUp">
                    <i className="ti ti-arrow-badge-right fs-ten s2-color"></i>
                    <a href="javascript:void(0)">Join Us</a>
                  </li>
                  <li className="dropdown d-flex align-items-center wow fadeInUp">
                    <i className="ti ti-arrow-badge-right fs-ten s2-color"></i>
                    <a href="javascript:void(0)">Blog</a>
                  </li>
                  <li className="dropdown d-flex align-items-center wow fadeInUp">
                    <i className="ti ti-arrow-badge-right fs-ten s2-color"></i>
                    <a href="javascript:void(0)">Academy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="col-6 col-sm-3 col-md-4 col-lg-3 col-xxl-3">
            <div className="footer__community">
              <h4 className="mb-6 mb-sm-8 mb-md-10 wow fadeInUp">Links</h4>
              <div className="footer__community-item">
                <ul className="d-flex flex-column gap-4 gap-md-5">
                  <li className="dropdown d-flex align-items-center wow fadeInUp">
                    <i className="ti ti-arrow-badge-right fs-ten s2-color"></i>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="dropdown d-flex align-items-center wow fadeInUp">
                    <i className="ti ti-arrow-badge-right fs-ten s2-color"></i>
                    <Link to="/members">Members</Link>
                  </li>
                  <li className="dropdown d-flex align-items-center wow fadeInUp">
                    <i className="ti ti-arrow-badge-right fs-ten s2-color"></i>
                    <Link to="/get-started">How it works```</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="col-6 col-sm-3 col-md-4 col-lg-3 col-xxl-2">
            <div className="footer__community">
              <h4 className="mb-6 mb-sm-8 mb-md-10 wow fadeInUp">Assets</h4>
              <div className="footer__community-item">
                <ul className="d-flex flex-column gap-4 gap-md-5">
                  <li className="dropdown d-flex align-items-center wow fadeInUp">
                    <i className="ti ti-arrow-badge-right fs-ten s2-color"></i>
                    <a href="javascript:void(0)">BNB Chain</a>
                  </li>
                  <li className="dropdown d-flex align-items-center wow fadeInUp">
                    <i className="ti ti-arrow-badge-right fs-ten s2-color"></i>
                    <a href="javascript:void(0)">Ethereum</a>
                  </li>
                  <li className="dropdown d-flex align-items-center wow fadeInUp">
                    <i className="ti ti-arrow-badge-right fs-ten s2-color"></i>
                    <a href="javascript:void(0)">ERC20</a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="container-fluid ">
        <div className="row align-items-center justify-content-center py-3 py-sm-4 py-lg-6 bg2-color">
          <div className="col-sm-10 col-xxl-8 order-2 order-sm-1">
            <div className="footer__copyright text-center d-flex align-items-center justify-content-center justify-content-md-between flex-wrap flex-md-nowrap">
              <div className="coyp-rightarea">
                <span className="p4-color roboto text-center text-md-start">
                  Copyright 2024 -
                  <a href="index-2.html" className="p4-color">
                    ConiX
                  </a>
                  All Rights Reserved{" "}
                  <span className="p4-color fs-five mx-2">|</span> Design By
                  <a
                    href="https://themeforest.net/user/uiaxis"
                    className="p4-color roboto"
                  >
                    PSCORE
                  </a>
                </span>
              </div>

              <div className="privacy-policay d-flex align-items-center gap-3">
                <a
                  href="javascript:void(0)"
                  className="p4-color roboto ps-4 ps-sm-6"
                >
                  Privacy Policy
                </a>
                <span className="p4-color fs-five">|</span>
                <a href="javascript:void(0)" className="p4-color roboto">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
