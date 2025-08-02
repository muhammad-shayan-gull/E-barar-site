import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { useSelector, useDispatch } from 'react-redux'; // ✅ Added useDispatch
import { setSearchTerm } from '../../features/search/searchSlice'; // ✅ Import action

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const dispatch = useDispatch(); // ✅ Initialize dispatch
  const navigate = useNavigate();

  // ✅ Clear searchTerm when Home loads
  useEffect(() => {
    dispatch(setSearchTerm("")); // Reset search term
  }, [dispatch]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="home-loading">
        <Spinner animation="border" />
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="home-loading">
        <p className="text-danger">Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      <Container className="home-container">
        <Row>
          <ImageSlider />
        </Row>

        <Row className="g-4 justify-content-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <Col key={product.id} md={3} sm={6}>
                <Card
                  className="home-card h-100 shadow-sm"
                  onClick={() => navigate(`/product/${product.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description.substring(0, 60)}...</Card.Text>
                    <Card.Text><strong className='price'>${product.price}</strong></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center">No matching products found.</p>
          )}
        </Row>
      </Container>
    </>
  );
}

export default Home;
