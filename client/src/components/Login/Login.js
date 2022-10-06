import React from "react";

export const Login = () => {
  return (
    <div className="rounded-md p-6 w-4/12 shadow">
      <h1 className="text-left mb-6 text-2xl font-bold">
        Welcome Bonnie and Will!
      </h1>
      <div className="flex flex-col mb-2">
        <label className="text-left mb-1">Username</label>
        <input
          className="form-input border border-black rounded-md py-2 shadow-inner"
          type="text"
        />
      </div>
      <div className="flex flex-col mb-5">
        <label className="text-left mb-1">Password</label>
        <input
          className="form-input border border-black rounded-md py-2 shadow-inner"
          type="text"
        />
      </div>
      <button className="bg-blue-400 hover:bg-blue-500 text-xl py-2 w-full rounded-md">
        Login
      </button>
    </div>
  );
};
