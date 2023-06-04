import React from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../images/hamburger.png";
import { toggleMenu } from "../store/appSlice";
const LeftSideConatiner = () => {
  const isMenu = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    console.log("clicked");
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className="w-[16rem] p-2 m-2 ">
        <div className="flex space-x-2">
          <img
            src={logo}
            alt="hamburger"
            className="h-5 ml-3 mt-2 lg:hidden md:hidden"
            onClick={() => toggleMenuHandler()}
          />
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
        <h2 className="m-2 text-white font-semibold mt-8">MENU</h2>
        <ul className="mt-8">
          <li className="p-2 text-white hover:bg-gray-700 rounded-lg cursor-pointer flex items-center">
            <div className="relative">
              <span className="inline-block hover:bg-red-600 w-4 h-4 border-r-2 border-gray-700 absolute  bottom-0"></span>
              <i
                className="fa fa-home hover:text-red-600 mr-2"
                aria-hidden="true"
              ></i>
              Home
            </div>
          </li>
          <li className="p-2 mt-3 text-white hover:bg-gray-700  rounded-lg  cursor-pointer">
            <i
              className="fa fa-building mr-2 hover:text-red-600 "
              aria-hidden="true"
            ></i>{" "}
            Community
          </li>
          <li className="p-2 mt-3 text-white hover:bg-gray-700  rounded-lg  cursor-pointer">
            <i
              className="fa fa-compass mr-2 hover:text-red-600 "
              aria-hidden="true"
            ></i>{" "}
            Discovery
          </li>
          <li className="p-2 mt-3 text-white hover:bg-gray-700  rounded-lg  cursor-pointer">
            <i
              className="fa fa-clock-o mr-2 hover:text-red-600 "
              aria-hidden="true"
            ></i>{" "}
            Coming Soon
          </li>
          <h2 className="m-2 text-white font-semibold mt-8">SOCIAL</h2>
          <li className="p-2 mt-6 text-white hover:bg-gray-700  rounded-lg  cursor-pointer">
            <i className="fa fa-user mr-2 hover:text-red-600 "></i> Friends
          </li>
          <li className="p-2 mt-3 text-white hover:bg-gray-700  rounded-lg  cursor-pointer">
            <i className="fa fa-users mr-2 hover:text-red-600 "></i> Parties
          </li>
          <li className="p-2 mt-3 text-white hover:bg-gray-700  rounded-lg  cursor-pointer">
            <i className="fa fa-music mr-2 hover:text-red-600 "></i> Media
          </li>
          <h2 className="m-2 text-white font-semibold mt-8">GENERAL</h2>
          <li className="p-2 mt-6 text-white hover:bg-gray-700  rounded-lg  cursor-pointer">
            <i className="fa fa-cog mr-2 hover:text-red-600 "></i> Settings
          </li>
          <li className="p-2 mt-3 text-white hover:bg-gray-700   rounded-lg  cursor-pointer relative">
            <i className="fa fa-sign-out mr-2 hover:text-red-600 "></i> Log Out
          </li>
        </ul>
      </div>
    </>
  );
};

export default LeftSideConatiner;
