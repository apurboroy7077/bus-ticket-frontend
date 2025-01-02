import { formatDateAr7 } from "@/app/utils/formatDate";
import React, { useState } from "react";
import axios from "axios";
import { backendAddress } from "@/data/environmentVariables";
import { getDataFromLocalStorage } from "@/app/utils/getDataFromLocalStorage";

type propsType = {
  ticket: ticketsDataType[number];
  index: number;
};

type deleteStatusType =
  | "NOT_DELETING"
  | "DELETING"
  | "DELETING_FAILED"
  | "DELETED";

const PurchasedTicketCard = (props: propsType) => {
  const [deletingStatus, setDeletingStatus] = useState(
    "NOT_DELETING" as deleteStatusType
  );
  const { ticket, index } = props;

  const handleDelete = () => {
    const authToken = getDataFromLocalStorage().authToken;

    setDeletingStatus("DELETING");
    axios
      .delete(`${backendAddress}/ticket/${ticket._id}/${authToken}`)
      .then((res) => {
        console.log(res);
        setDeletingStatus("DELETED");
      })
      .catch((err) => {
        console.error(err);
        setDeletingStatus("DELETING_FAILED");
      });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full flex flex-col">
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
          <strong>Departure Time:</strong> {formatDateAr7(ticket.departureTime)}
        </p>
        <p>
          <strong>Created At:</strong> {formatDateAr7(ticket.createdAt)}
        </p>
        <p>
          <strong>Updated At:</strong> {formatDateAr7(ticket.updatedAt)}
        </p>
      </div>

      {deletingStatus === "NOT_DELETING" && (
        <button
          onClick={handleDelete}
          className="mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Delete Ticket
        </button>
      )}
      {deletingStatus === "DELETING" && (
        <button
          disabled
          className="mt-4 bg-red-500 text-white py-2 rounded-lg opacity-75"
        >
          Deleting <i className="fa-solid fa-spinner animate-spin"></i>
        </button>
      )}
      {deletingStatus === "DELETED" && (
        <button
          disabled
          className="mt-4 bg-green-500 text-white py-2 rounded-lg"
        >
          Ticket Deleted <i className="fa-solid fa-check"></i>
        </button>
      )}
      {deletingStatus === "DELETING_FAILED" && (
        <button
          onClick={handleDelete}
          className="mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Delete Failed, Try Again <i className="fa-solid fa-xmark"></i>
        </button>
      )}
    </div>
  );
};

export default PurchasedTicketCard;
