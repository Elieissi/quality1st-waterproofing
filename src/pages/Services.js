import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Sump Pump Installation',
    icon: '💧',
    desc: 'A properly installed sump pump is your first line of defense against basement flooding. We install high-quality submersible and pedestal sump pumps with battery backup systems to keep your basement dry even during power outages. Our systems include alarms and monitoring options for total peace of mind.',
    details: ['Submersible & pedestal pumps', 'Battery backup systems', 'Alarm & monitoring options', 'Annual maintenance plans'],
  },
  {
    title: 'Foundation Repair',
    icon: '🏗️',
    desc: 'Foundation problems left untreated can compromise the structural integrity of your entire home. We diagnose and repair bowing walls, settling foundations, horizontal cracks, and more using proven methods including carbon fiber straps, wall anchors, and piering systems.',
    details: ['Bowing & leaning wall repair', 'Carbon fiber straps', 'Wall anchor systems', 'Pier & beam stabilization'],
  },
  {
    title: 'Crawl Space Encapsulation',
    icon: '🕳️',
    desc: 'An unencapsulated crawl space is a major source of moisture, mold, and energy loss. Our complete encapsulation system includes heavy-duty vapor barriers, insulation, drainage, and dehumidification to create a clean, dry, energy-efficient crawl space.',
    details: ['Heavy-duty vapor barriers', 'Moisture & mold control', 'Drainage installation', 'Dehumidifier systems'],
  },
  {
    title: 'Crack Injection',
    icon: '💉',
    desc: 'Basement wall cracks are a common entry point for water. We use polyurethane foam and epoxy injection to permanently seal cracks from the inside, stopping water infiltration immediately. Fast, effective, and minimally invasive.',
    details: ['Polyurethane foam injection', 'Epoxy injection', 'Permanent waterproof seal', 'Minimal disruption'],
  },
  {
    title: 'Interior Waterproofing System',
    icon: '🏠',
    desc: 'Our interior waterproofing systems capture and redirect water that enters the basement through walls or the floor perimeter. We install interior drainage channels along the footing and route water to a sump pump for removal — keeping your basement dry without major excavation.',
    details: ['Interior drain channels', 'Perimeter drainage systems', 'Wall vapor barriers', 'Sump pump integration'],
  },
  {
    title: 'Exterior Waterproofing System',
    icon: '🌧️',
    desc: 'The most comprehensive solution for water problems. Exterior waterproofing addresses the root cause by excavating around the foundation, applying waterproof coatings and membranes, installing drain tile, and backfilling with drainage stone — stopping water before it ever reaches your basement walls.',
    details: ['Full exterior excavation', 'Waterproof membranes & coatings', 'Exterior drain tile', 'Window well drainage'],
  },
  {
    title: 'French Drain',
    icon: '🚰',
    desc: 'French drains are an effective solution for managing surface water, yard flooding, and soggy soil around your home. We design and install custom French drain systems that intercept and redirect groundwater away from your foundation, protecting your landscaping and basement.',
    details: ['Yard & perimeter drains', 'Gravel-filled trenches', 'Perforated pipe systems', 'Downspout integration'],
  },
];

function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-hero__content">
          <h1 className="section-title">Our Services</h1>
          <p>Expert waterproofing solutions for every basement and foundation need</p>
        </div>
      </section>

      <section className="services-list">
        <div className="services-list__container">
          {services.map((s, i) => (
            <div key={s.title} className={`service-detail ${i % 2 === 1 ? 'service-detail--alt' : ''}`}>
              <div className="service-detail__icon">{s.icon}</div>
              <div className="service-detail__body">
                <h2 className="section-title">{s.title}</h2>
                <p>{s.desc}</p>
                <ul className="service-detail__list">
                  {s.details.map((d) => (
                    <li key={d}>✔ {d}</li>
                  ))}
                </ul>
                <a href="tel:5869001900" className="btn-primary">Call 586-900-1900 for Info</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <h2>Not sure what you need?</h2>
        <p>Call us for a FREE inspection and estimate. We'll diagnose the problem and give you an honest recommendation.</p>
        <a href="tel:5869001900" className="btn-primary">586-900-1900 — Free Estimate</a>
      </section>
    </main>
  );
}

export default Services;
