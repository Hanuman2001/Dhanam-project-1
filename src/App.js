import "./App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    englandData: [],
    scotland: [],
    northernIreland: [],
  });

  const [filteredData, setFilteredData] = useState([]);
  const [date, setDate] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get("https://www.gov.uk/bank-holidays.json");

      Object.keys(res.data).forEach((key) => {
        setData({
          englandData: res.data["england-and-wales"].events,
          scotland: res.data["scotland"].events,
          northernIreland: res.data["northern-ireland"].events,
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  const filterDataByData = (date, data) => {
    const filteredData = data.filter((obj) => obj.date === date);
    setFilteredData(filteredData);
  };
  function getYesterday(data) {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    const filteredData = data.filter(
      (obj) => obj.date === d.toISOString().split("T")[0]
    );

    setFilteredData(filteredData);
    setDate(d.toISOString().split("T")[0]);
  }
  function lastWeek(data) {
    var d = new Date();
    d.setDate(d.getDate() - 7);
    const filteredData = data.filter(
      (obj) => obj.date === d.toISOString().split("T")[0]
    );
    setFilteredData(filteredData);
    setDate(d.toISOString().split("T")[0]);
  }
  function lastMonth(data) {
    var d = new Date();
    d.setDate(d.getDate() - 30);

    const filteredData = data.filter(
      (obj) => obj.date === d.toISOString().split("T")[0]
    );
    setFilteredData(filteredData);
    setDate(d.toISOString().split("T")[0]);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="englandDiv">
          <h1 style={{ textAlign: "center" }}>England Bank holidays</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              style={{ height: "30px" }}
              type="date"
              id="birthday"
              name="birthday"
              onChange={(e) => {
                setDate(e.target.value);
                filterDataByData(e.target.value, data.englandData);
              }}
            />
            <button
              className="btn-filter"
              onClick={() => getYesterday(data.englandData)}
            >
              YesterDay
            </button>
            <button
              className="btn-filter"
              onClick={() => lastWeek(data.englandData)}
            >
              last Week
            </button>
            <button
              className="btn-filter"
              onClick={() => lastMonth(data.englandData)}
            >
              last Month
            </button>
          </div>
          <div className="englandHolidays">
            {filteredData.length > 0
              ? filteredData.map((obj) => (
                  <div
                    style={{
                      width: "80%",
                      height: "100%",
                      border: "1px solid grey",
                      borderRadius: "10px",

                      textAlign: "center",
                    }}
                  >
                    <h3>{obj.title}</h3>

                    <p>{obj.date}</p>
                  </div>
                ))
              : data.englandData.map((obj, index) => (
                  <div
                    style={{
                      width: "80%",
                      height: "100%",
                      border: "1px solid grey",
                      borderRadius: "10px",

                      textAlign: "center",
                    }}
                    key={index}
                  >
                    <h3>{obj.title}</h3>

                    <p>{obj.date}</p>
                  </div>
                ))}
          </div>
        </div>
        <div className="englandDiv">
          <h1 style={{ textAlign: "center" }}>Scotland Bank holidays</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              style={{ height: "30px" }}
              type="date"
              id="birthday"
              name="birthday"
              onChange={(e) => {
                setDate(e.target.value);
                filterDataByData(e.target.value, data.scotland);
              }}
            />
            <button
              className="btn-filter"
              onClick={() => getYesterday(data.scotland)}
            >
              YesterDay
            </button>
            <button
              className="btn-filter"
              onClick={() => lastWeek(data.scotland)}
            >
              last Week
            </button>
            <button
              className="btn-filter"
              onClick={() => lastMonth(data.scotland)}
            >
              last Month
            </button>
          </div>
          <div className="englandHolidays">
            {filteredData.length > 0
              ? filteredData.map((obj) => (
                  <div
                    style={{
                      width: "80%",
                      height: "100%",
                      border: "1px solid grey",
                      borderRadius: "10px",

                      textAlign: "center",
                    }}
                  >
                    <h3>{obj.title}</h3>

                    <p>{obj.date}</p>
                  </div>
                ))
              : data.englandData.map((obj, index) => (
                  <div
                    style={{
                      width: "80%",
                      height: "100%",
                      border: "1px solid grey",
                      borderRadius: "10px",

                      textAlign: "center",
                    }}
                    key={index}
                  >
                    <h3>{obj.title}</h3>

                    <p>{obj.date}</p>
                  </div>
                ))}
          </div>
        </div>
        <div className="englandDiv">
          <h1 style={{ textAlign: "center" }}>Nothern Ireland Bank holidays</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              style={{ height: "30px" }}
              type="date"
              id="birthday"
              name="birthday"
              onChange={(e) => {
                setDate(e.target.value);
                filterDataByData(e.target.value, data.northernIreland);
              }}
            />
            <button
              className="btn-filter"
              onClick={() => getYesterday(data.northernIreland)}
            >
              YesterDay
            </button>
            <button
              className="btn-filter"
              onClick={() => lastWeek(data.northernIreland)}
            >
              last Week
            </button>
            <button
              className="btn-filter"
              onClick={() => lastMonth(data.northernIreland)}
            >
              last Month
            </button>
          </div>
          <div className="englandHolidays">
            {filteredData.length > 0
              ? filteredData.map((obj) => (
                  <div
                    style={{
                      width: "80%",
                      height: "100%",
                      border: "1px solid grey",
                      borderRadius: "10px",

                      textAlign: "center",
                    }}
                  >
                    <h3>{obj.title}</h3>

                    <p>{obj.date}</p>
                  </div>
                ))
              : data.englandData.map((obj, index) => (
                  <div
                    style={{
                      width: "80%",
                      height: "100%",
                      border: "1px solid grey",
                      borderRadius: "10px",

                      textAlign: "center",
                    }}
                    key={index}
                  >
                    <h3>{obj.title}</h3>

                    <p>{obj.date}</p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
