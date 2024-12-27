import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light 
    "
    style={{ backgroundColor: "rgb(36, 144, 222)"}}> {/* Use bg-light for a light background */}
      <div className="container">
        <Link to="/" className="navbar-brand text-white"> {/* Dark text for contrast */}
          Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/education" className="nav-link text-white"> {/* Dark text for nav links */}
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className="nav-link text-white">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link text-white">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
