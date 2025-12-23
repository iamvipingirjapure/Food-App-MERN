import React, { useState } from "react";
import { Star } from "lucide-react";

const CHART_DATA = {
  Daily: [
    { label: "Mon", value: 120 },
    { label: "Tue", value: 240 },
    { label: "Wed", value: 180 },
    { label: "Thu", value: 320 },
    { label: "Fri", value: 450 },
    { label: "Sat", value: 380 },
    { label: "Sun", value: 210 },
  ],
  Weekly: [
    { label: "Wk 1", value: 1200 },
    { label: "Wk 2", value: 1800 },
    { label: "Wk 3", value: 1400 },
    { label: "Wk 4", value: 2200 },
  ],
  Monthly: [
    { label: "Jan", value: 5000 },
    { label: "Feb", value: 4200 },
    { label: "Mar", value: 6800 },
    { label: "Apr", value: 7500 },
    { label: "May", value: 6200 },
    { label: "Jun", value: 8100 },
  ],
};

const ChefDashboard: React.FC = () => {
  const [period, setPeriod] = useState<"Daily" | "Weekly" | "Monthly">("Daily");
  const [selectedData, setSelectedData] = useState<{
    label: string;
    value: number;
  } | null>(null);

  const totalRevenue = CHART_DATA[period].reduce(
    (acc, curr) => acc + curr.value,
    0
  );
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide md:grid md:grid-cols-4 md:overflow-visible">
        <div className="min-w-[160px] bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-shadow">
          <h3 className="text-4xl font-bold text-gray-800 mb-1">20</h3>
          <p className="text-gray-500 text-sm font-medium">RUNNING ORDERS</p>
        </div>
        <div className="min-w-[160px] bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-shadow">
          <h3 className="text-4xl font-bold text-gray-800 mb-1">05</h3>
          <p className="text-gray-500 text-sm font-medium">ORDER REQUEST</p>
        </div>
        <div className="min-w-[160px] bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-shadow">
          <h3 className="text-4xl font-bold text-gray-800 mb-1">105</h3>
          <p className="text-gray-500 text-sm font-medium">TOTAL ORDERS</p>
        </div>
        <div className="min-w-[160px] bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-shadow">
          <h3 className="text-4xl font-bold text-gray-800 mb-1">$2.2k</h3>
          <p className="text-gray-500 text-sm font-medium">TOTAL REVENUE</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-gray-500 text-sm mb-1">Revenue</p>
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedData
                  ? `$${selectedData.value}`
                  : `$${totalRevenue.toLocaleString()}`}
              </h3>
              {selectedData && (
                <p className="text-xs text-orange-500 font-medium">
                  For {selectedData.label}
                </p>
              )}
            </div>
            <select
              value={period}
              onChange={(e) => {
                setPeriod(e.target.value as "Daily" | "Weekly" | "Monthly");
                setSelectedData(null);
              }}
              className="bg-gray-50 border border-gray-200 text-gray-600 text-xs rounded-lg px-2 py-1 outline-none cursor-pointer"
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>

          <div className="h-48 md:h-64 flex items-end justify-between gap-2 px-2 relative">
            {CHART_DATA[period].map((item, i) => {
              const maxVal = Math.max(
                ...CHART_DATA[period].map((d) => d.value)
              );
              const heightPercent = maxVal ? (item.value / maxVal) * 100 : 0;
              const isSelected = selectedData?.label === item.label;

              return (
                <div
                  key={i}
                  className="w-full h-full flex items-end relative group cursor-pointer"
                  onClick={() => setSelectedData(item)}
                >
                  <div
                    style={{ height: `${heightPercent}%` }}
                    className={`w-full rounded-t-lg transition-all duration-300 relative ${
                      isSelected
                        ? "bg-orange-500 shadow-lg shadow-orange-200"
                        : "bg-orange-100 hover:bg-orange-300"
                    }`}
                  >
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 font-medium">
                      ${item.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between mt-4 text-xs text-gray-400 font-medium">
            {CHART_DATA[period].map((item, i) => (
              <span key={i} className="text-center w-full">
                {item.label.slice(0, 3)}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800 text-lg">
                Popular Items This Week
              </h3>
              <button className="text-orange-500 text-sm font-medium hover:underline">
                See All
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {[
                {
                  name: "Butter Chicken",
                  image:
                    "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                },
                {
                  name: "Biryani",
                  image:
                    "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-32 rounded-xl overflow-hidden mb-3 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                      <span className="text-xs font-bold text-gray-800">
                        $25
                      </span>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-xs mt-1">120 Orders</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-gray-800 text-lg">Reviews</h3>
                <div className="flex items-center gap-1 bg-orange-100 px-2 py-0.5 rounded-lg">
                  <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
                  <span className="text-orange-600 text-xs font-bold">4.9</span>
                </div>
              </div>
              <button className="text-orange-500 text-sm font-medium hover:underline">
                See Details
              </button>
            </div>

            <p className="text-gray-500 text-sm">
              Total 20 Reviews for this week.
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex gap-3 items-start border-t border-gray-50 pt-3">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <div>
                  <p className="text-xs font-bold text-gray-900">John Doe</p>
                  <p className="text-xs text-gray-500">
                    "Great food, loved the packaging!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDashboard;
