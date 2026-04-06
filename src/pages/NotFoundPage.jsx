import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="container section page-pad not-found">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="hero-text">The page you requested does not exist.</p>
      <Link className="btn primary" to="/">
        Return Home
      </Link>
    </section>
  )
}
