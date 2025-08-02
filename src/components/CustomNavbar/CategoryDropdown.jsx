import { useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CategoryDropdown() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  const handleSelect = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <NavDropdown title="Categories" id="category-dropdown">
      {categories.map((cat) => (
        <NavDropdown.Item key={cat} onClick={() => handleSelect(cat)}>
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}

export default CategoryDropdown;
