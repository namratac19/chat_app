import React from "react";

import Per2 from "../img/per2.jpg";
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src={Per2} alt="" />
        <span>Jenny</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
