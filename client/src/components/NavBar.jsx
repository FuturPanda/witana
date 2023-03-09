import React from "react";
import Clock from "./Clock";
import Editor from "./Editor";

const NavBar = () => {
  return (
    <div
      className="bg-secondary text-white w-3/4 h-12 left-1/2 -translate-x-1/2 -translate-y-1/2 
    rounded-lg py-3 px-6 flex justify-between absolute top-10"
    >
      <Clock />
      <span>About</span>
    </div>
  );
};

export default NavBar;
