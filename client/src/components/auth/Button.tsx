import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`w-full bg-[#FF7622] hover:bg-[#ff8944] text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all uppercase text-sm tracking-wide ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
