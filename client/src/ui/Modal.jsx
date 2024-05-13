import React from "react";

import { useStateContext } from "../context";

const Modal = () => {
  const { walletConnect } = useStateContext();

  return (
    <div className="modal_areastyle">
      <div
        className="modal"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content px-2 px-md-6 pt-md-3 pb-2 pb-md-6">
            <div className="modal-header border-0">
              <h3 className="modal-title p1-color" id="exampleModalLabel">
                Connect Your Wallet
              </h3>
              <button
                type="button"
                className="btn-close p7-color"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-xbox-x p6-color fs-three fw-normal"></i>
              </button>
            </div>
            <div className="modal-body">
              <a
                href="javascript:void(0)"
                onClick={walletConnect}
                className="modal_areastyle__item rounded-3 br2 px-3 px-md-4 py-2 py-md-3 d-flex align-items-center justify-content-between mb-5 mb-md-6"
              >
                <span className="fw_500">Conntect with Metamask</span>
                <img src="/png/dog.png" alt="Icon" />
              </a>
              {/* <a
                href="javascript:void(0)"
                className="modal_areastyle__item rounded-3 br2 px-3 px-md-4 py-2 py-md-3 d-flex align-items-center justify-content-between"
              >
                <span className="fw_500">Conntect with Metamask</span>
                <img src="/png/wallet-connect.png" alt="Icon" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
