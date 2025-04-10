import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Activities: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-screen bg-white text-center">
      {/* Title */}
      <h2 className="text-xl font-semibold mb-2">Activities</h2>

      {/* Image (Replace with the actual path if needed) */}
      <Image src="/activities-placeholder.png" alt="No activities" width={200} height={200} />

      {/* Message */}
      <h3 className="text-lg font-semibold mt-4">No activities yet</h3>
      <p className="text-gray-500 mt-2">
        Keep up with all the updates and activities of your tasks here
      </p>

      {/* Button */}
      <Button variant="outline" className="mt-4">+ New Task List</Button>
    </div>
  );
};

export default Activities;
