import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-flex">
          <div className="hero-text">
            <h1>
              Anshika Beauty Parlour <span className="highlight">Tehroli</span>
            </h1>
            <p>Redefining beauty with love, expertise, and elegance in Tehroli.</p>
            <div className="cta">
              <Link to="/services" className="btn-primary">Explore Services</Link>
              <Link to="/contact" className="btn-secondary">Book Appointment</Link>
            </div>
          </div>
          <div className="hero-img">
            <img src="src/assets/images/Homeimg.jpg" alt="beauty salon" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
