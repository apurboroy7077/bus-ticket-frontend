"use client";
import { getDataFromLocalStorage } from "@/app/utils/getDataFromLocalStorage";

import { backendAddress } from "@/data/environmentVariables";
import useBasic from "@/hooks/useBasics";
import useCheckAuthToken from "@/hooks/useCheckAuthToken";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../navbar/MyNavbar";
import LoadingDiv from "../home-page/LoadingDiv";
import PurchasedTicketCard from "./PurchasedTicketCard";
// Adjust the path to the tickets data

const MyTicketsPage = () => {
  useCheckAuthToken("My_Tickets_Page");
  const userData = useBasic((state) => state.userData);
  const [fetchStatus, setFetchStatus] = useState("FETCHING" as fetchStatusType);
  const [purchasedTickets, setPurchasedTickets] = useState(
    [] as ticketsDataType
  );
  const loadTicketsOfUser = () => {
    const authToken = getDataFromLocalStorage().authToken;
    const dataForServer = { authToken };
    axios
      .post(`${backendAddress}/get-purchased-tickets`, dataForServer)
      .then((res) => {
        const dataOfPurchasedTickets = res.data.ticketsBoughtByUser;
        setPurchasedTickets(dataOfPurchasedTickets);
        setFetchStatus("FETCHED");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const startingFunctions = () => {
    loadTicketsOfUser();
  };
  useEffect(startingFunctions, []);

  return (
    <>
      <Navbar />
      {fetchStatus === "FETCHING" && <LoadingDiv />}
      {fetchStatus === "FETCHED" && (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Tickets Purchased By {userData?.username}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-full max-w-screen-lg">
            {purchasedTickets.map((ticket, index) => (
              <PurchasedTicketCard
                key={Math.random()}
                ticket={ticket}
                index={index}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MyTicketsPage;
