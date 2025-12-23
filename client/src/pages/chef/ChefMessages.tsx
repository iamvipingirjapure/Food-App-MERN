import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MOCK_MESSAGES = [
  {
    id: 1,
    name: "Royal Parvej",
    message: "Sounds awesome!",
    time: "19:37",
    unread: 1,
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Cameron Williamson",
    message: "Ok, Just hurry up little bit...",
    time: "19:37",
    unread: 2,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Ralph Edwards",
    message: "Thanks dude.",
    time: "19:37",
    unread: 0,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Cody Fisher",
    message: "How is going...?",
    time: "19:37",
    unread: 0,
    avatar:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    name: "Eleanor Pena",
    message: "Thanks for the awesome food man...!",
    time: "19:37",
    unread: 0,
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const NOTIFICATIONS = [
  {
    id: 1,
    name: "Tanbir Ahmed",
    action: "Placed a new order",
    time: "20 min ago",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    foodImage:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 2,
    name: "Salim Smith",
    action: "left a 5 star review",
    time: "20 min ago",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    foodImage:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 3,
    name: "Royal Bengol",
    action: "agreed to cancel",
    time: "20 min ago",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    foodImage:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 4,
    name: "Pabel Vuiya",
    action: "Placed a new order",
    time: "20 min ago",
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    foodImage:
      "https://images.unsplash.com/photo-1604908176997-125f25bf6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
];

const ChefMessages: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Notifications" | "Messages">(
    "Notifications"
  );
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-[80vh] rounded-3xl p-6">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors mr-4"
        >
          <ChevronLeft className="w-5 h-5 text-orange-500" />
        </button>
        <h2 className="md:text-xl font-bold text-slate-800">{activeTab}</h2>
      </div>

      <div className="flex border-b border-gray-100 mb-6">
        <button
          onClick={() => setActiveTab("Notifications")}
          className={`flex-1 py-3 text-sm font-bold transition-colors relative ${
            activeTab === "Notifications" ? "text-orange-500" : "text-gray-400"
          }`}
        >
          Notifications
          {activeTab === "Notifications" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-t-full"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab("Messages")}
          className={`flex-1 py-3 text-sm font-bold transition-colors relative ${
            activeTab === "Messages" ? "text-orange-500" : "text-gray-400"
          }`}
        >
          Messages ({MOCK_MESSAGES.length})
          {activeTab === "Messages" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-t-full"></div>
          )}
        </button>
      </div>

      <div className="space-y-6">
        {activeTab === "Messages" &&
          MOCK_MESSAGES.map((msg) => (
            <div
              key={msg.id}
              className="flex gap-4 items-center group cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-colors"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden relative">
                <img
                  src={msg.avatar}
                  alt={msg.name}
                  className="w-full h-full object-cover"
                />
                {msg.unread > 0 && (
                  <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-slate-800 text-sm">
                    {msg.name}
                  </h4>
                  <span className="text-gray-400 text-xs">{msg.time}</span>
                </div>
                <p className="text-gray-500 text-sm truncate pr-2 group-hover:text-gray-700">
                  {msg.message}
                </p>
              </div>
              {msg.unread > 0 && (
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {msg.unread}
                </div>
              )}
            </div>
          ))}

        {activeTab === "Notifications" &&
          NOTIFICATIONS.map((notif) => (
            <div
              key={notif.id}
              className="flex gap-4 items-center border-b border-gray-50 pb-4 last:border-0"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                <img
                  src={notif.avatar}
                  alt={notif.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-800">
                  <span className="font-bold">{notif.name}</span>{" "}
                  <span className="text-gray-500">{notif.action}</span>
                </p>
                <span className="text-xs text-gray-400 mt-1 block">
                  {notif.time}
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                <img
                  src={notif.foodImage}
                  alt="Food"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChefMessages;
