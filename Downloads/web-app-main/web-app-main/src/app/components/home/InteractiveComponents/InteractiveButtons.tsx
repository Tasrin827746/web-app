"use client";

import { useRouter } from "next/navigation";

export default function InteractiveButtons() {
  const router = useRouter();
  return (
    <div className="mt-6 flex justify-center gap-4 flex-wrap">
      <button
        onClick={() => router.push("/auth/sign-up")}
        className="text-xl bg-gradientLinear text-white px-6 py-3 h-12 w-full sm:w-44 md:w-48 lg:w-52 xl:w-56 rounded-full shadow-lg font-semibold hover:bg-gradientLinear transition"
      >
        Try for free
      </button>
      <button
        onClick={() => router.push("/components/contact")}
        className="text-xl bg-transparent border border-textOrange text-textOrange px-6 py-3 h-12 w-full sm:w-44 md:w-48 lg:w-52 xl:w-56 rounded-full font-semibold hover:bg-gray-200 transition"
      >
        Book a demo
      </button>
    </div>
  );
}
