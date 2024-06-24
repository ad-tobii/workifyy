import { useState } from "react";
import { FaBell } from "react-icons/fa";

type NotificationType = {
  id: number;
  message: string;
  timestamp: Date;
};

const Notification = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [notifications] = useState<NotificationType[]>([
    {
      id: 1,
      message: "Notification 1",
      timestamp: new Date("2024-06-01T10:00:00"),
    },
    {
      id: 2,
      message: "Notification 2",
      timestamp: new Date("2024-06-02T10:00:00"),
    },
    {
      id: 3,
      message: "Notification 3",
      timestamp: new Date("2024-06-03T10:00:00"),
    },
  ]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setTimeout(() => setIsHovered(false), 300)}
    >
      <button className="hover:text-[#32cd32] flex items-center bg-zinc-950 px-4 py-2 text-lg text-white">
        <FaBell size={20} className="mr-2" />
        Notifications
      </button>
      {isHovered && (
        <div className="absolute right-0 z-10 mt-2 w-80 origin-top-right transform overflow-hidden rounded-md border border-black bg-[#1e1e23] shadow-lg transition duration-300 ease-in-out">
          <div className="p-4">
            {notifications
              .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
              .map((notification) => (
                <div
                  key={notification.id}
                  className="border-b border-gray-200 p-4 transition duration-150 ease-in-out last:border-b-0 hover:bg-gray-100"
                >
                  <p className="text-md font-semibold text-white">
                    {notification.message}
                  </p>
                  <small className="text-sm text-gray-500">
                    {notification.timestamp.toLocaleString()}
                  </small>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
