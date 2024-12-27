import React, { useState, useEffect } from "react";

export const Home = () => {
  const sentence =
    "As an aspiring front-end developer, I am excited to merge my love for design with my technical skills to create user-friendly applications. I am particularly interested in learning about user experience (UX) and user interface (UI) design.";
  
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < sentence.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + sentence[index]);
        setIndex(index + 1);
      }, 40);

      return () => clearTimeout(timeoutId);
    }
  }, [index, sentence]);

  return (
    <div className="container-fluid p-5 bg-light" style={{ height: "75vh" }}> {/* Full height with light background */}
      <div className="row justify-content-center align-items-center"> {/* Center the content */}
        <div className="col-12 col-md-10 text-center"> {/* Control the width and center text */}
          <h2 className="display-5 mb-5"> {/* Bootstrap display class for large font size */}
            Hello, I am <b>Yamini Thota</b>
          </h2>
          <p className="lead mx-5"> {/* Bootstrap lead class for larger text */}
            {displayedText}
          </p>
          <div className="mt-4">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};
