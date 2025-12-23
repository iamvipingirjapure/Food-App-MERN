import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, ShoppingBag, List, Bell, Menu } from "lucide-react";

const ChefHeader: React.FC = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white md:bg-gray-50 pt-6 pb-4 px-4 sticky top-0 z-40">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex-shrink-0">
            <img
              src="/logo.png"
              alt="FoodApp Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm md:text-md">Location</span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-800 md:text-md">
                Lab Office
              </span>
            </div>
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
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/chef/messages")}
            className="relative p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors hidden md:block"
          >
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          <div className="flex gap-2 overflow-hidden">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
              <NavLink to="/chef/profile">
                <img
                  src="https://avatars.githubusercontent.com/u/207406250?s=400&u=e3856dbfec14c5d91e9ab945d505072c3418a16a&v=4"
                  alt="Chef"
                />
              </NavLink>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 transition-colors rounded-full bg-gray-200"
            >
              <Menu className="w-6 h-6 text-gray-800 " />
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="absolute top-20 right-4 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 md:hidden overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-gray-100 transform rotate-45" />
            <nav className="py-2 relative">
              <NavLink
                to="/chef/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-orange-50 text-orange-500"
                      : "text-gray-600 hover:bg-gray-50"
                  }`
                }
              >
                <LayoutDashboard className="w-5 h-5" />
                Dashboard
              </NavLink>
              <NavLink
                to="/chef/orders"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-orange-50 text-orange-500"
                      : "text-gray-600 hover:bg-gray-50"
                  }`
                }
              >
                <ShoppingBag className="w-5 h-5" />
                Orders
              </NavLink>
              <NavLink
                to="/chef/menu"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-orange-50 text-orange-500"
                      : "text-gray-600 hover:bg-gray-50"
                  }`
                }
              >
                <List className="w-5 h-5" />
                Menu
              </NavLink>

              <div className="border-t border-gray-100 my-2" />

              <NavLink
                to="/chef/messages"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-orange-50 text-orange-500"
                      : "text-gray-600 hover:bg-gray-50"
                  }`
                }
              >
                <Bell className="w-5 h-5" />
                Notifications
              </NavLink>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default ChefHeader;
