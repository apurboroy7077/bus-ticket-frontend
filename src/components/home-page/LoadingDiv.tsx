import React from "react";

const LoadingDiv = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-gray-700">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingDiv;
