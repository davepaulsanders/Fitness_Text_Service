import React from "react";

export const Landing = () => {
  return (
    <div>
      <div className="flex flex-col shadow rounded-md justify-center items-center p-6">
        <h2 className="mb-12 text-4xl">Welcome Bonnie and Will!</h2>
        <button className="bg-blue-400 hover:bg-blue-500 text-xl w-3/4 mb-1 py-2 px-3 rounded-md">Send one-time messages</button>
        <button className="bg-blue-400 hover:bg-blue-500 text-xl w-3/4 mb-1 py-2 rounded-md">Edit daily messages</button>
        <button className="bg-blue-400 hover:bg-blue-500 text-xl w-3/4 py-2 rounded-md">Edit clients</button>
      </div>
    </div>
  );
};