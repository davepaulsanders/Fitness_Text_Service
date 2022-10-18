import React, { useState } from "react";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    const body = { username, password };

    e.preventDefault();
    const token = await fetch("http://localhost:3001/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (token.error) {
    } else {
      localStorage.setItem("jwt", token.userToken);
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
      <button
        type="submit"
        className="bg-blue-400 hover:bg-blue-500 text-xl py-2 w-full rounded-md"
      >
        Login
      </button>
    </form>
  );
};
