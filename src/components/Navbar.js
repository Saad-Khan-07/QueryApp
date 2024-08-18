import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            AppName
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/complaints">
                  Complain/Query
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link active" to="/complainttracker">
                  Complaint Tracker
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Previous Queries
                </Link>
              </li>
            </ul>
            <li className="nav-item dropdown dropstart" style={{color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight:'10px '}}>
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      UserID
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Username
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
          </div>
        </div>
      </nav>
    </div>
  );
}