import React from "react";

const ExplorerSection = () => {
  return (
    <section className="web3_product how_join bg9-color pt-120 pb-120">
      <div className="container">
        <div className="row gy-5 gy-md-6">
          <div className="how_join__title text-center mb-10 mb-md-15">
            <h2 className="wow fadeInUp">
              Explore MediGrid Protocol <br />
              Ecosystem
            </h2>
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <div className="web3_product__item how_join__item py-7 py-md-10 px-6 px-md-8 rounded-3 br2 position-relative wow fadeInUp">
              <div className="how_join__item-thumb mb-4 mb-md-5 text-center p-6 bg1-color rounded-item d-inline-block">
                <img src="/png/subscription.png" alt="Icons" />
              </div>
              <h4 className="mb-4 mb-md-5">Manufacturer</h4>
              <p className="mb-6 mb-md-8">
                Msanufacturers are ecosystem organizations that manages produced
                medical products for verifiability
              </p>
              <div className="web3_product__item-btn">
                <a
                  className="cmn-btn third-alt px-3 py-2 rounded-5"
                  href="swap.html"
                >
                  <i className="ti ti-arrow-up-right fs-four"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <div className="web3_product__item how_join__item py-7 py-md-10 px-6 px-md-8 rounded-3 br2 position-relative wow fadeInUp">
              <div className="how_join__item-thumb mb-4 mb-md-5 text-center p-6 bg1-color rounded-item d-inline-block">
                <img src="/png/snapshot.png" alt="Icons" />
              </div>
              <h4 className="mb-4 mb-md-5">Distributor</h4>
              <p className="mb-6 mb-md-8">
                MediGrid manages medical product supply request from Distributor
                organizations and track request on chain.
              </p>
              <div className="web3_product__item-btn">
                <a
                  className="cmn-btn third-alt px-3 py-2 rounded-5"
                  href="swap.html"
                >
                  <i className="ti ti-arrow-up-right fs-four"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <div className="web3_product__item how_join__item py-7 py-md-10 px-6 px-md-8 rounded-3 br2 position-relative wow fadeInUp">
              <div className="how_join__item-thumb mb-4 mb-md-5 text-center p-6 bg1-color rounded-item d-inline-block">
                <img src="/png/lottery.png" alt="Icons" />
              </div>
              <h4 className="mb-4 mb-md-5">Wholesaler</h4>
              <p className="mb-6 mb-md-8">
                Wholesaler sends Medical supply chain request to Distributors
                and MediGrid protocol manages requests on the network.
              </p>
              <div className="web3_product__item-btn">
                <a
                  className="cmn-btn third-alt px-3 py-2 rounded-5"
                  href="swap.html"
                >
                  <i className="ti ti-arrow-up-right fs-four"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <div className="web3_product__item how_join__item py-7 py-md-10 px-6 px-md-8 rounded-3 br2 position-relative wow fadeInUp">
              <div className="how_join__item-thumb mb-4 mb-md-5 text-center p-6 bg1-color rounded-item d-inline-block">
                <img src="/png/redemption.png" alt="Icons" />
              </div>
              <h4 className="mb-4 mb-md-5">Retailer</h4>
              <p className="mb-6 mb-md-8">
                Retailers verify medical product authenticity on MediGrid
                protocol and track data on chain with verifiable grid locks
              </p>
              <div className="web3_product__item-btn">
                <a
                  className="cmn-btn third-alt px-3 py-2 rounded-5"
                  href="swap.html"
                >
                  <i className="ti ti-arrow-up-right fs-four"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="col-12">
            <div className="text-center mt-2 mt-md-4">
              <a
                href="swap.html"
                className="cmn-btn py-2 px-5 px-md-6 d-inline-flex justify-content-center align-items-center roboto"
              >
                VIEW MORE <i className="ti ti-chevron-right fs-four"></i>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ExplorerSection;
