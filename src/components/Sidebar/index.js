import React, { useState } from "react";
import navRadius from "../../images/new_imgs/navRadius.svg";
// import toolsLogo from "../../images/new_imgs/toolsLogo.svg";
import toolsLogo from "../../images/new_imgs/LinkdaoLogo.svg";
import toolsLogoName from "../../images/new_imgs/LinkdaoNameLogo.svg";
import Dashboard from "../../images/new_imgs/Dashboard.svg";
import governanceIcon from "../../images/new_imgs/governanceIcon.svg";
import PoolLogo from "../../images/new_imgs/PoolLogo.svg";
import Launchpad from "../../images/new_imgs/Launchpad.svg";
import BridgeIcon from "../../images/new_imgs/bridgeIcon.svg";
import "./index.css";
import { Link, useLocation } from "react-router-dom";

const Slider = () => {
  const [showNav, setShowNav] = useState(false);

  let location = useLocation();

  const SideBarShow = () => {
    setShowNav(true);
  };
  const SideBarHide = () => {
    setShowNav(false);
  };
  return (
    <>
      <div
        id="sidebar"
        className={`testbar null d-none d-lg-flex flex-column justify-content-between align-items-start ${
          showNav ? "testbar-open" : ""
        }`}
        style={{ padding: "2.5rem 0px" }}
        onMouseOver={SideBarShow}
        onMouseLeave={SideBarHide}
      >
        <img
          src={navRadius}
          className={`nav-radius ${showNav ? "nav-radius-open" : ""} false`}
          alt=""
        />
        <div className="w-100">
          <div className="d-flex w-100 justify-content-center align-items-center pb-5">
            <Link className="active" to="/">
              <img
                src={showNav ? toolsLogoName : toolsLogo}
                alt=""
                style={{ height: "40px" }}
              />
            </Link>
          </div>
          <div
            className="sidebar-container w-100 justify-content-center align-items-center d-flex flex-column gap-4"
            style={{ gap: 35 }}
          >
            <div className="sidebar-container w-100 justify-content-center align-items-center d-flex flex-column gap-4">
              <Link to="/Dashboard">
                <div
                  id="Earn"
                  className={`${
                    location.pathname === "/Dashboard" ? "active-side-link" : ""
                  } sidebar-item gap-3 p-2 d-flex justify-content-${
                    showNav ? "left" : "center"
                  } align-items-center null ${
                    showNav ? "active-width ms-4" : ""
                  }`}
                >
                  <img
                    src={Dashboard}
                    alt=""
                    style={{ width: 32, height: 32 }}
                  />
                  {showNav ? <h3 className="sideitem-text">Dashboard</h3> : ""}
                </div>
              </Link>

              <Link to="/">
                <div
                  id="Bridge"
                  className={`${
                    location.pathname === "/" ? "active-side-link" : ""
                  } sidebar-item gap-3 p-2 d-flex justify-content-${
                    showNav ? "left" : "center"
                  } align-items-center null ${
                    showNav ? "active-width ms-4" : ""
                  }`}
                >
                  <img
                    src={PoolLogo}
                    alt=""
                    style={{ width: 32, height: 32 }}
                  />
                  {showNav ? <h3 className="sideitem-text">Pools</h3> : ""}
                </div>
              </Link>
              <Link to="/Bridge">
                <div
                  id="New_Bridge"
                  className={`${
                    location.pathname === "/Bridge" ? "active-side-link" : ""
                  } sidebar-item gap-3 p-2 d-flex justify-content-${
                    showNav ? "left" : "center"
                  } align-items-center null ${
                    showNav ? "active-width ms-4" : ""
                  }`}
                >
                  <img
                    src={BridgeIcon}
                    alt=""
                    style={{ width: 32, height: 32 }}
                  />
                  {showNav ? <h3 className="sideitem-text">Bridge</h3> : ""}
                </div>
              </Link>
              <Link to="/Farms">
                <div
                  id="Governance"
                  className={`${
                    location.pathname === "/Farms" ? "active-side-link" : ""
                  } sidebar-item gap-3 p-2 d-flex justify-content-${
                    showNav ? "left" : "center"
                  } align-items-center null ${
                    showNav ? "active-width ms-4" : ""
                  }`}
                >
                  <img
                    src={governanceIcon}
                    alt=""
                    style={{ width: 32, height: 32 }}
                  />
                  {showNav ? <h3 className="sideitem-text">Farms</h3> : ""}
                </div>
              </Link>

              <Link to="/Launchpad">
                <div
                  id="Swap"
                  className={`${
                    location.pathname === "/Launchpad" ? "active-side-link" : ""
                  } sidebar-item gap-3 p-2 d-flex justify-content-${
                    showNav ? "left" : "center"
                  } align-items-center null ${
                    showNav ? "active-width ms-4" : ""
                  }`}
                >
                  <img
                    src={Launchpad}
                    alt=""
                    style={{ width: 32, height: 32 }}
                  />
                  {showNav ? <h3 className="sideitem-text">Launchpad</h3> : ""}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
