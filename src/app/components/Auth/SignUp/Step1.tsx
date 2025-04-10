import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { MdOutlinePhoneAndroid } from "react-icons/md";

interface Step1Props {
  onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [resendTimer, setResendTimer] = useState<number>(60);

  const sendVerificationCode = async () => {
    setLoading(true);
    try {
      console.log("Sending verification code to:", email);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Verification code sent to your email!");
      setResendTimer(60);
      onNext(); 
    } catch (error) {
      console.error("Error sending verification code:", error);
      alert("Failed to send verification code. Please try again.");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  return (
    <div className="p-6 md:p-8 w-full max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Enter your work email</h2>
      <input
        type="email"
        placeholder="name@company.com"
        className="border border-gray-300 rounded-md p-3 w-full mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && (
        <p className="text-red-500 text-sm">Please enter a valid email address.</p>
      )}
      <button
        onClick={sendVerificationCode}
        disabled={loading || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)}
        className="bg-blue-500 text-white rounded-md px-6 py-3 w-full mb-4 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Sign Up For Free"}
      </button>
      
      <p className="text-gray-500 mb-4 text-center">Or continue with</p>
      <div className="flex flex-wrap justify-center gap-2">
        <button className="flex items-center border border-gray-300 rounded-md p-3 w-full md:w-auto hover:bg-gray-200 transition">
          <MdOutlinePhoneAndroid className="text-gray-500 text-lg mr-2" />
          <span>Phone</span>
        </button>
        <button className="flex items-center border border-gray-300 rounded-md p-3 w-full md:w-auto hover:bg-gray-200 transition">
          <img src="https://i.ibb.co/RQbkDQX/google.webp" alt="Google" className="w-6 mr-2" />
          <span>Google</span>
        </button>
        <button className="flex items-center border border-gray-300 rounded-md p-3 w-full md:w-auto hover:bg-gray-200 transition">
          <img src="https://i.ibb.co/GJNKKy1/Apple-Logo.png" alt="Apple" className="w-7 mr-2" />
          <span>Apple</span>
        </button>
      </div>

      <p className="text-gray-400 text-sm mt-4 text-center">
        By continuing, you agree to our {" "}
        <a href="#" className="text-blue-600">User Terms of Service</a> {" "}
        and {" "}
        <a href="#" className="text-blue-600">Privacy Policy</a>.
      </p>

      <div className="mt-4 text-center text-sm text-gray-600">
        Already joined an organization? {" "}
        <button
          onClick={() => router.push("/auth/sign-in")}
          className="text-blue-500 underline hover:text-blue-600"
        >
          Sign in now
        </button>
      </div>
    </div>
  );
};

export default Step1;
