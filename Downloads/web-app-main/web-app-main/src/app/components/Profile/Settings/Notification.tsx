import { useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";

export default function NotificationsSettings() {
  const [messageNotifications, setMessageNotifications] = useState(true);
  const [allMessages, setAllMessages] = useState(true);
  const [notifyMutedChats, setNotifyMutedChats] = useState(true);
  const [notifyCollapsedChats, setNotifyCollapsedChats] = useState(true);
  const [notifyAlways, setNotifyAlways] = useState(true);
  const [muteDuringCalls, setMuteDuringCalls] = useState(false);
  const [notificationSound, setNotificationSound] = useState(true);
  const [bannerNotification, setBannerNotification] = useState(false);

  // State for dropdown selections
  // const [messageSound, setMessageSound] = useState("Messages");
  // const [mentionSound, setMentionSound] = useState("@Me messages");
  // const [buzzSound, setBuzzSound] = useState("Buzz messages");
  // const [starredSound, setStarredSound] = useState("Messages from starred contacts");

  return (
    <div className="p-2 bg-gray-100">
      <h3 className="text-xl font-medium mb-4">Notifications</h3>

      {/* Message Notifications */}
      <div className="flex flex-col space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={messageNotifications}
            onChange={() => setMessageNotifications(!messageNotifications)}
          />
          <span>Message notifications</span>
        </label>
        <div className="ml-6">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={allMessages}
              onChange={() => setAllMessages(!allMessages)}
              disabled={!messageNotifications}
            />
            <span>All new messages</span>
          </label>
          <div className="mt-6 space-y-3 text-sm text-gray-500">

  <div className="flex items-center">
    <input type="checkbox" className="mr-2" disabled />
    <p>Buzz messages</p>
  </div>

  <div className="flex items-center">
    <input type="checkbox" className="mr-2" disabled />
    <p>@Me messages</p>
  </div>

  <div className="flex items-center">
    <input type="checkbox" className="mr-2" disabled />
    <p>@All messages</p>
  </div>

  <div className="flex items-center">
    <input type="checkbox" className="mr-2" disabled />
    <p>Private messages</p>
  </div>

  <div className="flex items-center">
    <input type="checkbox" className="mr-2" disabled />
    <p>Messages from starred contacts</p>
  </div>
</div>

        </div>
      </div>

      {/* Notifications for Starred Contacts */}
      <div className="mt-6">
        <div className="mb-2">
        <h2>Notifications for starred contacts</h2>
        <p className="text-blue-600 text-sm cursor-pointer">View all starred contacts</p>
        </div>
        <label className="flex items-center space-x-2 mt-2">
          <input
            type="checkbox"
            checked={notifyMutedChats}
            onChange={() => setNotifyMutedChats(!notifyMutedChats)}
          />
          <span>Notify me of new messages in muted chats</span>
        </label>
        <label className="flex items-center space-x-2 mt-2">
          <input
            type="checkbox"
            checked={notifyCollapsedChats}
            onChange={() => setNotifyCollapsedChats(!notifyCollapsedChats)}
          />
          <span>Notify me of new messages in Collapsed Chats</span>
        </label>
        <label className="flex items-center space-x-2 mt-2">
          <input
            type="checkbox"
            checked={notifyAlways}
            onChange={() => setNotifyAlways(!notifyAlways)}
          />
          <span>Notify me, even when notifications are muted</span>
        </label>
      </div>

      {/* Turn Off During Calls */}
      <label className="flex items-center space-x-2 mt-6">
        <input
          type="checkbox"
          checked={muteDuringCalls}
          onChange={() => setMuteDuringCalls(!muteDuringCalls)}
        />
        <span>Turn off message notifications during calls and meetings</span>
      </label>

      {/* Notification Sounds */}
      <div className="mt-6">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={notificationSound}
            onChange={() => setNotificationSound(!notificationSound)}
          />
          <span>Notification sound</span>
        </label>
        <div className="mt-2 grid grid-cols-2 gap-4">
      {[
        "Messages",
        "@Me messages",
        "Buzz messages",
        "Messages from starred contacts",
      ].map((label, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-1 px-2 w-3/4 border border-gray-300 rounded-lg cursor-pointer"
        >
          <p className="text-gray-900">{label}</p>
          <IoIosPlayCircle className="text-blue-500" />
        </div>
      ))}
    </div>
      </div>

      {/* Banner Notifications */}
      <label className="flex items-center space-x-2 mt-6">
        <input
          type="checkbox"
          checked={bannerNotification}
          onChange={() => setBannerNotification(!bannerNotification)}
        />
        <span>Banner notification</span>
      </label>
    </div>
  );
}
