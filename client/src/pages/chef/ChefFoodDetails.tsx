import React from "react";
import { ChevronLeft, MapPin, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChefFoodDetails: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-[80vh] rounded-3xl p-6">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-slate-800" />
        </button>
        <h2 className="text-xl font-bold text-slate-800">Food Details</h2>
        <button className="text-orange-500 text-sm font-bold uppercase hover:text-orange-600">
          Edit
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative">
          <div className="w-full h-80 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Chicken Thai Biryani"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Tags */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
            <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-slate-800 text-xs font-bold shadow-sm">
              Breakfast
            </span>
            {/* Pagination dots (mock) */}
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-white opacity-100"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
            </div>
            <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-slate-800 text-xs font-bold shadow-sm">
              Delivery
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-2xl font-bold text-slate-800">
              Chicken Thai Biriyani
            </h1>
            <span className="text-2xl font-bold text-slate-800">$60</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-400 mb-8">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>Kentucky 39495</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
              <span className="text-orange-500 font-bold">4.9</span>
              <span>(10 Reviews)</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">
              INGRIDENTS
            </h3>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {[
                { name: "Salt", icon: "🧂" },
                { name: "Chicken", icon: "🍗" },
                { name: "Onion", icon: "🧅" },
                { name: "Garlic", icon: "🧄" },
                { name: "Peppers", icon: "🌶️" },
              ].map((ing, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 min-w-[60px]"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center text-xl">
                    {ing.icon}
                  </div>
                  <span className="text-xs text-slate-800 font-medium">
                    {ing.name}
                  </span>
                  <span className="text-[10px] text-gray-400">(200g)</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">
              Description
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
              in vel, mattis et amet dui mauris turpis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefFoodDetails;
