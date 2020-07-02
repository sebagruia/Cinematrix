import React from "react";
import "./recommendations.css";
import { connect } from "react-redux";
import RecomandationMovie from "../RecommendationMovie/recommendationMovie";

const Recommendations = ({ recommendations }) => {
  
  const generateRecommendationMovie = (movie, index) => {
    while (index <= 5) {
      return (
        <RecomandationMovie
          key={movie.id}
          imagePath={movie.backdrop_path}
          title={movie.title}
          id={movie.id}
          overview={movie.overview}
          release_date={movie.release_date}
          votes={movie.vote_average}
        />
      );
    }
  };

  return (
    <div className="today_recomandation_section">
      <div className="free-column"></div>
      <div className="recomandation">
        <div className="recomandation-title">
          <h4>TODAY'S RECOMMENDATIONS</h4>
        </div>
        <div className="recomandations-movies">
          {Object.values(recommendations).map((recomandation, index) => {
            return generateRecommendationMovie(recomandation, index);
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recommendations: state.movies.recommendations,
});

export default connect(mapStateToProps)(Recommendations);
