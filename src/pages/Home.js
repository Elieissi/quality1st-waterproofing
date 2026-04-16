import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const services = [
  { icon: '💧', title: 'Sump Pump Installation', desc: 'Reliable sump pump systems to keep water out of your basement year-round.' },
  { icon: '🏗️', title: 'Foundation Repair', desc: 'Expert diagnosis and repair of cracks, bowing walls, and structural issues.' },
  { icon: '🕳️', title: 'Crawl Space', desc: 'Full crawl space encapsulation and moisture control solutions.' },
  { icon: '💉', title: 'Crack Injection', desc: 'Permanent polyurethane and epoxy crack injection to seal leaks fast.' },
  { icon: '🏠', title: 'Interior Waterproofing', desc: 'Interior drainage systems that redirect water away from your living space.' },
  { icon: '🌧️', title: 'Exterior Waterproofing', desc: 'Comprehensive exterior barriers to stop water before it enters your home.' },
  { icon: '🚰', title: 'French Drain', desc: 'Custom French drain systems to manage surface and subsurface water.' },
];

const testimonials = [
  {
    name: 'Staci V.',
    text: 'Quality First Basement Systems provides exceptional service with professionalism and expertise! Their team is knowledgeable, efficient, and truly committed to ensuring strong, long-lasting basement solutions.',
  },
  {
    name: 'Michael B.',
    text: 'They did an incredible job fixing a leak in my basement from the outside. Hardworking, honest, and local. Can\'t beat that. Highly recommended.',
  },
  {
    name: 'Tammy M.',
    text: 'Honest, hardworking, and dependable are not words associated with very many businesses these days, but this owner-operated company exceeds these qualities and then some.',
  },
];

function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/hero-bg.jpg)` }}
      >
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <span className="hero__badge">16 Years of Proven Expertise</span>
          <h1 className="hero__title">Guardians of Dry</h1>
          <p className="hero__sub">
            Transforming wet basements into dry, livable spaces. Let us safeguard
            your home with top-quality waterproofing solutions.
          </p>
          <div className="hero__actions">
            <a href="tel:5869001900" className="btn-primary">Free Estimate — 586-900-1900</a>
            <Link to="/services" className="btn-outline">Our Services</Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar">
        <div className="trust-bar__container">
          <div className="trust-bar__item">
            <strong>16+</strong>
            <span>Years Experience</span>
          </div>
          <div className="trust-bar__item">
            <strong>100%</strong>
            <span>Free Estimates</span>
          </div>
          <div className="trust-bar__item">
            <strong>Owner</strong>
            <span>Operated</span>
          </div>
          <div className="trust-bar__item">
            <strong>Local</strong>
            <span>Southeast Michigan</span>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-section">
        <div className="services-section__container">
          <div className="services-section__header">
            <h2 className="section-title centered">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive waterproofing solutions for every situation
            </p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service-card">
                <span className="service-card__icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a href="tel:5869001900" className="service-card__cta">Call for Info →</a>
              </div>
            ))}
          </div>
          <div className="services-section__cta">
            <Link to="/services" className="btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="about-snippet">
        <div className="about-snippet__image">
          <img src={`${process.env.PUBLIC_URL}/basement-repair.jpg`} alt="Basement waterproofing work" />
        </div>
        <div className="about-snippet__content">
          <h2 className="section-title">Michigan's Trusted Waterproofing Experts</h2>
          <p>
            Quality 1st Basement Waterproofing is a recognized leader in basement
            waterproofing with <strong>16 years of proven expertise</strong>. Our mission
            is to protect your home from water damage and provide peace of mind
            through our advanced waterproofing solutions.
          </p>
          <p>
            We are an owner-operated company committed to excellence, integrity,
            and customer satisfaction — because your home deserves the best.
          </p>
          <div className="about-snippet__actions">
            <Link to="/about" className="btn-primary">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="testimonials__container">
          <h2 className="section-title centered">What Our Customers Say</h2>
          <p className="section-subtitle">Real results from real Michigan homeowners</p>
          <div className="testimonials__grid">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-card__stars">★★★★★</div>
                <p>"{t.text}"</p>
                <strong>— {t.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-banner__content">
          <h2>Ready to Protect Your Home?</h2>
          <p>Get your FREE estimate today. No obligation, no pressure.</p>
          <a href="tel:5869001900" className="btn-primary">Call 586-900-1900</a>
        </div>
      </section>
    </main>
  );
}

export default Home;
