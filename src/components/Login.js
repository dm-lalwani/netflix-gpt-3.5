import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <>
      <Header />
      <div className="relative h-screen bg-black">
        <img
          className="object-cover w-full h-full opacity-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Background"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-md p-8 space-y-8 bg-black bg-opacity-80 rounded-lg">
            <h2 className="text-3xl font-bold text-white text-center">
              Sign In
            </h2>
            <form className="space-y-6">
              <input
                className="w-full px-4 py-2 text-white bg-gray-700 rounded"
                type="email"
                placeholder="Email or phone number"
              />
              <input
                className="w-full px-4 py-2 text-white bg-gray-700 rounded"
                type="password"
                placeholder="Password"
              />
              <button
                className="w-full px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
                type="submit"
              >
                Sign In
              </button>
            </form>
            <div className="text-gray-500 text-center">
              New to Netflix?{" "}
              <span className="text-white cursor-pointer">Sign up now</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
