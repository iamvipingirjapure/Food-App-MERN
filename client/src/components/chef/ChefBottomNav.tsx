import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, List, User, Bell, Plus } from "lucide-react";

const ChefBottomNav: React.FC = () => {
  const navItems = [
    { path: "/chef/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/chef/menu", icon: List, label: "Menu" },
    { path: "/chef/add-item", icon: Plus, label: "Add" },
    { path: "/chef/messages", icon: Bell, label: "Notifications" },
    { path: "/chef/profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="fixed bottom-8 left-6 right-6 bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-2 py-4 md:hidden z-50">
      <div className="flex justify-between items-center px-2">
        {navItems.map((item) => {
          if (item.label === "Add") {
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-center w-12 h-12 rounded-full border transition-all ${
                    isActive
                      ? "bg-orange-50 border-orange-200 text-orange-500"
                      : "bg-orange-50 border-orange-200 text-orange-500 hover:scale-105"
                  }`
                }
              >
                <item.icon className="w-6 h-6" />
              </NavLink>
            );
          }

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `p-2 rounded-xl transition-colors ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-gray-600"
                }`
              }
            >
              <div className="relative p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <item.icon className="w-6 h-6" />
                {item.label === "Notifications" && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                )}
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default ChefBottomNav;
