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

function Home() {
  return (
    <div className="page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio</p>
          <h1>Hi, I am building thoughtful digital experiences.</h1>
          <p className="lead">
            I enjoy creating practical, user-friendly web projects with a focus on clarity,
            structure, and continuous learning.
          </p>
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
