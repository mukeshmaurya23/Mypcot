import React, { useState } from "react";
import { Link } from "react-router-dom";
const dummyWatchList = [
  {
    id: 1,
    title: "The Witcher",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDEwOWVlY2EtMWI0ZC00OWVmLWJmZGItYTk3YjYzN2Y0YmFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
  },
  {
    id: 2,
    title: "TVF Pitchers",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzMyMDQ3ZWMtZjI3NS00NTEyLTk5Y2EtNDAyMjNjMjI0MmJjXkEyXkFqcGdeQXVyMTExMTIzMTA5._V1_.jpg",
  },
  {
    id: 3,
    title: "Dharavi Bank",
    image:
      "https://assets.gadgets360cdn.com/pricee/assets/product/202211/story_1669109878.jpg?downsize=680:*",
  },
  {
    id: 4,
    title: "Tandav",
    image:
      "https://s01.sgp1.cdn.digitaloceanspaces.com/article/153599-wwcpbjyrre-1611085766.jpeg",
  },
  {
    id: 5,
    title: "Asur",
    image:
      "https://bl-i.thgim.com/public/blink/watch/gwvrw1/article31363283.ece/alternates/FREE_1200/BLinkAsur---Voot-Select-3",
  },
  {
    id: 6,
    title: "Panchayat",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWNhZWQ2ODItOTcxMi00YWVhLWJiY2MtYWU3NTkxNWI2ZTdiXkEyXkFqcGdeQXNuZXNodQ@@._V1_.jpg",
  },
  {
    id: 7,
    title: "Bhaukal",
    image:
      "https://qqcdnpictest.mxplay.com/pic/8fdcb91f124fa42aeca1a0381aab4aa0/en/16x9/640x360/0e67137bcd42d46892e121ca48c22541_1920x1080.jpg",
  },
  {
    id: 8,
    title: "Scam 1992",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2M3MTc0ODAtMDdjZi00ZjljLWIyNzUtOWY2ZjkxMjNhYzA0XkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_.jpg",
  },
];
const ContinueWatch = () => {
  const [current, setcurrent] = useState(0);
  const nextFourHandler = () => {
    setcurrent((prev) => prev + 4);
  };
  const prevFourHandler = () => {
    setcurrent((prev) => prev - 4);
  };

  return (
    <>
      <div className="grid grid-cols-12">
      <h2 className="text-white text-[13px] font-semibold mt-6 ml-1 col-span-4 lg:text-xl md:text-xl ">
          Continue Watching
        </h2>
        <div className="col-span-8">
          <div className="flex justify-end mt-6">
            <button
              className="bg-transparent border border-gray-300 rounded-full p-1 px-3 bg-gray-100 hover:bg-gray-500"
              onClick={prevFourHandler}
              disabled={current === 0}
            >
              <i
                className="fa fa-chevron-left text-white"
                aria-hidden="true"
              ></i>
            </button>
            <button
              className="bg-transparent border border-gray-300 rounded-full p-1 px-3 bg-gray-100 ml-2 hover:bg-gray-500"
              onClick={nextFourHandler}
              disabled={current >= dummyWatchList.length - 4}
            >
              <i
                className="fa fa-chevron-right text-white"
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dummyWatchList.slice(current, current + 4).map((video) => (
          <div
            className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 p-2 mx-1 sm:mx-2 md:mx-3 lg:mx-4 shadow-lg"
            key={video.id}
          >
            <Link to={`/watchpage/${video.id}`}>
              <div className="relative">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <img
                      src={video.image}
                      alt=""
                      className="h-[6rem] w-full object-cover rounded-lg"
                    />
                  </div>
                  <hr className="border-t-2 border-red-700" />
                  <div className="px-2 py-4 text-white">
                    <h1 className="text-md font-semibold mt-2">
                      {video.title}
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContinueWatch;
