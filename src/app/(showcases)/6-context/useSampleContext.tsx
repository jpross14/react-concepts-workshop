import { useContext } from "react";
import { SampleContext } from "./SampleProvider";

export const useSampleContext = () => {
  const context = useContext(SampleContext);
  if (!context) {
    throw new Error("useSampleContext must be used within a SampleProvider");
  }
  return context;
};
