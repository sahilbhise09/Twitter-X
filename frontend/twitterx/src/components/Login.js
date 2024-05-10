import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="w-screen h-screen flex items-center  justify-center">
      <div className="flex items-center justify-evenly w-[80%]">
        <div>
          <img
            src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?w=740&t=st=1715264355~exp=1715264955~hmac=572c3dd47223900dd4657e79943d5004e52b4b36b5917817f730ecc68d1a5104"
            alt="LOGO"
            width={"180px"}
          />
        </div>

        <div className="my-5">
          <div className="font-bold  text-6xl">Happening Now!</div>
          <h1 className="my-4 text-2xl font-bold mt-4 mb-2">
            {!isLogin ? "Signup" : "Login"}
          </h1>
          <form className="flex flex-col w-[55%]">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
                />
              </>
            )}
            <input
              type="text"
              placeholder="Email"
              className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
            />
            <input
              type="text"
              placeholder="Password"
              className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
            />
            <button className="border-none bg-[#1D9BF0] py-2 rounded-full text-lg text-white my-4">
              Login
            </button>
            <h1>
              {isLogin
                ? "Do not have an account ?"
                : "Already have an account?"}
              <span
                onClick={loginSignupHandler}
                className="font-bold text-blue-600 cursor-pointer ml-2"
              >
                {isLogin ? "Signup" : "login"}
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
