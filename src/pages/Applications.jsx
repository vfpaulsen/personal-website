const applications = [
  {
    applied: '03.06.2026',
    company: 'Nordic Digital AS',
    position: 'Frontend Developer',
    deadline: '20.06.2026',
    status: 'Interview',
    link: 'https://example.com/frontend-developer',
  },
  {
    applied: '01.06.2026',
    company: 'CloudWorks',
    position: 'IT Consultant',
    deadline: '18.06.2026',
    status: 'Applied',
    link: 'https://example.com/it-consultant',
  },
  {
    applied: '',
    company: 'Product Studio',
    position: 'Junior Full Stack Developer',
    deadline: '25.06.2026',
    status: 'To apply',
    link: 'https://example.com/full-stack',
  },
  {
    applied: '24.05.2026',
    company: 'Systems Partner',
    position: 'Technical Support Engineer',
    deadline: '30.05.2026',
    status: 'Rejected',
    link: 'https://example.com/support-engineer',
  },
  {
    applied: '18.05.2026',
    company: 'Automation Lab',
    position: 'Automation Developer',
    deadline: '28.05.2026',
    status: 'Offer',
    link: 'https://example.com/automation-developer',
  },
  {
    applied: '10.05.2026',
    company: 'Infrastructure Group',
    position: 'Junior DevOps Engineer',
    deadline: '22.05.2026',
    status: 'Hired',
    link: 'https://example.com/devops-engineer',
  },
]

const statusClass = {
  'To apply': 'to-apply',
  Applied: 'applied',
  Interview: 'interview',
  Offer: 'offer',
  Hired: 'hired',
  Rejected: 'rejected',
}

function Applications() {
  return (
    <div className="page">
      <section className="page-intro applications-intro">
        <p className="eyebrow">Applications</p>
        <h1>Job application tracker</h1>
        <p className="lead">
          A structured overview based on my Google Sheets setup, showing applied dates,
          companies, positions, deadlines, statuses and links.
        </p>
      </section>

      <section className="section applications-section" aria-label="Job applications">
        <div className="applications-table-wrap">
          <table className="applications-table">
            <thead>
              <tr>
                <th>Applied</th>
                <th>Company</th>
                <th>Position</th>
                <th>Application Deadline</th>
                <th>Status</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application) => (
                <tr key={`${application.company}-${application.position}`}>
                  <td data-label="Applied">{application.applied || 'Not yet'}</td>
                  <td data-label="Company">{application.company}</td>
                  <td data-label="Position">{application.position}</td>
                  <td data-label="Application Deadline">{application.deadline}</td>
                  <td data-label="Status">
                    <span className={`status status-${statusClass[application.status]}`}>
                      {application.status}
                    </span>
                  </td>
                  <td data-label="Link">
                    <a className="table-link" href={application.link} target="_blank" rel="noreferrer">
                      View posting
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default Applications
