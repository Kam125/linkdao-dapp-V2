import React from "react";
import "./Bridge.css";
import Coin from "../../images/new_imgs/Coin.svg";
import coinBackground from "../../images/new_imgs/coinBackground.webp";
import { FiExternalLink } from "react-icons/fi";

function Bridge() {
  return (
    <div className="bridge-main margin25" style={{ minHeight: "0px" }}>
      <div className="row w-100 flex-column flex-lg-row earn-hero gap-4 gap-lg-0 p-3 p-lg-4 justify-content-between mb-sm-5">
        <div className="col-12 col-lg-5 px-0 px-lg-3 d-flex flex-column justify-content-center gap-3">
          <h3 className="text-white" style={{ whiteSpace: "pre" }}>
            Linkdao Bridge
          </h3>
          <p className="text-white ">
            Make the most of your assets with Linkdao Earn products. Linkdao
            offers four ways to productively use your assets. Participate in
            Staking, Farming, Vault and Buyback. Start earning today!
          </p>
        </div>
        <div
          className="col-12 col-lg-7 px-0 px-lg-1 d-flex gap-3 gap-lg-4 gap-xl-5 flex-column flex-lg-row justifyMedia"
          style={{ marginTop: "4%" }}
        >
          <div className="d-flex gap-0 gap-lg-4">
            <div className="coinbg">
              <div className="">
                <img src={Coin} alt="" className="coin coinplus" width="25px" />
                <img
                  src={coinBackground}
                  alt=""
                  className="coin"
                  width="25px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pool-main margin25" style={{ minHeight: "0px" }}>
        <div className="aido">
          <div>
            <div className="accordion">
              <div className="accordion-item">
                <div className="accordion-content">
                  <div className="borderpool"></div>
                  <div className="row">
                    <div className="jssp205 col-4">
                      <div
                        className="ct1-inputpool"
                        style={{
                          border: "1px solid rgb(128, 128, 128, 0.9)",
                          borderRadius: "10px",
                        }}
                      >
                        <input
                          type="text"
                          placeholder="0.0"
                          //   value={
                          //     Math.floor(deposit) <= 5000
                          //       ? Math.floor(deposit)
                          //       : 5000
                          //   }
                          //   onChange={(e) => setDeposit(e.target.value)}
                          style={{ border: "none" }}
                        />
                        {/* <span className="ct1-max"> MAX</span> */}
                        <span
                          className="ct1-max"
                          //   onClick={handleAccountBalance}
                        >
                          {" "}
                          MAX
                        </span>
                        <div>
                          <p
                            style={{
                              fontSize: "smaller",
                              color: "#9a9ab4",
                              marginTop: "-8px",
                              paddingLeft: "16px",
                              paddingBottom: "10px",
                            }}
                          >
                            {/* ${parseFloat(price * deposit).toFixed(3)} */}$ 0
                          </p>
                        </div>
                      </div>
                      {/* <div> */}
                      {/* </div> */}
                      {/* <ReactSlider/> */}
                      <div className="claim_box">
                        <div
                          className="pool_approve fmsize"
                          style={{
                            background: "rgb(255, 255, 255, 0.1)",
                          }}
                        >
                          Deposit
                        </div>{" "}
                        <div
                          className="pool_approve back_grey fmsize"
                          style={{
                            background: "rgb(255, 255, 255, 0.1)",
                          }}
                        >
                          Approve
                        </div>
                      </div>
                      <p className="text_grey fsmall mt-3 text_center">
                        Min. deposit 1 LKD, Max. deposit 5000 LKD{" "}
                      </p>
                      <p className="text_grey fsmall text_center">
                        Deposit fee 0%
                      </p>
                    </div>

                    <div className="jssp205 col-4 margintop25">
                      <div className="claimdiv">
                        <div
                          className="ct1-inputpool"
                          style={{ flexBasis: "50%", lineHeight: "1.3rem" }}
                        >
                          <p>LKD Earned</p>
                          <p
                            style={{
                              // marginTop: "1.8rem",
                              fontSize: "1.9rem",
                            }}
                          >
                            {0}
                          </p>
                          <p
                            style={{
                              fontSize: "smaller",
                              color: "#9a9ab4",
                              // marginTop: "0.8rem",
                            }}
                          >
                            $ 0
                          </p>
                        </div>
                        {/* <ReactSlider/> */}
                        <div className="claim_box" style={{ flexBasis: "50%" }}>
                          <div
                            className="pool_claim"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "100%",
                            }}
                          >
                            Withdraw
                          </div>
                          {/* <div className="pool_claim">Withdraw All</div> */}
                        </div>
                      </div>
                      <p className="text_grey fsmall mt-2 text_center">
                        After deposit, you can withdraw every 30 days up to {2}{" "}
                        month!
                      </p>
                      <p className="text_grey fsmall text_center">
                        Withdraw fee 0%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bridge;
