import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "../components/Typewriter";
import "../styles/Typewriter.scss";

export default function AnimationPage() {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const goToTechStack = () => {
    navigate("/tech-stack");
  };

  const handleComplete = () => {
    setShowButton(true);
    setShowImage(true);
  };

  return (
    <div className="text-animation p-3 text-center">
      <Typewriter onComplete={handleComplete}>
        Hey! I'm a Full-Stack Dev lookin' to level up in this fast-paced web dev
        world. Wanna know what I've got?
      </Typewriter>
      {showButton && (
        <button className="button" onClick={goToTechStack}>
          Click here!
        </button>
      )}
    </div>
  );
}
