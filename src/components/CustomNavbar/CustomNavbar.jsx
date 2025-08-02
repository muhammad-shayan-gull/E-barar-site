import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button
} from "react-bootstrap";
import './CustomNavbar.css';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const CustomNavbar = () => {
  const cartCount = useSelector((state) => state.cart.cartItems.length);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  
  useEffect(() => {
  const demo = ["smartphones", "laptops", "fragrances"];
  console.log("👉 Hardcoded categories:", demo);
  setCategories(demo);
}, []);

const handleCategorySelect = (category) => {
     navigate(`/category/${category}`);
   };
  return (
    <Navbar expand="lg" className="custom-navbar mx-5">
      <Container fluid className="px-0">
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">

            <NavDropdown
              title={
                <span className="dropdown-toggle-custom">
                  Type <i className="fa-solid fa-caret-down"></i>
                </span>
              }>
              <NavDropdown.Item href="#">Agency & studio</NavDropdown.Item>
              <NavDropdown.Item href="#">Freelance</NavDropdown.Item>
              <NavDropdown.Item href="#">International</NavDropdown.Item>
            </NavDropdown>

            {/* ✅ Fixed Category Dropdown */}
<NavDropdown
  title={
    <span className="dropdown-toggle-custom">
      Category <i className="fa-solid fa-caret-down"></i>
    </span>
  }
>
  {categories.length === 0 ? (
    <NavDropdown.Item disabled>Loading categories...</NavDropdown.Item>
  ) : (
    categories
      .filter((cat) => typeof cat === 'string') // ✅ Only keep valid strings
      .map((cat, index) => (
        <NavDropdown.Item key={index} onClick={() => handleCategorySelect(cat)}>
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </NavDropdown.Item>
      ))
  )}
</NavDropdown>

            <NavDropdown
              title={
                <span className="dropdown-toggle-custom">
                  Quote <i className="fa-solid fa-caret-down"></i>
                </span>
              }>
              <NavDropdown.Item href="#">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Option 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Option 3</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={
                <span className="dropdown-toggle-custom">
                  Country <i className="fa-solid fa-caret-down"></i>
                </span>
              }>
              <NavDropdown.Item href="#">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Option 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Option 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* ✅ Cart Button */}
          <Button variant="light" className="mx-2">
            <Link to="/cart" className="nav-link counter">
              {cartCount} <i className="fa-regular fa-cart-shopping"></i>
            </Link>
          </Button>

          <Button variant="light" className="reset-btn px-4 p-2 ">
          <Link to={"/"}>  Reset filters <i className="fa-solid fa-arrows-retweet"></i></Link>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
