import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}
export default App;
