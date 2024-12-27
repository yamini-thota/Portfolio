import React from "react";

export const Skills = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-5 m-2 text-center" style={{ color:" #e67e22"}}>Skills</h2>
      <div className="row g-4"> {/* Bootstrap grid with gaps */}
        <div className="col-md-6"> {/* Two columns on medium and larger screens */}
          <div className="card shadow-sm mb-4 p-3">
            <div className="card-body">
              <h5 className="card-title">Programming Languages</h5>
              <p className="card-text">HTML5, CSS3, JavaScript, Python, MySQL.</p>
            </div>
          </div>
          <div className="card shadow-sm mb-4 p-3">
            <div className="card-body">
              <h5 className="card-title">Frameworks</h5>
              <p className="card-text">Bootstrap, React.js, and Basic Sass.</p>
            </div>
          </div>
          <div className="card shadow-sm mb-4 p-3">
            <div className="card-body">
              <h5 className="card-title">Development Tools</h5>
              <p className="card-text">GitHub, VSCode, Chrome Dev Tools.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6"> {/* Second column */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">Other Skills</h5>
              <p className="card-text">Responsive Design, Cross-Browser Compatibility, Debugging.</p>
            </div>
          </div>
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">Soft Skills</h5>
              <p className="card-text">Communication, Adaptability, Teamwork, Interpersonal Skills, Basic Computer Knowledge.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
