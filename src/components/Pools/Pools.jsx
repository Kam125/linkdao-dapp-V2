import React, { useCallback, useContext, useEffect, useState } from "react";
import Pool from "./Pool";
import { data } from "../../data/pools";
import { useLayoutEffect } from "react";
import totalTvlIcon from "../../images/new_imgs/totalTvlIcon.svg";
import Coin from "../../images/new_imgs/Coin.svg";
import earnHeroStats from "../../images/new_imgs/earnHeroStats.webp";
import coinBackground from "../../images/new_imgs/coinBackground.webp";
import { getPrice } from "../../utils";
import { totalRewardsPaid, totalStakedFunc } from "../../contracts/pools";
import { ConnectContext } from "../../context/ConnectContext";

const Pools = () => {
  const [price, setPrice] = useState(0);
  const [staked, setStaked] = useState(0);
  const [rewardsPaid,setRewardPaid] = useState(0)
  const [provider] = useContext(ConnectContext);

  const handlePrice = useCallback(async () => {
    let pr = await getPrice();
    setPrice(pr);
  }, []);

  const handleTotalStaked = useCallback(async () => {
    let stk = data.map(async ({ pool, poolAbi }) => {
      let res = await totalStakedFunc(provider, pool, poolAbi);
      return res;
    });
    let v1 = stk.reduce(async (v1, v2) => {
      let a = await v1;
      let b = await v2;
      return parseFloat(a) + parseFloat(b);
    }, 0);
    v1.then((res) => {
      setStaked(res);
    });
  }, [provider]);

  const handleTotalRewardsPaid = useCallback(async () => {
    let stk = data.map(async ({ pool, poolAbi }) => {
      let res = await totalRewardsPaid(provider, pool, poolAbi);
      return res;
    });
    let v1 = stk.reduce(async (v1, v2) => {
      let a = await v1;
      let b = await v2;
      return parseFloat(a) + parseFloat(b);
    }, 0);
    v1.then((res) => {
      setRewardPaid(res);
    });
  }, [provider]);

  useEffect(() => {
    handlePrice();
    handleTotalStaked();
    handleTotalRewardsPaid()
  }, [handlePrice, handleTotalRewardsPaid, handleTotalStaked]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="row w-100 flex-column flex-lg-row earn-hero gap-4 gap-lg-0 p-3 p-lg-4 justify-content-between mb-sm-5">
        <div className="col-12 col-lg-5 px-0 px-lg-3 d-flex flex-column justify-content-center gap-3">
          <h3 className="text-white" style={{ whiteSpace: "pre" }}>
            Linkdao Earn
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
          <div className="d-flex align-items-start gap-2 p-3 total-tvl-wrapper position-relative">
            <div className="purplediv" style={{ left: 1, top: 10 }} />
            <img src={totalTvlIcon} alt="total-tvl" />
            <div
              className="d-flex flex-column gap-1 position-relative"
              style={{ top: 5 }}
            >
              <span className="total-tvl-title">Total value locked</span>
              <h6 className="total-tvl-content">
                ${parseFloat(price * staked).toFixed(3)}
              </h6>
            </div>
          </div>
          <div className="d-flex gap-0 gap-lg-4">
            <div className="d-flex flex-column align-items-start rewardsDiv">
              <div className="d-flex flex-column paid-rewards">
                <p
                  style={{
                    fontSize: 9,
                    color: "rgb(247, 247, 252)",
                    fontWeight: 300,
                  }}
                >
                  Rewards paid out
                </p>
                <span
                  className="count-up"
                  style={{
                    fontSize: 19,
                    color: "rgb(247, 247, 252)",
                    fontWeight: 600,
                    textAlign: "start",
                  }}
                >
                 ${rewardsPaid}
                </span>
              </div>
              <img
                src={earnHeroStats}
                alt="earnHeroStats"
                className="earnHeroStats"
                // style={{ width: 195, height: 80 }}
              />
            </div>
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

      {data.map(
        ({
          token,
          apr,
          tvl,
          img,
          pool,
          poolAbi,
          contract,
          month,
          limit,
          showAuditLog,
          depositOn,
        }) => {
          return (
            <Pool
              token={token}
              apr={apr}
              tvl={tvl}
              img={img}
              pool={pool}
              poolABI={poolAbi}
              contract={contract}
              month={month}
              limit={limit}
              showAuditLog={showAuditLog}
              depositOn={depositOn}
            />
          );
        }
      )}
    </>
  );
};

export default Pools;
