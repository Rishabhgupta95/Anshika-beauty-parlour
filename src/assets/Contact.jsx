import React from "react";
import "./Contact.css";
import { FaPhone, FaWhatsapp, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <p>We’d love to hear from you! Use the form below or reach out via phone or social media.</p>

      <div className="contact-container">
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thanks — we will contact you soon!'); }}>
          <input aria-label="name" placeholder="Your name" required />
          <input aria-label="phone" placeholder="Phone or WhatsApp" required />
          <textarea aria-label="message" rows={4} placeholder="Tell us about your request" />
          <div style={{ textAlign: 'center' }}>
            <button type="submit">Send Message</button>
          </div>
        </form>

        <div className="contact-info" style={{ marginTop: 18 }}>
          <p><a href="tel:+91 9026964647"><FaPhone /> Mobile: <strong>+91 9026964647</strong></a></p>
          <a href="tel:+91 9506771018"><FaPhone /> Mobile: <strong>+91 9506771018</strong></a>
          <p ><FaWhatsapp /> WhatsApp: <strong>+91 9026964647</strong></p>
          <p>
            <FaInstagram /> Instagram:
            <a href="https://www.instagram.com/anshika_beauty_parlour_tehrol3?igsh=MXE1Mm13YmhpaGEyNw==" target="_blank" rel="noreferrer"> @anshika_beauty_parlour_tehroli3</a>
          </p>

          <h4 style={{ marginTop: 12 }}>Hours</h4>
          <p>sun - fri: 10:00 AM — 7:00 PM · sat: Closed</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
