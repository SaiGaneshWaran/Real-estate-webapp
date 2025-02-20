import { useState } from "react";
import "./contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    // Phone Validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number.";
    }

    // Subject Validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    // Message Validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="contact">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have questions? We are here to help. Reach out to us via the form below, or use the contact
          details to get in touch.
        </p>
      </header>
      <main className="contact-main">
        <section className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <span className="error">{errors.subject}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}
            </div>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </section>
        <section className="contact-info">
          <h2>Contact Details</h2>
          <ul>
            <li>
              <strong>Phone:</strong> <a href="tel:+61391234567">+61 3 9123 4567</a>
            </li>
            <li>
              <strong>Email:</strong> <a href="mailto:andrewtt123456@gmail.com">andrewtt123456@gmail.com</a>
            </li>
            <li>
              <strong>Address:</strong> Suite 12, Level 3, 707 Collins Street, Docklands, VIC 3008, Australia
            </li>
          </ul>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093657!2d144.95565131532147!3d-37.81732397975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c8aa8f55fa1b!2sGoogle!5e0!3m2!1sen!2sus!4v1617301805177!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
