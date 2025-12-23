import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, ShoppingBag, List, User, Bell } from "lucide-react";

const ChefBottomNav: React.FC = () => {
  const navItems = [
    { path: "/chef/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/chef/orders", icon: ShoppingBag, label: "Orders" },
    { path: "/chef/add-item", icon: Bell, label: "Add" },
    { path: "/chef/menu", icon: List, label: "Menu" },
    { path: "/chef/profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 md:hidden z-50">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => {
          if (item.label === "Add") {
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-center w-12 h-12 rounded-full -mt-6 shadow-lg ${
                    isActive
                      ? "bg-orange-600 text-white"
                      : "bg-orange-500 text-white"
                  }`
                }
              >
                <span className="text-2xl font-light">+</span>
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
                    ? "text-orange-500 bg-orange-50"
                    : "text-gray-400 hover:text-gray-600"
                }`
              }
            >
              <item.icon className="w-6 h-6" />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default ChefBottomNav;
