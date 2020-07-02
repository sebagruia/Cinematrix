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
          <a href="https://github.com/sebagruia" target="_blank" rel="noopener noreferrer"><img src={gitHubIcon} alt="GitHub icon" /></a>
        </div>
      </div>

      <div className="powered">
        <p>powered by</p>
        <div className="theMovieLogo-container">
          <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer"><img src={theMovieLogo} alt="log of The Movie Api" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
