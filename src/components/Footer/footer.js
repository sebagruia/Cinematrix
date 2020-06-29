import React from "react";
import "./footer.css";
import gitHubIcon from "../../assets/images_and_icons/gitHubIcon.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>copyright SebastianGruia</p>
      <div className="gitHub-container">
        <img src={gitHubIcon} alt="GitHub icon" />
      </div>
    </div>
  );
};

export default Footer;
