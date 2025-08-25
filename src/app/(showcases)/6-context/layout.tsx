import React from "react";
import { SampleProvider } from "./SampleProvider";

const ContextLayout = ({ children }: { children: React.ReactNode }) => {
  return <SampleProvider>{children}</SampleProvider>;
};

export default ContextLayout;
