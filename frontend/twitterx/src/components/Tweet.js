import React from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { FaRegBookmark } from "react-icons/fa";

const Tweet = () => {
  return (
    <div className="border-b border-gray-200 tweet">
      <div>
        <div className="flex p-4">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1657813829626257408/HhXwbWOY_400x400.jpg"
            twitterHandle="sitebase"
            size="50"
            round={true}
          />
          <div className="ml-2 w-full">
            <div className="flex items-center">
              <h1 className="font-bold">Sahil</h1>
              <p className="text-gray-500 text-sm ml-1">@sahilbhise09</p>
            </div>

            <div>
              <p>Hello Developers lets connect and grow together</p>
            </div>

            <div className="flex justify-between my-3">
              <div className="flex items-center ">
                <div className="p-2 hover:bg-yellow-200 rounded-full">
                  <FaRegComment size={"15px"} />
                </div>
                <p>0</p>
              </div>

              <div className="flex items-center ">
                <div className="p-2 hover:bg-pink-200 rounded-full">
                  <GrLike size={"15px"} />
                </div>
                <p>0</p>
              </div>

              <div className="flex items-center ">
                <div className="p-2 hover:bg-blue-200 rounded-full">
                  <FaRegBookmark size={"15px"} />
                </div>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
