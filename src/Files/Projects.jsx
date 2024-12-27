import React from "react";

export const Projects = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-5 text-center">Projects</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title">Shopping</h4>
              <p className="card-text">It is created by using HTML5, CSS3 and it is static web page.</p>
              <a href="https://github.com/yamini-thota/projects">GitHub Link</a>
            </div>
          </div>
        </div>
        <div className="col-md-6"> 
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title">Find a Number</h4>
              <p className="card-text">It is based on HTML5, CSS3, Javascript. It is a game, to find a number from  1 to 10..</p>
              <a href="https://github.com/yamini-thota/projects">GitHub Link</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title">Calculator</h4>
              <p className="card-text">It is also created by using HTML5, CSS3, Javascript. It is a calculator based on javascript functionalities.</p>
              <a href="https://github.com/yamini-thota/projects">GitHub Link</a>
            </div>
          </div>
        </div>
        <div className="col-md-6"> 
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title">Meal Finder</h4>
              <p className="card-text">It is also created by using HTML5, CSS3 and Javascript. It is web page to order meals from that app.</p>
              <a href="https://github.com/yamini-thota/Meals">GitHub Link</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title">E-Commerce</h4>
              <p className="card-text">It is based on HTML5, CSS3, bootstrap and React.Js and It is a E-Commerce Website.</p>
              <a href="https://github.com/yamini-thota/E-Commerce">GitHub Link</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
