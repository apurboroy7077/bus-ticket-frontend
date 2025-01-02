"use client";

import useCheckAuthToken from "@/hooks/useCheckAuthToken";

import React from "react";
import LoadingDiv from "./LoadingDiv";

const HomePage = () => {
  useCheckAuthToken("Home_Page");
  return <LoadingDiv />;
};

export default HomePage;
