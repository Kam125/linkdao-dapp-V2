import React from "react";
import { Route, Routes } from "react-router-dom";
import Airdrop from "../Airdrop/Airdrop";
import Footer from "../Footer";
// import Navbar from "../Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";
import Details from "../Details/Details";
import Farms from "../Farms/CFarm";
import Launchpad from "../Launchpad/Launchpad";
import Pools from "../Pools/Pools";
import Private from "../Private/Private";
import Public from "../Public/Public";
import Sidebar from "../Sidebar";
import "./index.css";
import Header from "../Header";
import MobileSideBar from "../Sidebar/Mobile";
import Disclaimer from "../Disclaimer";
import HeroBack from "../HeroBack";
import Bridge from "../Bridge/Bridge";

const Home = () => {
  return (
    <>
      <div className="page_wrapper">
        {/* <Navbar /> */}
        <Header />
        <div className="content-wrapper container-fluid d-flex justify-content-center justify-content-lg-start">
          <div className="row w-100">
            <div className="col-1 d-none d-lg-block">
              <Sidebar />
            </div>
            <div
              className={`py-5 px-0 mx-auto ${
                window.innerWidth > 991 ? "col-11" : "col-12"
              }`}
            >
              <HeroBack />

              <Routes>
                <Route path="/Launchpad" element={<Launchpad />} />
                <Route path="/details" element={<Details />} />
                <Route path="/Private" element={<Private />} />
                <Route path="/Public" element={<Public />} />
                <Route path="/Airdrop" element={<Airdrop />} />
                <Route path="/Farms" element={<Farms />} />
                <Route path="/Disclaimer" element={<Disclaimer />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Bridge" element={<Bridge />} />
                <Route path="/" element={<Pools />} />
              </Routes>
            </div>
            <div className="col-1 d-none d-lg-block"></div>
          </div>
          <MobileSideBar />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
