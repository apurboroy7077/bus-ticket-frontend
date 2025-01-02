import { formatDateAr7 } from "@/app/utils/formatDate";
import React, { useEffect, useState } from "react";

type propsType = {
  bus: any;
};
type buyingStatusType =
  | "Not_Buying"
  | "Buying"
  | "Buying_Successful"
  | "Buying_Failed";

const TicketCard = (props: propsType) => {
  const { bus } = props;
  const [buyingStatus, setBuyingStatus] = useState(
    "Buying_Failed" as buyingStatusType
  );
  useEffect(() => {
    setBuyingStatus("Not_Buying");
  }, []);

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
        <button className="mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Buy Ticket
        </button>
      )}
      {buyingStatus === "Buying" && (
        <button className="mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Purchasing <i className="fa-solid fa-spinner animate-spin"></i>
        </button>
      )}
      {buyingStatus === "Buying_Successful" && (
        <button className="mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Bought <i className="fa-solid fa-check"></i>
        </button>
      )}
      {buyingStatus === "Buying_Failed" && (
        <button className="mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
          Buying Failed, try again <i className="fa-solid fa-xmark"></i>
        </button>
      )}
    </div>
  );
};

export default TicketCard;
