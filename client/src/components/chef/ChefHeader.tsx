import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  List,
  User,
  Bell,
} from "lucide-react";

const ChefHeader: React.FC = () => {
  return (
    <header className="bg-white md:bg-gray-50 pt-6 pb-4 px-4 sticky top-0 z-40">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm md:text-base">Location</span>
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-800 md:text-xl">
              Halal Lab Office
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 bg-white px-6 py-3 rounded-2xl shadow-sm">
          <NavLink
            to="/chef/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-2 text-sm font-medium ${
                isActive
                  ? "text-orange-500"
                  : "text-gray-600 hover:text-orange-500"
              }`
            }
          >
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </NavLink>
          <NavLink
            to="/chef/orders"
            className={({ isActive }) =>
              `flex items-center gap-2 text-sm font-medium ${
                isActive
                  ? "text-orange-500"
                  : "text-gray-600 hover:text-orange-500"
              }`
            }
          >
            <ShoppingBag className="w-4 h-4" /> Orders
          </NavLink>
          <NavLink
            to="/chef/menu"
            className={({ isActive }) =>
              `flex items-center gap-2 text-sm font-medium ${
                isActive
                  ? "text-orange-500"
                  : "text-gray-600 hover:text-orange-500"
              }`
            }
          >
            <List className="w-4 h-4" /> Menu
          </NavLink>
          <NavLink
            to="/chef/profile"
            className={({ isActive }) =>
              `flex items-center gap-2 text-sm font-medium ${
                isActive
                  ? "text-orange-500"
                  : "text-gray-600 hover:text-orange-500"
              }`
            }
          >
            <User className="w-4 h-4" /> Profile
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <button className="relative p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Chef"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 md:hidden">
        <h1 className="text-2xl font-bold text-gray-800">Welcome Back!</h1>
      </div>
    </header>
  );
};

export default ChefHeader;
