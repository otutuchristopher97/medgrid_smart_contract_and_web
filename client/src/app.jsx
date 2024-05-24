import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";
import { UserType } from "./utils/";
import Header from "./ui/Header";
import Preloader from "./ui/Preloader";
import Footer from "./ui/Footer";
import Home from "./pages/home/Home";
import Join from "./pages/join/Join";
import Register from "./pages/register/Register";
import RegisterDistributor from "./pages/register/RegisterDistributor";
import Members from "./pages/member/Members";
import MemberDetail from "./pages/member/MemberDetail";
import AddDrug from "./pages/Drug/AddDrug";
import DrugDetail from "./pages/Drug/DrugDetail";
import AddSupply from "./pages/Supply/AddSupply";

const currentUser = JSON.parse(localStorage.getItem("authUser"));

// import {} from "./constants"

export default function App() {
  return (
    <>
      <Preloader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<Join />} />
        <Route path="/register/manufacturer" element={<Register />} />
        <Route path="/register/distributor" element={<RegisterDistributor />} />
        <Route path="/members" element={<Members />} />
        <Route path="/members/:address" element={<MemberDetail />} />
        <Route
          path="/register-drug"
          element={
            currentUser?.isAdmin ||
            currentUser?.userType === UserType.MANUFACTURER ? (
              <AddDrug />
            ) : (
              <Navigate replace to={"/"} />
            )
          }
        />
        <Route exact path="drugs/:drugId" element={<DrugDetail />} />
      </Routes>
      <Footer />
    </>
  );
}
