"use client";
import { dummyTickets } from "@/data/dummyData";
import React from "react";
// Adjust the path to the tickets data

const formatDate = (timestamp: number) => {
  return new Date(timestamp).toLocaleString();
};

const MyTicketsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Available Tickets
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-full max-w-screen-lg">
        {dummyTickets.map((ticket, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 w-full flex flex-col"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              Ticket #{index + 1}
            </h2>
            <div className="mt-4 text-gray-700">
              <p>
                <strong>Bus ID:</strong> {ticket.busId}
              </p>
              <p>
                <strong>User ID:</strong> {ticket.userId || "Not assigned"}
              </p>
              <p>
                <strong>Price:</strong> ${ticket.price}
              </p>
              <p>
                <strong>Departure Time:</strong>{" "}
                {formatDate(ticket.departureTime)}
              </p>
              <p>
                <strong>Created At:</strong> {formatDate(ticket.createdAt)}
              </p>
              <p>
                <strong>Updated At:</strong> {formatDate(ticket.updatedAt)}
              </p>
            </div>
            <button className="mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTicketsPage;
