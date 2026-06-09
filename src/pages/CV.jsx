const experience = [
  {
    role: 'Frontend Developer',
    place: 'Your Company',
    period: '2025 - Present',
    details:
      'Built and maintained responsive web interfaces, collaborated on product improvements, and translated user needs into clear interface flows.',
  },
  {
    role: 'Project Contributor',
    place: 'Independent Projects',
    period: '2024 - 2025',
    details:
      'Developed small web projects to strengthen skills in React, component structure, CSS, and product thinking.',
  },
]

const education = [
  {
    degree: 'Relevant Education or Certification',
    place: 'School or Provider',
    period: '2023 - 2024',
  },
]

const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Git', 'Responsive design']

function CV() {
  return (
    <div className="page">
      <section className="page-intro">
        <p className="eyebrow">CV</p>
        <h1>Experience, education, and skills.</h1>
        <p className="lead">
          A concise overview of my background, current focus areas, and technical toolkit.
        </p>
      </section>

      <section className="section cv-layout">
        <div className="timeline-block">
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.role}-${item.place}`}>
                <p className="period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="muted">{item.place}</p>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="side-panel">
          <section>
            <h2>Education</h2>
            {education.map((item) => (
              <article key={item.degree}>
                <p className="period">{item.period}</p>
                <h3>{item.degree}</h3>
                <p className="muted">{item.place}</p>
              </article>
            ))}
          </section>

          <section>
            <h2>Skills</h2>
            <ul className="tag-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        </aside>
      </section>
    </div>
  )
}

export default CV
