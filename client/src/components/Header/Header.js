import React from "react";

import "./Header.css";

export const Header = () => {
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  const toggleMenu = () => {
    document.querySelector("ul").classList.add("transition");
    if (document.querySelector("ul").classList.contains("openMenu")) {
      document.querySelector("ul").classList.remove("openMenu");
      document.querySelector(".close").style.display = "none";
      document.querySelector(".hamburger").style.display = "block";
    } else {
      document.querySelector("ul").classList.add("openMenu");
      document.querySelector(".close").style.display = "block";
      document.querySelector(".hamburger").style.display = "none";
    }
  };

  window.addEventListener("resize", () => {
    document.querySelector("ul").classList.remove("transition");
    if (window.innerWidth > 700) {
      document.querySelector(".hamburger").style.display = "none";
      document.querySelector(".close").style.display = "none";
    } else {
      document.querySelector(".hamburger").style.display = "block";
      document.querySelector(".close").style.display = "none";
    }
    document.querySelector("ul").classList.remove("openMenu");
  });
  return (
    <header className="absolute top-0 left-0 md:px-12 md:pt-8 flex w-full items-center justify-between">
      <a className="pl-6" href="/">
        <h1 className="font-bold text-4xl whitespace-nowrap">Fitness Text</h1>
      </a>
      {/* HAMBURGER ICON */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="hamburger w-8 h-8 hover:cursor-pointer"
        onClick={toggleMenu}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      {/* CLOSE ICON */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="close w-8 h-8 hover:cursor-pointer"
        onClick={toggleMenu}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      <ul className="flex absolute">
        <a
          className="mx-3 hover:bg-sky-500 rounded-md flex items-center px-3"
          href="/send"
        >
          <li>Send message</li>
        </a>
        <a
          className="mx-3 hover:bg-sky-500 rounded-md flex items-center px-3"
          href="/edit-text"
        >
          <li>Edit daily messages</li>
        </a>
        <a
          className="mx-3 hover:bg-sky-500 rounded-md flex items-center px-3"
          href="/clients"
        >
          <li>Edit clients</li>
        </a>
        <button
          className="logout flex justify-start pl-6"
          onClick={handleLogOut}
        >
          Log out
        </button>
      </ul>
    </header>
  );
};
