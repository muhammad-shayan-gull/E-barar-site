// src/components/ProductList.jsx
import React, { useState } from 'react';

function ProductList({ products }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on the search term
  const filtered = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        className="form-control mb-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Show Filtered Products */}
      <div className="row">
        {filtered.map((product) => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5>{product.title}</h5>
                <p>{product.description}</p>
                <p><strong>${product.price}</strong></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
