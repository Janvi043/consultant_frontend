import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            {" "}
            <span className="sr-only">Toggle navigation</span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Spirea Arch
          </a>{" "}
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Consultants
              </a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              {localStorage.getItem("token") ? (
                <Link to="/app" style={{ backgroundColor: "rgba(0,0,255,0.4)", paddingInline: "16px", borderRadius: "4px", color: "white", fontWeight: "bold" }}>
                  Dashboard
                </Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
