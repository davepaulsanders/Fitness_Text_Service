import React from "react";

export const ClientEditForm = () => {
  return (
    <div className="rounded-md p-6 shadow w-11/12 md:w-7/12 lg:w-5/12 xl:w-4/12 mt-5 md:mt-0">
      <div className="flex flex-col md:flex-row justify-around">
        <div className="flex flex-col mb-2">
          <label className="text-left mb-1">First Name</label>
          <input
            className="form-input border border-black rounded-md py-2 shadow-inner"
            type="text"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-left mb-1">Last Name</label>
          <input
            className="form-input border border-black rounded-md py-2 shadow-inner"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around">
        <div className="flex flex-col mb-2">
          <label className="text-left mb-1">Email</label>
          <input
            className="form-input border border-black rounded-md py-2 shadow-inner"
            type="text"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-left mb-1">Phone</label>
          <input
            className="form-input border border-black rounded-md py-2 shadow-inner"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-2">
        <label className="text-left mb-1">Weight Loss Goals</label>
        <textarea
          className="form-input border border-black rounded-md py-2 shadow-inner w-full"
          type="text"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-around">
        <div className="flex flex-col mb-5">
          <label className="text-left mb-1">Days Elapsed</label>
          <input
            className="form-input border border-black rounded-md py-2 shadow-inner"
            type="text"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-left mb-1">Spend Total</label>
          <input
            className="form-input border border-black rounded-md py-2 shadow-inner"
            type="text"
          />
        </div>
      </div>
      <button className="bg-blue-400 hover:bg-blue-500 text-xl py-2 w-full rounded-md">
        Update Client
      </button>
    </div>
  );
};
