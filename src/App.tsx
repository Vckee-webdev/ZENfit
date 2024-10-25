import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProfileForm from './components/ProfileForm';
import RecommendationCard from './components/RecommendationCard';
import SignupPage from './components/SignupPage';
import { UserProfile, Recommendation } from './types';
import { Loader2 } from 'lucide-react';
import { UserProvider } from './contexts/UserContext';

const mockRecommendations: Recommendation[] = [
  {
    id: '1',
    supplement: {
      id: 'vit-d',
      name: 'Vitamin D3',
      description: 'Essential for bone health and immune system function',
      benefits: [
        'Supports bone health',
        'Boosts immune system',
        'Improves mood',
        'Aids in calcium absorption'
      ],
      dosage: '2000-4000 IU daily with meals',
      imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    reason: 'Based on your indoor lifestyle and fitness goals',
    priority: 'high'
  },
  {
    id: '2',
    supplement: {
      id: 'omega',
      name: 'Omega-3 Fish Oil',
      description: 'Supports heart, brain, and joint health',
      benefits: [
        'Reduces inflammation',
        'Supports cardiovascular health',
        'Improves brain function',
        'Promotes joint health'
      ],
      dosage: '1000mg EPA/DHA daily with meals',
      warning: 'Consult physician if taking blood thinners',
      imageUrl: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    reason: 'Recommended for your fitness and recovery goals',
    priority: 'medium'
  }
];

type AppView = 'home' | 'signup' | 'profile' | 'recommendations';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(false);

  const handleProfileSubmit = async (userProfile: UserProfile) => {
    setLoading(true);
    setProfile(userProfile);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    setRecommendations(mockRecommendations);
    setLoading(false);
    setCurrentView('recommendations');
  };

  const handleGetStarted = () => {
    setCurrentView('profile');
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Header showAuth={true} onSignup={() => setCurrentView('signup')} />
            <HomePage onGetStarted={handleGetStarted} />
          </>
        );
      case 'signup':
        return <SignupPage onBack={() => setCurrentView('home')} onSuccess={() => setCurrentView('profile')} />;
      case 'profile':
        return (
          <>
            <Header showAuth={false} />
            <main className="container mx-auto px-4 py-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Your Personal Supplement Assistant
                  </h1>
                  <p className="text-xl text-gray-600">
                    Get AI-powered recommendations tailored to your health and fitness goals
                  </p>
                </div>
                <ProfileForm onSubmit={handleProfileSubmit} />
              </div>
            </main>
          </>
        );
      case 'recommendations':
        return (
          <>
            <Header showAuth={false} />
            <main className="container mx-auto px-4 py-8">
              <div className="max-w-4xl mx-auto">
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <Loader2 className="h-12 w-12 animate-spin text-purple-600" />
                    <p className="mt-4 text-lg text-gray-600">Analyzing your profile...</p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Your Personalized Recommendations
                    </h2>
                    <div className="space-y-6">
                      {recommendations.map((recommendation) => (
                        <RecommendationCard
                          key={recommendation.id}
                          recommendation={recommendation}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </main>
          </>
        );
    }
  };

  return (
    <UserProvider>
      <div className="min-h-screen bg-gray-50">{renderView()}</div>
    </UserProvider>
  );
}

export default App;