import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const searchTerm = query.get('q') || '';

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate(); // ✅ for redirecting to product detail

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  useEffect(() => {
    const results = products.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(results);
  }, [products, searchTerm]);

  return (
    <Container className="py-4">
      <h2>Search Results for: "{searchTerm}"</h2>
      <Row className="g-4 mt-3">
        {filtered.length > 0 ? (
          filtered.map(product => (
            <Col key={product.id} md={3}>
              <Card
                onClick={() => navigate(`/product/${product.id}`)} // ✅ go to product detail
                style={{ cursor: 'pointer' }}
              >
                <Card.Img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </Row>
    </Container>
  );
}

export default SearchResults;
