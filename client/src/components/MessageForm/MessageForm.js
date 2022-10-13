import React, { useState } from "react";
import "./MessageForm.css";
export const MessageForm = ({ selectedGroup, setSelectedGroup }) => {
  const [message, setMessage] = useState({ messageText: "", mediaLink: "" });
  const clearForm = (e) => {
    e.preventDefault();
    setMessage({ messageText: "", mediaLink: "" });
    setSelectedGroup([]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageBody = { message, selectedGroup };

    const messageToSend = await fetch("http://localhost:3001/singletext", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(messageBody),
    });
  };

  return (
    <form
      className="message-form rounded-md shadow p-4  mt-10 mb-20"
      onSubmit={handleSubmit}
    >
      <h2 className="text-left client-action-message text-3xl pt-2 pb-5">
        Sending custom message
      </h2>
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex flex-col mb-2 w-full">
          <label className="text-left mb-1">Message Text</label>
          <textarea
            className="form-input py-2 shadow-inner mb-4"
            type="text"
            name="firstName"
            value={message.messageText}
            onChange={(e) =>
              setMessage({ ...message, messageText: e.target.value })
            }
          />
          <label className="text-left mb-1">Image Link (optional)</label>
          <input
            className="form-input py-2 shadow-inner mr-1"
            type="text"
            name="firstName"
            value={message.mediaLink}
            onChange={(e) =>
              setMessage({ ...message, mediaLink: e.target.value })
            }
          />
        </div>
      </div>
      <p className="submit-form-info mb-4"></p>
      <div className="flex items-center">
        <button
          type="submit"
          className="submit-form bg-blue-400 hover:bg-blue-500 text-xl py-2 w-full"
        >
          Submit
        </button>
        <button
          type="submit"
          className="submit-form bg-slate-400 hover:bg-slate-500 text-xl py-2 w-full"
          onClick={clearForm}
        >
          Clear
        </button>
      </div>
    </form>
  );
};
