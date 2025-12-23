import React from "react";
import { ChevronLeft, MoreHorizontal, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const REVIEWS = [
  {
    id: 1,
    name: "Great Food and Service",
    rating: 5,
    date: "20/12/2020",
    message:
      "This Food so tasty & delicious. Breakfast so fast Delivered in my place. Chef is very friendly. I'm really like chef for Home Food Order. Thanks.",
    author: {
      name: "Jhone Doe",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    name: "Awesome and Nice",
    rating: 4,
    date: "20/12/2020",
    message:
      "This Food so tasty & delicious. Breakfast so fast Delivered in my place.",
    author: {
      name: "Jhone Doe",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    name: "Awesome and Nice",
    rating: 4,
    date: "20/12/2020",
    message: "This Food so tasty & delicious.",
    author: {
      name: "Jhone Doe",
      avatar:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    name: "Awesome and Nice",
    rating: 4,
    date: "20/12/2020",
    message:
      "This Food so tasty & delicious. Breakfast so fast Delivered in my place.",
    author: {
      name: "Jhone Doe",
      avatar:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const ChefReviews: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-[80vh] rounded-3xl p-6">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors mr-4"
        >
          <ChevronLeft className="w-5 h-5 text-slate-800" />
        </button>
        <h2 className="text-xl font-bold text-slate-800">Reviews</h2>
      </div>

      <div className="space-y-6">
        {REVIEWS.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl p-4 border border-gray-50 shadow-sm"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={review.author.avatar}
                    alt="Author"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">{review.date}</p>
                  <h3 className="font-bold text-slate-800 text-sm">
                    {review.name}
                  </h3>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < review.rating
                            ? "text-orange-500 fill-orange-500"
                            : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <button className="text-gray-300">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            <div className="ml-14">
              <p className="text-gray-500 text-sm leading-relaxed">
                {review.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefReviews;
