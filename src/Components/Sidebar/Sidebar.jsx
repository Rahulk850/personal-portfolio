import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Ssidebar.css'

export const Sidebar = () => {
  return (
    // <div>
    <div className="sidebar">
      <div className="content">
        <div className="logo">
          <p>AAR.</p>
        </div>
        <div className="menu">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li><Link to='/skills'>SKILLS</Link></li>
          <li><Link to='/projects'>PROJECTS</Link></li>
          <li><Link to='/contact'>CONTACT</Link></li>
        </div>
        <div className="socials">
          <li>
            <div className="s"></div>
          </li>
          <li>
            <div className="s"></div>
          </li>
          <li>
            <div className="s"></div>
          </li>
        </div>
        <div className="copyright">
          <p>Copyrights @2023 Rahul Kumar. All rights reserved.</p>
        </div>
      </div>
    </div>
    //   </div>
  );
};
