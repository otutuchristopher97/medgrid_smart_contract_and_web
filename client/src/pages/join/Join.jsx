import React from "react";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <section className="buy_Preferred pt-120 pb-120 bg5-color">
      <div className="container">
        <div className="row justify-content-between align-items-end mb-10 mb-md-15 gy-5">
          <div className="col-lg-5">
            <div className="buy_Preferred__title">
              <h2 className="wow fadeInUp">Pick Your Preferred Network</h2>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="buy_Preferred__titledecs text-start text-lg-end">
              <p className="wow fadeInUp">
                MediGrid protocol network offers various network to accomodate
                users need our the medical space
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-5 gy-sm-6">
          <div className="col-xl-6">
            <div className="buy_Preferred__card br2 rounded-20 bg1-color position-relative wow fadeInUp">
              <div className="buy_Preferred__card-content  pe-3 pe-sm-5 pe-md-15 pe-xl-20 ps-3 ps-sm-5 ps-md-10 pt-3 pt-sm-5 pt-md-10 mb-5 mb-md-6">
                <span className="fs-five mb-4 p1-color">Manufacturer</span>
                <a href="javascript:void(0)">
                  <h3 className="mb-5 mb-md-6">MediGrid Manufacturers</h3>
                </a>
                <p>
                  Our Manufacturers are verified medical products manufacturers
                  whose identities are proven and and the are complaint with
                  various medical industry standards and regulatory policies.
                </p>
              </div>
              <div className="buy_Preferred__card-thumb">
                <img src="/png/visa-mastercard1.png" alt="image" />
              </div>
              <Link
                to="/register/manufacturer"
                className="cmn-btn py-3 px-5 px-md-6 d-block"
              >
                Join Manufacturer Network
              </Link>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="buy_Preferred__card br2 rounded-20 bg1-color position-relative wow fadeInUp">
              <div className="buy_Preferred__card-content pe-3 pe-sm-5 pe-md-15 pe-xl-20 ps-3 ps-sm-5 ps-md-10 pt-3 pt-sm-5 pt-md-10 mb-5 mb-md-6">
                <span className="fs-five mb-4 p1-color">Distributor</span>
                <a href="javascript:void(0)">
                  <h3 className="mb-5 mb-md-6">MediGrid Distributors</h3>
                </a>
                <p>
                  Medical product distributors are verified entities with proven
                  track records in medical supply chain management complaint
                  with WHO standards.
                </p>
              </div>
              <div className="buy_Preferred__card-thumb">
                <img src="/png/google-pay.png" alt="image" />
              </div>
              <Link
                to="/register/distributor"
                className="cmn-btn py-3 px-5 px-md-6 d-block"
              >
                Join Distributor Network
              </Link>
            </div>
          </div>
          <div className="col-12">
            <div className="buy_Preferred__card br2 rounded-20 bg1-color position-relative p-3 p-sm-6 p-lg-10 d-flex align-items-center flex-wrap flex-xl-nowrap gap-5 gap-xl-0 wow fadeInUp">
              <div className="buy_Preferred__card-content">
                <span className="fs-five mb-4 p1-color">Wholesaler</span>
                <a href="javascript:void(0)">
                  <h3 className="mb-5 mb-md-6">MediGrid Wholesaler</h3>
                </a>
                <p>
                  Wholesaler network for verified medical whiolesalers medical
                  products can be purchased from.
                </p>
              </div>
              <div className="buy_Preferred__card-thumb">
                <img
                  src="/png/sepa.png"
                  className="buy_Preferred__card-bigthumb max-un"
                  alt="image"
                />
                <a
                  href="javascript:void(0)"
                  className="cmn-btn py-3 px-5 px-md-6 d-block"
                >
                  Join Wholesaler Network
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
