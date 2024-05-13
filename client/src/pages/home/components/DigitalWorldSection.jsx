import React from "react";

const DigitalWorldSection = () => {
  return (
    <section className="life_digital pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center pb-10 pb-sm-15 pb-md-20">
          <div className="col-xl-6">
            <div className="life_digital__title text-center">
              <span className="bg1-color rounded-20 py-2 px-5 mb-5 mb-md-6 wow fadeInUp">
                Blockchain Technology
              </span>
              <h2 className="wow fadeInUp">Life in the digital world</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="counter_section__area d-flex align-items-center justify-content-center justify-content-lg-between flex-wrap flex-lg-nowrap gap-5 gap-md-10">
            <div className="counter_section__item">
              <div className="hero_area__countdown mb-3 mb-md-5 counters d-flex align-items-center justify-content-center">
                <span
                  className="odometer hero_area__countdown-number display-three fw_500"
                  data-odometer-final="8327"
                ></span>
              </div>
              <h4 className="text-center mb-5 mb-md-6">Market price</h4>
              <p className="text-center">
                Claritas est etiam processus dynamicus, sequitur consuetudium
                lectorum.
              </p>
            </div>
            <span className="v-line lgx mb-20 pb-6 d-none d-lg-block"></span>
            <div className="counter_section__item">
              <div className="hero_area__countdown mb-3 mb-md-5 counters d-flex align-items-center justify-content-center">
                <span
                  className="odometer hero_area__countdown-number display-three fw_500"
                  data-odometer-final="16"
                ></span>
                <span className="display-three fw_500">mb</span>
              </div>
              <h4 className="text-center mb-5 mb-md-6">Average block size</h4>
              <p className="text-center">
                Claritas est etiam processus dynamicus, sequitur consuetudium
                lectorum.
              </p>
            </div>
            <span className="v-line lgx mb-20 pb-6 d-none d-lg-block"></span>
            <div className="counter_section__item">
              <div className="hero_area__countdown mb-3 mb-md-5 counters d-flex align-items-center justify-content-center">
                <span
                  className="odometer hero_area__countdown-number display-three fw_500"
                  data-odometer-final="8327"
                ></span>
              </div>
              <h4 className="text-center mb-5 mb-md-6">Clients worldwide</h4>
              <p className="text-center">
                Claritas est etiam processus dynamicus, sequitur consuetudium
                lectorum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalWorldSection;
