import React, { useState } from 'react';
import profileImg from '../../assets/SazzadHimel.jpg';
import './Contact.css';
import Tilt3D from '../3D/Tilt3D.jsx';

function Contact() {
  const [formData, setFormData] = useState({
    from: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Sender Email: ${formData.from}\n\n${formData.message}`;
    const mailtoLink = `mailto:himel.s.hossain@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <div className="container space">
        <div className="section-heading">
          <h2 className="text-gradient">Get in Touch</h2>
          <div className="section-divider" />
          <p>Feel free to reach out to me via email or send a message using the form.</p>
        </div>
        <div className="content-layout">

          <Tilt3D className="glass-panel form-wrapper" max={6} scale={1.01} glare={true}>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="from">Your Email:</label>
                <input
                  type="email"
                  id="from"
                  name="from"
                  placeholder="your@gmail.com"
                  value={formData.from}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn submit-btn">Send Message</button>
            </form>
          </Tilt3D>
        </div>
      </div>
    </div>
  );
}

export default Contact;
