"use client";
import React, { useState } from "react";

const ConditionalRendering1 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>Conditional Rendering</h1>
      <div className="flex space-x-5">
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
      </div>
      {isLoggedIn && <h1>Logged In</h1>}
      {isLoggedIn ? <h1>Welcome</h1> : <h1>Please login</h1>}
    </div>
  );
};

interface ConditionalRenderingProps {
  count: number
}

const ConditionalRendering2 = ({ count }: ConditionalRenderingProps) => {
 
  if (count <= 10) {
    return <h1>Count is less than or equal to 10</h1>;
  }
  if (count <= 20) {
    return <h1>Count is less than or equal to 20</h1>;
  }

  return <h1>Count is greater than 20</h1>;
};

const Page = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <ConditionalRendering1 />
      <ConditionalRendering2 count={9} />
      <ConditionalRendering2 count={15} />
      <ConditionalRendering2 count={25} />
    </div>
  );
};

export default Page;
