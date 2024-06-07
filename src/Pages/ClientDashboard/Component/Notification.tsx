import { useState } from "react";

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
      <button className="bg-gray-800 px-4 py-2 text-lg text-white">
        Notifications
      </button>
      {isHovered && (
        <div className="absolute right-0 z-10 mt-2 w-80 origin-top-right scale-95 transform overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg transition-all  ease-in-out">
          <div className="p-4">
            {notifications
              .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
              .map((notification) => (
                <div
                  key={notification.id}
                  className="border-b p-2 last:border-b-0 hover:bg-gray-100"
                >
                  <p>{notification.message}</p>
                  <small className="text-gray-500">
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
