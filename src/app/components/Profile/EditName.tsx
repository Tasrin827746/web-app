"use client";

export default function EditNameModal({
  newName,
  setNewName,
  handleSaveName,
  setIsEditingName,
}: {
  newName: string;
  setNewName: (value: string) => void;
  handleSaveName: () => void;
  setIsEditingName: (value: boolean) => void;
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-1/2">
        <h2 className="text-lg font-semibold mb-3 text-black">
          Personal Information
        </h2>

        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full mt-1 px-3 py-1 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-400"
          />
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button onClick={() => setIsEditingName(false)} className="px-4 py-2 bg-gray-300 rounded-lg">
            Cancel
          </button>
          <button onClick={handleSaveName} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
