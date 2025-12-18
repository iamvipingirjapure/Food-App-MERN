import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import Button from '../components/auth/Button';

const Verification: React.FC = () => {
    const navigate = useNavigate();

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/');
    };

  return (
    <AuthLayout title="Verification" subtitle="We have sent a code to your email example@gmail.com">
      
      <div className="flex justify-between items-center mb-8 mt-4">
        <span className="text-gray-400 text-sm uppercase font-bold tracking-wider">Code</span>
        <button className="text-sm border-b border-gray-800 pb-0.5 font-medium">Resend <span className="text-gray-400 font-normal">in 50sec</span></button>
      </div>

      <div className="flex justify-between gap-4 mb-8">
        {[2, 0, 1, 5].map((num, idx) => (
             <div key={idx} className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-2xl font-bold text-gray-800 shadow-inner">
                {num}
             </div>
        ))}
      </div>

      <Button onClick={handleVerify}>Verify</Button>
    </AuthLayout>
  );
};

export default Verification;
