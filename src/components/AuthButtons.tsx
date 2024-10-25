import React from 'react';
import { LogIn, UserPlus } from 'lucide-react';

interface AuthButtonsProps {
  onSignup: () => void;
}

export default function AuthButtons({ onSignup }: AuthButtonsProps) {
  return (
    <div className="flex items-center space-x-4">
      <button className="flex items-center px-4 py-2 text-white hover:text-gray-100 transition-colors">
        <LogIn className="h-5 w-5 mr-2" />
        Login
      </button>
      <button
        onClick={onSignup}
        className="flex items-center px-4 py-2 bg-white text-purple-600 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
      >
        <UserPlus className="h-5 w-5 mr-2" />
        Sign Up
      </button>
    </div>
  );
}