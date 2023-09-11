import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Nav from "./components/Nav";

import Main from "./components/Main";
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap.min.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AnimationPage from "./views/AnimationPage";
import TechStackPage from "./views/TechStackPage";
import ProjectCards from "./views/ProjectCards";
import AboutMePage from "./views/AboutMePage";
import ContactPage from "./views/ContactPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimationPage />} />
        <Route path="/tech-stack" element={<TechStackPage />} />
        <Route path="/projects" element={<ProjectCards />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
