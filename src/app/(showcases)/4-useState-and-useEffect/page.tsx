"use client"
import React, { useEffect, useState } from "react";

const UseStateExample = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const increment = () => {
    setCount(count + multiplier);
  };

  const changeMultiplier = () => {
    setMultiplier((prev) => prev + 1);
  };

  useEffect(() => {
    if (count >= 10) {
      console.log("Count changed to more than 10");
    }
  }, [count]);

  return (
    <div className="flex flex-col items-center gap-10">
      <h1>Count: {count}</h1>
      <h2>Multiplier: {multiplier}</h2>
      <button
        onClick={increment}
        className="p-2 rounded-lg cursor-pointer bg-gray-700/75 hover:bg-[#ff7d61] hover:text-[#00004d] hover:scale-105 transition-all"
      >
        Increment
      </button>
      <button
        onClick={changeMultiplier}
        className="p-2 rounded-lg cursor-pointer bg-gray-700/75 hover:bg-[#ff7d61] hover:text-[#00004d] hover:scale-105 transition-all"
      >
        Change Multiplier
      </button>
    </div>
  );
};

export default UseStateExample;
