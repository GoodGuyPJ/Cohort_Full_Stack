import { useMemo, useState, memo } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setExchange1Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    setExchange2Data({
      returns: 200,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 1000,
      });
    }, 5000);
  }, []);

  // useCallback is not about minimizing the amout of code that is run
  // useCallback is about rendering a child, if the function hast/doesnt need to change across renders

  const calculateCryptoReturns = useCallback(
    function () {
      return exchange1Data.returns + exchange2Data.returns;
    },
    [exchange1Data, exchange2Data]
  );
  const incomeTax = (calculateCryptoReturns() + bankData.income) * 0.3;

  console.log("hi from App");
  // const cryptoReturns = exchange1Data.returns + exchange2Data.returns;

  const cryptoReturns = useMemo(() => {
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data]);

  console.log("cryptoReturns", cryptoReturns);
  const incomeTax = (bankData.income + cryptoReturns) * 0.3;

  return (
    <div>
      <CryptoGainsCalculator calculateCryptoReturns={calculateCryptoReturns} />
    </div>
  );
}

// const Dummy = memo(function () {
//   console.log("Dummy rendered");
//   return <p>Dummy</p>;
// });

const CryptoGainsCalculator = memo(function ({ calculateCryptoReturns }) {
  const cryptoReturns = calculateCryptoReturns();
  return <p>Crypto returns: {cryptoReturns}</p>;
});

export default App;

/*2 
import { useMemo, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setExchange1Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    setExchange2Data({
      returns: 200,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 1000,
      });
    }, 5000);
  }, []);

  console.log("hi from App");
  // const cryptoReturns = exchange1Data.returns + exchange2Data.returns;

  const cryptoReturns = useMemo(() => {
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data]);

  console.log("cryptoReturns", cryptoReturns);
  const incomeTax = (bankData.income + cryptoReturns) * 0.3;

  return (
    <div>
      <p>Income tax: {incomeTax}</p>
    </div>
  );
}

export default App;
*/

/*
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  // fetch("https://api.exchangeratesapi.io/latest", async (res) => {
  //   const json = await res.json();
  //   setExchangeData(json);
  // })

  useEffect(function () {
    setTimeout(() => {
      setBankData({
        income: 1000,
      });
    }, 3000);
  }, []);

  setTimeout(() => {
    setBankData({
      income: 1000,
    });
  }, 3000);

  setTimeout(() => {
    setExchangeData({
      returns: 100,
    });
  }, 1000);

  const incomeTax = (bankData.income + (exchangeData.returns || 0)) * 0.3;

  return (
    <div>
      <h1>Bank</h1>
      <p>Income: {bankData.income}</p>
      <p>Income tax: {incomeTax}</p>
      <h1>Exchange</h1>
      <p>Exchange returns: {exchangeData.returns}</p>
    </div>
  );
}

export default App;

*/
