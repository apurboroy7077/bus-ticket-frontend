"use client";
import React, { FormEvent, useEffect, useRef, useState } from "react";

import axios from "axios";
import { backendAddress } from "@/data/environmentVariables";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SignUpButton from "./SignUpButton";
import SigningUpButton from "./SigningUpButton";
import SigningUpFailedButton from "./SigningUpFailedButton";

type signUpStatusType =
  | "Signing_Up"
  | "Not_Signing_Up"
  | "SignUp_Successful"
  | "SignUp_Failed";

const SignUpPage = () => {
  const router = useRouter();
  const [signUpStatus, setSignUpStatus] = useState(
    "Not_Signing_Up" as signUpStatusType
  );
  const confirmPasswordInputRef = useRef(null);
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (confirmPasswordInputRef.current) {
      const confirmPasswordInput =
        confirmPasswordInputRef.current as HTMLInputElement;
      if (password !== confirmPassword) {
        confirmPasswordInput.setCustomValidity(
          "Please confirm the password correctly."
        );
        confirmPasswordInput.reportValidity();
        return;
      } else {
        confirmPasswordInput.setCustomValidity("");
        confirmPasswordInput.reportValidity();
      }
    }

    const dataForServer = { username, email, password };
    setSignUpStatus("Signing_Up");
    axios
      .post(`${backendAddress}/authentication/sign-up`, dataForServer)
      .then((res) => {
        console.log(res);
        setSignUpStatus("SignUp_Successful");
      })
      .catch((err) => {
        console.log(err);
        setSignUpStatus("SignUp_Failed");
      });
  };
  const handleClickInConfirmPassword = () =>
    // e: React.ChangeEvent<HTMLInputElement>
    {
      if (confirmPasswordInputRef.current) {
        const confirmPasswordInput =
          confirmPasswordInputRef.current as HTMLInputElement;
        confirmPasswordInput.setCustomValidity("");
        // confirmPasswordInput.reportValidity();
      }
    };

  const handleSuccessFullSignUp = () => {
    if (signUpStatus === "SignUp_Successful") {
      router.push("/login");
    }
  };

  useEffect(handleSuccessFullSignUp, [signUpStatus]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h2>
        <form onSubmit={handleFormSubmit} className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

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
              onInput={handleClickInConfirmPassword}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Confirm your password"
              ref={confirmPasswordInputRef}
              onInput={handleClickInConfirmPassword}
              required
            />
          </div>
          <div className="mb-6">
            {signUpStatus === "Not_Signing_Up" && <SignUpButton />}
            {signUpStatus === "Signing_Up" && <SigningUpButton />}
            {signUpStatus === "SignUp_Failed" && <SigningUpFailedButton />}
          </div>
        </form>
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
