import React from "react";
import "./index.css";
import LinkdaoNameLogo from "../../images/new_imgs/LinkdaoNameLogo.svg";
import BlockSafu from "../../images/BlockSafu.png";
import Telegram from "../../images/new_imgs/Social/telegram.svg";
import Twitter from "../../images/new_imgs/Social/twitter.svg";
import Medium from "../../images/new_imgs/Social/medium.svg";
import Gitbook from "../../images/new_imgs/Social/gitbook.svg";
import Github from "../../images/new_imgs/Social/github.svg";
import Email from "../../images/new_imgs/Social/email.svg";
import Coingecko from "../../images/new_imgs/Social/coinGecko.svg";
import Coinmarketcap from "../../images/new_imgs/Social/coinMarketCap.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer container-fluid d-flex justify-content-center justify-content-lg-start">
        <div className="row w-100">
          <div className="col-1 d-none d-lg-block" />
          <div className={`${window.innerWidth > 991 ? "col-11" : "col-12"}`}>
            <div className="py-4 flex-column flex-lg-row px-0 container-lg d-flex justify-content-between gap-3 align-items-start align-items-lg-center">
              <div className="d-flex flex-row flex-lg-column justify-content-between justify-content-lg-center align-items-center align-items-lg-start col-12 col-lg-5 gap-2">
                <a target="_blank" rel="noreferrer" href="https://lkdius.com/">
                  <img
                    src={LinkdaoNameLogo}
                    alt="lkd"
                    width={`${window.innerWidth > 768 ? "130px" : "100px"}`}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://blocksafu.com/blocksafu-scanner/56/0xaF027427DC6d31A3e7e162A710a5Fe27e63E275F"
                  style={{ position: "relative" }}
                  rel="noreferrer"
                >
                  <img src={BlockSafu} alt="BlockSafu" className="BlockSafu" />
                </a>
              </div>
              <hr
                className="form-divider my-2 d-flex d-lg-none"
                style={{ height: 2 }}
              />
              <div className="social-and-links d-flex align-items-end flex-column-reverse flex-lg-column justify-content-center gap-4">
                <div className="social-profile">
                  <span className="mobile-footer-title d-flex d-lg-none mb-3">
                    Community
                  </span>
                  <ul>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/lkdfinance"
                      >
                        <img
                          src={Twitter}
                          alt="Twitter"
                          height={24}
                          width={24}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://t.me/lkdfinance"
                      >
                        <img
                          src={Telegram}
                          alt="Telegram"
                          height={24}
                          width={24}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://t.me/lkdfinance"
                      >
                        <img
                          src={Gitbook}
                          alt="Telegram"
                          height={24}
                          width="30px"
                        />
                      </a>
                    </li>

                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://medium.com/@linkdaonetwork"
                      >
                        <img src={Medium} alt="Medium" height={24} width={24} />
                      </a>
                    </li>

                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/linkdaonetwork"
                      >
                        <img src={Github} alt="Github" height={24} width={24} />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="mailto:contact@linkdao.network"
                      >
                        <img src={Email} alt="Mail" height={24} width={24} />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.coingecko.com/en/coins/linkdao"
                      >
                        <img
                          src={Coingecko}
                          alt="Coingecko"
                          height={24}
                          width={24}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://coinmarketcap.com/currencies/linkdao-network/"
                      >
                        <img
                          src={Coinmarketcap}
                          alt="Coinmarketcap"
                          height={24}
                          width={24}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <hr
                  className="form-divider my-2 d-flex d-lg-none w-100"
                  style={{ height: 2 }}
                />
                <div className="footer-menu">
                  <span className="mobile-footer-title d-flex d-lg-none mb-3">
                    Links
                  </span>
                  <ul className="external-links">
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://bscscan.com/address/0xaf027427dc6d31a3e7e162a710a5fe27e63e275f#code"
                      >
                        Token Contract
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://linkdao-network.gitbook.io/linkdao/development/security"
                      >
                        Security
                      </a>
                    </li>
                    <li>
                      <Link to="/Disclaimer">Disclaimer</Link>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://linkdao-network.gitbook.io/linkdao/contacts/contacts"
                      >
                        Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 d-none d-lg-block" />
        </div>
      </div>
    </>
  );
};

export default Footer;
