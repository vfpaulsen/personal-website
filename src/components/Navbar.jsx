import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Applications', path: '/applications' },
]

function Navbar() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="Go to homepage">
        Portfolio
      </NavLink>
      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            to={item.path}
          >
            {item.label}
          </NavLink>
        ))}
        <a className="nav-link download-link" href="/cv.pdf" download>
          Download CV
        </a>
      </nav>
    </header>
  )
}

export default Navbar
