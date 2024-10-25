import { User } from '../types';

// Simulating a database with localStorage
const USERS_KEY = 'nutriai_users';
const PROFILES_KEY = 'nutriai_profiles';

export function getUsers(): Record<string, User> {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : {};
}

export function createUser(userData: Omit<User, 'id'>): User {
  const users = getUsers();
  const id = crypto.randomUUID();
  
  const newUser: User = {
    id,
    ...userData,
    createdAt: new Date().toISOString(),
  };

  users[id] = newUser;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  
  return newUser;
}

export function getUserProfile(userId: string) {
  const profiles = localStorage.getItem(PROFILES_KEY);
  const allProfiles = profiles ? JSON.parse(profiles) : {};
  return allProfiles[userId];
}

export function saveUserProfile(userId: string, profile: any) {
  const profiles = localStorage.getItem(PROFILES_KEY);
  const allProfiles = profiles ? JSON.parse(profiles) : {};
  
  allProfiles[userId] = {
    ...profile,
    updatedAt: new Date().toISOString(),
  };
  
  localStorage.setItem(PROFILES_KEY, JSON.stringify(allProfiles));
  return allProfiles[userId];
}

export function authenticateUser(email: string, password: string): User | null {
  const users = getUsers();
  const user = Object.values(users).find(u => u.email === email);
  
  if (!user) return null;
  
  const storedPassword = localStorage.getItem(`password_${user.id}`);
  if (storedPassword === password) {
    return user;
  }
  
  return null;
}