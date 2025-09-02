import React from "react";

const Background = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-300 from-20% to-indigo-100 to-100% relative h-screen w-screen overflow-hidden flex items-center justify-center">
      {/* Curved Circle Decorations */}
      <div className="w-10 h-10 bg-blue-700 absolute top-20 left-12 rounded-full opacity-20 animate-bounce"></div>
      <div className="w-36 h-36 bg-blue-700 absolute top-0 left-[430px] rounded-full -my-[50px] opacity-20 animate-pulse"></div>
      <div className="w-96 h-96 bg-blue-700 absolute top-[15px] right-0 rounded-full -mx-[120px] opacity-20 animate-pulse"></div>
      <div className="w-72 h-72 bg-blue-700 absolute bottom-0 left-0 rounded-full -mx-[50px] opacity-20 animate-pulse"></div>

      {/* Center content */}
      <div className="relative z-10 w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Background;
