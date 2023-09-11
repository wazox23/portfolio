import React from "react";
import Nav from "../components/Nav";
import "../styles/AboutMePage.scss";
import emojiPC from "../assets/emoji-pc.png";

export default function AboutMePage() {
  return (
    <div>
      <Nav />
      <div className="main-container container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <div className="text-container">
              <p className="about-me-text">
                <p className="fs-1 fw-bold">About Me</p>
                I am a 24-year-old Engineering student specializing in the
                Security of Logistic Systems. Early in my academic career, I
                realized that logistics was not my true passion, which led me to
                pivot towards programming.
                <br />
                <br />
                With approximately three years of self-guided learning, I have
                gained proficiency in front-end development and have a solid
                foundation in back-end technologies.
                <br />
                <br />
                In addition to my academic pursuits and programming skills, I am
                a highly motivated individual always looking to acquire new
                skills. In my free time, I enjoy gaming, watching series, and
                cycling.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <img src={emojiPC} alt="emoji" className="emoji-pc" />
          </div>
        </div>
      </div>
    </div>
  );
}
