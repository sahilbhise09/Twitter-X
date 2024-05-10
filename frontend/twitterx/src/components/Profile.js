import React from "react";
import Avatar from "react-avatar";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="w-[50%] border-l border-r border-gray-200">
      <div>
        <div className="flex items-center py-2">
          <Link
            to="/"
            className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <IoArrowBackSharp />
          </Link>
          <div className="ml-2">
            <h1 className="font-bold text-lg">Sahil Bhise</h1>
            <p className="text-gray-500 text-sm">10 posts</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://pbs.twimg.com/profile_banners/1352209677371625474/1715283524/1500x500"
            alt="Banner"
            className="w-full"
          />
          <div className="absolute top-50 left-20 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-black rounded-full">
            <Avatar
              src="https://pbs.twimg.com/profile_images/1657813829626257408/HhXwbWOY_400x400.jpg"
              size="120"
              round={true}
            />
          </div>
        </div>

        <div className="text-right mt-4 mr-4">
          <button className="px-4 py-1 rounded-full border border-gray-400 hover:bg-gray-200">
            Edit Profile
          </button>
        </div>
        <div className="m-4">
          <h1 className="font-bold text-xl">Sahil Bhise</h1>
          <p>@sahilbhise09</p>
        </div>
        <div className="m-4 text-sm">
          <p>
            🌐 Exploring the web's endless possibilities with MERN Stack 🚀 |
            Problem solver by day, coder by night 🌙 | Coffee lover ☕ | Join me
            on this coding journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
