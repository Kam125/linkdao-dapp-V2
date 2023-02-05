import React from "react";
import disabledFarming from "../../images/new_imgs/disabledFarming.svg";
import "./Farms.css";

const Farms = () => {
  return (
    <>
      <div
        className="row mx-0 align-items-center mx-auto mt-5 justify-content-center flex-column p-4 gap-4 purple-wrapper CSWidth"
        style={{ border: "2px solid #565891" }}
      >
        <img src={disabledFarming} alt="" style={{ width: 150, height: 150 }} />
        <h6 className="no-farms">Farms Coming Soon...</h6>
        {/* <span className="farm-soon">New pools coming soon...</span> */}
      </div>
    </>
  );
};

export default Farms;
