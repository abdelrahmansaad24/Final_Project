import React from "react";
import { Link } from "react-router-dom";
import { IoIosChatboxes } from "react-icons/io";
import "./chatfloat.css"

const chatfloat = ()=>{
    return(
        <div className="container">
            <Link to="/chatbot" style={{ color: "inherit", textDecoration: "none"}}>
              <button className="chat_button"><IoIosChatboxes className="icon"/></button>
              </Link>
        </div>
    );
};
export default chatfloat;