import React, { useState, useCallback, useEffect, useContext } from "react";
import "./Dashboard.css";
import { getCirculatingSupply, getHoldings, getPrice } from "../../utils";
import { ConnectContext } from "../../context/ConnectContext";
import { data } from "../../data/pools";
import { totalStakedFunc } from "../../contracts/pools";
// import BasicTable from "./Table";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import "./Table.css";

const Dashboard = () => {
  const [price, setPrice] = useState(0);
  const [supply, setSupply] = useState(0);
  const [staked, setStaked] = useState(0);
  const [provider] = useContext(ConnectContext);
  const [holders, setHolders] = useState(0);

  const handlePrice = useCallback(async () => {
    let pr = await getPrice();
    setPrice(pr);
  }, []);

  const handleSupply = useCallback(async () => {
    let pr = await getCirculatingSupply();
    setSupply(pr);
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

  const handleHolders = useCallback(async () => {
    let pr = await getHoldings();
    setHolders(pr);
  }, []);

  useEffect(() => {
    handlePrice();
    handleTotalStaked();
    handleSupply();
    handleHolders();
  }, [handlePrice, handleSupply, handleTotalStaked, handleHolders]);

  return (
    <>
      <div className="fssd01">
        <div className="fssd02">
          <div className="d-flex align-items-start ps-4 py-3 total-tvl-wrapper position-relative w-100">
            <div className="purplediv" style={{ top: 10 }} />
            <div
              className="d-flex flex-column gap-2 position-relative"
              style={{ top: 5 }}
            >
              <span className="total-tvl-title fs-6">LKD Total Supply</span>
              <h6 className="total-tvl-content fs-4">10,000,000.00</h6>
            </div>
          </div>
        </div>
        <div className="fssd02">
          <div className="d-flex align-items-start ps-4 py-3 total-tvl-wrapper position-relative w-100">
            <div className="purplediv" style={{ top: 10 }} />
            <div
              className="d-flex flex-column gap-2 position-relative"
              style={{ top: 5 }}
            >
              <span className="total-tvl-title fs-6">
                LKD Circulating Supply
              </span>
              <h6 className="total-tvl-content fs-4">{supply}</h6>
            </div>
          </div>
        </div>

        <div className="fssd02">
          <div className="d-flex align-items-start ps-4 py-3 total-tvl-wrapper position-relative w-100">
            <div className="purplediv" style={{ top: 10 }} />
            <div
              className="d-flex flex-column gap-2 position-relative"
              style={{ top: 5 }}
            >
              <span className="total-tvl-title fs-6">LKD Price</span>
              <h6 className="total-tvl-content fs-4">
                {" "}
                $ {parseFloat(price).toFixed(5)}{" "}
              </h6>
            </div>
          </div>
        </div>

        <div className="fssd02">
          <div className="d-flex align-items-start ps-4 py-3 total-tvl-wrapper position-relative w-100">
            <div className="purplediv" style={{ top: 10 }} />
            <div
              className="d-flex flex-column gap-2 position-relative"
              style={{ top: 5 }}
            >
              <span className="total-tvl-title fs-6">
                Fully Diluted Market Cap
              </span>
              <h6 className="total-tvl-content fs-4">
                $ {(10000000 * price).toFixed(3)}
              </h6>
            </div>
          </div>
        </div>
        <div className="fssd02">
          <div className="d-flex align-items-start ps-4 py-3 total-tvl-wrapper position-relative w-100">
            <div className="purplediv" style={{ top: 10 }} />
            <div
              className="d-flex flex-column gap-2 position-relative"
              style={{ top: 5 }}
            >
              <span className="total-tvl-title fs-6">LKD Holders</span>
              <h6 className="total-tvl-content fs-4">{holders}</h6>
            </div>
          </div>
        </div>
        <div className="fssd02">
          <div className="d-flex align-items-start ps-4 py-3 total-tvl-wrapper position-relative w-100">
            <div className="purplediv" style={{ top: 10 }} />
            <div
              className="d-flex flex-column gap-2 position-relative"
              style={{ top: 5 }}
            >
              <span className="total-tvl-title fs-6">LKD Staked</span>
              <h6 className="total-tvl-content fs-4">
                {parseFloat(staked).toFixed(4)}
              </h6>
            </div>
          </div>
        </div>

        <div className="fssd02">
          <div className="d-flex align-items-start ps-4 py-3 total-tvl-wrapper position-relative w-100">
            <div className="purplediv" style={{ top: 10 }} />
            <div
              className="d-flex flex-column gap-2 position-relative"
              style={{ top: 5 }}
            >
              <span className="total-tvl-title fs-6">Total Value Locked</span>
              <h6 className="total-tvl-content fs-4">
                $ {(price * staked).toFixed(3)}
              </h6>
            </div>
          </div>
        </div>

        <div className="fssd02">
          <div className="d-flex align-items-start ps-4 py-3 total-tvl-wrapper position-relative w-100">
            <div className="purplediv" style={{ top: 10 }} />
            <div
              className="d-flex flex-column gap-2 position-relative"
              style={{ top: 5 }}
            >
              <span className="total-tvl-title fs-6">Active Farms</span>
              <h6 className="total-tvl-content fs-4">0</h6>
            </div>
          </div>
        </div>

        <div className="fssd02">
          <div className="d-flex align-items-start ps-4 py-3 total-tvl-wrapper position-relative w-100">
            <div className="purplediv" style={{ top: 10 }} />
            <div
              className="d-flex flex-column gap-2 position-relative"
              style={{ top: 5 }}
            >
              <span className="total-tvl-title fs-6">Active Pool</span>
              <h6 className="total-tvl-content fs-4">{data.length}</h6>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="fssd05">
        <TableContainer component={Paper}>
          <Table sx={{ Width: '95%' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Farms/Pools</TableCell>
                <TableCell className='width640'>Address</TableCell>
                <TableCell>TVL</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(({ token, address, pool, poolAbi}) => {
                return <BasicTable token={token} address={address} pool={pool} poolABI={poolAbi} price={price} />
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div> */}
    </>
  );
};

export default Dashboard;
