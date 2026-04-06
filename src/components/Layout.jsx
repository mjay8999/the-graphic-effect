import { NavLink, Outlet } from 'react-router-dom'

function navClassName({ isActive }) {
  return isActive ? 'active' : undefined
}

export default function Layout() {
  return (
    <div className="site">
      <header className="header">
        <div className="container nav-wrap">
          <NavLink to="/" className="brand">
            <div className="logo-slot" aria-label="Logo placeholder">
              <img
                src="/logo/logo.jpg"
                alt="The Graphic Effect logo"
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />
            </div>
            <div className="brand-copy">
              <p className="brand-name">The Graphic Effect</p>
              <p className="brand-tag">Digital Marketing and AI Brand</p>
            </div>
          </NavLink>

          <nav className="nav" aria-label="Primary navigation">
            <NavLink className={navClassName} to="/">Home</NavLink>
            <NavLink className={navClassName} to="/services">Services</NavLink>
            <NavLink className={navClassName} to="/work">Work</NavLink>
            <NavLink className={navClassName} to="/about">About</NavLink>
            <NavLink className={navClassName} to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-wrap">
          <div>
            <p className="footer-brand">The Graphic Effect</p>
            <p className="footer-line">Digital Marketing and AI Brand</p>
          </div>
          <div className="footer-details">
            <p>B WING ROYAL EMPRESS CITY, Gandhi Sagar Lake, NAGPUR, Maharashtra 440018</p>
            <p>+91 7875556637</p>
            <p>hello@thegraphiceffect.in</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
