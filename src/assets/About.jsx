import React, { useState } from "react";
import "./About.css";

function About() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function submitFeedback(e) {
    e.preventDefault();
    setSubmitted(true);
    console.log('Feedback submitted', { rating, message });
  }

  return (
    <div className="about-page">
      <h1>About Anshika &amp; Beauty Parlour</h1>
      <p className="about-description">
        Anshika beauty parlour started as a small dream to bring thoughtful, personalized beauty services to Tehroli and surrounding areas.
        Founded by <strong> Ms Anshika Gupta</strong> and <strong>Mrs Abha Krishnakant Gupta</strong>, our team combines years of bridal experience,
        up-to-date techniques, and industry-grade products to deliver a stunning, long-lasting result for every client.
      </p>

      <h2>Our Approach</h2>
      <p style={{ maxWidth: 900, margin: '0 auto 20px', color: 'var(--muted)' }}>
        We believe beauty is personal. Every consultation begins with listening — understanding skin type, preferences, and the occasion.
        Hygiene and comfort are our top priority; we only use sterilized tools and trusted brands.
      </p>

      <h2>📍 Visit Us</h2>
      <div className="map-container">
        <iframe
          title="Parlour Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.0894569404764!2d78.9910651!3d25.5318774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397795898e753791%3A0x427af9ff1c368896!2sAnshika%20Sadi%20Sarovar!5e0!3m2!1sen!2sin!4v1734633948907!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <section className="rating-section">
        <h2>Rate &amp; Leave Feedback</h2>
        {submitted ? (
          <div className="thank-you">Thank you for your feedback! We appreciate your time.</div>
        ) : (
          <form className="feedback-form" onSubmit={submitFeedback}>
            <div className="stars" role="radiogroup" aria-label="Rating">
              {[1,2,3,4,5].map((i) => (
                <button
                  type="button"
                  key={i}
                  className={`star ${i <= (hover || rating) ? 'filled' : ''}`}
                  onClick={() => setRating(i)}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(0)}
                  aria-checked={rating === i}
                  aria-label={`${i} star${i>1? 's' : ''}`}
                >
                  ★
                </button>
              ))}
            </div>

            <textarea
              placeholder="Tell us what you liked or what we can improve..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />

            <div className="actions">
              <button type="submit" className="submit-btn">Send Feedback</button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}

export default About;
