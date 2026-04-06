const services = [
  {
    name: 'Digital Marketing',
    desc: 'Data-first media strategy covering paid search, social ads, retargeting loops, and conversion-focused landing architecture.',
    deliverables: ['Audience Strategy', 'Media Buying', 'Conversion Tracking'],
  },
  {
    name: 'AI Content Service',
    desc: 'Brand-safe AI workflows for blogs, social scripts, ad variations, and email sequences with human QA and tone calibration.',
    deliverables: ['Editorial Systems', 'Creative Prompt Library', 'Channel Content Kits'],
  },
  {
    name: 'Automation Workflows',
    desc: 'Operational automations that connect forms, CRM, WhatsApp, email, and dashboards for faster follow-ups and cleaner reporting.',
    deliverables: ['CRM Automations', 'Lead Scoring Rules', 'Reporting Pipelines'],
  },
]

export default function ServicesPage() {
  return (
    <section className="container section page-pad">
      <div className="section-head fade-up">
        <p className="eyebrow">Services</p>
        <h1>Everything your growth team needs under one roof</h1>
      </div>

      <div className="stack stagger">
        {services.map((service) => (
          <article className="card service-row" key={service.name}>
            <div>
              <h2>{service.name}</h2>
              <p>{service.desc}</p>
            </div>
            <ul>
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
