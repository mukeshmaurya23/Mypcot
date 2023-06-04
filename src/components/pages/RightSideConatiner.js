import React from "react";
import avatarr from "../images/avatarr.jpg";
import hobbit from "../images/hobbit.jpg";
import ipman from "../images/ipman.jpg";
import legend from "../images/legend.jpg";
import madmax from "../images/madmax.jpg";
import john from "../images/john.jpg";
const RightSideConatiner = () => {
  return (
    <>
      <div>
        <div className="bg-transparent p-4 mt-2">
          <i
            className="fa fa-search text-gray-500 absolute ml-3 mt-[0.6rem]"
            aria-hidden="true"
          ></i>
          <input
            type="text"
            placeholder="     Search..."
            className="bg-transparent border text-white  border-gray-300 rounded-full p-1 px-3 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
          />
        </div>

        <div className="m-6">
          <h2 className="text-xl text-white font-semibold mb-4">
            Popular Movies
          </h2>
          <div className="flex flex-row md:flex-row md:mb-4 shadow-lg">
            <div className="w-24 h-32 rounded-lg overflow-hidden mb-4 md:mb-0 md:mr-4">
              <img
                src={john}
                alt="John Wick"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mx-16 my-9 lg:mx-0 lg:my-0">
              <h3 className="text-lg text-white font-semibold">John Wick</h3>
              <p className="text-gray-300">Action, Horror</p>
              <p className="text-gray-300 mt-3">Rating: 4.5/5</p>
            </div>
          </div>

          <div className="flex flex-row md:flex-row md:mb-4 shadow-lg">
            <div className="w-24 h-32 rounded-lg overflow-hidden mb-4 md:mb-0 md:mr-4 p-2">
              <img
                src={ipman}
                alt="Ip Man 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm">
              <h3 className="text-lg text-white font-semibold">Ip Man 2</h3>
              <p className="text-gray-300">Action, Horror</p>
              <p className="text-gray-300 mt-3">Rating: 4.2/5</p>
            </div>
          </div>

          <div className="flex flex-row md:flex-row md:mb-4 shadow-lg">
            <div className="w-24 h-32 rounded-lg overflow-hidden mb-4 md:mb-0 md:mr-4 p-2">
              <img
                src={madmax}
                alt="Mad Max"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg text-white font-semibold">Mad Max</h3>
              <p className="text-gray-300">Action, Horror</p>
              <p className="text-gray-300 mt-3">Rating: 4.2/5</p>
            </div>
          </div>
        </div>
        <button className="bg-red-600 hover:bg-red-400 text-white px-4 py-2 rounded-lg ml-4 mb-4 md:w-[16rem]">
          See More
        </button>
        <div className="m-6">
          <h2 className="text-xl text-white font-semibold mb-4">Favorites</h2>
          <div className="flex flex-row md:flex-row md:mb-4 shadow-lg">
            <div className="w-24 h-32 rounded-lg overflow-hidden mb-4 md:mb-0 md:mr-4">
              <img
                src={legend}
                alt="I AM Legend"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg text-white font-semibold">I AM Legend</h3>
              <p className="text-gray-300">Action, Adventure</p>
              <p className="text-gray-300 mt-3">Rating: 4.3/5</p>
            </div>
          </div>

          <div className="flex flex-row md:flex-row shadow-lg">
            <div className="w-24 h-32 rounded-lg overflow-hidden mb-4 md:mb-0 md:mr-4">
              <img
                src={hobbit}
                alt="Hobbit 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg text-white font-semibold">Hobbit 1</h3>
              <p className="text-gray-300">Action, Adventure</p>
              <p className="text-gray-300 mt-3">Rating: 4.1/5</p>
            </div>
          </div>
        </div>
        <button className="bg-red-600 hover:bg-red-400 text-white px-4 py-2 mb-5 rounded-lg ml-4 md:w-[16rem]">
          See More
        </button>
      </div>
    </>
  );
};

export default RightSideConatiner;
