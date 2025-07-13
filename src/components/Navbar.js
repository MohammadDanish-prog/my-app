import React from 'react';
//import { a } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid justify-content-between">
        <a className="navbar-brand" href="/">Text Utils</a>
        <button className="navbar-hrefggler" type="button" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-hrefggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`btn btn-${props.mode === 'light' ? 'outline-dark' : 'outline-light'} rounded-pill my-2 mx-1`}
                style={{ minWidth: "80px" }}
                href="/"
              >Home</a>
            </li>
          </ul>
          <div className="d-flex align-items-center ms-auhref">
            <button
              className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} rounded-circle ms-3`}
              onClick={props.toggleMode}
              title={props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
              style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              {props.mode === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}