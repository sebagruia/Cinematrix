import React, { Component, Fragment } from "react";
import "./App.css";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { Route, Switch } from "react-router-dom";
import {
  getMovieRecommendationsAction,
  getPopularMoviesAction,
  getMyFavoriteMovies,
  getPopularTvAction
} from "./redux/index_actions";
import Header from "./components/Header/header";
import Home from "./pages/Home/home";
import Search from "./pages/Search/search";
import MovieDetails from "./pages/MovieDetails/movieDetails";
import Footer from "./components/Footer/footer";

class App extends Component {
  componentDidMount() {
    this.props.getMovieRecommendations();
    this.props.getPopularMovies();
    this.props.getFavoriteMovies();
    this.props.getPopularTv();
  }

  render() {
    return (
      <div>
        <LoadingBar />
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route  path="/search">
              <Search />
            </Route>
            <Route  path="/moviedetails">
              <MovieDetails />
            </Route>
          </Switch>
          <Footer />
        </Fragment>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieRecommendations: () => dispatch(getMovieRecommendationsAction()),
    getPopularMovies: () => dispatch(getPopularMoviesAction()),
    getFavoriteMovies: () => dispatch(getMyFavoriteMovies()),
    getPopularTv: () => dispatch(getPopularTvAction()),
  };
};
export default connect(null, mapDispatchToProps)(App);
