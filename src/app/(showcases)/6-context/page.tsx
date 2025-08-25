"use client";
import { AuthProvider } from "./AuthProvider";
import NestedComponent from "@/components/NestedComponent";

const ContextExample = () => {
  return (
    <AuthProvider>
      <NestedComponent />
    </AuthProvider>
  );
};

export default ContextExample;
