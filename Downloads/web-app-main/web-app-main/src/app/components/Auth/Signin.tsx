"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

type SignInResponse = {
  message: string;
};

const SignIn = () => {
  const router = useRouter();
  const [isEmailMode, setIsEmailMode] = useState(true);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async () => {
    const loginData = isEmailMode ? { email, password } : { phoneNumber, password };

    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Login failed:", errorData.message || response.statusText);
        return;
      }

      const data: SignInResponse = await response.json();
      if (data.message === "Login successful") {
        router.push("/dashboard");
      } else {
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  const handleNextClick = () => {
    if (!isPasswordVisible) {
      setIsPasswordVisible(true);
    } else {
      handleSubmit();
    }
  };

  const isInputValid = () => {
    if (isEmailMode) {
      return email.trim() !== "";
    } else {
      return phoneNumber.trim() !== "";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: 'url("https://i.ibb.co.com/SmrRB4H/Adobe-Stock-961274808-Preview.jpg")' }}>
      <div className="absolute top-4 left-4">
        {/* <span className="font-semibold text-white">
          Taskir&apos;s <span className="text-blue-600">View</span>
        </span> */}
      </div>

      <div className="w-full max-w-md bg-slate-100 rounded-md shadow-md p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">
            Welcome to 
          </h1>
        </div>
        <form className="mt-4">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <button
              type="button"
              className={`flex-1 border-b-2 font-semibold ${
                isEmailMode ? "border-blue-500 text-blue-500" : "border-transparent text-gray-500"
              }`}
              onClick={() => setIsEmailMode(true)}
            >
              Email Address
            </button>
            <button
              type="button"
              className={`flex-1 border-b-2 font-semibold ${
                !isEmailMode ? "border-blue-500 text-blue-500" : "border-transparent text-gray-500"
              }`}
              onClick={() => setIsEmailMode(false)}
            >
              Phone Number
            </button>
          </div>

          <motion.div
            key={isEmailMode ? "email" : "phone"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {isEmailMode ? (
              <div className="mt-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ) : (
              <div className="mt-4">
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {isPasswordVisible && (
              <div className="mt-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
          </motion.div>

          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded cursor-pointer"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I have read and accept the{" "}
              <a href="#" className="text-blue-500 underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500 underline">
                Privacy Policy
              </a>
              .
            </label>
          </div>

          <button
            type="button"
            onClick={handleNextClick}
            disabled={!termsAccepted || !isInputValid() || (isPasswordVisible && !password)}
            className={`mt-4 w-full py-2 rounded-md ${
              !termsAccepted || !isInputValid() || (isPasswordVisible && !password)
                ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </form>
        <div className="mt-6 text-center text-gray-600">More Login Options</div>
        <div className="mt-4 space-y-2">
          <button className="w-full flex items-center justify-center bg-white py-2 rounded-md border hover:bg-gray-200">
            <img src="https://i.ibb.co.com/2McH37v/SSO.png" alt="" className="w-8 mr-1" />
            Continue with SSO
          </button>
          <button className="w-full flex items-center justify-center bg-white py-2 rounded-md border hover:bg-gray-200">
            <img src="https://i.ibb.co.com/RQbkDQX/google.webp" alt="" className="w-8 mr-1" />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center bg-white py-2 rounded-md border hover:bg-gray-200">
            <img src="https://i.ibb.co.com/GJNKKy1/Apple-Logo.png" alt="" className="w-9 mr-1" />
            Continue with Apple
          </button>
        </div>
        <div className="mt-4 text-center text-sm text-gray-600">
          No organization account yet?{" "}
          <button
            onClick={() => router.push("/auth/sign-up")}
            className="text-blue-400 underline hover:text-blue-600"
          >
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
