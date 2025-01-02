"use client";
import { convertDateTimeLocalToUnixTimestamp } from "@/app/utils/formatDate";
import { getDataFromLocalStorage } from "@/app/utils/getDataFromLocalStorage";
import { backendAddress } from "@/data/environmentVariables";

import axios from "axios";
import React, { useState } from "react";
import Navbar from "../navbar/MyNavbar";

const AddBus = () => {
  const [saveStatus, setSaveStatus] = useState<
    "Not_Saving" | "Saving" | "Saving_Successful" | "Saving_Failed"
  >("Not_Saving");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const formData = new FormData(e.target as HTMLFormElement);

    // Extract values from FormData and build the new bus data object
    const busData: any = {};
    formData.forEach((value, key) => {
      busData[key] = value;
    });

    // Convert departureTime to Unix timestamp
    busData.departureTime = convertDateTimeLocalToUnixTimestamp(
      busData.departureTime
    );

    // Add authToken manually
    const authToken = getDataFromLocalStorage().authToken;
    busData.authToken = authToken;

    setSaveStatus("Saving");

    // Send the request with the bus data
    axios
      .post(`${backendAddress}/admin/bus`, busData)
      .then((res) => {
        console.log(res);
        setSaveStatus("Saving_Successful");
      })
      .catch((err) => {
        console.log(err);
        setSaveStatus("Saving_Failed");
      });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-96 flex flex-col">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name:</label>
              <input
                required
                type="text"
                name="name"
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Description:</label>
              <textarea
                required
                name="description"
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Capacity:</label>
              <input
                required
                type="number"
                name="capacity"
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Departure Time:</label>
              <input
                required
                type="datetime-local"
                name="departureTime"
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Ticket Price:</label>
              <input
                required
                type="number"
                name="ticketPrice"
                className="w-full border rounded-lg p-2"
              />
            </div>

            {saveStatus === "Not_Saving" && (
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 w-full"
              >
                Create Bus
              </button>
            )}
            {saveStatus === "Saving" && (
              <button className="mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 w-full">
                Saving <i className="fa-solid fa-spinner animate-spin"></i>
              </button>
            )}
            {saveStatus === "Saving_Successful" && (
              <button className="mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 w-full">
                Created Successfully <i className="fa-solid fa-check"></i>
              </button>
            )}
            {saveStatus === "Saving_Failed" && (
              <button
                type="submit"
                className="mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 w-full"
              >
                Save Failed, try again <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBus;
