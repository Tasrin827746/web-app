import { useState } from "react";
import { Plus } from "lucide-react";

const NewGroup = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [groupName, setGroupName] = useState("New Group");

  return (
    <div className="relative">
      {isEditing ? (
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          onBlur={() => setIsEditing(false)}
          autoFocus
          className="w-full p-2 border border-blue-500 rounded-md outline-none"
        />
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="flex items-center w-full text-left p-2 text-blue-600 hover:bg-gray-100 rounded-md"
        >
          <Plus size={16} />
          <span className="ml-2">{groupName}</span>
        </button>
      )}
    </div>
  );
};

export default NewGroup;
