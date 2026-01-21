import React from 'react';
import { Link } from 'react-router-dom';
import products, { categories } from '../data/products';

function Home() {
  const featuredProducts = products.slice(0, 6);
  const mainCategories = categories.filter(cat => cat.id !== 'all').slice(0, 8);

  const heroStyle = {
    backgroundImage: `linear-gradient(135deg, rgba(26, 71, 42, 0.75) 0%, rgba(45, 90, 61, 0.85) 100%), url(${process.env.PUBLIC_URL}/images/图片11.jpg)`
  };

  const featuresStyle = {
    backgroundImage: `linear-gradient(rgba(248, 249, 250, 0.93), rgba(248, 249, 250, 0.95)), url(${process.env.PUBLIC_URL}/images/图片12.png)`
  };

  const categoryStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.95)), url(${process.env.PUBLIC_URL}/images/图片19.png)`
  };

  const featuredStyle = {
    backgroundImage: `linear-gradient(rgba(248, 249, 250, 0.90), rgba(248, 249, 250, 0.93)), url(${process.env.PUBLIC_URL}/images/图片3.jpg)`
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={heroStyle}>
        <h1>Premium Hunting & Outdoor Equipment</h1>
        <p>
          Hangzhou Lispo Sports Co., Ltd. - Professional manufacturer of high-quality hunting decoys,
          outdoor gear, and camping supplies. Trusted by hunters and outdoor enthusiasts worldwide.
        </p>
        <div className="hero-buttons">
          <Link to="/products" className="btn btn-primary">View Products</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features" style={featuresStyle}>
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🏭</div>
            <h3>Factory Direct</h3>
            <p>Direct from manufacturer with competitive pricing and customization options for bulk orders.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Premium Quality</h3>
            <p>High-quality materials and strict quality control ensure durable, reliable products.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Global Shipping</h3>
            <p>Experienced in international trade with reliable shipping to customers worldwide.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>OEM/ODM Service</h3>
            <p>Custom design and branding services available for your specific requirements.</p>
          </div>
        </div>
      </section>

      {/* Category Preview */}
      <section className="section category-preview" style={categoryStyle}>
        <h2 className="section-title">Product Categories</h2>
        <div className="category-grid">
          {mainCategories.map(category => (
            <Link
              to={`/products?category=${encodeURIComponent(category.id)}`}
              className="category-card"
              key={category.id}
            >
              <div className="category-card-icon">{category.icon}</div>
              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="section featured-products" style={featuredStyle}>
        <h2 className="section-title">Featured Products</h2>
        <div className="featured-grid">
          {featuredProducts.map(product => (
            <Link to={`/products/${product.id}`} className="product-card" key={product.id}>
              <img
                src={process.env.PUBLIC_URL + product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="view-all-btn">
          <Link to="/products" className="btn btn-primary">View All Products</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
