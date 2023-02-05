import React, { useState, useEffect, useContext, useCallback } from "react";
import "./index.css";
import web3Modal from "../../modal";
import { NetworkContext } from "../../context/NetworkContext";
import { ConnectContext } from "../../context/ConnectContext";
import { truncateAddress } from "../../utils";
import { ethers } from "ethers";
import coins from "../../images/new_imgs/coins.svg";
// import ethSvg from "../../images/new_imgs/ethSvg.svg";
import walletIcon from "../../images/new_imgs/walletIcon.svg";
import LinkdaoLogo from "../../images/new_imgs/LinkdaoLogo.svg";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  // const [instance, setInstance] = useState();
  // const [provider, setProvider] = useState();
  const [error, setError] = useState();
  const [account, setAccount] = useContext(NetworkContext);
  const [provider, setProvider] = useContext(ConnectContext);

  const connectWallet = useCallback(async () => {
    try {
      console.log("Wallet connect called");
      const instance = await web3Modal().connect();
      // setInstance(instance);
      let provider = new ethers.providers.Web3Provider(instance);
      setProvider(provider);
      const accounts = await provider.listAccounts();
      if (accounts) {
        setAccount(accounts[0]);
        // window.location.reload();
      }
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }, [setAccount, setProvider]);

  const refreshState = useCallback(() => {
    setAccount();
  }, [setAccount]);

  const disconnectWallet = useCallback(async () => {
    try {
      console.log("Wallet disconnect called");
      web3Modal().clearCachedProvider();
      // setAccount([])
      refreshState();
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }, [refreshState]);

  useEffect(() => {
    if (web3Modal().cachedProvider) {
      connectWallet();
    }
  }, [connectWallet]);

  var myDate = new Date();
  var hrs = myDate.getHours();

  var greet;
  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        console.log("accountsChanged", accounts);
        if (accounts) setAccount(accounts[0]);
      };

      const handleDisconnect = () => {
        console.log("disconnect", error);
        disconnectWallet();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [disconnectWallet, error, provider, setAccount]);

  return (
    <>
      <header className="header-wrap" style={{ zIndex: 99 }}>
        <div className="container-fluid d-flex justify-content-center justify-content-lg-start">
          <div className="row w-100">
            <div className="col-1 d-none d-lg-block" />
            <div className={`${window.innerWidth > 991 ? "col-11" : "col-12"}`}>
              <div className="container-lg px-0 d-flex justify-content-between gap-3 align-items-center w-100">
                <div className="d-none d-lg-flex flex-column gap-2 text-start">
                  <h4
                    className="text-white"
                    style={{ fontSize: 23, fontWeight: 600 }}
                  >
                    {greet}, LKDians
                  </h4>
                  <span className="text-white headerdesc">
                    Discover the latest trends, breaking news, and gain access
                    to powerful dApps.
                  </span>
                </div>
                <a aria-current="page" className="active" href="/">
                  <img
                    src={LinkdaoLogo}
                    width="49px"
                    className="d-flex d-lg-none"
                    alt=""
                    style={{ marginLeft: "-5px" }}
                  />
                </a>
                <div className="d-flex m-0 justify-content-between gap-3 align-items-center">
                  <a
                    className="buylkd-btn btn"
                    href="https://pancakeswap.finance/swap?inputCurrency=0xaf027427dc6d31a3e7e162a710a5fe27e63e275f"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={coins} alt="" />
                    <span className="buy-lkd-text">Buy LKD</span>
                  </a>
                  <div className="d-flex justify-content-between gap-3 align-items-center">
                    {/*  <div className="d-flex align-items-center justify-content-center dropdown">
                      <button
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="dropdown-basic-button"
                        type="button"
                        className="dropdown-toggle btn btn-primary"
                      >
                        <span className="dropdown-title">
                          <img src={ethSvg} height={16} width={16} alt="" />
                          <span className="change-chain-text d-none d-lg-flex">
                            Ethereum
                          </span>
                          <img
                            src="/static/media/dropdown.481b12cf.svg"
                            alt=""
                          />
                        </span>
                      </button>
                    </div> */}
                    <div className="dropdown">
                      <button
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="dropdown-basic-button2"
                        type="button"
                        className="dropdown-toggle btn btn-primary"
                        style={{ height: "34px" }}
                        onClick={account ? disconnectWallet : connectWallet}
                      >
                        <div
                          className="d-flex align-items-center gap-2  position-relative"
                          style={{ bottom: 5, fontSize: 12 }}
                        >
                          <img
                            src={walletIcon}
                            alt=""
                            className="position-relative"
                          />
                          <span className="connecttitle d-flex fs-6">
                            {account
                              ? truncateAddress(account)
                              : "Connect Wallet"}
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1 d-none d-lg-block" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
