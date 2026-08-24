import profileImage from '../assets/PB.png'

const projects = [
  {
    title: 'BagForge - Build Your Perfect Disc Golf Bag',
    type: 'Frontend Development',
    description:
      'Built a full-featured disc golf bag builder with access to more than 10,000 disc models through the DiscIt API. Users can manage multiple cloud-synced bags, record details for individual discs, identify coverage gaps, create custom models, and share public profiles or export-ready bag images. Implemented passwordless and Google authentication, Supabase/PostgreSQL storage with Row Level Security, responsive disc sorting, local recovery backups, and performance-focused code splitting.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Vercel'],
    link: 'https://www.bagforge.app/',
  },
  {
    title: 'Campaign Price Management for Røhneselmer',
    type: 'WordPress Plugin',
    description:
      'Developed a dynamic campaign pricing solution using the Google Sheets API to connect Google Sheets to WordPress through a custom built plugin, allowing the client to update prices without CMS access.',
    stack: ['WordPress', 'PHP', 'Google Sheets API', 'Automation', 'Shortcodes'],
  },
  {
    title: 'Halloween Mystery Box Registration Flow',
    type: 'Shopify Automation',
    description:
      'Developed and implemented an automated Shopify registration solution for a BI Norwegian Business School research campaign. The solution connected Shopify and Qualtrics through PID tracking, enabled user data to move across platforms, and used Shopify Flow to automate segmentation and reduce manual data handling.',
    stack: ['Shopify', 'Shopify Flow', 'Qualtrics', 'PID Tracking', 'Data Integration'],
  },
  {
    title: 'Mortal Legacy Website',
    type: 'Web Design',
    description:
      'Designed and developed a responsive Wix website for a digital platform focused on preserving and sharing personal stories and memories. The site presents the concept clearly and establishes the foundation for a future solution where users can store and share images, video and messages.',
    stack: ['Wix', 'Web Design', 'UX/UI', 'Branding', 'Responsive Design'],
    link: 'https://www.mortallegacy.com',
  },
  {
    title: 'Protomek Company Website',
    type: 'Business Website',
    description:
      'Designed and developed a responsive Wix website for a technical and industrial company on assignment from Maxad. The site focuses on clearly presenting services and expertise, with structured content and user-friendly navigation to strengthen the company’s digital profile.',
    stack: ['Wix', 'Web Design', 'UX/UI', 'Information Architecture', 'CMS'],
    link: 'https://www.protomek.com/',
  },
  {
    title: 'Norsk Herdesenter Website',
    type: 'Business Website',
    description:
      'Designed and developed a responsive Wix website for a hardening center on assignment from Maxad. The website focuses on clear service presentation, structured information and user-friendly navigation to strengthen the company’s online presence and make it easier for customers to find relevant information and get in touch.',
    stack: ['Wix', 'Web Design', 'UX/UI', 'Information Architecture', 'CMS'],
    link: 'https://www.herdesenter.no/',
  },
  {
    title: 'Personal Portfolio Website',
    type: 'Frontend Development',
    description:
      'Designed and developed a responsive personal portfolio website using React and Vite. The site presents projects, contact information, job applications and a downloadable CV, with a custom dark blue visual identity and reusable component structure.',
    stack: ['React', 'Vite', 'React Router', 'CSS', 'Responsive Design'],
  },
]

const contactLinks = [
  {
    label: 'Phone',
    icon: 'phone',
    value: '+47 950 95 700',
    href: 'tel:+4795095700',
  },
  {
    label: 'Email',
    icon: 'email',
    value: 'vfpaulsen@gmail.com',
    href: 'mailto:vfpaulsen@gmail.com',
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
    <svg className="brand-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.3ZM5.33 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.55V8.98h3.56v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  ),
  github: (
    <svg className="brand-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.15c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.95.1-.74.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18A10.97 10.97 0 0 1 12 6.01c.98 0 1.96.13 2.88.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.08 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  ),
}

function Home() {
  return (
    <div className="page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"></p>
          <h1>Hi, I am Vegard!</h1>
          <p className="lead">
            Developer with a passion for creating user-friendly solutions and a strong foundation in networks, systems and IT operations.
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
        <div className="hero-portrait" aria-label="Profile image">
          <img src={profileImage} alt="Vegard Paulsen" />
        </div>
      </section>

      <section className="section split-section about-section" aria-labelledby="about-title">
        <div>
          <p className="eyebrow">About me</p>
          <h2 id="about-title">Developer mindset. Infrastructure perspective.</h2>
        </div>
        <p>
         I enjoy understanding how technology works from end to end, from user interfaces and web applications to servers, networks and infrastructure. My background in both software development and IT operations allows me to approach problems from multiple angles and build solutions that are practical, reliable and user-focused. I am naturally curious, enjoy learning new technologies and take pride in delivering well-structured work that makes a difference.
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
              {project.link ? (
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  Visit website
                </a>
              ) : null}
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
