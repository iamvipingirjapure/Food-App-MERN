import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ label, icon, className = '', ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2 font-medium">
        {label}
      </label>
      <div className="relative">
        <input
          className={`w-full bg-gray-100/50 text-gray-800 px-4 py-3.5 rounded-xl border-none focus:ring-1 focus:ring-orange-500/50 focus:bg-white transition-all text-sm font-medium ${className}`}
          {...props}
        />
        {icon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
