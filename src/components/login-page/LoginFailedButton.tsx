import React from "react";

const LoginFailedButton = () => {
  return (
    <button
      type="submit"
      className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
    >
      Login Failed, Try Again
    </button>
  );
};

export default LoginFailedButton;
