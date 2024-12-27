import React from "react";

export const Footer = () => {
  return (
    <footer
      className="text-white pt-3 pb-1"
      style={{ backgroundColor: "rgb(47, 150, 224)" }} // Corrected the style prop
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="lead mb-0">&copy; 2024 Portfolio</p>
            <p className="small">Built with using React</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
