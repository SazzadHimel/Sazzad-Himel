import React, { useState } from 'react';
import SubHeader from '../Sub-Header/SubHeader.jsx';
import profileImg from '../../assets/SazzadHimel.jpg';
import './Contact.css';

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
      <SubHeader title="Contact Me"/>
      <div className="container space">
        <div className="content-layout">
          <div className="details-column">
            <img src={profileImg} alt="Profile" className="contact-image" />
            <h3 className="title">Get in Touch</h3>
            <p className="description">Feel free to reach out to me via email or send a message using the form.</p>
            <p className="description"><span className="label">Name:</span> Sazzad Hossen Himel</p>
            <p className="description"><span className="label">Address:</span> Dhaka-1217, Bangladesh</p>
            <p className="description"><span className="label">Phone:</span> +8801626-415005</p>
            <p className="description"><span className="label">Email:</span> <a className="link" href="mailto:himel.s.hossain@gmail.com">himel.s.hossain@gmail.com</a></p>
          </div>
          <div className="form-wrapper">
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

              <button type="submit" className="btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
