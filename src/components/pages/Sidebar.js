import React from "react";
import { Link } from "react-router-dom";

import Slider from "./Slider";
import RightSideConatiner from "./RightSideConatiner";
import LeftSideConatiner from "./LeftSideConatiner";
import Card from "./Card";
import ContinueWatch from "./ContinueWatch";
const SideBar = () => {
  return (
    <div className="flex">
      <LeftSideConatiner />
      <div className="border border-gray-600  inline-block min-h-screen border-1"></div>
      <div className="flex-1">
        <div className="p-2 m-3 ml-10">
          <ul>
            <Link
              className="text-white font-semibold mr-4 hover:bg-gray-600 p-2 rounded-lg cursor-pointer"
              to="/"
            >
              TV Series
            </Link>
            <Link
              className="text-white font-semibold mr-4 hover:bg-gray-600 p-2 rounded-lg cursor-pointer"
              to="/"
            >
              Movies
            </Link>
            <Link
              className="text-white font-semibold mr-4 hover:bg-gray-600 p-2 rounded-lg cursor-pointer"
              to="/"
            >
              Animies
            </Link>
          </ul>
          <Slider />
          <Card />

          {/*continue watch card */}
          <div>
            <ContinueWatch />
          </div>
        </div>
      </div>
      <div className="border border-gray-600  inline-block min-h-screen border-1"></div>
      <div className="w-[18rem]">
        <RightSideConatiner />
      </div>
    </div>
  );
};

export default SideBar;
