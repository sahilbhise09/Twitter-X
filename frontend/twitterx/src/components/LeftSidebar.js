import React from "react";
import { FaHome } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { BsBookmarkStarFill } from "react-icons/bs";
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="w-[20%] sidebar">
      <div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?w=740&t=st=1715264355~exp=1715264955~hmac=572c3dd47223900dd4657e79943d5004e52b4b36b5917817f730ecc68d1a5104"
            alt="twitter-x_logo"
            width={"50px"}
            className="ml-4"
          />
        </div>

        <div className="my-4">
          <Link
            to="/"
            className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full"
          >
            <div>
              <FaHome size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Home</h1>
          </Link>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full">
            <div>
              <FaHashtag size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Explore</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full">
            <div>
              <IoNotificationsSharp size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Notification</h1>
          </div>

          <Link
            to="/profile"
            className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full"
          >
            <div>
              <BsFillPersonFill size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Profile</h1>
          </Link>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full">
            <div>
              <BsBookmarkStarFill size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Bookmark</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full">
            <div>
              <RiLogoutBoxFill size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Logout</h1>
          </div>

          <button className="px-4 py-2 border-none text-md bg-[#1D9BF0] w-full rounded-full text-white font-bold">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
