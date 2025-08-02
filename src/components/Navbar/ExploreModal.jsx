import React, { useState } from "react";
import { Modal, Nav, Container, Row, Col, Navbar, Form, FormControl, Button } from "react-bootstrap";
import './ExploreModal.css';

const ExploreModal = ({ show, handleClose }) => {
  const [activeTab, setActiveTab] = useState("item1");

  const content = {
    item1: ["Explore the creative world", "Discover top designers", "Join the community"],
    item2: ["Build your portfolio", "Showcase your work", "Gain exposure"],
    item3: ["Post job offers", "Hire creative talent", "Collaborate easily"],
    item4: ["Find design inspiration", "Learn from experts", "Browse award-winning sites"],
    item5: ["Join premium membership", "Get exclusive tools", "Promote your agency"],
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      backdrop={true}
      size="lg"
      className="custom-explore-modal"
    >
      <Modal.Body className="p-0">

        {/* Full-width Navbar inside modal */}
        <div className="modal-navbar-container">
          <Navbar bg="light" expand="lg" className="px-5">
            <Container fluid>
              <Navbar.Brand href="#" className="fs-3 fw-bold">W.</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Form className="d-flex me-3">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    style={{ width: "600px", backgroundColor: "#f4f4f4" }}
                  />
                  <Button variant="none" className="px-2">Login</Button>
                  <Button variant="none" className="mx-1">Sign up</Button>
                </Form>
                <Button variant="dark" className="mx-2">Be Pro</Button>
                <Button variant="outline-dark">Join Directory</Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        {/* Content Section */}
        <div className="modal-content-section">
          <Container fluid>
            <Row>
              <Col md={4} className="sidebar">
                <Nav className="flex-column">
                  <Nav.Link onClick={() => setActiveTab("item1")}><i className="fa-light fa-wheat"></i> Awards</Nav.Link>
                  <Nav.Link onClick={() => setActiveTab("item2")}><i className="fa-regular fa-table-list"></i> By Category</Nav.Link>
                  <Nav.Link onClick={() => setActiveTab("item3")}><i className="fa-regular fa-circle-notch"></i> Collections</Nav.Link>
                  <Nav.Link onClick={() => setActiveTab("item4")}><i className="fa-solid fa-microchip"></i> By Technology</Nav.Link>
                  <Nav.Link onClick={() => setActiveTab("item5")}><i className="fa-regular fa-square-dashed"></i> Blog</Nav.Link>
                </Nav>
              </Col>
              <Col md={8} className="content-area">
                <ol className="content-list">
                  {content[activeTab].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </Col>
            </Row>
          </Container>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ExploreModal;
