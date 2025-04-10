import { useState } from "react";

export default function TasksSettings() {
  const [dailyNotification, setDailyNotification] = useState(true);
  const [badgeCount, setBadgeCount] = useState(true);
  const [badgeOption, setBadgeOption] = useState("overdue");
  const [alertTime, setAlertTime] = useState("30 minutes before");

  return (
    <div className="p-2 bg-gray-100">
      <h3 className="text-xl font-medium mb-4">Tasks</h3>

      {/* Daily Notification */}
      <label className="flex items-center space-x-2">
        <input type="checkbox" checked={dailyNotification} onChange={() => setDailyNotification(!dailyNotification)} />
        <span>Daily notification</span>
      </label>
      <p className="text-gray-500 text-sm ml-6">A daily reminder of recent tasks owned by you.</p>

      {/* Badge Count */}
      <label className="flex items-center space-x-2 mt-4">
        <input type="checkbox" checked={badgeCount} onChange={() => setBadgeCount(!badgeCount)} />
        <span>Badge count</span>
      </label>
      <p className="text-gray-500 text-sm ml-6">Select what the badge count represents.</p>

      {/* Badge Count Options */}
      <div className="ml-6 mt-2 space-y-2">
        <label className="flex items-center space-x-2">
          <input type="radio" name="badge" value="overdue" checked={badgeOption === "overdue"} onChange={() => setBadgeOption("overdue")} />
          <span>Overdue tasks</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="badge" value="due_today" checked={badgeOption === "due_today"} onChange={() => setBadgeOption("due_today")} />
          <span>Tasks already overdue or due today</span>
        </label>
      </div>

      {/* Default Alert Time */}
      <div className="mt-6">
        <p className="font-medium">Task default alert time</p>
        <p className="text-gray-500 text-sm">Set default alert time for new tasks</p>
        <select className="mt-2 p-2 border border-gray-300 outline-none bg-transparent rounded-lg w-1/2" value={alertTime} onChange={(e) => setAlertTime(e.target.value)}>
          <option>5 minutes before</option>
          <option>10 minutes before</option>
          <option>15 minutes before</option>
          <option>30 minutes before</option>
          <option>1 hour before</option>
          <option>1 day before</option>
        </select>
      </div>
    </div>
  );
}
