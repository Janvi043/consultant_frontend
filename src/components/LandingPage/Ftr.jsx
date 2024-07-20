import React from "react";
import ".//ftr.css";
import { Link } from "react-router-dom";
export const Ftr = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <ul className="links" style={{ fontSize: "24px" }}>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" style={{ fontSize: "18px" }}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" style={{ fontSize: "18px" }}>
                About
              </a>
            </li>
            <li>
              <a>
                <Link to="/contact" style={{ fontSize: "18px" }}>
                  Contact
                </Link>
              </a>
            </li>
            <li>
              <a href="#" style={{ fontSize: "18px" }}>
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <p className="copyright">Copyright 2023 All Rights Reserved.</p>
      </footer>
    </>
  );
};
