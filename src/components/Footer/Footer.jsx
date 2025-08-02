import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer pt-5 pb-3 mt-5">
      <Container>
        <Row className="mb-4 text-center text-md-start">
          <Col md={3} sm={6} className="mb-4">
            <h5 className="footer-heading">YourStore</h5>
            <p className="footer-text">
              Top quality products at affordable prices. Fast delivery & excellent service.
            </p>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <h5 className="footer-heading">Explore</h5>
            <ul className="footer-links">
              <li><a href="/shop">Shop</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <h5 className="footer-heading">Support</h5>
            <ul className="footer-links">
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/returns">Returns</a></li>
              <li><a href="/shipping">Shipping Info</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <h5 className="footer-heading">Newsletter</h5>
            <Form>
              <Form.Group className="mb-2">
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Button variant="dark" type="submit" size="sm">
                Subscribe
              </Button>
            </Form>
            <div className="mt-3 d-flex gap-3 justify-content-md-start justify-content-center social-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </Col>
        </Row>

        <hr />
        <p className="text-center copyright">&copy; {new Date().getFullYear()} YourStore. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
