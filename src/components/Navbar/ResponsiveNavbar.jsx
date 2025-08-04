import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ExploreModal from "./ExploreModal";
import { setSearchTerm } from "../../features/search/searchSlice";
import "./Navbar.css";
const ResponsiveNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // ✅ When user submits search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim() === "") return;

    dispatch(setSearchTerm(searchValue));
    navigate(`/search?q=${encodeURIComponent(searchValue)}`);
  };

  // ✅ Clear search
  const handleClear = () => {
    setSearchValue("");
    dispatch(setSearchTerm(""));
    navigate("/");
  };

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top" >
        <Container fluid className="px-5">
          <Navbar.Brand href="#" className="fs-3 fw-bold">W.</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={handleOpen}>
                Explore<i className="fa-solid fa-caret-down"></i>
              </Nav.Link>
              <Nav.Link as={Link} to="/">Directory</Nav.Link>
              <Nav.Link as={Link} to="/Academy" style={{position: "relative",}}>
                Academy <span style={{ backgroundColor: 'black', color: 'white', borderRadius: '3px', fontSize: "13px" ,position:"absolute", top:"-3px",right :"3px" }}>New</span>
              </Nav.Link>
              <Nav.Link href="#about">Jobs</Nav.Link>
              <Nav.Link href="#contact">Market</Nav.Link>
            </Nav>

            {/* ✅ Search + Clear logic */}
            <Form className="d-flex me-3" onSubmit={handleSearch}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                style={{ width: "500px", backgroundColor: "#e9e9e9" }}
              />

              {searchValue.trim() ? (
                <Button variant="outline-danger" onClick={handleClear}>
                  Clear
                </Button>
              ) : (
                <Button type="submit" variant="outline-dark">
                  Search
                </Button>
              )}

              <Button variant="none" className="px-">Login</Button>
              <Button variant="none" className="mx-1">Sign up</Button>
            </Form>
            <Button variant="outline-dark">Join Directory</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar>
        <Container>

        </Container>
      </Navbar>

      <ExploreModal show={showModal} handleClose={handleClose} />
    </>
  );
};

export default ResponsiveNavbar;
