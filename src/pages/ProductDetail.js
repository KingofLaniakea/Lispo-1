import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail">
        <Link to="/products" className="back-link">← Back to Products</Link>
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h2>Product not found</h2>
          <p>The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <Link to="/products" className="back-link">← Back to Products</Link>

      <div className="product-detail-container">
        <div className="product-detail-image-container">
          <img
            src={process.env.PUBLIC_URL + product.image}
            alt={product.name}
            className="product-detail-image"
          />
        </div>

        <div className="product-detail-info">
          <p className="product-detail-category">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-detail-description">{product.description}</p>

          <div className="product-features">
            <h3>Key Features</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <p className="product-price" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
            {product.price}
          </p>

          <Link to="/contact" className="contact-btn">
            Inquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
