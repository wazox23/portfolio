import React from "react";
import "../styles/Header.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="nav-container">
            <a href="https://github.com/wazox23">
              <FaGithub className="fs-1 text-white d-none d-md-inline" />
            </a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/tech-stack"
                  className={`nav-link ${
                    location.pathname === "/tech-stack" ? "active" : ""
                  }`}
                >
                  Tech Stack
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/projects"
                  className={`nav-link ${
                    location.pathname === "/projects" ? "active" : ""
                  }`}
                >
                  Projects
                </Link>
              </li>
              <div className="center-container">
                <h1>Martin Balajka</h1>
              </div>
              <li className="nav-item">
                <Link
                  to="/about-me"
                  className={`nav-link ${
                    location.pathname === "/about-me" ? "active" : ""
                  }`}
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <a href="https://www.linkedin.com/in/martin-balajka-77a20120b/">
            <FaLinkedin className="fs-1 text-white d-none d-md-inline" />
          </a>
        </div>
      </div>
    </nav>
  );
}
