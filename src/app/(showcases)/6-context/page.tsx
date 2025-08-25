"use client"
import { useSampleContext } from "./SampleProvider";

const ContextExample = () => {
  const { isLoggedIn, login, logout } = useSampleContext();

  return (
    <div>
      <h1>Context Example</h1>
      {isLoggedIn ? <h1>Logged In</h1> : <h1>Logged Out</h1>}
      <div className="flex space-x-5">
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default ContextExample;
