import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const heroStyle = {
    backgroundImage: `linear-gradient(135deg, rgba(26, 71, 42, 0.8) 0%, rgba(45, 90, 61, 0.85) 100%), url(${process.env.PUBLIC_URL}/images/图片16.jpg)`
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:tpmam2026@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact">
      <section className="about-hero" style={heroStyle}>
        <h1>Contact Us</h1>
        <p>Get in touch for inquiries, quotes, or partnership opportunities</p>
      </section>

      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get In Touch</h2>

            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h3>Email</h3>
                <p>tpmam2026@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div>
                <h3>Phone / WhatsApp</h3>
                <p>+86 13705811629</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">🏢</span>
              <div>
                <h3>Address</h3>
                <p>Hangzhou Lispo Sports Co., Ltd.</p>
                <p>Hangzhou, Zhejiang, China</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">⏰</span>
              <div>
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM (GMT+8)</p>
                <p>Saturday: 9:00 AM - 12:00 PM (GMT+8)</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Please describe your inquiry, including product details, quantity, and any specific requirements..."
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
