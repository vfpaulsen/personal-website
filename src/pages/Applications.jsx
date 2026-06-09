const applications = [
  {
    company: 'Example Company',
    role: 'Frontend Developer',
    date: 'June 2026',
    status: 'Applied',
    notes: 'Application submitted. Waiting for response.',
  },
  {
    company: 'Digital Studio',
    role: 'Junior Web Developer',
    date: 'May 2026',
    status: 'Interview',
    notes: 'First interview completed. Follow-up planned.',
  },
  {
    company: 'Product Team AS',
    role: 'UX-oriented Developer',
    date: 'April 2026',
    status: 'Closed',
    notes: 'Good role, but the process moved forward with another candidate.',
  },
]

function Applications() {
  return (
    <div className="page">
      <section className="page-intro">
        <p className="eyebrow">Applications</p>
        <h1>Jobs I have applied for.</h1>
        <p className="lead">
          A simple overview of roles, dates, statuses, and notes from my job search.
        </p>
      </section>

      <section className="section" aria-label="Job applications">
        <div className="application-list">
          {applications.map((application) => (
            <article className="application-card" key={`${application.company}-${application.role}`}>
              <div>
                <p className="period">{application.date}</p>
                <h2>{application.role}</h2>
                <p className="muted">{application.company}</p>
              </div>
              <span className="status">{application.status}</span>
              <p>{application.notes}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Applications
