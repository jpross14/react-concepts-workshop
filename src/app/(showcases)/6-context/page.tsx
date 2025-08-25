"use client";
import { SampleProvider } from "./SampleProvider";
import NestedComponent from "@/components/NestedComponent";

const ContextExample = () => {
  return (
    <SampleProvider>
      <NestedComponent />
    </SampleProvider>
  );
};

export default ContextExample;
