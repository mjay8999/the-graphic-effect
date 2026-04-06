const projects = [
  {
    client: 'Harbor Dental Group',
    result: '2.4x increase in consultation bookings in 90 days',
    detail:
      'Built a local intent ad strategy, redesigned landing pages, and added automated appointment reminders.',
  },
  {
    client: 'NexaBuild Realty',
    result: '38% lower cost per qualified lead',
    detail:
      'Launched multilingual ad sets, AI-generated property campaigns, and CRM lead prioritization workflows.',
  },
  {
    client: 'KiteKart D2C',
    result: '61% boost in repeat purchase revenue',
    detail:
      'Deployed lifecycle email journeys and predictive product recommendation content with AI personalization.',
  },
]

export default function WorkPage() {
  return (
    <section className="container section page-pad">
      <div className="section-head fade-up">
        <p className="eyebrow">Selected Work</p>
        <h1>Made-up case stories, modeled after real growth journeys</h1>
      </div>

      <div className="grid three-col stagger">
        {projects.map((project) => (
          <article className="card" key={project.client}>
            <p className="chip">{project.client}</p>
            <h2>{project.result}</h2>
            <p>{project.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
