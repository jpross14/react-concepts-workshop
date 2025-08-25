import { useSampleContext } from "@/app/(showcases)/6-context/useSampleContext";
import React from "react";

const NestedComponent = () => {
  const { login, logout } = useSampleContext();
  return (
    <div className="flex space-x-5">
      <button
        onClick={login}
        className="p-2 rounded-lg cursor-pointer bg-gray-700/75 hover:bg-[#ff7d61] hover:text-[#00004d] hover:scale-105 transition-all"
      >
        Login
      </button>
      <button
        onClick={logout}
        className="p-2 rounded-lg cursor-pointer bg-gray-700/75 hover:bg-[#ff7d61] hover:text-[#00004d] hover:scale-105 transition-all"
      >
        Logout
      </button>
    </div>
  );
};

export default NestedComponent;
