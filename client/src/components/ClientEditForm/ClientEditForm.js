import React from "react";

export const ClientEditForm = ({ client }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    const data = Object.fromEntries(new FormData(form).entries());

    // getting client id to add to form data object
    data._id = form.getAttribute("data-id");

    const updateClient = await fetch("http://localhost:3001/api/clients", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const newClientInfo = await updateClient.json();
    if (newClientInfo) {
      document.querySelector(".submit-form").innerHTML = "Client updated!"
    }
  };

  return (
    <form
      className="rounded-md shadow p-4 w-full max-w-md mt-5 md:mt-0"
      onSubmit={handleSubmit}
      data-id={client._id}
    >
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex flex-col mb-2">
          <label className="text-left mb-1">First Name</label>
          <input
            className="form-input border border-black rounded-md py-2 shadow-inner mr-1"
            type="text"
            name="firstName"
            defaultValue={client.firstName}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-left mb-1">Last Name</label>
          <input
            className="form-input border border-black rounded-md py-2 shadow-inner ml-1"
            type="text"
            name="lastName"
            defaultValue={client.lastName}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col mb-2">
          <label className="text-left mb-1">Email</label>
          <input
            className="form-input border border-black rounded-md py-2 shadow-inner truncate mr-1"
            type="text"
            name="email"
            defaultValue={client.email}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-left mb-1">Phone</label>
          <input
            className="form-input border border-black rounded-md py-2 shadow-inne ml-1"
            type="text"
            name="phoneNumber"
            defaultValue={client.phoneNumber}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-2">
        <label className="text-left mb-1">Weight Loss Goals</label>
        <textarea
          className="form-input border border-black rounded-md py-2 shadow-inner w-full md:w-"
          type="text"
          name="weightLossGoals"
          defaultValue={client.weightLossGoals}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col mb-5">
          <label className="text-left mb-1">Days Elapsed</label>
          <input
            className="form-input border border-black rounded-md py-2 shadow-inner mr-1"
            type="text"
            name="daysElapsed"
            defaultValue={client.daysElapsed}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-left mb-1">Spend Total</label>
          <input
            className="form-input border border-black rounded-md py-2 shadow-inner ml-1"
            type="text"
            name="spendTotal"
            defaultValue={client.spendTotal}
          />
        </div>
      </div>
      <button
        type="submit"
        className="submit-form bg-blue-400 hover:bg-blue-500 text-xl py-2 w-full rounded-md"
      >
        Update Client
      </button>
    </form>
  );
};
