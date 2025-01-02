"use client";
import { dummyBuses } from "@/data/dummyData";
import React from "react";
import TicketCard from "./TicketCard";

const BusTicketPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Bus Ticket Sales
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-full max-w-screen-lg">
        {dummyBuses.map((bus) => (
          <TicketCard key={Math.random()} bus={bus} />
        ))}
      </div>
    </div>
  );
};

export default BusTicketPage;
