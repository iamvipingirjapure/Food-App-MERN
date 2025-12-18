import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import Input from '../components/auth/Input';
import Button from '../components/auth/Button';
import { AppleIcon, Eye, Facebook, Twitter } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <AuthLayout title="Log In" subtitle="Please sign in to your existing account">
      <form onSubmit={handleLogin} className="space-y-6">
        <Input 
            label="Email" 
            type="email" 
            placeholder="example@gmail.com" 
            defaultValue="example@gmail.com"
        />
        <Input 
            label="Password" 
            type="password" 
            placeholder="••••••••••" 
            defaultValue="123456789"
            icon={<Eye className="w-5 h-5 text-gray-400" />} 
        />

        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <input id="remember-me" type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-500">Remember me</label>
            </div>
            <Link to="/forgot-password" className="text-xs font-bold text-orange-500 hover:text-orange-600">Forgot Password</Link>
        </div>

        <Button type="submit">Log In</Button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm mb-6">
            Don't have an account? <Link to="/signup" className="text-orange-500 font-bold ml-1 uppercase">Sign Up</Link>
        </p>

        <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
        </div>

        <div className="flex justify-center space-x-4">
             <button className="w-12 h-12 rounded-full bg-[#395998] flex items-center justify-center text-white shadow-lg shadow-blue-900/20 active:scale-95 transition-transform"><Facebook className="w-6 h-6 fill-current" /></button>
             <button className="w-12 h-12 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white shadow-lg shadow-blue-400/20 active:scale-95 transition-transform"><Twitter className="w-5 h-5 fill-current" /></button>
             <button className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white shadow-lg shadow-gray-900/20 active:scale-95 transition-transform">
             <AppleIcon />
             </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
