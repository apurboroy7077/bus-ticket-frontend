import React from "react";

const LogingInButton = () => {
  return (
    <button
      disabled
      className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
    >
      Loging in <i className="fa-solid fa-spinner animate-spin"></i>
    </button>
  );
};

export default LogingInButton;
