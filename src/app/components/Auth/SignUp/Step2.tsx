import React, { useEffect, useState } from "react";

interface Step2Props {
  onBack: () => void;
  onNext: () => void;
}

const Step2: React.FC<Step2Props> = ({ onBack, onNext }) => {
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [resendTimer, setResendTimer] = useState<number>(60);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const verifyCode = async () => {
    setLoading(true);
    try {
      console.log("Verifying code:", verificationCode);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Verification successful!");
      onNext(); // Move to Step 3
    } catch (error) {
      console.error("Error verifying code:", error);
      alert("Invalid verification code. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 md:p-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:underline mb-4"
      >
        &larr; Back
      </button>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-4 text-center">Enter verification code</h2>
      <p className="text-gray-500 mb-6 text-center">
        Enter the 6-digit verification code sent to <span className="font-semibold">s*******@*******</span>. The code is
        valid for 10 minutes.
      </p>

      {/* Verification Code Inputs */}
      <div className="flex justify-center gap-2 mb-4">
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            className="border border-gray-300 rounded-md text-center p-3 w-12 h-12 text-lg focus:ring-2 focus:ring-blue-500"
            value={verificationCode[index] || ""}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                const newCode = verificationCode.split("");
                newCode[index] = value;
                setVerificationCode(newCode.join(""));
                if (value && index < 5) {
                  document.getElementById(`code-${index + 1}`)?.focus();
                }
              }
            }}
            id={`code-${index}`}
          />
        ))}
      </div>

      {/* Resend Timer */}
      <p className="text-gray-500 text-sm text-center mb-4">
        Resend in <span className="font-semibold">{resendTimer}s</span>
      </p>

      {/* Verify Button */}
      <button
        onClick={verifyCode}
        disabled={loading || verificationCode.length < 6}
        className={`${
          verificationCode.length < 6
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        } text-white rounded-md px-6 py-3 w-full mb-4`}
      >
        {loading ? "Verifying..." : "Next"}
      </button>

      {/* Resend Code Button */}
      {resendTimer === 0 && (
        <button
          onClick={() => setResendTimer(60)}
          className="text-blue-600 hover:underline text-sm text-center w-full"
        >
          Resend code
        </button>
      )}
    </div>
  );
};

export default Step2;
