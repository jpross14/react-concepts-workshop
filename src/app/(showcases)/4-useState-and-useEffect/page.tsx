"use client";
import React, { useState } from "react";

const UseStateExample = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <h1>Count: {count}</h1>
      <button
        onClick={increment}
        className="p-2 rounded-lg cursor-pointer bg-gray-700/75 hover:bg-[#ff7d61] hover:text-[#00004d] hover:scale-105 transition-all"
      >
        Increment
      </button>
    </div>
  );
};

export default UseStateExample;
