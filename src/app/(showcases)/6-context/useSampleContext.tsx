import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useSampleContext must be used within a SampleProvider");
  }
  return context;
};
