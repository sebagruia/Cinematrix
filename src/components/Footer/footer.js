import React from "react";
import "./footer.css";
import gitHubIcon from "../../assets/images_and_icons/gitHubIcon.png";
import theMovieLogo from "../../assets/images_and_icons/theMovieAPI.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="copyright">
        <p>copyright SebastianGruia</p>
        <div className="gitHub-container">
          <img src={gitHubIcon} alt="GitHub icon" />
        </div>
      </div>

      <div className="powered">
        <p>powered by</p>
        <div className="theMovieLogo-container">
          <img src={theMovieLogo} alt="log of The Movie Api" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
