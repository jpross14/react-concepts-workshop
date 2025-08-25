"use client";

import { createContext, useState } from "react";

interface SampleContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const SampleContext = createContext<SampleContextType | null>(null);

export const SampleProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const value = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <SampleContext.Provider value={value}>{children}</SampleContext.Provider>
  );
};
