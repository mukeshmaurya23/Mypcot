import React, {  } from "react";
import hamburger from '../images/hamburger.png'
import imdb from '../images/imdb.png'
import {Link } from 'react-router-dom'
import userLogo from'../images/userLogo.png'
import {useDispatch} from 'react-redux'
import { toggleMenu } from "../store/appSlice";
const Header = () => {

  const dispatch=useDispatch();
  const toggleMenuHandler = () => {
    console.log('clicked')
    dispatch(toggleMenu());
  };


  return (
    <>
      <div className="grid grid-flow-col p-4  shadow-md">
        <div className="flex col-span-1 cursor-pointer">
          <img
            src={hamburger}
            alt="hamburger"
            className="h-5 ml-3"
            onClick={() => toggleMenuHandler()}
           
          />
          <Link to="/">
            <img src={imdb} alt="youtubeLogo" className="h-6 mx-6" />
          </Link>
        </div>
        <div className="col-span-10">
          <input
            type="text"
            placeholder="Search"
          
           style={{
            color:'white'
           }}
            className="px-5 w-1/2 border bg-transparent rounded-l-full p-1 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
          />
          <button
            className="border bg-transparent border-gray-300 rounded-r-full p-1 px-3 bg-gray-100"
           
          >
            <i className="fa fa-search "style={{
                color:"white"
            }} aria-hidden="true"></i>
          </button>

        
        </div>

        <div className="col-span-1">
          <img src={userLogo} alt="userLogo" className="h-6 bg-transparent" />
        </div>
      </div>
    </>
  );
};

export default Header;