import React from "react";
import { Link } from "react-router-dom";
import "./ftr.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <ul className="links" style={{ fontSize: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
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
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
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
            </div>
          </ul>
        </div>
        <p className="copyright">Copyright 2023 All Rights Reserved.</p>
      </footer>
    </>
  );
};
