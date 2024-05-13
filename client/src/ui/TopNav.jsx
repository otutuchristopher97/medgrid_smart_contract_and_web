import React from "react";

const TopNav = () => {
  return (
    <>
      <div className="navbar_top bg2-color py-4 d-none d-lg-block">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 col-xxl-5">
              <div className="navbar_top__left d-flex align-items-center gap-2 gap-xl-6">
                <div className="navbar_top__location d-flex align-items-center gap-1 gap-xl-3">
                  <i className="ti ti-map-pin-filled fs-four p7-color"></i>
                  <span className="roboto p7-color">
                    20 Dajum Arkansas, Abuja
                  </span>
                </div>
                <span className="v-line mb-9"></span>
                <a
                  href="https://softivus.com/cdn-cgi/l/email-protection#a4c1dcc5c9d4c8c1e4c3c9c5cdc88ac7cbc9"
                  className="navbar_top__email roboto p7-color d-flex align-items-center gap-3"
                >
                  <i className="ti ti-mail-opened-filled fs-four"></i>
                  <span className="__cf_email__">medgrid@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="col-lg-7 col-xxl-6">
              <div className="navbar_top__right d-flex align-items-center justify-content-end gap-2 gap-xl-6">
                <div className="navbar_top__call d-flex align-items-center gap-3">
                  <span className="bg6-color py-2 px-3 rounded-item">
                    <i className="ti ti-phone-call fs-four p7-color "></i>
                  </span>
                  <div>
                    <span className="p7-color fw-bolder d-block">
                      Contact Us:
                    </span>
                    <a href="tel:+9802344567" className="d-block p7-color">
                      +234787565646
                    </a>
                  </div>
                </div>
                <span className="v-line mb-9"></span>
                <div className="navbar_top__social d-flex align-items-center gap-2 gap-xl-3">
                  <span className="p7-color fw-bolder">Follow Us:</span>
                  <div className="navbar_top__social-icon d-flex align-items-center  gap-1 gap-xl-2">
                    <a
                      href="javascript:void(0)"
                      className="br3 py-2 px-3 rounded-item d-center"
                    >
                      <i className="ti ti-brand-facebook fs-four p7-color "></i>
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="br3 py-2 px-3 rounded-item d-center"
                    >
                      <i className="ti ti-brand-instagram fs-four p7-color "></i>
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="br3 py-2 px-3 rounded-item d-center"
                    >
                      <i className="ti ti-brand-twitter fs-four p7-color "></i>
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="br3 py-2 px-3 rounded-item d-center"
                    >
                      <i className="ti ti-brand-linkedin fs-four p7-color "></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
