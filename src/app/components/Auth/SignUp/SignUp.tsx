"use client";

import { useState, useRef, useEffect } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import CreateOrg from "./Step4";
import JoinOrg from "./Step5";
import Step6 from "./Step6";

const SignUp: React.FC = () => {
  const [step, setStep] = useState(1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-100">
      {/* Top Right Buttons */}
      <div className="absolute top-4 right-4 flex space-x-4 text-sm">
        <button className="p-2 text-gray-700 hover:text-blue-600">Help Center</button>
        <select className="p-2 text-gray-700 cursor-pointer border rounded-md">
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
        </select>
      </div>

      {/* Left Section */}
      <div className="bg-gradient-to-b from-white to-blue-100 w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center items-center relative">
        {/* Logo */}
        <div className="absolute top-4 left-4 flex items-center">
          <img src="https://i.ibb.co/CzYmGpN/lark-logo.png" alt="Lark Logo" className="h-6 w-6 mr-1" />
          <span className="font-semibold text-black">Lark</span>
        </div>

        <div className="w-full max-w-md mt-16 md:mt-20 text-center">
          <p className="text-4xl">👋</p>
          <h1 className="text-2xl font-bold mb-4 border-b border-blue-300 pb-6">Bye Operation Chaos.<br /> Hello</h1>
          <p className="text-sm font-semibold text-blue-700">Free plan starts from $0/month</p>
          <p className="text-xs">No credit card required</p>
          <ul className="text-sm space-y-2 mt-4">
            <li>✔️ Up to 50 users</li>
            <li>✔️ Unlimited chats with full message history</li>
            <li>✔️ Secure and customizable business email</li>
            <li>✔️ Automatic language translation</li>
            <li>✔️ 100 GB cloud storage</li>
          </ul>

          {/* Icons */}
          <div className="flex flex-wrap justify-center mt-6">
            {[ 
              { src: "https://i.ibb.co/BKKF71w/messenger.jpg", label: "Messenger" },
              { src: "https://i.ibb.co/CMxL9Vm/maill.jpg", label: "Email" },
              { src: "https://i.ibb.co/Nn9yPHr/meetings.jpg", label: "Meetings" },
              { src: "https://i.ibb.co/R3vBNLS/docs.png", label: "Docs" },
              { src: "https://i.ibb.co/NmPfYqv/calender.jpg", label: "Calendar" },
              { src: "https://i.ibb.co/Xb8ZRzr/basee.jpg", label: "Base" },
            ].map(({ src, label }) => (
              <div key={label} className="text-center w-1/3 sm:w-1/6">
                <img src={src} alt={label} className="h-8 mx-auto mb-2" />
                <p className="text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section (Step Forms) */}
      <div className="w-full md:w-2/3 p-6 md:p-12 flex flex-col bg-slate-100 mt-12 md:mt-28">
        {step === 1 && <Step1 onNext={() => setStep(2)} />}
        {step === 2 && <Step2 onBack={() => setStep(1)} onNext={() => setStep(3)} />}
        {step === 3 && <Step3 onNext={(nextStep) => setStep(nextStep)} onBack={() => setStep(2)} />}
        {step === 4 && <CreateOrg onNext={(nextStep) => setStep(nextStep)} onBack={() => setStep(3)} />}
        {step === 5 && <JoinOrg onNext={() => setStep(6)} onBack={() => setStep(3)} />}
        {step === 6 && <Step6 />}
      </div>
    </div>
  );
};

export default SignUp;
