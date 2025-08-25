import React from "react";
import { useAuthContext } from "@/app/(showcases)/6-context/useSampleContext";
import NestedComponent2 from "./NestedComponent2";

const NestedComponent = () => {
  const { isLoggedIn } = useAuthContext();
  return (
    <div>
      <h1>Context Example</h1>
      {isLoggedIn ? <h1>Logged In</h1> : <h1>Logged Out</h1>}
      <NestedComponent2 />
    </div>
  );
};

export default NestedComponent;
