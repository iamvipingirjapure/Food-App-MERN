import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import Input from '../components/auth/Input';
import Button from '../components/auth/Button';
import { EyeOff } from 'lucide-react';

const Signup: React.FC = () => {
    const navigate = useNavigate();

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/verification');
    };

  return (
    <AuthLayout title="Sign Up" subtitle="Please sign up to get started">
      <form onSubmit={handleSignup} className="space-y-4">
        <Input 
            label="Name" 
            type="text" 
            placeholder="John Doe" 
        />
        <Input 
            label="Email" 
            type="email" 
            placeholder="example@gmail.com" 
        />
        <Input 
            label="Password" 
            type="password" 
            placeholder="••••••••••" 
            icon={<EyeOff className="w-5 h-5 text-gray-400" />} 
        />
        <Input 
            label="Re-type Password" 
            type="password" 
            placeholder="••••••••••" 
            icon={<EyeOff className="w-5 h-5 text-gray-400" />} 
        />

        <div className="pt-4">
             <Button type="submit">Sign Up</Button>
        </div>
      </form>
       <div className="mt-8 text-center pb-8">
            <p className="text-gray-500 text-sm">
                Already have an account? <Link to="/login" className="text-orange-500 font-bold ml-1 uppercase">Log In</Link>
            </p>
       </div>
    </AuthLayout>
  );
};

export default Signup;
