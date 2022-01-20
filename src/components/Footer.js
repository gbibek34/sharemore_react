import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mb-0">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6 pr-5">
            <h3>Learnmore</h3>
            <p>
              Sharemore is a blog app prepared in order to allow people to share
              various contents and things they want to share.
            </p>
          </div>
          <div className="col-md-3 pt-4">
            <ul>
              <li>
                <i className="far fa-address-card"></i>
                <label className="pl-3">9860673555</label>
              </li>
              <li>
                <i className="far fa-envelope"></i>
                <label className="pl-3">sharemore@gmail.com</label>
              </li>
              <li>
                <i className="fas fa-map-marker"></i>
                <label className="pl-3">Pipalbot, Dillibazar</label>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <Link className="quick-links" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="quick-links" to="/myposts">
                  My Posts
                </Link>
              </li>
              <li>
                <Link className="quick-links" to="/more">
                  More
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
