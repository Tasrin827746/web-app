"use client";
import { useRouter } from "next/navigation";

export default function ClientNav() {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
      <button
        onClick={() => router.push("/auth/sign-in")}
        className="text-defaultText font-semibold hover:text-textOrange"
      >
        Log in
      </button>
      <button
        onClick={() => router.push("/components/contact")}
        className="px-5 py-2 text-textOrange font-semibold border border-purple-500 rounded-full hover:bg-gray-200 w-full sm:w-auto"
      >
        Contact us
      </button>
      <button
        onClick={() => router.push("/components/download")}
        className="px-5 py-2 text-textOrange font-semibold border border-purple-500 rounded-full hover:bg-gray-200 w-full sm:w-auto"
      >
        Download
      </button>
      <button
        onClick={() => router.push("/auth/sign-up")}
        className="px-5 py-2 text-white bg-textOrange rounded-full hover:bg-bgHover font-semibold w-full sm:w-auto"
      >
        Try for free
      </button>
    </div>
  );
}
