import { useState } from "react";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.jpg";
export default function Slider() {
  const images = [pic1, pic2, pic3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= images.length) {
        return 0;
      }
      return nextIndex;
    });
  };

  return (
    <div className="mt-5 relative">
      <div className="relative rounded-3xl">
        <img
          src={images[currentImageIndex]}
          alt={`image ${currentImageIndex + 1}`}
          className="h-[28rem] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center">
          <div className="w-3/4 text-left md:w-2/4 absolute bottom-0 left-0 p-4">
            <h1 className="text-2xl md:text-4xl lg:text-3xl font-semibold text-white mb-4">
              DEADPOOL
            </h1>
            <p className="text-white mb-4">
              ACTIONS, ADVENTURE, COMEDY %98 Match
            </p>
            <div className="flex flex-col md:flex-row md:justify-start gap-2 mb-12">
              <button className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                Watch Now
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg">
                <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <button
            className="absolute top-2/4 right-2 bg-gray-400 rounded-full text-dark  px-[1.1902rem] py-[12px] "
            onClick={goToNextImage}
          >
            <i className="fa fa-chevron-right " aria-hidden="true"></i>
          </button>
          <div className="absolute top-2 left-2 flex items-center">
            <div className="relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGQ8dQ-LMiMmTEyBijR0FzpQHC7tH6qTE2g&usqp=CAU"
                alt="user1"
                className="h-8 w-8 rounded-full border-2 border-white"
              />
            </div>
            <div className="-ml-3 relative">
              <img
                src="https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png"
                alt="user2"
                className="h-8 w-8 rounded-full border-2 border-white"
              />
            </div>
            <div className="-ml-3 relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIUUwf1GuV6YhA08a9haUQBOBRqJinQCJxA&usqp=CAU"
                alt="user3"
                className="h-8 w-8 rounded-full border-2 border-white"
              />
            </div>
            <div className="-ml-3 relative">
              <div className="rounded-full font-semibold text-white text-sm px-4 py-1">
                +6 friends are watching
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
