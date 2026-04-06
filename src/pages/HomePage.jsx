import { Link } from 'react-router-dom'

const highlights = [
  {
    title: 'Demand Generation',
    text: 'High-intent acquisition funnels across search, social, and performance video designed for qualified pipeline.',
  },
  {
    title: 'AI Creative Studio',
    text: 'Campaign-ready copy, scripts, and landing blocks produced faster with AI frameworks and editorial controls.',
  },
  {
    title: 'Workflow Ops',
    text: 'Automated lead tracking, nurture journeys, and weekly reporting connected to your CRM and sales process.',
  },
]

const stats = [
  { label: 'Average CPL Drop', value: '31%' },
  { label: 'Campaign Speed Improvement', value: '2.7x' },
  { label: 'Automated Monthly Tasks', value: '600+' },
]

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <div className="hero-content fade-up">
          <p className="eyebrow">Growth Engine for Ambitious Brands</p>
          <h1>Multi-channel marketing powered by AI and precise automation.</h1>
          <p className="hero-text">
            The Graphic Effect helps founders, D2C brands, and service companies
            scale predictably with strategy, content systems, and automated
            operations.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" to="/contact">
              Book Strategy Call
            </Link>
            <Link className="btn ghost" to="/work">
              View Case Stories
            </Link>
          </div>
        </div>

        <div className="hero-panel slide-in">
          <h2>Current focus sectors</h2>
          <ul>
            <li>Healthcare and wellness clinics</li>
            <li>Real estate and property advisors</li>
            <li>D2C consumer brands</li>
            <li>B2B SaaS and consulting companies</li>
          </ul>
        </div>
      </section>

      <section className="container section">
        <div className="section-head fade-up">
          <p className="eyebrow">What We Build</p>
          <h2>Connected systems, not isolated campaigns</h2>
        </div>
        <div className="grid three-col stagger">
          {highlights.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section highlight fade-up">
        <div className="section-head compact">
          <p className="eyebrow">Proof Signals</p>
          <h2>Built on measurable output</h2>
        </div>
        <div className="grid three-col">
          {stats.map((item) => (
            <article className="metric" key={item.label}>
              <p className="metric-value">{item.value}</p>
              <p className="metric-label">{item.label}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
