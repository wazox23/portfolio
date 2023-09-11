import React from "react";
import Nav from "../components/Nav";
import "../styles/ContactPage.scss";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emojiCall from "../assets/emoji-call.png";

export default function ContactPage() {
  return (
    <div>
      <Nav />
      <div className="main-container container d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="row w-100">
          <div className="col-12 d-flex justify-content-center align-items-center flex-column">
            <img src={emojiCall} alt="Emoji Call" className="mb-4" />
            <div className="contact-box">
              <div className="contact-item">
                <FaPhone className="text-white" />
                <p>+420 608 204 736</p>
              </div>
              <div className="contact-item">
                <FaEnvelope className="text-white" />
                <p>martinbalajka23@gmail.com</p>
              </div>
              <div className="contact-item">
                <FaLinkedin className="text-white" />
                <a
                  href="https://www.linkedin.com/in/martin-balajka-77a20120b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="contact-item text-white">
                <FaGithub className="text-white" />
                <a
                  href="https://github.com/wazox23"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
