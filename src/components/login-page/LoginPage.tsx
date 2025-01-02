"use client";
import React, { useEffect, useState } from "react";
import LogingInButton from "./LogingInButton";
import LoginButton from "./LoginButton";
import axios from "axios";
import { backendAddress } from "@/data/environmentVariables";
import LoginFailedButton from "./LoginFailedButton";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from "@/app/utils/getDataFromLocalStorage";

type loginStatusType =
  | "Logging"
  | "Not_Logging"
  | "Login_Successful"
  | "Login_Failed";

const LoginPage = () => {
  const router = useRouter();
  const [loginStatus, setLoginStatus] = useState(
    "Not_Logging" as loginStatusType
  );
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const dataForServer = { email, password };
    setLoginStatus("Logging");
    axios
      .post(`${backendAddress}/authentication/login`, dataForServer)
      .then((res) => {
        const authToken = res.data.authToken;
        const savedData = getDataFromLocalStorage();
        savedData.authToken = authToken;
        saveDataToLocalStorage(savedData);
        setLoginStatus("Login_Successful");
      })
      .catch((err) => {
        console.log(err);
        setLoginStatus("Login_Failed");
      });
  };
  const handleSuccessFullLogin = () => {
    if (loginStatus === "Login_Successful") {
      router.push("/buy-tickets");
    }
  };

  useEffect(handleSuccessFullLogin, [loginStatus]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form onSubmit={handleFormSubmit} className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6">
            {loginStatus === "Not_Logging" && <LoginButton />}
            {loginStatus === "Logging" && <LogingInButton />}
            {loginStatus === "Login_Failed" && <LoginFailedButton />}
          </div>
        </form>
        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
