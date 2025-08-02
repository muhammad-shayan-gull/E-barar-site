import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <div className="text-center py-5"><Spinner animation="border" /></div>;
  }

  return (
    <Container className="py-4">
      <h2 className="mb-4 text-capitalize">Category: {category}</h2>
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} md={3}>
            <Card onClick={() => navigate(`/product/${product.id}`)} style={{ cursor: 'pointer' }}>
              <Card.Img src={product.thumbnail} style={{ height: '200px', objectFit: 'contain' }} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CategoryPage;
