import React, { useState } from "react";

const ORDER_DATA = [
  {
    id: "32053",
    name: "Chicken Thai Biryani",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    price: 60,
    items: "Chicken Thai Biryani",
    status: "pending",
  },
  {
    id: "15253",
    name: "Chicken Bhuna",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    price: 30,
    items: "Chicken Bhuna",
    status: "pending",
  },
  {
    id: "23200",
    name: "Vegetarian Poutine",
    image:
      "https://images.unsplash.com/photo-1582169505937-b9992cb01e51?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    price: 35,
    items: "Vegetarian Poutine",
    status: "pending",
  },
  {
    id: "53241",
    name: "Turkey Bacon Strips",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25bf6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    price: 45,
    items: "Turkey Bacon Strips",
    status: "pending",
  },
];

const ChefOrders: React.FC = () => {
  const [orders, setOrders] = useState(ORDER_DATA);

  const handleAction = (id: string, action: "done" | "cancel") => {
    console.log(`Order ${id} marked as ${action}`);
    // In real app, make API call
    setOrders(orders.filter((o) => o.id !== id));
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-xl font-bold text-slate-800">Running Orders</h2>
        <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded-full">
          {orders.length}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-4 rounded-3xl shadow-sm border border-slate-50 flex gap-4 hover:shadow-md transition-shadow"
          >
            <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
              <img
                src={order.image}
                alt={order.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 py-1 min-w-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base truncate pr-2">
                    {order.name}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">ID: {order.id}</p>
                </div>
                <span className="font-bold text-slate-800">${order.price}</span>
              </div>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleAction(order.id, "done")}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-2 rounded-xl transition-colors"
                >
                  Done
                </button>
                <button
                  onClick={() => handleAction(order.id, "cancel")}
                  className="flex-1 bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 text-xs font-bold py-2 rounded-xl transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefOrders;
