import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const SideBarContent = () => {
  const isMenu = useSelector((store) => store.app.isMenuOpen);
  const [isDesktopView, setIsDesktopView] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopView(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isDesktopView ? (
        <>
          <h2 className="m-2 text-white font-semibold mt-8">MENU</h2>
          <ul className="mt-8">
            <li className="p-2 text-white hover:bg-gray-700 rounded-s-lg cursor-pointer flex items-center relative transition-all w-[16rem]">
              <span className="before:absolute before:left-[15.8rem] before:w-1 before:h-full  hover:before:w-1 hover:before:top-0 hover:before:bg-red-500">
              <i
                className="fa fa-home hover:text-red-600 mr-2"
                aria-hidden="true"
              ></i>
              Home
              </span>
            
            </li>
            

            <li className="p-2 mt-3 text-white hover:bg-gray-700 rounded-s-lg cursor-pointer flex items-center relative transition-all w-[16rem]">
              <span className="before:absolute before:left-[15.8rem] before:w-1 before:h-full  hover:before:w-1 hover:before:top-0 hover:before:bg-red-500">
              <i
                className="fa fa-building mr-2 hover:text-red-600 "
                aria-hidden="true"
              ></i>{" "}
              Community
              </span>
            </li>
            <li className="p-2 mt-3 text-white hover:bg-gray-700 rounded-s-lg cursor-pointer flex items-center relative transition-all w-[16rem]">
              <span className="before:absolute before:left-[15.8rem] before:w-1 before:h-full  hover:before:w-1 hover:before:top-0 hover:before:bg-red-500">
              <i
                className="fa fa-compass mr-2 hover:text-red-600 "
                aria-hidden="true"
              ></i>{" "}
              Discovery

            </span>
            
            </li>
            <li className="p-2 mt-3 text-white hover:bg-gray-700 rounded-s-lg cursor-pointer flex items-center relative transition-all w-[16rem]">
              <span className="before:absolute before:left-[15.8rem] before:w-1 before:h-full  hover:before:w-1 hover:before:top-0 hover:before:bg-red-500">
              <i
                className="fa fa-clock-o mr-2 hover:text-red-600 "
                aria-hidden="true"
              ></i>{" "}
              Coming Soon
              </span>
            </li>
            <h2 className="m-2 text-white font-semibold mt-8">SOCIAL</h2>
            <li className="p-2 mt-3 text-white hover:bg-gray-700 rounded-s-lg cursor-pointer flex items-center relative transition-all w-[16rem]">
              <span className="before:absolute before:left-[15.8rem] before:w-1 before:h-full  hover:before:w-1 hover:before:top-0 hover:before:bg-red-500">
              <i className="fa fa-user mr-2 hover:text-red-600 "></i> Friends
              </span>
            </li>
            <li className="p-2 mt-3 text-white hover:bg-gray-700 rounded-s-lg cursor-pointer flex items-center relative transition-all w-[16rem]">
              <span className="before:absolute before:left-[15.8rem] before:w-1 before:h-full  hover:before:w-1 hover:before:top-0 hover:before:bg-red-500">
              <i className="fa fa-users mr-2 hover:text-red-600 "></i> Parties
           </span>
            </li>
            <li className="p-2 mt-3 text-white hover:bg-gray-700 rounded-s-lg cursor-pointer flex items-center relative transition-all w-[16rem]">
              <span className="before:absolute before:left-[15.8rem] before:w-1 before:h-full  hover:before:w-1 hover:before:top-0 hover:before:bg-red-500">
              <i className="fa fa-music mr-2 hover:text-red-600 "></i> Media
              </span>
            </li>
            <h2 className="m-2 text-white font-semibold mt-8">GENERAL</h2>
            <li className="p-2 mt-3 text-white hover:bg-gray-700 rounded-s-lg cursor-pointer flex items-center relative transition-all w-[16rem]">
              <span className="before:absolute before:left-[15.8rem] before:w-1 before:h-full  hover:before:w-1 hover:before:top-0 hover:before:bg-red-500">
              <i className="fa fa-cog mr-2 hover:text-red-600 "></i> Settings
              </span>
            </li>
         
            <li className="p-2 mt-3 text-white hover:bg-gray-700 rounded-s-lg cursor-pointer flex items-center relative transition-all w-[16rem]">
              <span className="before:absolute before:left-[15.8rem] before:w-1 before:h-full  hover:before:w-1 hover:before:top-0 hover:before:bg-red-500">
              <i className="fa fa-sign-out mr-2 hover:text-red-600 "></i> LogOut
              </span>
            </li>
          </ul>
         
        </>
      ) : (
        isMenu && (
          <>
              <h2 className="m-2 text-white font-semibold mt-8">MENU</h2>
          <ul className="mt-8">
          <li className="p-2 mt-3 text-white hover:bg-gray-700 rounded-s-lg cursor-pointer flex items-center relative transition-all w-[100%]">
              <span className="before:absolute before:left-[99%] before:w-1 before:h-full  hover:before:w-1 hover:before:top-0 hover:before:bg-red-500">
              <i
                className="fa fa-home hover:text-red-600 mr-2"
                aria-hidden="true"
              ></i>
              Home
              </span>
            
            </li>
            

            <li className="p-2 mt-3 text-white hover:bg-gray-700 rounded-s-lg cursor-pointer flex items-center relative transition-all w-[100%]">
              <span className="before:absolute before:left-[99%] before:w-1 before:h-full  hover:before:w-1 hover:before:top-0 hover:before:bg-red-500">
              <i
                className="fa fa-building mr-2 hover:text-red-600 "
                aria-hidden="true"
              ></i>{" "}
              Community
              </span>
            </li>
            <li className="p-2 mt-3 text-white hover:bg-gray-700 rounded-s-lg cursor-pointer flex items-center relative transition-all w-[100%]">
              <span className="before:absolute before:left-[99%] before:w-1 before:h-full  hover:before:w-1 hover:before:top-0 hover:before:bg-red-500">
              <i
                className="fa fa-compass mr-2 hover:text-red-600 "
                aria-hidden="true"
              ></i>{" "}
              Discovery

            </span>
            
            </li>
            <li className="p-2 mt-3 text-white hover:bg-gray-700 rounded-s-lg cursor-pointer flex items-center relative transition-all w-[100%]">
              <span className="before:absolute before:left-[99%] before:w-1 before:h-full  hover:before:w-1 hover:before:top-0 hover:before:bg-red-500">
              <i
                className="fa fa-clock-o mr-2 hover:text-red-600 "
                aria-hidden="true"
              ></i>{" "}
              Coming Soon
              </span>
            </li>
            <h2 className="m-2 text-white font-semibold mt-8">SOCIAL</h2>
            <li className="p-2 mt-3 text-white hover:bg-gray-700 rounded-s-lg cursor-pointer flex items-center relative transition-all w-[100%]">
              <span className="before:absolute before:left-[99%] before:w-1 before:h-full  hover:before:w-1 hover:before:top-0 hover:before:bg-red-500">
              <i className="fa fa-user mr-2 hover:text-red-600 "></i> Friends
              </span>
            </li>
            <li className="p-2 mt-3 text-white hover:bg-gray-700 rounded-s-lg cursor-pointer flex items-center relative transition-all w-[100%]">
              <span className="before:absolute before:left-[99%] before:w-1 before:h-full  hover:before:w-1 hover:before:top-0 hover:before:bg-red-500">
              <i className="fa fa-users mr-2 hover:text-red-600 "></i> Parties
           </span>
            </li>
            <li className="p-2 mt-3 text-white hover:bg-gray-700 rounded-s-lg cursor-pointer flex items-center relative transition-all w-[100%]">
              <span className="before:absolute before:left-[99%] before:w-1 before:h-full  hover:before:w-1 hover:before:top-0 hover:before:bg-red-500">
              <i className="fa fa-music mr-2 hover:text-red-600 "></i> Media
              </span>
            </li>
            <h2 className="m-2 text-white font-semibold mt-8">GENERAL</h2>
            <li className="p-2 mt-3 text-white hover:bg-gray-700 rounded-s-lg cursor-pointer flex items-center relative transition-all w-[100%]">
              <span className="before:absolute before:left-[99%] before:w-1 before:h-full  hover:before:w-1 hover:before:top-0 hover:before:bg-red-500">
              <i className="fa fa-cog mr-2 hover:text-red-600 "></i> Settings
              </span>
            </li>
         
            <li className="p-2 mt-3 text-white hover:bg-gray-700 rounded-s-lg cursor-pointer flex items-center relative transition-all w-[100%]">
              <span className="before:absolute before:left-[99%] before:w-1 before:h-full  hover:before:w-1 hover:before:top-0 hover:before:bg-red-500">
              <i className="fa fa-sign-out mr-2 hover:text-red-600 "></i> LogOut
              </span>
            </li>
          </ul>
          </>
        )
      )}
    </>
  );
};

export default SideBarContent;
