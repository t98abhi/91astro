import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  phone: string;
}

interface AuthContextType {
  user: User | null;
  login: (phone: string, otp: string) => Promise<boolean>;
  register: (name: string, phone: string, otp: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (phone: string, otp: string): Promise<boolean> => {
    // Simulate OTP verification (in real app, verify with backend)
    if (otp === '1234') {
      const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = savedUsers.find((u: User) => u.phone === phone);
      
      if (existingUser) {
        setUser(existingUser);
        localStorage.setItem('user', JSON.stringify(existingUser));
        return true;
      } else {
        return false; // User not registered
      }
    }
    return false;
  };

  const register = async (name: string, phone: string, otp: string): Promise<boolean> => {
    // Simulate OTP verification
    if (otp === '1234') {
      const newUser: User = {
        id: Date.now().toString(),
        name,
        phone,
      };

      const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      savedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(savedUsers));
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};