const projects = [
  {
    title: 'Personal Website',
    type: 'Frontend',
    description:
      'A portfolio website built with React, focused on clean structure, responsive layout, and simple content management.',
    stack: ['React', 'Vite', 'CSS'],
  },
  {
    title: 'Project Tracker',
    type: 'Productivity',
    description:
      'A small dashboard concept for tracking projects, milestones, and application progress in one place.',
    stack: ['React', 'UX', 'Data'],
  },
  {
    title: 'Learning Log',
    type: 'Documentation',
    description:
      'A structured archive for notes, technical experiments, and reflections from ongoing learning.',
    stack: ['Writing', 'Research', 'Web'],
  },
]

const contactLinks = [
  {
    label: 'Phone',
    icon: 'phone',
    value: '+47 950 95 700',
    href: 'tel:+4700000000',
  },
  {
    label: 'Email',
    icon: 'email',
    value: 'vfpaulsen@gmail.com',
    href: 'mailto:vegard@example.com',
  },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    value: 'linkedin.com/in/vfpaulsen/',
    href: 'https://www.linkedin.com/in/vfpaulsen/',
    iconOnly: true,
  },
  {
    label: 'GitHub',
    icon: 'github',
    value: 'github.com/vfpaulsen',
    href: 'https://github.com/vfpaulsen',
    iconOnly: true,
  },
]

const icons = {
  phone: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19 19.5 19.5 0 0 1 5 12.81 19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.91.32 1.8.59 2.65a2 2 0 0 1-.45 2.11L7.91 9.77a16 16 0 0 0 6.32 6.32l1.29-1.29a2 2 0 0 1 2.11-.45c.85.27 1.74.47 2.65.59A2 2 0 0 1 22 16.92Z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <path d="M2 9h4v12H2z" />
      <path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5a10.4 10.4 0 0 0-5.5 0C8.5 2 7.5 2 7.5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 6.5 9c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
}

function Home() {
  return (
    <div className="page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"></p>
          <h1>Hi, I am Vegard</h1>
          <p className="lead">
            I enjoy creating practical, user-friendly web projects with a focus on clarity,
            structure, and continuous learning.
          </p>
          <ul className="contact-list" aria-label="Contact information">
            {contactLinks.map((item) => (
              <li className={item.iconOnly ? 'icon-only-contact' : undefined} key={item.label}>
                {item.iconOnly ? (
                  <a
                    className="contact-icon contact-icon-link"
                    href={item.href}
                    aria-label={item.label}
                  >
                    <span className="social-icon">{icons[item.icon]}</span>
                    <span className="social-hover-text">{item.value}</span>
                  </a>
                ) : (
                  <>
                    <span className="contact-icon" aria-label={item.label}>
                      {icons[item.icon]}
                    </span>
                    <a href={item.href}>{item.value}</a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-portrait" aria-label="Profile image placeholder">
          <img src="/profile-placeholder.svg" alt="Profile placeholder" />
        </div>
      </section>

      <section className="section split-section" aria-labelledby="about-title">
        <div>
          <p className="eyebrow">About me</p>
          <h2 id="about-title">Curious, structured, and hands-on.</h2>
        </div>
        <p>
          I am developing my skills across frontend development, design thinking, and
          project work. This site collects my projects, CV, and job application history in
          one clear place.
        </p>
      </section>

      <section className="section" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2 id="projects-title">Projects</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <ul className="tag-list" aria-label={`${project.title} technologies`}>
                {project.stack.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
