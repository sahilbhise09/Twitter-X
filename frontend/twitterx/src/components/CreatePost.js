import React from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div className="w-[100%] create-post">
      <div>
        <div className="flex p-4 items-center justify-evenly">
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3 border border-gray-200">
            <h1 className="font-semibold text-gray-800 text-lg">For you</h1>
          </div>

          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
            <h1 className="font-semibold text-gray-800 text-lg">Following</h1>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center p-4">
          <div>
            <Avatar
              src="https://pbs.twimg.com/profile_images/1657813829626257408/HhXwbWOY_400x400.jpg"
              twitterHandle="sitebase"
              size="50"
              round={true}
            />
          </div>
          <input
            className="w-full outline-none border-none text-lg p-4"
            type="text"
            placeholder="What is happening?"
          />
        </div>

        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <div>
            <CiImageOn size={"24px"} />
          </div>
          <button className="bg-[] px-4 py-1 border-none bg-[#1D9BF0] rounded-full text-lg text-white">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
