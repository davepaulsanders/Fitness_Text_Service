import React from "react";

export const ClientEditForm = ({ client }) => {
  return (
    <div className="rounded-md shadow p-4 w-full max-w-md mt-5 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex flex-col mb-2">
          <label className="text-left mb-1">First Name</label>
          <input
            className="form-input border border-black rounded-md py-2 shadow-inner mr-1"
            type="text"
            value={client.firstName}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-left mb-1">Last Name</label>
          <input
            className="form-input border border-black rounded-md py-2 shadow-inner ml-1"
            type="text"
            value={client.lastName}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col mb-2">
          <label className="text-left mb-1">Email</label>
          <input
            className="form-input border border-black rounded-md py-2 shadow-inner truncate mr-1"
            type="text"
            value={client.email}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-left mb-1">Phone</label>
          <input
            className="form-input border border-black rounded-md py-2 shadow-inne ml-1"
            type="text"
            value={client.phoneNumber}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-2">
        <label className="text-left mb-1">Weight Loss Goals</label>
        <textarea
          className="form-input border border-black rounded-md py-2 shadow-inner w-full md:w-"
          type="text"
          value={client.weightLossGoals}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col mb-5">
          <label className="text-left mb-1">Days Elapsed</label>
          <input
            className="form-input border border-black rounded-md py-2 shadow-inner mr-1"
            type="text"
            value={client.daysElapsed}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-left mb-1">Spend Total</label>
          <input
            className="form-input border border-black rounded-md py-2 shadow-inner ml-1"
            type="text"
            value={client.spendTotal}
          />
        </div>
      </div>
      <button className="bg-blue-400 hover:bg-blue-500 text-xl py-2 w-full rounded-md">
        Update Client
      </button>
    </div>
  );
};
