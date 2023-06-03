import React from "react";

const Shimmer = () => {
  return (
    <div className="flex">
      {Array(4)
        .fill("")
        .map((_, index) => (
          <div key={index} className="w-1/4">
            <div className="bg-gray-800 rounded-lg p-4 m-2 animate-pulse">
              <div className="bg-gray-700 w-full h-48 rounded-lg"></div>
              <div className="bg-gray-700 w-1/2 h-4 rounded-lg mt-4"></div>
              <div className="bg-gray-700 w-1/4 h-4 rounded-lg mt-2"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
