import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ loggedIn, setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("jwt") !== null) {
      navigate("/landing");
    }
  }, []);

  
  const handleSubmit = async (e) => {
    const body = { username, password };

    e.preventDefault();
    const token = await fetch("http://localhost:3001/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const tokenResponse = await token.json();

    if (tokenResponse.error) {
      document.querySelector(".error-message").style.color = "red";
      document.querySelector(".error-message").innerHTML = tokenResponse.error;
    } else {
      localStorage.setItem("jwt", tokenResponse.userToken);
      setLoggedIn(true);
      navigate("/landing");
    }
  };
  return (
    <form
      className="p-6 w-11/12 lg:w-4/12 shadow bg-white"
      onSubmit={handleSubmit}
    >
      <h1 className="text-left mb-6 text-2xl font-bold">
        Welcome Bonnie and Will!
      </h1>
      <div className="flex flex-col mb-2">
        <label htmlFor="username" className="text-left mb-1">
          Username
        </label>
        <input
          id="username"
          className="form-input py-2 shadow-inner"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-5">
        <label htmlFor="password" className="text-left mb-1">
          Password
        </label>
        <input
          id="password"
          className="form-input py-2 shadow-inner"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <p className="error-message mb-4"></p>
      <button
        type="submit"
        className="bg-blue-400 hover:bg-blue-500 text-xl py-2 w-full rounded-md"
      >
        Login
      </button>
    </form>
  );
};
