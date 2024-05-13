import React from "react";

import { Route, Routes } from "react-router-dom";

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
import AddSupply from "./pages/Supply/AddSupply";

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
        <Route path="s/members/:address" element={<MemberDetail />} />
        <Route path="/register-drug" element={<AddDrug />} />
        <Route path="/request-supply" element={<AddSupply />} />

        {/* <Route path="/settings" element={<Settings />} />
        <Route path="/create-cause" element={<CreateCampaign />} />
        <Route path="/campaign-details/:id" element={<CampaignDetails />} /> */}
      </Routes>
      <Footer />
    </>
  );
}
