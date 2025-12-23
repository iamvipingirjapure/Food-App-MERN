import React from "react";
import {
  User,
  Settings,
  Clock,
  Star,
  LogOut,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChefProfile: React.FC = () => {
  const navigate = useNavigate();

  const handleWithdraw = () => {
    navigate("/chef/withdraw/success");
  };

  return (
    <div className="bg-white min-h-[80vh] rounded-3xl p-6">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors mr-4"
        >
          <ChevronLeft className="w-5 h-5 text-orange-500" />
        </button>
        <h2 className="text-xl font-bold text-gray-400">My Profile</h2>
      </div>

      <div className="bg-orange-500 rounded-3xl p-8 text-center text-white shadow-xl shadow-orange-200 mb-8 relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-orange-100 text-sm mb-1 font-medium">
            Available Balance
          </p>
          <h2 className="text-4xl font-bold mb-6">$500.00</h2>

          <button
            onClick={handleWithdraw}
            className="bg-transparent border border-white/50 text-white px-8 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Withdraw
          </button>
        </div>
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
      </div>

      <div className="space-y-4">
        <button className="w-full flex items-center justify-between bg-gray-50 p-4 rounded-2xl hover:bg-gray-100 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm">
              <User className="w-5 h-5" />
            </div>
            <span className="font-bold text-slate-700">Personal Info</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        <button className="w-full flex items-center justify-between bg-gray-50 p-4 rounded-2xl hover:bg-gray-100 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-500 shadow-sm">
              <Settings className="w-5 h-5" />
            </div>
            <span className="font-bold text-slate-700">Settings</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        <button className="w-full flex items-center justify-between bg-gray-50 p-4 rounded-2xl hover:bg-gray-100 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-orange-400 shadow-sm">
              <Clock className="w-5 h-5" />
            </div>
            <span className="font-bold text-slate-700">Withdrawal History</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        <button className="w-full flex items-center justify-between bg-gray-50 p-4 rounded-2xl hover:bg-gray-100 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-cyan-400 shadow-sm">
              <div className="font-bold text-xs border-2 border-cyan-400 rounded px-0.5">
                12
              </div>
            </div>
            <span className="font-bold text-slate-700">Number of Orders</span>
          </div>
          <span className="text-gray-400 text-sm font-medium">29K</span>
        </button>

        <button
          onClick={() => navigate("/chef/reviews")}
          className="w-full flex items-center justify-between bg-gray-50 p-4 rounded-2xl hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-cyan-500 shadow-sm">
              <Star className="w-5 h-5" />
            </div>
            <span className="font-bold text-slate-700">User Reviews</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        <button className="w-full flex items-center justify-between bg-gray-50 p-4 rounded-2xl hover:bg-gray-100 transition-colors mt-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-red-500 shadow-sm">
              <LogOut className="w-5 h-5" />
            </div>
            <span className="font-bold text-slate-700">Log Out</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default ChefProfile;
