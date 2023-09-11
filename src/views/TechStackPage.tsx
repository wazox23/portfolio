import React from "react";
import "../styles/Main.scss";
import bootstrapImage from "../assets/Bootstrap_logo.svg";
import pugImage from "../assets/pugjs.svg";
import reactImage from "../assets/react.svg";
import nodeImage from "../assets/nodejs.png";
import cssImage from "../assets/CSS.svg";
import htmlImage from "../assets/HTML5.svg";
import javascriptImage from "../assets/javascript.svg";
import mongodbImage from "../assets/mongodb.png";
import typescriptImage from "../assets/Typescript.svg";
import sassImage from "../assets/Sass.svg";
import gitImage from "../assets/git.png";
import expressImage from "../assets/express-js.svg";
import Nav from "../components/Nav";

function TechStack() {
  return (
    <div>
      <Nav />
      <div className="main-container">
        <div className="row">
          <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <span className="skill-title">HTML</span>
            <img src={htmlImage} alt="HTML" className="img" />
          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <span className="skill-title">CSS</span>
            <img src={cssImage} alt="CSS" className="img" />
          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <span className="skill-title">JavaScript</span>
            <img src={javascriptImage} alt="JavaScript" className="img" />
          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <span className="skill-title">React</span>
            <img src={reactImage} alt="React" className="img" />
          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <span className="skill-title">Bootstrap</span>
            <img src={bootstrapImage} alt="Bootstrap" className="img" />
          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <span className="skill-title">Git</span>
            <img src={gitImage} alt="Git" className="img" />
          </div>

          <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <span className="skill-title">Node</span>
            <img src={nodeImage} alt="Node.js" className="img" />
          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <span className="skill-title">Sass</span>
            <img src={sassImage} alt="Sass" className="img" />
          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <span className="skill-title">MongoDB</span>
            <img src={mongodbImage} alt="MongoDB" className="img" />
          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <span className="skill-title">Pug</span>
            <img src={pugImage} alt="Pug" className="img" />
          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <span className="skill-title">Express</span>
            <img src={expressImage} alt="Express" className="img" />
          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <span className="skill-title">TypeScript</span>
            <img src={typescriptImage} alt="TypeScript" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
