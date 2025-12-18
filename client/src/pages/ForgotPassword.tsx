import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import Input from '../components/auth/Input';
import Button from '../components/auth/Button';

const ForgotPassword: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/verification');
    };

  return (
    <AuthLayout title="Forgot Password" subtitle="Please sign in to your existing account">
      <form onSubmit={handleSubmit} className="space-y-6 mt-8">
        <Input 
            label="Email" 
            type="email" 
            placeholder="example@gmail.com" 
        />

        <Button type="submit">Send Code</Button>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
