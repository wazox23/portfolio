import React, { useState, useEffect, ReactNode } from "react";

interface TypewriterProps {
  children: ReactNode;
  onComplete?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({ children, onComplete }) => {
  const [visibleText, setVisibleText] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const text = children?.toString() ?? "";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setVisibleText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsCompleted(true);
        if (onComplete) {
          onComplete();
        }
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isCompleted && onComplete) {
      onComplete();
    }
  }, [isCompleted, onComplete]);

  return (
    <div>
      <h1>
        {visibleText}
        <span className={isCompleted ? "cursor hidden" : "cursor"}>|</span>
      </h1>
    </div>
  );
};

export default Typewriter;
