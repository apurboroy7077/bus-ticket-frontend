import { formatDateAr7 } from "@/app/utils/formatDate";
import { getDataFromLocalStorage } from "@/app/utils/getDataFromLocalStorage";
import { backendAddress } from "@/data/environmentVariables";

import axios from "axios";
import React, { useEffect, useState } from "react";

type propsType = {
  bus: busesDataType[number];
};
type buyingStatusType =
  | "Not_Buying"
  | "Buying"
  | "Buying_Successful"
  | "Buying_Failed";

const TicketCard = (props: propsType) => {
  const { bus } = props;
  const [buyingStatus, setBuyingStatus] = useState(
    "Not_Buying" as buyingStatusType
  );
  const handleBuy = () => {
    const authToken = getDataFromLocalStorage().authToken;
    const busId = bus._id;
    const dataForServer = { authToken, busId };
    setBuyingStatus("Buying");
    axios
      .post(`${backendAddress}/tickets/purchase`, dataForServer)
      .then((res) => {
        console.log(res);
        setBuyingStatus("Buying_Successful");
      })
      .catch((err) => {
        console.log(err);
        setBuyingStatus("Buying_Failed");
      });
  };
  useEffect(() => {}, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full flex flex-col">
      <h2 className="text-xl font-semibold text-gray-800">{bus.name}</h2>
      <p className="text-gray-600 mt-2">{bus.description}</p>
      <div className="mt-4 text-gray-700">
        <p>
          <strong>Capacity:</strong> {bus.capacity} passengers
        </p>
        <p>
          <strong>Departure Time:</strong> {formatDateAr7(bus.departureTime)}
        </p>
        <p>
          <strong>Ticket Price:</strong> ${bus.ticketPrice}
        </p>
      </div>
      {buyingStatus === "Not_Buying" && (
        <button
          onClick={handleBuy}
          className="mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Buy Ticket
        </button>
      )}
      {buyingStatus === "Buying" && (
        <button className="mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Purchasing <i className="fa-solid fa-spinner animate-spin"></i>
        </button>
      )}
      {buyingStatus === "Buying_Successful" && (
        <button
          onClick={handleBuy}
          className="mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Bought Buy Another <i className="fa-solid fa-check"></i>
        </button>
      )}
      {buyingStatus === "Buying_Failed" && (
        <button
          onClick={handleBuy}
          className="mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Buying Failed, try again <i className="fa-solid fa-xmark"></i>
        </button>
      )}
    </div>
  );
};

export default TicketCard;
