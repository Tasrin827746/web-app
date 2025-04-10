import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Step6 = () => {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const completeSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        setLoading(true);
        try {
            console.log("Signing up with password:", password);
            await new Promise((resolve) => setTimeout(resolve, 1000)); 
            alert("Signup Successful!");
            router.push("/dashboard"); 
        } catch (error) {
            console.error("Error during signup:", error);
            alert("Signup failed. Please try again.");
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 -mt-20">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full sm:w-96">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Set Your Password</h2>
                <form onSubmit={completeSignup} className="w-full">
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">New Password</label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 text-white rounded-md transition ${
                            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                        }`}
                    >
                        {loading ? "Signing up..." : "Complete Signup"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Step6;
