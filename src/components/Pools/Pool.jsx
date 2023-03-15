import React, { useState, useContext, useCallback } from "react";
import "./Pool.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { approve, checkApprove, balance } from "../../contracts/token";
import {
  depositAmount,
  depositedAmt,
  withdraw,
  dailyReward,
  totalStakedFunc,
  getWithdrawableTotalProfit,
} from "../../contracts/pools";
import { NetworkContext } from "../../context/NetworkContext";
import { ConnectContext } from "../../context/ConnectContext";
import { LkdToken as address } from "../../address";
import { LkdTokenABI as abi } from "../../abi";
import { useEffect } from "react";
import { getPrice } from "../../utils";
import { getAccountBalance } from "../../contracts/lkd";

const Pool = ({
  token,
  apr,
  img,
  pool,
  poolABI,
  contract,
  month,
  limit,
  showAuditLog,
  depositOn,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState(false);
  const [account] = useContext(NetworkContext);
  const [provider] = useContext(ConnectContext);
  const [deposit, setDeposit] = useState(0);
  const [deposited, setDeposited] = useState(0);
  const [wallet, setWallet] = useState(0);
  const [daily, setDaily] = useState(0);
  const [totalStaked, setTotalStaked] = useState(0);
  const [profit, setProfit] = useState(0);
  const [price, setPrice] = useState(0);

  const handleApprove = async (address, abi) => {
    let res = await approve(provider, address, abi, pool);
    console.log(res);
  };

  const handleCheckApprove = async (address, abi) => {
    const accounts = await provider.listAccounts();
    if (accounts) {
      let value = await checkApprove(provider, address, abi, accounts[0], pool);
      if (parseInt(value.toString()) > 0) setStatus(true);
      else setStatus(false);
      return status;
    }
  };

  const handleDeposit = async (deposit) => {
    await depositAmount(provider, pool, poolABI, deposit);
  };

  const handleDeposited = async (farm, farmABI) => {
    let res = await depositedAmt(provider, farm, farmABI, account);
    setDeposited(res);
  };

  const handleWalletAmt = async (address, abi) => {
    let res = await balance(provider, address, abi, account);
    setWallet(res);
  };

  const handleWithdraw = async () => {
    await withdraw(provider, pool, poolABI);
  };

  const handleDailyReward = async () => {
    let res = await dailyReward(provider, pool, poolABI, account);
    setDaily(res);
  };

  const handleTotalStaked = async () => {
    let res = await totalStakedFunc(provider, pool, poolABI);
    setTotalStaked(res);
  };

  const handleProfit = async (account) => {
    let res = await getWithdrawableTotalProfit(
      provider,
      pool,
      poolABI,
      account
    );
    setProfit(res);
  };

  const handlePrice = useCallback(async () => {
    let pr = await getPrice();
    setPrice(pr);
  }, []);

  const handleAccountBalance = async () => {
    let sum = await getAccountBalance(account, provider);
    setDeposit(sum);
  };

  useEffect(() => {
    handleCheckApprove(address, abi);
    handleWalletAmt(address, abi);
    handleDeposited(pool, poolABI);
    handleDailyReward();
    handleTotalStaked();
    handleProfit(account);
  });

  useEffect(() => {
    handlePrice();
  }, [handlePrice]);

  return (
    <div>
      <div>
        <div className="pool-main margin25" style={{ minHeight: "0px" }}>
          <div className="aido">
            <div>
              <div className="accordion">
                <div className="accordion-item">
                  <div
                    className="accordion-title"
                    onClick={() => setIsActive(!isActive)}
                  >
                    <div className="main mainmb">
                      <div className="token_info">
                        <div className="jssp189">
                          <div className="jssp310 jssp190">
                            <img
                              src={img}
                              alt=""
                              role="presentation"
                              className="jcssp311"
                              width="100"
                              height="100"
                            />
                          </div>
                          <div className="jssp202">
                            <div style={{ fontSize: "larger" }}>{token}</div>
                            <div
                              style={{
                                fontSize: "smaller",
                                color: "rgb(255, 255, 255, 0.5)",
                                paddingTop: "0.7rem",
                              }}
                            >
                              Stake LKD - Earn LKD
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="wallet_info jssp213 content_1001">
                        <div className="jssp214">
                          <div className="jssp204">
                            <div>{wallet} LKD</div>
                            <div className="text_grey mt-2">Wallet</div>
                          </div>
                          <div className="jssp204">
                            <div>{deposited} LKD</div>
                            <div className="text_grey mt-2">Deposited</div>
                          </div>
                        </div>
                        <div className="jssp214">
                          <div className="jssp204">
                            <div style={{ color: "#52e1de" }}>{apr}</div>
                            <div className="text_grey mt-2">APR</div>
                          </div>
                          <div className="jssp204">
                            <div>{daily} LKD</div>
                            <div className="text_grey mt-2">LKD Reward</div>
                          </div>
                          <div className="jssp204">
                            <div>
                              ${parseFloat(price * totalStaked).toFixed(3)}
                            </div>
                            <div className="text_grey mt-2">TVL</div>
                          </div>
                        </div>
                      </div>

                      <div className="blockfarm content_1000">
                        <div className="subblockfarm">
                          <div className="divfarm">
                            <div>{wallet} LKD</div>
                            <div className="text_grey">Wallet</div>
                          </div>
                          <div className="divfarm">
                            <div>{deposited} LKD</div>
                            <div className="text_grey">Deposited</div>
                          </div>
                        </div>
                        <div className="borderfarm marginh"></div>
                        <div className="subblockfarm">
                          <div className="divfarm">
                            <div style={{ color: "#52e1de" }}>{apr}</div>
                            <div className="text_grey">APR</div>
                          </div>
                          <div className="divfarm">
                            <div>{daily} LKD</div>
                            <div className="text_grey">LKD Reward</div>
                          </div>
                        </div>
                        <div className="borderfarm marginh"></div>
                        <div className="subblockfarm">
                          <div className="divfarm">
                            <div>
                              ${parseFloat(price * totalStaked).toFixed(3)}
                            </div>
                            <div className="text_grey">TVL</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ml">
                      {isActive ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    </div>
                  </div>
                  {isActive && (
                    <div className="accordion-content">
                      <div className="borderpool"></div>
                      <div className="row">
                        <div className="jssp205 col-4">
                          <div className="ct1-inputpool"
                          style={{
                            border: "1px solid rgb(128, 128, 128, 0.9)",
                            borderRadius: "10px" 
                          }}>
                            <input
                              type="text"
                              placeholder="0.0"
                              value={Math.floor(deposit)<=5000?Math.floor(deposit):5000}
                              onChange={(e) => setDeposit(e.target.value)}
                              style={{border:"none"}}
                            />
                            {/* <span className="ct1-max"> MAX</span> */}
                            <span
                              className="ct1-max"
                              onClick={handleAccountBalance}
                            >
                              {" "}
                              MAX
                            </span>
                            <div>
                            <p
                            style={{
                              fontSize: "smaller",
                              color: "#9a9ab4",
                              marginTop:"-8px",
                              paddingLeft:"16px",
                              paddingBottom:"10px"
                            }}
                            >{Math.floor(price*deposit)} USD</p>
                            </div>
                          </div>
                          {/* <div> */}
                          {/* </div> */}
                          {/* <ReactSlider/> */}
                          <div className="claim_box">
                            {depositOn ? (
                              <>
                                {status ? (
                                  <>
                                    <div
                                      className="pool_approve fmsize"
                                      onClick={() => handleDeposit(deposit)}
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
                                  </>
                                ) : (
                                  <>
                                    <div
                                      className="pool_approve back_grey fmsize"
                                      style={{
                                        background: "rgb(255, 255, 255, 0.1)",
                                      }}
                                    >
                                      Deposit
                                    </div>{" "}
                                    <div
                                      className="pool_approve  fmsize"
                                      onClick={() =>
                                        handleApprove(address, abi)
                                      }
                                    >
                                      Approve
                                    </div>
                                  </>
                                )}
                              </>
                            ) : (
                              <>
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
                              </>
                            )}
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
                                {profit}
                              </p>
                              <p
                                style={{
                                  fontSize: "smaller",
                                  color: "#9a9ab4",
                                  // marginTop: "0.8rem",
                                }}
                              >
                                ${parseFloat(price * profit).toFixed(3)}
                              </p>
                            </div>
                            {/* <ReactSlider/> */}
                            <div
                              className="claim_box"
                              style={{ flexBasis: "50%" }}
                            >
                              <div
                                className="pool_claim"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  width: "100%",
                                }}
                                onClick={() => handleWithdraw()}
                              >
                                Withdraw
                              </div>
                              {/* <div className="pool_claim">Withdraw All</div> */}
                            </div>
                          </div>
                          <p className="text_grey fsmall mt-2 text_center">
                            After deposit, you can withdraw every 30 days up to{" "}
                            {month} month!
                          </p>
                          <p className="text_grey fsmall text_center">
                            Withdraw fee 0%
                          </p>
                        </div>

                        <div className="jssp2052 col-3 margintop25">
                          <div className="ct1-inputpool width100pool">
                            <p className="lkdpara">
                              <span>Pool Limit</span>{" "}
                              <span>{limit}.00 LKD</span>
                            </p>
                            <p className="lkdpara mt-2">
                              <span>LKD Staked</span>{" "}
                              <span>{totalStaked} LKD</span>
                            </p>
                            <p className="mt-3">
                              <a
                                className="text_grey"
                                href="https://pancakeswap.finance/swap?inputCurrency=0xaf027427dc6d31a3e7e162a710a5fe27e63e275f"
                              >
                                Buy token{" "}
                                <FiExternalLink style={{ color: "#52e1de" }} />
                              </a>
                            </p>
                            <p className="mt-2">
                              <a className="text_grey" href={contract}>
                                View Contract{" "}
                                <FiExternalLink style={{ color: "#52e1de" }} />
                              </a>
                            </p>
                            {showAuditLog ? (
                              <p className="mt-2">
                                <a
                                  className="text_grey"
                                  href="https://github.com/blocksafu111/audit/blob/main/LinkDaoStaking-Audit-by-BlockSAFU.pdf"
                                >
                                  View Audit{" "}
                                  <FiExternalLink
                                    style={{ color: "#52e1de" }}
                                  />
                                </a>
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pool;
