import React from 'react';
import { ArrowRight, Activity, Shield, Brain, Sparkles } from 'lucide-react';

export default function HomePage({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your AI-Powered
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"> Health Journey </span>
            Starts Here
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Get personalized supplement recommendations powered by advanced AI, tailored to your unique health profile and fitness goals.
          </p>
          
          <div className="flex justify-center space-x-4 mb-16">
            <button onClick={onGetStarted} className="flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-all duration-200">
              Learn More
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600">Advanced algorithms analyze your health profile to provide personalized recommendations</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Validated</h3>
              <p className="text-gray-600">All recommendations are validated by healthcare professionals</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Journey</h3>
              <p className="text-gray-600">Track your progress and receive updates as your health goals evolve</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}