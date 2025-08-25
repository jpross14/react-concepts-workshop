"use client";
import NestedComponent from "@/components/NestedComponent";
import { useSampleContext } from "./SampleProvider";

const ContextExample = () => {
  const { isLoggedIn } = useSampleContext();

  return (
    <div>
      <h1>Context Example</h1>
      {isLoggedIn ? <h1>Logged In</h1> : <h1>Logged Out</h1>}
      <NestedComponent />
    </div>
  );
};

export default ContextExample;
