import React, { useEffect, useState } from "react";
import "./Bridge.css";
import Coin from "../../images/new_imgs/Coin.svg";
import coinBackground from "../../images/new_imgs/coinBackground.webp";
import { FiExternalLink } from "react-icons/fi";
import { contractABI, tokenV1ABI } from "../../abi";
import { contractAddress, tokenV1Address } from "../../address";
import { ethers } from "ethers";

function Bridge() {
  const [tokenAmount, setTokenAmount] = useState();
  const [amount, setAmount] = useState();
  const [isWithdrawalEnabled, setIsWithdrawalEnabled] = useState(false);
  const [outputAmount, setOutputAmount] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleDeposit = async () => {
    try {
      setIsLoading(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      if (isNaN(parseFloat(tokenAmount))) {
        alert("Please enter a valid number for the token amount.");
        return;
      }
      const tx = await contract.depositTokens(
        ethers.utils.parseUnits(tokenAmount, 18)
      );
      await tx.wait();
      alert("Deposit successful!");
      fetchDeposits();
      setTokenAmount("");
    } catch (error) {
      console.error("Error depositing tokens:", error);
      alert("Error depositing tokens. Please check the console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleWithdraw = async () => {
    try {
      setIsLoading(true);
      // Check if withdrawal is enabled
      if (isWithdrawalEnabled === 1) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        const tx = await contract.withdrawTokens();
        await tx.wait();
        alert("Withdrawal successful!");
      } else {
        alert("Withdrawal is not enabled.");
      }
    } catch (error) {
      console.error("Error withdrawing tokens:", error);
      alert("Error withdrawing tokens. Please check the console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleApprove = async () => {
    try {
      setIsLoading(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const tokenContract = new ethers.Contract(
        tokenV1Address,
        tokenV1ABI, // Replace with the ABI of your token contract
        signer
      );
      const tx = await tokenContract.approve(
        contractAddress,
        ethers.utils.parseUnits(tokenAmount, 18)
      );
      await tx.wait();
      alert("Approval successful!");
    } catch (error) {
      console.error("Error approving spending:", error);
      alert("Error approving spending. Please check the console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDeposits = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        provider
      );

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      const userDeposits = await contract.deposits(accounts[0]);
      const depositAmount = ethers.utils.formatUnits(userDeposits.amount, 18);
      const outAmount = ethers.utils.formatUnits(userDeposits.outputAmount, 18);
      setAmount(depositAmount);
      setOutputAmount(outAmount);
      const withdrawalStatus = await contract.isWithdrawalEnabled();
      const withdrawalData = ethers.utils.formatUnits(withdrawalStatus, 18);
      setIsWithdrawalEnabled(Number(withdrawalData));
    } catch (error) {
      console.error("Error fetching user deposits:", error);
    }
  };
  useEffect(() => {
    fetchDeposits();
  }, []);

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
                          value={tokenAmount}
                          //   value={
                          //     Math.floor(deposit) <= 5000
                          //       ? Math.floor(deposit)
                          //       : 5000
                          //   }
                          onChange={(e) => setTokenAmount(e.target.value)}
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
                        {/* <div>
                          <p
                            style={{
                              fontSize: "smaller",
                              color: "#9a9ab4",
                              marginTop: "-8px",
                              paddingLeft: "16px",
                              paddingBottom: "10px",
                            }}
                          >$ 0
                          </p>
                        </div> */}
                      </div>
                      {/* <div> */}
                      {/* </div> */}
                      {/* <ReactSlider/> */}
                      <div className="claim_box">
                        <div
                          className="pool_approve fmsize"
                          style={{
                            background: "rgb(255, 255, 255, 0.1)",
                            pointerEvents: isLoading ? "none" : "auto",
                          }}
                          onClick={handleDeposit}
                        >
                          Deposit
                        </div>{" "}
                        <div
                          className="pool_approve back_grey fmsize "
                          style={{
                            background: "rgb(255, 255, 255, 0.1)",
                            pointerEvents: isLoading ? "none" : "auto",
                          }}
                          onClick={handleApprove}
                        >
                          Approve
                        </div>
                      </div>
                    </div>

                    <div className="jssp205 col-4 margintop25">
                      <div className="claimdiv">
                        <div
                          className="ct1-inputpool"
                          style={{ flexBasis: "50%", lineHeight: "1.3rem" }}
                        >
                          <p>Token V1 Amount</p>
                          <p
                            style={{
                              // marginTop: "1.8rem",
                              fontSize: "1.5rem",
                            }}
                          >
                            {amount}
                          </p>
                          <p>Token V2 Amount</p>
                          <p
                            style={{
                              // marginTop: "1.8rem",
                              fontSize: "1.5rem",
                            }}
                          >
                            {outputAmount}
                          </p>
                          {/* <p
                            style={{
                              fontSize: "smaller",
                              color: "#9a9ab4",
                              // marginTop: "0.8rem",
                            }}
                          >
                            $ 0
                          </p> */}
                        </div>
                        {/* <ReactSlider/> */}
                        <div className="claim_box" style={{ flexBasis: "50%" }}>
                          <div
                            className="pool_claim "
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "100%",
                              pointerEvents: isLoading ? "none" : "auto",
                            }}
                            onClick={handleWithdraw}
                          >
                            Withdraw
                          </div>
                          {/* <div className="pool_claim">Withdraw All</div> */}
                        </div>
                      </div>
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
