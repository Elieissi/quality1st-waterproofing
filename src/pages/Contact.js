import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__content">
          <h1 className="section-title">Contact Us</h1>
          <p>Get your FREE estimate — no obligation, no pressure</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-main__container">
          <div className="contact-info">
            <h2 className="section-title">Get In Touch</h2>

            <div className="contact-item">
              <span className="contact-item__icon">📞</span>
              <div>
                <h4>Phone</h4>
                <a href="tel:5869001900" className="contact-phone">586-900-1900</a>
                <p>Call anytime for a free estimate</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-item__icon">📍</span>
              <div>
                <h4>Service Area</h4>
                <p>Southeast Michigan including Macomb, Oakland, Wayne, and St. Clair counties</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-item__icon">🕐</span>
              <div>
                <h4>Hours</h4>
                <table className="hours-table">
                  <tbody>
                    <tr><td>Monday – Friday</td><td>8:00 AM – 6:00 PM</td></tr>
                    <tr><td>Saturday</td><td>9:00 AM – 4:00 PM</td></tr>
                    <tr><td>Sunday</td><td>By appointment</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <a href="tel:5869001900" className="btn-primary contact-cta">
              Call Now for FREE Estimate
            </a>
          </div>

          <div className="contact-map">
            <iframe
              title="Service Area Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374494.3!2d-83.2!3d42.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ca0110cb1d75%3A0x5776864e35b9c4d2!2sMacomb%20County%2C%20MI!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="contact-guarantee">
        <div className="contact-guarantee__container">
          <div className="guarantee-item">
            <span>✅</span>
            <p><strong>Free Estimates</strong> — No cost, no obligation</p>
          </div>
          <div className="guarantee-item">
            <span>✅</span>
            <p><strong>Honest Assessment</strong> — We tell you what you actually need</p>
          </div>
          <div className="guarantee-item">
            <span>✅</span>
            <p><strong>Owner-Operated</strong> — Talk directly with the owner</p>
          </div>
          <div className="guarantee-item">
            <span>✅</span>
            <p><strong>16 Years Experience</strong> — Trusted by hundreds of homeowners</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
