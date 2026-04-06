const contactOptions = [
  {
    title: 'Strategy Consultation',
    description: 'Best for brands planning fresh campaigns or repositioning.',
  },
  {
    title: 'AI Content Sprint',
    description: 'Best for teams that need fast content output in the next 30 days.',
  },
  {
    title: 'Automation Audit',
    description: 'Best for businesses losing leads due to manual follow-up delays.',
  },
]

export default function ContactPage() {
  return (
    <section className="container section page-pad">
      <div className="section-head fade-up">
        <p className="eyebrow">Contact</p>
        <h1>Let us design your next growth sprint</h1>
        <p className="hero-text">
          Share your goal and we will propose a realistic mix of channels, content,
          and automation in the first discovery call.
        </p>
      </div>

      <div className="contact-layout">
        <article className="card contact-form-card fade-up">
          <h2>Project inquiry form</h2>
          <p className="form-intro">
            Tell us about your brand and goals. We will get back with a practical
            action plan and timeline.
          </p>

          <form
            className="contact-form"
            action="https://formsubmit.co/hiral.vora@thegraphiceffect.dev"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New Inquiry - The Graphic Effect" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="form-grid">
              <label>
                Full Name
                <input type="text" name="name" placeholder="Your full name" required />
              </label>
              <label>
                Company Name
                <input type="text" name="company" placeholder="Your company or brand" required />
              </label>
            </div>

            <div className="form-grid">
              <label>
                Business Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                />
              </label>
            </div>

            <div className="form-grid">
              <label>
                Phone Number
                <input type="tel" name="phone" placeholder="+91 98765 43210" required />
              </label>
              <label>
                Monthly Budget
                <select name="budget" defaultValue="" required>
                  <option value="" disabled>
                    Select range
                  </option>
                  <option value="under-50k">Under Rs 50,000</option>
                  <option value="50k-1l">Rs 50,000 - Rs 1,00,000</option>
                  <option value="1l-3l">Rs 1,00,000 - Rs 3,00,000</option>
                  <option value="3l-plus">Above Rs 3,00,000</option>
                </select>
              </label>
            </div>

            <label>
              Primary Goal
              <select name="goal" defaultValue="" required>
                <option value="" disabled>
                  Choose a goal
                </option>
                <option value="lead-generation">Generate qualified leads</option>
                <option value="brand-awareness">Build brand awareness</option>
                <option value="content-system">Set up AI content system</option>
                <option value="automation">Automate marketing workflows</option>
              </select>
            </label>

            <label>
              Brief about your project
              <textarea
                name="message"
                rows="5"
                placeholder="Share your current challenge, timelines, and expectations."
                required
              />
            </label>

            <button type="submit" className="btn primary submit-btn">
              Submit Inquiry
            </button>

            <p className="form-footnote">
              Submissions are delivered to hiral.vora@thegraphiceffect.dev
            </p>
          </form>
        </article>

        <div className="contact-info-block stagger">
          {contactOptions.map((option) => (
            <article className="card info-card" key={option.title}>
              <h2>{option.title}</h2>
              <p>{option.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
