import { useState } from "react";
import { Users } from "lucide-react";

export default function MyGroups({ renderButton }: { renderButton?: boolean }) {
  const [activeTab, setActiveTab] = useState("Created");

  return (
    <div>
      {/* Tabs */}
      <div className="flex border-b pb-2 justify-between items-center">
        <div className="flex">
          <button
            className={`mr-4 pb-2 ${
              activeTab === "Created"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("Created")}
          >
            Created(1)
          </button>
          <button
            className={`pb-2 ${
              activeTab === "Joined"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("Joined")}
          >
            Joined(1)
          </button>
        </div>
        
        {/* Conditionally render the New Group button */}
        {renderButton && (
          <button className="flex items-center border border-blue-500 text-blue-500 px-3 py-1.5 rounded-md hover:bg-blue-100">
            <Users className="w-4 h-4 mr-1" /> New Group
          </button>
        )}
      </div>

      {/* Group List */}
      <div className="mt-4">
        {activeTab === "Created" && (
          <div className="flex items-center p-3 border rounded-md w-1/3">
            <div className="w-8 h-8 flex items-center justify-center border rounded-full border-blue-500 text-blue-500">
              <Users className="w-4 h-4" />
            </div>
            <span className="ml-3">Tashu</span>
          </div>
        )}
      </div>
    </div>
  );
}
