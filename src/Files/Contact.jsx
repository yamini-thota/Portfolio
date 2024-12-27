import React from 'react';

export const Contact = () => {
  return (
    <div className="container p-5">
      <h3 className="text-center mb-4">Contact Me</h3>
      <div className="row">
        <div className="col-md-6">
          <ul className="list-unstyled m-3">
            <li>
              <a href="https://www.linkedin.com/in/yamini-thota-521555257" className="btn btn-outline-primary btn-block p-2 px-5 m-3">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              --- LinkedIn

            </li>
            <li>
              <a href="https://github.com/yamini-thota/Resume" className="btn btn-outline-secondary btn-block m-3 p-2 px-5">
                <i className="fab fa-github"></i> GitHub
              </a>
              --- Resume
            </li>
          </ul>
        </div>

        <div className="col-md-6">
          <ul className="list-unstyled m-3">
            <li>
              <a href="mailto:ythota131@gmail.com" className="btn btn-outline-info btn-block p-2 px-5 m-3">
                <i className="fas fa-envelope"></i> Email
              </a>
              <span className="ml-2">--- ythota131@gmail.com</span>
            </li>
            <li>
              <a href="tel:+916305342254" className="btn btn-outline-danger btn-block p-2 m-3 px-5">
                <i className="fas fa-phone"></i> Phone
              </a>
              <span className="ml-2">--- +91 6305342254</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
