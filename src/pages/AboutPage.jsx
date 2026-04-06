const teamPrinciples = [
  'Strategy before spend: every channel must have a hypothesis and KPI.',
  'Creative clarity: content should be useful, persuasive, and on-brand.',
  'Systems thinking: campaigns and operations should feed each other.',
]

export default function AboutPage() {
  return (
    <section className="container section page-pad">
      <div className="split">
        <div className="fade-up">
          <p className="eyebrow">About Us</p>
          <h1>We are a hybrid team of marketers, AI builders, and automation specialists.</h1>
          <p className="hero-text">
            Founded in Nagpur, The Graphic Effect was built to solve a common gap:
            businesses either get good creatives or good performance, but rarely both
            in one execution system.
          </p>
          <p className="hero-text">
            Our model blends strategic planning, rapid AI content production, and
            practical workflow engineering so brands can scale without operational chaos.
          </p>
        </div>

        <article className="card slide-in">
          <h2>Operating Principles</h2>
          <ul>
            {teamPrinciples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
