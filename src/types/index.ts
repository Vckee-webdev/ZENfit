export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface UserProfile {
  age: number;
  gender: string;
  dietaryPreferences: string[];
  fitnessGoals: string[];
  healthConditions: string[];
}

export interface Supplement {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  dosage: string;
  warning?: string;
  imageUrl: string;
}

export interface Recommendation {
  id: string;
  supplement: Supplement;
  reason: string;
  priority: 'high' | 'medium' | 'low';
}