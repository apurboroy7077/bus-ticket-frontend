import React from "react";

const SigningUpFailedButton = () => {
  return (
    <button
      type="submit"
      className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
    >
      Signing Up Failed, Try Again
    </button>
  );
};

export default SigningUpFailedButton;
