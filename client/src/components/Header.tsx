import React, { useState } from "react";
import { Menu, ShoppingBag, ChevronDown, User, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="mb-6 relative z-50">
      <div className="flex justify-between items-center mb-4">
        <div className="bg-white p-2 rounded-full shadow-sm">
          <Menu className="w-6 h-6 text-gray-700" />
        </div>

        <div className="flex flex-col items-center">
          <span className="text-xs text-orange-500 font-bold tracking-wider">
            DELIVER TO
          </span>
          <div className="flex items-center gap-1">
            <span className="text-gray-700 font-medium text-sm">Home</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
            >
              <User className="w-6 h-6 text-gray-700" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 top-12 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden z-50 transform origin-top-right transition-all">
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <LogIn className="w-4 h-4" />
                  Log In
                </Link>
              </div>
            )}
          </div>

          <div className="bg-dark p-2 rounded-full relative">
            <ShoppingBag className="w-6 h-6 text-white" />
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-slate-100">
              2
            </span>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-gray-600 text-lg">
          Hey User,{" "}
          <span className="text-black font-bold">Good Afternoon!</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
