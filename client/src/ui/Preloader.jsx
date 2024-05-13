import React from "react";

const Preloader = () => {
  return (
    <>
      <button
        className="scrollToTop d-none d-md-flex d-center"
        aria-label="scroll Bar Button"
      >
        <i className="ti ti-chevron-up fs-four p6-color"></i>
      </button>

      <div id="preloader" className="pre-item d-center">
        <div className="loaderall"></div>
      </div>
    </>
  );
};

export default Preloader;
