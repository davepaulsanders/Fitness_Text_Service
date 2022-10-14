import React from "react";

export const Login = () => {
  return (
    <div className="rounded-md p-6 w-11/12 lg:w-3/12 shadow">
      <h1 className="text-left mb-6 text-2xl font-bold">
        Welcome Bonnie and Will!
      </h1>
      <div className="flex flex-col mb-2">
        <label htmlFor="username" className="text-left mb-1">
          Username
        </label>
        <input
          id="username"
          className="form-input border border-black rounded-md py-2 shadow-inner"
          type="text"
        />
      </div>
      <div className="flex flex-col mb-5">
        <label htmlFor="password" className="text-left mb-1">
          Password
        </label>
        <input
          id="password"
          className="form-input border border-black rounded-md py-2 shadow-inner"
          type="password"
        />
      </div>
      <button className="bg-blue-400 hover:bg-blue-500 text-xl py-2 w-full rounded-md">
        Login
      </button>
    </div>
  );
};
