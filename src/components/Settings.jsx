import { useState } from "react";
import { FiSettings, FiBell, FiUser } from "react-icons/fi";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <FiSettings className="text-blue-600" /> Settings
      </h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow p-4 space-y-4">
        {/* Notifications Setting */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FiBell className="text-gray-700" />
            <span className="text-gray-800">Enable Notifications</span>
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${
              notifications ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                notifications ? "translate-x-5" : ""
              }`}
            ></div>
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FiUser className="text-gray-700" />
            <span className="text-gray-800">Profile Visibility</span>
          </div>
          <button
            disabled
            className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 "
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
