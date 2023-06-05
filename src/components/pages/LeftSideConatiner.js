import React from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../images/hamburger.png";
import { toggleMenu } from "../store/appSlice";
import SideBarContent from "./SideBarContent";
const LeftSideConatiner = () => {
  
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    console.log("clicked");
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className="w-full p-2 m-2 md:w-[16rem] lg:w-[16rem] lg:fixed md:text ">
        
        <div className="flex mr-5 justify-between lg:justify-normal md:justify-between lg:mr-0 md:mr-0">
          <img
            src={logo}
            alt="hamburger"
            className="h-5 ml-3 mt-2 lg:hidden md:hidden"
            onClick={() => toggleMenuHandler()}
          />
          <div className="flex justify-between">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            color="red"
            style={{ color: "red" }}
            height="2rem"
            width="2rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
            </g>
          </svg>
          <h1 className="text-white font-bold text-lg mt-1">
            Exxmon<span className="text-red-600">.</span>
          </h1>
          </div>
        </div>
        <SideBarContent />
       
      </div>
    </>
  );
};

export default LeftSideConatiner;
