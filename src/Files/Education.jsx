import React from "react";

export const Education = () => {
  return (
    <div className="container mx-auto p-4" style={{ height: "100vh" }}>
      <h2 className="text-3xl font-bold mb-4 text-center" style={{ color:"rgb(239, 83, 236)"}}>Education Background</h2>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h4 className="card-title text-lg font-bold" style={{ color:"#4a90e2"}}>Highest Qualification</h4>
          <p className="card-text text-lg">
            "I completed my Bachelor's of Computer Science (BSc) at Loyola Degree College (YSRR) under Yogi Vemana University, graduating in 2024 with a remarkable percentage of 78%. My time in Loyola Degree College (YSRR) not only strengthened my technical skills but also ignited my passion for software development."
          </p>
        </div>
      </div>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h4 className="card-title text-lg font-bold" style={{ color:"#4a90e2"}}>Intermediate</h4>
          <p className="card-text text-lg">
            "I completed my Second school at Govt.Junior College at Talupula in the year of 2021 with a remarkable percentage of 77%."
          </p>
        </div>
      </div>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h4 className="card-title text-lg font-bold" style={{ color:"#4a90e2"}}>SSC</h4>
          <p className="card-text text-lg">
            "I completed my SSC in KGBV at Galiveedu, in the year of 2019 with a remarkable percentage of 93%."
          </p>
        </div>
      </div>
      
    </div>
  );
};
