import React from "react";

import Per2 from "../img/per2.jpg";
import Per3 from "../img/per3.jpg";
const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={Per2} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={Per3} alt="" />
      </div>
    </div>
  );
};

export default Message;
