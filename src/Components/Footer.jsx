import React from "react";
import github_Logo from "../assets/Images/github-logo.png";
import linkedin_Logo from "../assets/Images/linkedin-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={github_Logo} alt="github-logo" />
        <img src={linkedin_Logo} alt="linkedin-logo" />
      </div>
      <div className="copyright">
        <p>Nathalia Portfolio - © 2022 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
