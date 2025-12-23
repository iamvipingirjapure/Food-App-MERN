import React, { useState } from "react";
import { Star, MoreHorizontal, ChevronLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const MENU_ITEMS = [
  {
    id: 1,
    name: "Chicken Thai Biryani",
    category: "Breakfast",
    price: 60,
    rating: 4.9,
    reviews: 10,
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Chicken Bhuna",
    category: "Breakfast",
    price: 30,
    rating: 4.9,
    reviews: 10,
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "Mazalichiken Halim",
    category: "Breakfast",
    price: 25,
    rating: 4.9,
    reviews: 10,
    image:
      "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    name: "Vegetarian Poutine",
    category: "Lunch",
    price: 35,
    rating: 4.5,
    reviews: 8,
    image:
      "https://images.unsplash.com/photo-1582169505937-b9992cb01e51?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
];

const CATEGORIES = ["All", "Breakfast", "Lunch", "Dinner"];

const ChefMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-[80vh] rounded-3xl p-6 relative">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors mr-4"
        >
          <ChevronLeft className="w-5 h-5 text-orange-500" />
        </button>
        <h2 className="md:text-xl font-bold text-slate-800">My Food List</h2>
      </div>

      {/* Category Filter */}
      <div className="flex justify-between md:justify-start md:gap-8 border-b border-gray-100 mb-6 pb-2 overflow-x-auto scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-sm font-medium whitespace-nowrap pb-2 transition-colors relative ${
              activeCategory === cat
                ? "text-orange-500"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {cat}
            {activeCategory === cat && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full"></div>
            )}
          </button>
        ))}
      </div>

      <p className="text-gray-400 text-sm mb-6">
        Total {MENU_ITEMS.length} Items
      </p>

      <div className="space-y-6">
        {MENU_ITEMS.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 items-center group relative cursor-pointer"
            onClick={() => navigate(`/chef/menu/${item.id}`)}
          >
            <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-slate-800 text-sm sm:text-base truncate group-hover:text-orange-500 transition-colors">
                  {item.name}
                </h3>
                <button className="text-gray-400">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              <div className="flex gap-2 mb-2">
                <span className="bg-orange-50 text-orange-500 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide">
                  {item.category}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1 text-xs">
                  <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
                  <span className="text-orange-500 font-bold">
                    {item.rating}
                  </span>
                  <span className="text-gray-400">({item.reviews} Review)</span>
                </div>
                <div className="text-right">
                  <span className="block font-bold text-slate-800">
                    ${item.price}
                  </span>
                  <span className="text-[10px] text-gray-400 uppercase">
                    Pick Up
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/chef/add-item"
        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 bg-white border-2 border-orange-500 text-orange-500 w-14 h-14 rounded-full flex items-center justify-center text-3xl font-light shadow-lg hover:bg-orange-500 hover:text-white transition-all z-20"
      >
        +
      </Link>
    </div>
  );
};

export default ChefMenu;
