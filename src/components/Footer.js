// src/components/Footer.js
import React from "react";

const Footer = () => (
  <footer>
    <div className="footer">
      <p>
        COPYRIGHT<sup>&copy;</sup> HARIN RAMJI 2025.
        </p>
        <div className="footer_icons">
          <a href="mailto:harinharish2002@gmail.com" className="leftlink">
          <img src="rs/icons/gmail-svgrepo-com.png" alt="GMail" className="imgs3" />
          </a>
          <a href="https://www.linkedin.com/in/harish-ramji-manji-65b82373/" className="leftlink">
          <img src="rs/icons/linkedin-svgrepo-com.png" alt="LinkedIn" className="imgs3" />
          </a>
          <a href="https://github.com/HarishRamjiRaghwani" className="leftlink">
          <img src="rs/icons/git.jpg" alt="GitHub" className="imgs3" />
          </a>
      </div>
      
    </div>
  </footer>
);

export default Footer;
