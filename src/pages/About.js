import React from 'react';

function About() {
  const heroStyle = {
    backgroundImage: `linear-gradient(135deg, rgba(26, 71, 42, 0.8) 0%, rgba(45, 90, 61, 0.85) 100%), url(${process.env.PUBLIC_URL}/images/图片13.jpg)`
  };

  return (
    <div className="about">
      <section className="about-hero" style={heroStyle}>
        <h1>About Hangzhou Lispo Sports Co., Ltd.</h1>
        <p>Your Trusted Partner for Hunting & Outdoor Equipment</p>
      </section>

      <div className="about-content">
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            Hangzhou Lispo Sports Co., Ltd. is a professional manufacturer and exporter
            specializing in hunting decoys, outdoor equipment, and camping supplies.
            Based in Hangzhou, China, we have established ourselves as a reliable partner
            for distributors, retailers, and outdoor enthusiasts worldwide.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Products</h2>
          <p>
            Our extensive product range includes realistic hunting decoys (goose, duck, swan),
            camouflage blinds, ghillie suits, tree stands, camping gear, fishing tools,
            hunting knives, and various outdoor accessories. Each product is designed with
            functionality and durability in mind, meeting the demanding requirements of
            professional hunters and outdoor enthusiasts.
          </p>
        </section>

        <section className="about-section">
          <h2>Quality Assurance</h2>
          <p>
            Quality is at the heart of everything we do. We implement strict quality control
            measures throughout our manufacturing process, from raw material selection to
            final product inspection. Our products are made using premium materials and
            advanced manufacturing techniques to ensure long-lasting performance in the field.
          </p>
        </section>

        <section className="about-section">
          <h2>OEM/ODM Services</h2>
          <p>
            We offer comprehensive OEM and ODM services to meet your specific requirements.
            Whether you need custom designs, private labeling, or modifications to existing
            products, our experienced team can work with you to bring your vision to life.
            We welcome inquiries for bulk orders and long-term partnerships.
          </p>
        </section>

        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Products</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Countries Served</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
