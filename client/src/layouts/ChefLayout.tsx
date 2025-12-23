import React from "react";
import { Outlet } from "react-router-dom";
import ChefHeader from "../components/chef/ChefHeader";
import ChefBottomNav from "../components/chef/ChefBottomNav";

const ChefLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-md md:max-w-7xl md:px-6 bg-white md:bg-gray-50 min-h-screen relative">
        <ChefHeader />
        <div className="p-4 md:p-8 md:bg-white md:rounded-3xl md:shadow-sm md:min-h-[calc(100vh-8rem)] pb-24 md:pb-8">
          <Outlet />
        </div>
        <ChefBottomNav />
      </div>
    </div>
  );
};

export default ChefLayout;
