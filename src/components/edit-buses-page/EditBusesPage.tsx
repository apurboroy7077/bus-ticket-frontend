"use client";

import React, { useEffect, useState } from "react";

import useCheckAuthToken from "@/hooks/useCheckAuthToken";
import axios from "axios";
import { backendAddress } from "@/data/environmentVariables";
import LoadingDiv from "../home-page/LoadingDiv";
import Navbar from "../navbar/MyNavbar";
import CardOfEditBuses from "./CardOfEditBuses";
type busesDataType2 = null | busesDataType;
const EditBusesPage = () => {
  useCheckAuthToken("Buy_Ticket_Page");
  const [fetchStatus, setFetchStatus] = useState("FETCHING" as fetchStatusType);
  const [busesData, setBusesData] = useState(null as busesDataType2);
  const handleLoadBusesData = () => {
    axios
      .get(`${backendAddress}/buses`)
      .then((res) => {
        const busesData = res.data.busesData;
        setBusesData(busesData);
        setFetchStatus("FETCHED");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const firstTimeRunningFunctions = () => {
    handleLoadBusesData();
  };
  useEffect(firstTimeRunningFunctions, []);

  return (
    <>
      <Navbar />
      {fetchStatus === "FETCHING" && <LoadingDiv />}
      {fetchStatus === "FETCHED" && (
        <>
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Bus Ticket Sales
            </h1>
            <div>
              <button onClick={handleLoadBusesData}>Bus</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-full max-w-screen-lg">
              {busesData?.map((bus) => (
                <CardOfEditBuses key={Math.random()} bus={bus} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EditBusesPage;
