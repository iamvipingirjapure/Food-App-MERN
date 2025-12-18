import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-sm bg-white overflow-hidden relative min-h-screen md:min-h-[812px] md:max-h-[812px] md:rounded-[40px] md:shadow-2xl">
        

        <div className="bg-[#121223] pt-12 pb-24 px-6 relative rounded-b-[40px] z-10">

           <button 
                onClick={() => navigate(-1)}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6"
            >
                <ChevronLeft className="text-black w-6 h-6" />
           </button>

           <div className="text-center">
                <h1 className="text-3xl text-white font-bold mb-2">{title}</h1>
                <p className="text-gray-400 text-sm">{subtitle}</p>
           </div>
        </div>


        <div className="px-6 pt-10 pb-6">
            {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
