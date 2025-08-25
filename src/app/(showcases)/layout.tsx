import Link from "next/link";
import React from "react";

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-4">
      <Link href="/">Back to Home</Link>
      {children}
    </div>
  );
};

export default LayoutPage;
