import React from "react";
import emptyValidation from "../../utils/emptyValidation";
export const EditDailyMessageForm = ({
  texts,
  setTexts,
  selectedText,
  setSelectedText,
}) => {
  const clearForm = (e) => {
    e.preventDefault();

    const prevVersionText = [...texts];
    const filteredPrev = prevVersionText.filter((text) =>
      text._id === selectedText._id ? text : null
    );
    const filteredText = filteredPrev[0];
    setSelectedText({ ...selectedText, ...filteredText });

    document.querySelector(".message-form-info").innerHTML = "";
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fieldsFilled = emptyValidation(selectedText);
    if (fieldsFilled === false) {
      document.querySelector(".message-form-info").style.color = "red";
      document.querySelector(".message-form-info").innerHTML =
        "Please fill out all fields!";
      return;
    }

    try {
      const updatedMessage = await fetch("http://localhost:3001/api/messages", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedText),
      });

      const updatedMessageJSON = await updatedMessage.json();
      if (updatedMessageJSON.errors) {
        document.querySelector(".message-form-info").style.color = "red";
        document.querySelector(".message-form-info").innerHTML = `${
          Object.values(updatedMessageJSON.errors)[0].message
        }`;
      } else {
        const tempTextsList = [...texts];
        const newTextsList = tempTextsList.map((text) =>
          text._id === updatedMessageJSON._id
            ? (text = updatedMessageJSON)
            : text
        );
        setTexts(newTextsList);
        setSelectedText(updatedMessageJSON);
        document.querySelector(".message-form-info").style.color = "green";
        document.querySelector(".message-form-info").innerHTML =
          "Text updated!";
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="message-form rounded-md shadow p-4  mt-10 mb-20"
      onSubmit={handleSubmit}
    >
      <h2 className="text-left client-action-message text-3xl pt-2 pb-5">
        Day {selectedText.messageDay}
      </h2>
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex flex-col mb-2 w-full">
          <label htmlFor="message-text" className="text-left mb-1">
            Message Text
          </label>
          <textarea
            id="message-text"
            className="form-input py-2 shadow-inner mb-4"
            type="text"
            name="firstName"
            value={selectedText.messageText}
            onChange={(e) =>
              setSelectedText({ ...selectedText, messageText: e.target.value })
            }
          />
          <label htmlFor="img-link" className="text-left mb-1">
            Image Link (optional)
          </label>
          <input
            id="img-link"
            className="form-input py-2 shadow-inner mr-1"
            type="text"
            name="firstName"
            value={selectedText.mediaLink}
            onChange={(e) =>
              setSelectedText({ ...selectedText, mediaLink: e.target.value })
            }
          />
        </div>
      </div>
      <p className="message-form-info mb-4"></p>
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
          Clear changes
        </button>
      </div>
    </form>
  );
};
