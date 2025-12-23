import React from "react";
import {
  Upload,
  X,
  ChevronLeft,
  ChevronRight,
  CloudUpload,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChefAddItem: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-[80vh] rounded-3xl p-6">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-slate-800" />
          </button>
          <h2 className="text-xl font-bold text-slate-800">Add New Items</h2>
        </div>
        <button className="text-orange-500 text-sm font-bold uppercase tracking-wider hover:text-orange-600">
          RESET
        </button>
      </div>

      <form className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
        <div className="space-y-8">
          <div>
            <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">
              Item Name
            </label>
            <input
              type="text"
              placeholder="Mazalichiken Halim"
              className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-slate-800 focus:outline-none focus:border-orange-500 placeholder-gray-300 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">
              Upload Photo/Video
            </label>
            <div className="flex gap-4">
              <div className="w-28 h-28 rounded-3xl overflow-hidden relative group shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-3 h-3 text-red-500" />
                </button>
              </div>
              <label className="w-28 h-28 rounded-3xl border border-dashed border-gray-200 flex flex-col items-center justify-center cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition-colors bg-white">
                <div className="bg-purple-100 p-2.5 rounded-full mb-2">
                  <CloudUpload className="w-5 h-5 text-purple-500" />
                </div>
                <span className="text-gray-400 text-xs font-medium">Add</span>
                <input type="file" className="hidden" />
              </label>
              <label className="w-28 h-28 rounded-3xl border border-dashed border-gray-200 flex flex-col items-center justify-center cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition-colors bg-white">
                <div className="bg-purple-100 p-2.5 rounded-full mb-2">
                  <CloudUpload className="w-5 h-5 text-purple-500" />
                </div>
                <span className="text-gray-400 text-xs font-medium">Add</span>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">
              Price
            </label>
            <input
              type="text"
              placeholder="$50"
              className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-slate-800 focus:outline-none focus:border-orange-500 placeholder-gray-300 shadow-sm"
            />
            <div className="flex gap-8 mt-6">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-6 h-6 rounded border border-orange-500 flex items-center justify-center bg-orange-500 transition-colors">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-500 text-sm font-medium group-hover:text-slate-800">
                  Pick up
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center transition-colors group-hover:border-gray-300"></div>
                <span className="text-gray-400 text-sm font-medium group-hover:text-gray-500">
                  Delivery
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">
              Ingredients
            </label>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-slate-800 text-sm font-bold">Basic</h4>
                <button
                  type="button"
                  className="text-xs text-gray-400 flex items-center gap-1 hover:text-orange-500"
                >
                  See All <ChevronRight className="w-3 h-3" />
                </button>
              </div>
              <div className="grid grid-cols-5 gap-4 text-center">
                {[
                  { name: "Salt", icon: "🧂", active: true },
                  { name: "Chicken", icon: "🍗", active: false },
                  { name: "Onion", icon: "🧅", active: true },
                  { name: "Garlic", icon: "🧄", active: false },
                  { name: "Peppers", icon: "🌶️", active: true },
                ].map((ing, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center text-xl transition-all ${
                        ing.active
                          ? "bg-orange-50 text-orange-500 border-2 border-orange-500"
                          : "bg-white border border-gray-100 text-gray-400 hover:border-orange-200 hover:text-orange-400"
                      }`}
                    >
                      {ing.icon}
                    </div>
                    <span
                      className={`text-xs ${
                        ing.active
                          ? "font-bold text-slate-800"
                          : "text-gray-400"
                      }`}
                    >
                      {ing.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-slate-800 text-sm font-bold">Fruit</h4>
                <button
                  type="button"
                  className="text-xs text-gray-400 flex items-center gap-1 hover:text-orange-500"
                >
                  See All <ChevronRight className="w-3 h-3" />
                </button>
              </div>
              <div className="grid grid-cols-5 gap-4 text-center">
                {[
                  { name: "Avocado", icon: "🥑", active: false },
                  { name: "Apple", icon: "🍎", active: false },
                  { name: "Blueberry", icon: "🫐", active: false },
                  { name: "Broccoli", icon: "🥦", active: false },
                  { name: "Orange", icon: "🍊", active: false },
                ].map((ing, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center text-xl transition-all ${
                        ing.active
                          ? "bg-orange-50 text-orange-500 border-2 border-orange-500"
                          : "bg-white border border-gray-100 text-gray-400 hover:border-orange-200 hover:text-orange-400"
                      }`}
                    >
                      {ing.icon}
                    </div>
                    <span
                      className={`text-xs ${
                        ing.active
                          ? "font-bold text-slate-800"
                          : "text-gray-400"
                      }`}
                    >
                      {ing.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">
              Details
            </label>
            <textarea
              className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-slate-800 focus:outline-none focus:border-orange-500 h-32 placeholder-gray-300 resize-none shadow-sm"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum in vel, mattis et amet dui mauris turpis."
            ></textarea>
          </div>

          <div className="pt-2">
            <button
              type="button"
              className="w-full bg-orange-500 text-white font-bold py-5 rounded-2xl hover:bg-orange-600 transition-colors uppercase tracking-widest shadow-lg shadow-orange-200 text-sm"
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChefAddItem;
