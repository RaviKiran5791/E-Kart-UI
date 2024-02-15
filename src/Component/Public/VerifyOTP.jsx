import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const VerifyOTP = ({ role }) => {
  const [otp, setOTP] = useState("");

  const navigate = useNavigate();

  const handleVerification = async (event) => {
    event.preventDefault();
    // fire request to the server
    // using axios

    const email=sessionStorage.getItem('email');

    const URL = "http://localhost:8080/api/v1/verify-otp";

    const body = {
      otp: otp,
      email:email

    };

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    try {
      const response = await axios.post(URL, body, header);
      console.log(response);
      sessionStorage.removeItem('email');
      navigate("/login");

      // Handle successful verification, e.g., redirect to the next page
    } catch (error) {
      console.log(error);
      // Handle verification error, e.g., display an error message
    }
  };

  return (
    <div className="flex justify-center m-auto mt-16 w-fit border-yellow-100 border-2 shadow-2xl rounded-xl">
      <div className="p-3 flex-col flex justify-center items-center w-72  bg-yellow-200 rounded-l-lg">
        <span className="p-2 font-mono font-bold text-5xl  ">Verify OTP</span>
        <p className="p-2">Enter the OTP sent to your email address</p>
        {/* You can add an image or design here if needed */}
      </div>

      <div className="p-2 flex-col flex justify-center items-center w-96 h-80">
        <input
          type="text"
          placeholder="Enter OTP"
          onChange={(event) => setOTP(event.target.value)}
          className="p-2 border-2 border-gray-500 w-80 h-10 rounded-xl"
        />{" "}
        <br />
        <button
          onClick={handleVerification}
          className="p-2 bg-lime-300 rounded-3xl font-bold font-sans w-80 justify-center"
        >
          Verify Otp
        </button>
        <Link to="/login" className="text-blue-600 mt-4">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default VerifyOTP;
