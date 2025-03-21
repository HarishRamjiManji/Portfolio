// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="topnav">
      {/* Social links */}
      <a href="mailto:harinharish2002@gmail.com" className="leftlink">
        <img src="rs/icons/gmail-svgrepo-com.png" alt="GMail" className="imgs2" />
      </a>
      <a href="https://www.linkedin.com/in/harish-ramji-manji-65b82373/" className="leftlink">
        <img src="rs/icons/linkedin-svgrepo-com.png" alt="LinkedIn" className="imgs2" />
      </a>
      <a href="https://github.com/HarishRamjiRaghwani" className="leftlink">
        <img src="rs/icons/git.jpg" alt="GitHub" className="imgs2" />
      </a>

      {/* Navigation links */}
      <Link className="rightlink" to="/about_us">About Us</Link>
      <Link className="rightlink" to="/skills">Meet the Team</Link>
      <Link className="rightlink" to="/projects">Projects</Link>
      <Link className="rightlink" to="/">Home</Link>
      
      
      
    </div>
  </div>
);

export default Header;
