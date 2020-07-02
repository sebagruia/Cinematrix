import React, { useState } from "react";
import "./header.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { searchMoviesAction } from "../../redux/index_actions";

const Header = (props) => {
  const { dispatch } = props;
  const history = useHistory();

  const [query, setQuery] = useState();

  const handleOnChange = (event) => {
    setQuery(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(searchMoviesAction(query));
    history.push("/search", { query: query });
  };

  const redirectToHome = ()=>{
    history.push("/");
  }

  return (
    <div className="container">
      <Navbar expand="lg">
        <hr className="header-hr" />
        
          <Navbar.Brand href="#home" onClick={redirectToHome} role="button">
            <img
              src="/logo dark blue.png"
              className="d-inline-block align-top"
              alt="Cinematrix logo"
            />
          </Navbar.Brand>
        

        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        {/* <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav> */}
        <Form inline className="ml-auto" onSubmit={handleOnSubmit}>
          <FormControl
            onChange={handleOnChange}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button type="submit" variant="outline-light">
            Search
          </Button>
        </Form>
        {/* </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
};

export default connect()(Header);
