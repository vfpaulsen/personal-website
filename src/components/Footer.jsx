import logo from '../assets/vp-it-logo-clean.svg'

const footerLinks = [
  {
    label: 'Email',
    href: 'mailto:vfpaulsen@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vfpaulsen/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <path d="M2 9h4v12H2z" />
        <path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/vfpaulsen',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5a10.4 10.4 0 0 0-5.5 0C8.5 2 7.5 2 7.5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 6.5 9c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src={logo} alt="VP IT" />
        <p>© 2026 Vegard Paulsen</p>
      </div>
      <div className="footer-links" aria-label="Footer links">
        {footerLinks.map((link) => (
          <a
            className="footer-icon-link"
            href={link.href}
            key={link.label}
            aria-label={link.label}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
