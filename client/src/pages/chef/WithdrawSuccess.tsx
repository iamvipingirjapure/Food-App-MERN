import React from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WithdrawSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-white rounded-3xl relative overflow-hidden">

      <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center shadow-xl shadow-orange-200 mb-8 animate-bounce">
        <Check className="w-12 h-12 text-white stroke-[4]" />
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mb-2">
        Withdraw Successful
      </h2>

      <div className="w-full mt-12">
        <button
          onClick={() => navigate("/chef/profile")}
          className="w-full bg-orange-500 text-white font-bold py-4 rounded-2xl hover:bg-orange-600 transition-colors uppercase tracking-widest shadow-lg shadow-orange-200"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default WithdrawSuccess;
