import React from "react";

const Banner = ({ ...props }) => {
  return (
    <section className="cmn_heros pb-120 pt-120">
      <div className="container">
        <div className="row justify-content-center mt-5 mt-md-8 mt-lg-0">
          <div className="col-xxl-6">
            <div className="cmn_heros__title text-center pt-15 pt-lg-6">
              <h1 className="display-three mb-5 mb-md-7 wow fadeInUp">
                {props.title}
              </h1>
              <p className="roboto wow fadeInUp">
                Join MediGrid Protocol today
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
