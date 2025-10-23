import React from "react";
import "./Service.css";

function Services() {
  const services = [
    { name: "Eyebrow threading", img: "src/assets/images/Threading.jpg" },
    { name: "Hair Styling", img: "src/assets/images/hairstyle.jpg" },
    { name: "Makeup", img: "src/assets/images/makeup.jpeg" },
    { name: "Lehnga on rent", img: "src/assets/images/Lehnga.webp" },
  ];
  return (
    <div className="services-page">
      <h1 className="service-title">Our Beauty Services</h1>
      <p style={{ maxWidth: 900, margin: '0 auto 30px', color: 'var(--muted)' }}>
         At Anshika beauty parlour we offer a curated set of services designed for modern brides and everyday beauty.
         Our team uses professional products and follows hygiene-first practices. Below is a sample of our popular services.
      </p>

      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <img src={`${s.img}?q=80&w=800&auto=format&fit=crop`} alt={s.name} className="service-img" />
            <h3>{s.name}</h3>
            <p style={{ color: 'var(--muted)' }}><strong> Custom bridal packages available.</strong></p>
            <div style={{ marginTop: 12 }}>
              <a href="/contact" className="btn-secondary">Book Now</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
