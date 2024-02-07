import config from './config.js';
import MessageParser from "./MessageParser.js";
import ActionProvider from './ActionProvider.js';
import Chatbot from 'react-chatbot-kit';
import { Link } from "react-router-dom";
import 'react-chatbot-kit/build/main.css';
import "./Chatbot.css";
const chatbot = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      <Link to="/" style={{ color: "inherit", textDecoration: "none"}}>
              <button className="home_button">Home</button>
      </Link>
    </div>
  );
};

export default chatbot ;