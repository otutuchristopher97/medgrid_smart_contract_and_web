import React from "react";
import NavBar from "./NavBar";
import TopNav from "./TopNav";
import Modal from "./Modal";

const Header = () => {
  return (
    <>
      <TopNav />
      <header className="header-section header-menu w-100 pt-1 pt-lg-0 pb-3 pb-lg-0">
        <div className="navbar_mainhead header-fixed w-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <NavBar />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Modal />
    </>
  );
};

export default Header;
