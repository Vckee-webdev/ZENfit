import React from 'react';
import { Activity } from 'lucide-react';
import AuthButtons from './AuthButtons';

interface HeaderProps {
  showAuth?: boolean;
  onSignup?: () => void;
}

export default function Header({ showAuth = true, onSignup = () => {} }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Activity className="h-8 w-8" />
            <h1 className="text-2xl font-bold"><a href='HomePage.tsx'>ZENfit</a></h1>
          </div>
          {showAuth ? (
            <AuthButtons onSignup={onSignup} />
          ) : (
            <nav className="hidden md:flex space-x-8">
              <a href="#profile" className="hover:text-blue-200 transition-colors">Profile</a>
              <a href="#recommendations" className="hover:text-blue-200 transition-colors">Recommendations</a>
              <a href="#history" className="hover:text-blue-200 transition-colors">History</a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}