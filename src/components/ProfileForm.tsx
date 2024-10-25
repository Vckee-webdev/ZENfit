import React, { useState } from 'react';
import { UserProfile } from '../types';
import { CheckCircle2 } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import { saveUserProfile } from '../services/auth';

const dietaryOptions = ['Vegan', 'Vegetarian', 'Keto', 'Paleo', 'Gluten-Free'];
const fitnessGoals = ['Muscle Gain', 'Weight Loss', 'Endurance', 'General Health', 'Recovery'];

export default function ProfileForm({ onSubmit }: { onSubmit: (profile: UserProfile) => void }) {
  const { user } = useUser();
  const [profile, setProfile] = useState<UserProfile>({
    age: 25,
    gender: '',
    dietaryPreferences: [],
    fitnessGoals: [],
    healthConditions: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      const savedProfile = saveUserProfile(user.id, profile);
      onSubmit(savedProfile);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Complete Your Profile</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
          <input
            type="number"
            value={profile.age}
            onChange={(e) => setProfile({ ...profile, age: parseInt(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
          <select
            value={profile.gender}
            onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Preferences</label>
          <div className="grid grid-cols-2 gap-4">
            {dietaryOptions.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={profile.dietaryPreferences.includes(option)}
                  onChange={(e) => {
                    const updated = e.target.checked
                      ? [...profile.dietaryPreferences, option]
                      : profile.dietaryPreferences.filter((item) => item !== option);
                    setProfile({ ...profile, dietaryPreferences: updated });
                  }}
                  className="form-checkbox h-5 w-5 text-purple-600"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Fitness Goals</label>
          <div className="grid grid-cols-2 gap-4">
            {fitnessGoals.map((goal) => (
              <label key={goal} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={profile.fitnessGoals.includes(goal)}
                  onChange={(e) => {
                    const updated = e.target.checked
                      ? [...profile.fitnessGoals, goal]
                      : profile.fitnessGoals.filter((item) => item !== goal);
                    setProfile({ ...profile, fitnessGoals: updated });
                  }}
                  className="form-checkbox h-5 w-5 text-purple-600"
                />
                <span>{goal}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Health Conditions</label>
          <textarea
            value={profile.healthConditions.join(', ')}
            onChange={(e) => setProfile({ ...profile, healthConditions: e.target.value.split(',').map(s => s.trim()) })}
            placeholder="Enter any health conditions, separated by commas"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg
            hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <CheckCircle2 className="h-5 w-5" />
          <span>Get Personalized Recommendations</span>
        </button>
      </div>
    </form>
  );
}