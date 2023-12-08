import React from "react";
import Dashboard from "../../../images/new_imgs/Dashboard.svg";
import governanceIcon from "../../../images/new_imgs/governanceIcon.svg";
import PoolLogo from "../../../images/new_imgs/PoolLogo.svg";
import Launchpad from "../../../images/new_imgs/Launchpad.svg";
import { Link, useLocation } from "react-router-dom";

const MobileSideBar = () => {
  let location = useLocation();

  return (
    <>
      <div
        className="container-fluid mobile-sidebar justify-content-center align-items-center d-flex d-lg-none"
        id="mobileMenu"
      >
        <div className="row w-100">
          <Link className="col" to="/Dashboard">
            <div
              className={`${
                location.pathname === "/Dahsboard" ? "active-side-link" : ""
              } d-flex align-items-center sidebar-item false p-2 justify-content-center`}
            >
              <img src={Dashboard} width={25} height={25} alt="" />
            </div>
          </Link>

          <Link className="col" to="/">
            <div
              className={`${
                location.pathname === "/" ? "active-side-link" : ""
              } d-flex align-items-center sidebar-item false p-2 justify-content-center`}
            >
              <img src={PoolLogo} width={25} height={25} alt="" />
            </div>
          </Link>
          <Link className="col" to="/Bridge">
            <div
              className={`${
                location.pathname === "/bridge" ? "active-side-link" : ""
              } d-flex align-items-center sidebar-item false p-2 justify-content-center`}
            >
              <img src={PoolLogo} width={25} height={25} alt="" />
            </div>
          </Link>
          <Link className="col" to="/Farms">
            <div
              className={`${
                location.pathname === "/Farms" ? "active-side-link" : ""
              } d-flex align-items-center sidebar-item false p-2 justify-content-center`}
            >
              <img src={governanceIcon} width={25} height={25} alt="" />
            </div>
          </Link>
          <Link className="col" to="/Launchpad">
            <div
              className={`${
                location.pathname === "/Launchpad" ? "active-side-link" : ""
              } d-flex align-items-center sidebar-item false p-2 justify-content-center`}
            >
              <img src={Launchpad} width={25} height={25} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileSideBar;
