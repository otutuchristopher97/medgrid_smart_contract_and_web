import React from "react";
import { Link } from "react-router-dom";
import {} from "../utils";
import { useStateContext } from "../context";
import { shortenText } from "../utils";
import { UserType } from "../utils";
const currentUser = JSON.parse(localStorage.getItem("authUser"));

const NavBar = () => {
  const { address, disconnect } = useStateContext();

  return (
    <nav className="navbar navbar-expand-lg position-relative py-md-3 py-lg-6 workready">
      <a
        href="/"
        style={{ width: "120px" }}
        className="navbar-brand d-flex align-items-center gap-2"
      >
        <img
          src="/png/logo-1.jpg"
          style={{ width: "100%" }}
          className="logo"
          alt="logo"
        />
      </a>
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbar-content"
      >
        <ul className="navbar-nav d-flex align-items-lg-center gap-5 gap-lg-1 gap-xl-4 gap-xxl-7 py-2 py-lg-0 ms-2 ms-xl-10 ms-xxl-20 ps-0 ps-xxl-10 align-self-center">
          <li className="dropdown">
            <Link to="/" className="fs-ten">
              Home
            </Link>
          </li>
          <li className="dropdown show-dropdown">
            <Link
              to="/members"
              aria-label="Navbar Dropdown Button"
              className="dropdown-toggle dropdown-nav d-flex align-items-center fs-ten"
            >
              Members
              <i className="ti ti-chevron-down"></i>
            </Link>
          </li>
          <li className="dropdown show-dropdown">
            <Link
              to="/get-started"
              aria-label="Navbar Dropdown Button"
              className="dropdown-toggle dropdown-nav d-flex align-items-center fs-ten"
            >
              How it Works <i className="ti ti-chevron-down"></i>
            </Link>
          </li>

          {(currentUser?.isAdmin ||
            currentUser?.userType === UserType.MANUFACTURER) && (
            <li className="dropdown show-dropdown">
              <Link
                to="/register-drug"
                aria-label="Navbar Dropdown Button"
                className="dropdown-toggle dropdown-nav d-flex align-items-center fs-ten"
              >
                Add Medication <i className="ti ti-chevron-down"></i>
              </Link>
            </li>
          )}

          {/* <li className="dropdown show-dropdown">
            <button
              type="button"
              aria-label="Navbar Dropdown Button"
              className="dropdown-toggle dropdown-nav d-flex align-items-center fs-ten"
            >
              Swap
              <i className="ti ti-chevron-down"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item fs-ten" href="swap.html">
                  Swap
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-ten" href="swap-checkout.html">
                  Swap to share
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown show-dropdown">
            <a href="apex.html" className="fs-ten">
              ApeX
            </a>
          </li>
          <li className="dropdown show-dropdown">
            <button
              type="button"
              aria-label="Navbar Dropdown Button"
              className="dropdown-toggle dropdown-nav d-flex align-items-center fs-ten"
            >
              Pages<i className="ti ti-chevron-down"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item fs-ten" href="rewards.html">
                  Rewards
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-ten" href="blgoresource.html">
                  Blog
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-ten" href="blogdetails.html">
                  Blog details
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-ten" href="contact-us.html">
                  Contact us
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item fs-ten"
                  href="terms-conditaions.html"
                >
                  Terms & condition
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-ten" href="404.html">
                  Error
                </a>
              </li>
            </ul>
          </li> */}
        </ul>
      </div>

      <div className="right-area custom-pos position-relative d-flex gap-0 gap-lg-2 align-items-center">
        <div className="single-item cart-area search-area">
          <div className="cmn-head">
            <button
              type="button"
              aria-label="Shopping Button"
              className="common_toggles2 icon-area p-0 me-3 me-lg-0 box-second d-center position-relative"
            >
              <i className="ti ti-search slide-toggle2 fs-four p6-color"></i>
            </button>
            <div className="msg_area common_area2 p2-bg p-5 rounded-2">
              <form className="d-flex align-items-center ">
                <input type="text" />
                <button type="submit" className="p-2">
                  <i className="ti ti-search slide-toggle2 fs-four p2-color"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="header-section__modalstyle">
          {!address ? (
            <button
              type="button"
              className="cmn-btn px-3 px-sm-5 px-md-6 py-2 py-sm-3 d-flex align-items-center gap-1"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <span className="p7-color fw-semibold d-none d-sm-block">
                Connect
              </span>
              Wallet
            </button>
          ) : (
            <>{shortenText(address)}</>
          )}
        </div>
        {address && (
          <button
            onClick={() => {
              disconnect();
              localStorage.removeItem("authUser");
            }}
            type="button"
            className="cmn-btn px-3 px-sm-5 px-md-6 py-2 py-sm-3 d-flex align-items-center gap-1"
          >
            <span className="p7-color fw-semibold d-none d-sm-block">
              Disconnect
            </span>
          </button>
        )}
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        aria-label="Navbar Toggler"
        data-bs-target="#navbar-content"
        aria-expanded="true"
        id="nav-icon3"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default NavBar;
