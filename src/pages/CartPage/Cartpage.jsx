import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import { removeFromCart, increaseQty, decreaseQty } from '../../features/cart/cartSlice';

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container className="py-4">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <Card className="mb-3" key={item.id}>
              <Card.Body>
                <Row className="align-items-center">
                  <Col md={2}>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="img-fluid rounded"
                    />
                  </Col>
                  <Col md={5}>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <p><strong>Price:</strong> ${item.price}</p>
                  </Col>
                  <Col md={2}>
                    <ButtonGroup>
                      <Button
                        variant="secondary"
                        onClick={() => dispatch(decreaseQty(item.id))}
                      >
                        −
                      </Button>
                      <Button variant="light" disabled>
                        {item.quantity}
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => dispatch(increaseQty(item.id))}
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  </Col>
                  <Col md={3} className="text-end">
                    <Button
                      variant="danger"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Cancel
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
          <h4>Total: ${total.toFixed(2)}</h4>
        </>
      )}
    </Container>
  );
}

export default CartPage;
