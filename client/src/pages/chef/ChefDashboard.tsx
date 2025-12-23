import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [period, setPeriod] = useState<"Daily" | "Weekly" | "Monthly">("Daily");
  const [chartType, setChartType] = useState<"line" | "bar">("line");
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
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-gray-500 text-sm mb-1">Total Revenue</p>
              <h3 className="text-2xl font-bold text-gray-800">
                ${totalRevenue.toLocaleString()}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              {/* Chart Type Toggle */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setChartType("line")}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                    chartType === "line"
                      ? "bg-white text-orange-500 shadow-sm"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Line
                </button>
                <button
                  onClick={() => setChartType("bar")}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                    chartType === "bar"
                      ? "bg-white text-orange-500 shadow-sm"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Bar
                </button>
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
          </div>

          {chartType === "line" && (
            <>
              <div className="relative h-48 md:h-64">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 600 200"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient
                      id="lineGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {(() => {
                    const data = CHART_DATA[period];
                    const maxVal = Math.max(...data.map((d) => d.value));
                    const minVal = Math.min(...data.map((d) => d.value));
                    const range = maxVal - minVal || 1;

                    const width = 600;
                    const height = 200;
                    const paddingY = 20;
                    const paddingX = 20;

                    const chartWidth = width - paddingX * 2;
                    const chartHeight = height - paddingY * 2;

                    const points = data.map((item, i) => {
                      const x = paddingX + (i / (data.length - 1)) * chartWidth;
                      const normalizedValue = (item.value - minVal) / range;
                      const y =
                        height - paddingY - normalizedValue * chartHeight;
                      return { x, y, value: item.value };
                    });

                    // Create smooth curve using cubic bezier curves
                    const createSmoothPath = () => {
                      if (points.length === 0) return "";
                      if (points.length === 1)
                        return `M ${points[0].x} ${points[0].y}`;

                      let path = `M ${points[0].x} ${points[0].y}`;

                      for (let i = 0; i < points.length - 1; i++) {
                        const current = points[i];
                        const next = points[i + 1];
                        const previous = i > 0 ? points[i - 1] : current;
                        const afterNext =
                          i < points.length - 2 ? points[i + 2] : next;

                        // Calculate control points for smooth curves
                        const cp1x = current.x + (next.x - previous.x) / 6;
                        const cp1y = current.y + (next.y - previous.y) / 6;
                        const cp2x = next.x - (afterNext.x - current.x) / 6;
                        const cp2y = next.y - (afterNext.y - current.y) / 6;

                        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
                      }
                      return path;
                    };

                    const linePath = createSmoothPath();
                    const fillPath = `${linePath} L ${
                      width - paddingX
                    } ${height} L ${paddingX} ${height} Z`;

                    return (
                      <g>
                        {/* Gradient Fill */}
                        <path
                          d={fillPath}
                          fill="url(#lineGradient)"
                          className="transition-all duration-300"
                        />

                        {/* Line */}
                        <path
                          d={linePath}
                          fill="none"
                          stroke="#FF6B35"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-all duration-300"
                        />

                        {/* Interactive Points */}
                        {points.map((point, i) => (
                          <g key={i} className="cursor-pointer group">
                            <circle
                              cx={point.x}
                              cy={point.y}
                              r="5"
                              fill="white"
                              stroke="#FF6B35"
                              strokeWidth="2.5"
                              className="opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md"
                            />
                            {/* Tooltip */}
                            <g className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <rect
                                x={point.x - 28}
                                y={point.y - 45}
                                width="56"
                                height="28"
                                rx="6"
                                fill="#1F2937"
                                className="drop-shadow-lg"
                              />
                              <text
                                x={point.x}
                                y={point.y - 24}
                                textAnchor="middle"
                                fill="white"
                                fontSize="13"
                                fontWeight="600"
                              >
                                ${point.value}
                              </text>
                            </g>
                          </g>
                        ))}
                      </g>
                    );
                  })()}
                </svg>
              </div>

              {/* X-axis labels */}
              <div className="flex justify-between mt-4 text-xs text-gray-400 font-medium">
                {CHART_DATA[period].map((item, i) => (
                  <span key={i} className="text-center w-full">
                    {item.label.slice(0, 3)}
                  </span>
                ))}
              </div>
            </>
          )}

          {chartType === "bar" && (
            <>
              <div className="h-48 md:h-64 flex items-end justify-between gap-2 px-2 relative">
                {CHART_DATA[period].map((item, i) => {
                  const maxVal = Math.max(
                    ...CHART_DATA[period].map((d) => d.value)
                  );
                  const heightPercent = maxVal
                    ? (item.value / maxVal) * 100
                    : 0;
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
            </>
          )}
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
              <button
                className="text-orange-500 text-sm font-medium hover:underline"
                onClick={() => navigate("/chef/reviews")}
              >
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
