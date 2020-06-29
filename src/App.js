import React, { Component, Fragment } from "react";
import "./App.css";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { getMovieRecommendationsAction } from "./redux/index_actions";
import Header from "./components/Header/header";
import Home from "./pages/Home/home";
import Footer from "./components/Footer/footer";

class App extends Component {
  componentDidMount() {
    this.props.getMovieRecommendations();
  }

  render() {
    return (
      <div>
        <LoadingBar />
        <Fragment>
          <Header />
          <Home />
          <Footer />
        </Fragment>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieRecommendations: () => dispatch(getMovieRecommendationsAction())
  };
};
export default connect(null, mapDispatchToProps)(App);
