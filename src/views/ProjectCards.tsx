import React from "react";
import Nav from "../components/Nav";
import "../styles/ProjectCards.scss";
import crypto1 from "../assets/crypto1.png";
import crypto2 from "../assets/crypto2.png";
import crypto3 from "../assets/crypto3.png";
import festka1 from "../assets/festka1.png";
import festka2 from "../assets/festka2.png";
import festka3 from "../assets/festka3.png";
import festka4 from "../assets/festka4.png";
import festka5 from "../assets/festka5.png";
import calculator from "../assets/calculator.png";
import weather1 from "../assets/weather1.png";
import weather2 from "../assets/weather2.png";
import express1 from "../assets/express1.png";
import express2 from "../assets/express2.png";
import express3 from "../assets/express3.png";
import rockPaperScissors from "../assets/rock-paper-scissors.png";

const ProjectCards = () => {
  const projects = [
    {
      title: "to the Moon",
      description:
        "This web application tracks crypto currencies using the coingecko API. The app displays 7 trending cryptocurrencies and their price. After clicking on the cryptocurrency detail we can see the market cap rank, price in dollars, price in bitcoins, 24 hour price change, highest price in 24 hours and lowest price in 24 hours.",
      images: [crypto1, crypto2, crypto3],
      link: "https://github.com/wazox23/crypto-price-app",
    },
    {
      title: "Festka",
      description:
        "This website serves as an online marketplace for bicycles from a renowned Czech manufacturer. One of its standout features is a fully functional shopping cart that offers a seamless purchasing experience. Given the rising trend of mobile shopping, the website has been meticulously designed to be fully responsive.",
      images: [festka1, festka2, festka3, festka4, festka5],
      link: "https://wazox23.github.io/festka-website/",
    },
    {
      title: "Calculator",
      description:
        "This application transcends the capabilities of a standard calculator, having been meticulously crafted to accommodate a broad spectrum of mathematical requirements. While it furnishes the essential arithmetic functions such as addition, subtraction, multiplication, and division.",
      images: [calculator],
      link: "wazox23.github.io/react-calculator/",
    },
    {
      title: "Weather app",
      description:
        "This Weather App is not just a simple tool for checking the temperature; it's a comprehensive platform that integrates real-time data from the Open Weather API to provide you with a complete overview of current weather conditions in any given destination. Upon entering the location of interest, the application instantly displays a host of valuable information including current temperature, wind speed, and humidity levels.",
      images: [weather1, weather2],
      link: "https://wazox23.github.io/react-weather-app/",
    },
    {
      title: "Library",
      description:
        "This Backend Library App serves as a robust and flexible platform for managing a virtual book library with ease and efficiency. Unlike basic inventory systems, this application goes the extra mile by allowing you to create new entries for authors, genres, and individual books, making it an indispensable tool for bibliophiles and librarians alike. The app's intuitive interface is designed to make the process of adding new data points as seamless as possible.",
      images: [express1, express2, express3],
      link: "https://github.com/wazox23/express-library",
    },
    {
      title: "Rock paper scissors",
      description:
        "his simple Rock-Paper-Scissors application is a testament to the power and versatility of Vanilla JavaScript. While the game itself is a classic, known and loved worldwide, what sets this application apart is its lean, efficient codebase and user-friendly interface. The game mechanics follow the traditional rules: Rock crushes Scissors, Scissors cut Paper, and Paper covers Rock. To play, all you have to do is choose one of the three options.",
      images: [rockPaperScissors],
      link: "https://wazox23.github.io/rock-paper-scissors-v4/",
    },
  ];

  return (
    <div>
      <Nav />
      <div className="container main-container pt-3">
        <div className="row">
          {projects.map((project, index) => (
            <div
              className="col-md-4 col-sm-6 mb-4 d-flex align-items-center"
              key={index}
            >
              <div className="card mx-auto">
                <div
                  id={`carousel${index}`}
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {project.images.map((image, imageIndex) => (
                      <div
                        className={`carousel-item ${
                          imageIndex === 0 ? "active" : ""
                        }`}
                        key={imageIndex}
                      >
                        <img
                          src={image}
                          className=" w-100"
                          alt={project.title}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#carousel${index}`}
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#carousel${index}`}
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.link}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
