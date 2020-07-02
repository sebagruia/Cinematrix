import React, { useState } from "react";
import "./header.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { searchMoviesAction } from "../../redux/index_actions";
import logo from "../../assets/images_and_icons/logo_dark_blue.png"

const Header = (props) => {
  const { dispatch } = props;
  const history = useHistory();

  const [query, setQuery] = useState("");

  const handleOnChange = (event) => {
    setQuery(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(searchMoviesAction(query));
    history.push("/search", { query:query });
    setQuery("");
  };

  const redirectToHome = () => {
    history.push("/");
  };

  return (
    <div className="container">
      <Navbar expand="lg">
        <hr className="header-hr" />

        <Navbar.Brand href="#home" onClick={redirectToHome} role="button">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="Cinematrix logo"
          />
        </Navbar.Brand>

        <Form inline className="ml-auto" onSubmit={handleOnSubmit}>
          <FormControl
            value={query}
            onChange={handleOnChange}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button
            className="search-button"
            type="submit"
            variant="outline-light"
          >
            Search
          </Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default connect()(Header);
