import React from "react";

const SigningUpButton = () => {
  return (
    <button
      disabled
      className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
    >
      Signing Up <i className="fa-solid fa-spinner animate-spin"></i>
    </button>
  );
};

export default SigningUpButton;
