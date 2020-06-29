import React from "react";
import "./home.css";
import Recommendations from "../../components/Recommendations/recommendations";
import Popular from "../../components/Popular/popular";
import Favorites from "../../components/Favorites/favorites";

const Home = () => {
  return (
    <div className="container">
      <Recommendations />

      <hr className="popular_movies-hr" />

      <Popular />

      <hr className="popular_movies-hr" />

      <Favorites />
    </div>
  );
};

export default Home;
