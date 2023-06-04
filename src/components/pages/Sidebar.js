import React from "react";
import { Link } from "react-router-dom";

import Slider from "./Slider";
import RightSideConatiner from "./RightSideConatiner";
import LeftSideConatiner from "./LeftSideConatiner";
import Card from "./Card";
import ContinueWatch from "./ContinueWatch";
const SideBar = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <LeftSideConatiner />
      <div className="border border-gray-600 md:inline-block min-h-screen border-1"></div>
      <div className="flex-1">
        <div className="p-2 m-3">
          <ul className="flex flex-wrap mb-4">
            <li className="mr-4 mb-2">
              <Link
                className="text-white font-semibold hover:bg-gray-600 p-2 rounded-lg cursor-pointer"
                to="/"
              >
                TV Series
              </Link>
            </li>
            <li className="mr-4 mb-2">
              <Link
                className="text-white font-semibold hover:bg-gray-600 p-2 rounded-lg cursor-pointer"
                to="/"
              >
                Movies
              </Link>
            </li>
            <li className="mr-4 mb-2">
              <Link
                className="text-white font-semibold hover:bg-gray-600 p-2 rounded-lg cursor-pointer"
                to="/"
              >
                Animies
              </Link>
            </li>
          </ul>
          <Slider />
          <Card />
          <div>
            <ContinueWatch />
          </div>
        </div>
      </div>
      <div className="border border-gray-600 md:inline-block min-h-screen border-1"></div>
      <div className="w-full md:w-[18rem]">
        <RightSideConatiner />
      </div>
    </div>
  );
};

export default SideBar;
