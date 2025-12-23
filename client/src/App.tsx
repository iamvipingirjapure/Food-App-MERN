import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryList from "./components/CategoryList";
import RestaurantCard from "./components/RestaurantCard";
import ProtectedRoute from "./components/ProtectedRoute";
import { ChevronRight } from "lucide-react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Verification from "./pages/Verification";
import ForgotPassword from "./pages/ForgotPassword";
import ChefLayout from "./layouts/ChefLayout";
import ChefDashboard from "./pages/chef/ChefDashboard";
import ChefOrders from "./pages/chef/ChefOrders";
import ChefMenu from "./pages/chef/ChefMenu";
import ChefAddItem from "./pages/chef/ChefAddItem";
import ChefProfile from "./pages/chef/ChefProfile";
import ChefMessages from "./pages/chef/ChefMessages";
import ChefReviews from "./pages/chef/ChefReviews";

function Home() {
  const restaurants = [
    {
      id: 1,
      name: "Rose Garden Restaurant",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Burger", "Chicken", "Rice", "Wings"],
      rating: 4.7,
      deliveryTime: "20 min",
      freeDelivery: true,
      isLarge: true,
    },
    {
      id: 2,
      name: "Pizza Paradise",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Pizza", "Italian", "Pasta"],
      rating: 4.5,
      deliveryTime: "30 min",
      freeDelivery: false,
      isLarge: false,
    },
    {
      id: 3,
      name: "Burger King",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Burger", "Fast Food"],
      rating: 4.2,
      deliveryTime: "25 min",
      freeDelivery: true,
      isLarge: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-md md:max-w-4xl md:px-6 bg-white md:bg-gray-50 min-h-screen relative">
        <div className="p-3 md:p-8 md:bg-white md:rounded-3xl md:shadow-xl md:my-8 md:min-h-[calc(100vh-4rem)]">
          <Header />
          <SearchBar />
          <CategoryList />
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Open Restaurants
              </h2>
              <button className="flex items-center text-gray-500 text-sm hover:text-orange-500 transition-colors">
                See All <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="md:col-span-2 lg:col-span-3">
                <RestaurantCard
                  name={restaurants[0].name}
                  image={restaurants[0].image}
                  tags={restaurants[0].tags}
                  rating={restaurants[0].rating}
                  deliveryTime={restaurants[0].deliveryTime}
                  freeDelivery={restaurants[0].freeDelivery}
                  isLarge={true}
                />
              </div>

              {restaurants.slice(1).map((rest) => (
                <div key={rest.id}>
                  <RestaurantCard
                    name={rest.name}
                    image={rest.image}
                    tags={rest.tags}
                    rating={rest.rating}
                    deliveryTime={rest.deliveryTime}
                    freeDelivery={rest.freeDelivery}
                    isLarge={false}
                  />
                </div>
              ))}
              {restaurants.slice(1).map((rest) => (
                <div key={rest.id + "duplicate"}>
                  <RestaurantCard
                    name={rest.name}
                    image={rest.image}
                    tags={rest.tags}
                    rating={rest.rating}
                    deliveryTime={rest.deliveryTime}
                    freeDelivery={rest.freeDelivery}
                    isLarge={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Chef Routes - Protected, admin role only */}
        <Route
          path="/chef"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ChefLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<ChefDashboard />} />
          <Route path="orders" element={<ChefOrders />} />
          <Route path="menu" element={<ChefMenu />} />
          <Route path="add-item" element={<ChefAddItem />} />
          <Route path="profile" element={<ChefProfile />} />
          <Route path="messages" element={<ChefMessages />} />
          <Route path="reviews" element={<ChefReviews />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
