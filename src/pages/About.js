import React from 'react';
import './About.css';

const values = [
  { icon: '🏆', title: 'Excellence', desc: 'We never cut corners. Every job is done right the first time, using proven methods and quality materials.' },
  { icon: '🤝', title: 'Integrity', desc: 'Honest assessments, transparent pricing, and no high-pressure sales tactics — ever.' },
  { icon: '👷', title: 'Owner-Operated', desc: 'When you call us, you work directly with the owner. Personal accountability on every project.' },
  { icon: '⭐', title: 'Customer First', desc: 'We measure our success by your satisfaction. We go above and beyond to deliver lasting results.' },
];

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__content">
          <h1 className="section-title">About Us</h1>
          <p>Michigan's trusted basement waterproofing specialists since 2008</p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story__container">
          <div className="about-story__image">
            <img src={`${process.env.PUBLIC_URL}/about.webp`} alt="Quality 1st team at work" />
          </div>
          <div className="about-story__text">
            <h2 className="section-title">Our Story</h2>
            <p>
              Quality 1st Basement Waterproofing was founded with a simple mission: to protect Michigan
              homeowners from the costly and stressful effects of water damage. Over 16 years, we've
              grown into one of Southeast Michigan's most trusted waterproofing companies — not through
              gimmicks or aggressive sales, but through consistently outstanding work and honest service.
            </p>
            <p>
              As an owner-operated business, we treat every home like it's our own. The owner is personally
              involved in every project, ensuring quality from the first call to the final inspection.
              That's the kind of attention to detail and accountability that larger companies simply can't match.
            </p>
            <p>
              We've helped hundreds of Michigan homeowners transform wet, unusable basements into dry,
              livable spaces — and we're ready to do the same for you.
            </p>
            <a href="tel:5869001900" className="btn-primary">Get Your FREE Estimate</a>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values__container">
          <h2 className="section-title centered">Our Values</h2>
          <p className="section-subtitle">What sets us apart from the competition</p>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <span className="value-card__icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>16 Years of Protecting Michigan Homes</h2>
        <p>Reach out today for a free, no-obligation estimate. We'll come to you, assess the problem, and give you an honest recommendation.</p>
        <a href="tel:5869001900" className="btn-primary">Call 586-900-1900</a>
      </section>
    </main>
  );
}

export default About;
