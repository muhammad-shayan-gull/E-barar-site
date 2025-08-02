import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Container, Row, Col, Card, Button, Spinner, Alert, Modal, Form
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// Step 1: Import Redux
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice'; // Make sure path is correct

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
 const navigate = useNavigate();
  const dispatch = useDispatch(); // Step 2: Setup dispatch

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch product details');
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleBuyNowClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  // Step 3: Handle Add to Cart
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (loading) return <Spinner animation="border" className="m-5" />;
  if (error) return <Alert variant="danger">Error: {error}</Alert>;

  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <p className="text-muted">{product.brand}</p>
          <p>{product.description}</p>
          <h4>${product.price}</h4>

          <div className="d-flex gap-3 mt-4">
            <Button variant="primary" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Button variant="success" onClick={handleBuyNowClick}>
              Buy Now
            </Button>
          </div>
        </Col>
      </Row>
       <button
        className="btn btn-outline-primary mt-4"
        onClick={() => navigate(-1)} // Go back to previous page
      >
        ← Go Back
      </button>
      
      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login or Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-3">
              Login
            </Button>

            <div className="text-center text-muted mb-2">or</div>

            <Button variant="outline-dark" className="w-100">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                alt="Google"
                style={{ width: '20px', marginRight: '10px' }}
              />
              Continue with Google
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default ProductDetail;
