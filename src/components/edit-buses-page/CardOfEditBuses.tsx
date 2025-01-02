import {
  convertDateTimeLocalToUnixTimestamp,
  convertToDatetimeLocalFormat,
} from "@/app/utils/formatDate";
import { getDataFromLocalStorage } from "@/app/utils/getDataFromLocalStorage";
import { backendAddress } from "@/data/environmentVariables";

import axios from "axios";
import React, { useState } from "react";

type propsType = {
  bus: busesDataType[number];
};

type saveStatusType =
  | "Not_Saving"
  | "Saving"
  | "Saving_Successful"
  | "Saving_Failed";

const CardOfEditBuses = (props: propsType) => {
  const { bus } = props;

  const [name, setName] = useState(bus.name);
  const [description, setDescription] = useState(bus.description);
  const [capacity, setCapacity] = useState(bus.capacity);
  const [departureTime, setDepartureTime] = useState(
    convertToDatetimeLocalFormat(bus.departureTime)
  );
  const [ticketPrice, setTicketPrice] = useState(bus.ticketPrice);
  const [saveStatus, setSaveStatus] = useState("Not_Saving" as saveStatusType);

  const handleSave = () => {
    const authToken = getDataFromLocalStorage().authToken;

    const updatedBusData = {
      name,
      description,
      capacity,
      departureTime: convertDateTimeLocalToUnixTimestamp(departureTime),
      ticketPrice,
      id: bus._id,
      authToken,
    };

    setSaveStatus("Saving");

    axios
      .put(`${backendAddress}/admin/bus/${bus._id}`, updatedBusData)
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
    <div className="bg-white shadow-lg rounded-lg p-6 w-full flex flex-col">
      <div className="mb-4">
        <label className="block text-gray-700">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded-lg p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Capacity:</label>
        <input
          type="number"
          value={capacity}
          onChange={(e) => setCapacity(Number(e.target.value))}
          className="w-full border rounded-lg p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Departure Time:</label>
        <input
          type="datetime-local"
          value={departureTime}
          onChange={(e) => setDepartureTime(e.target.value)}
          className="w-full border rounded-lg p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Ticket Price:</label>
        <input
          type="number"
          value={ticketPrice}
          onChange={(e) => setTicketPrice(Number(e.target.value))}
          className="w-full border rounded-lg p-2"
        />
      </div>

      {saveStatus === "Not_Saving" && (
        <button
          onClick={handleSave}
          className="mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Save Changes
        </button>
      )}
      {saveStatus === "Saving" && (
        <button className="mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Saving <i className="fa-solid fa-spinner animate-spin"></i>
        </button>
      )}
      {saveStatus === "Saving_Successful" && (
        <button className="mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
          Saved Successfully <i className="fa-solid fa-check"></i>
        </button>
      )}
      {saveStatus === "Saving_Failed" && (
        <button
          onClick={handleSave}
          className="mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Save Failed, try again <i className="fa-solid fa-xmark"></i>
        </button>
      )}
    </div>
  );
};

export default CardOfEditBuses;
