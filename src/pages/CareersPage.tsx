import { useState } from 'react'
import { Button, Container } from '../components/common'

const roles = [
  {
    id: 'python-developer', title: 'Python Developer', discipline: 'Backend engineering',
    vacancies: 2, experience: 'Up to 2 years',
    skills: ['Python', 'FastAPI', 'Azure'],
    description: 'Build the APIs and cloud services that power practical business software.',
    responsibilities: ['Develop and maintain REST APIs with Python and FastAPI.', 'Connect application services with databases and external APIs.', 'Support deployment, troubleshooting, and application monitoring on Azure.', 'Write maintainable code, add tests, and participate in code reviews.'],
    requirements: ['Up to 2 years of development experience.', 'Working knowledge of Python, FastAPI, and REST API fundamentals.', 'Familiarity with Microsoft Azure and cloud application deployment.', 'Understanding of databases, Git, debugging, and basic testing.'],
  },
  {
    id: 'full-stack-developer', title: 'Full Stack Developer', discipline: 'Product engineering',
    vacancies: 2, experience: 'Up to 2 years',
    skills: ['React', 'Python', 'FastAPI', 'Azure'],
    description: 'Connect thoughtful React interfaces with dependable Python services, from browser to cloud.',
    responsibilities: ['Build responsive, accessible interfaces using React.', 'Develop Python and FastAPI services and connect them to the frontend.', 'Work with databases, API integrations, and Azure deployments.', 'Test and troubleshoot features across the application stack.'],
    requirements: ['Up to 2 years of development experience.', 'Working knowledge of React, JavaScript, HTML, and CSS.', 'Experience building APIs with Python and FastAPI.', 'Familiarity with Azure, databases, Git, and responsive web development.'],
  },
  {
    id: 'software-tester', title: 'Software Tester / QA', discipline: 'Quality assurance',
    vacancies: 1, experience: '',
    skills: ['Manual Testing', 'API Testing', 'Regression Testing'],
    description: 'Help deliver dependable software by testing web applications, validating APIs, and identifying issues before release.',
    responsibilities: ['Create and execute test cases for web applications and APIs.', 'Document defects with clear reproduction steps and verify fixes.', 'Perform functional and regression testing across releases.', 'Collaborate with developers to improve product quality.'],
    requirements: ['Understanding of software testing fundamentals and test case design.', 'Familiarity with testing web interfaces and REST APIs.', 'Attention to detail and clear communication when reporting defects.'],
  },
]

const totalVacancies = roles.reduce((total, role) => total + role.vacancies, 0)
const teams = [...new Set(roles.map(role => role.discipline))]
const skills = [...new Set(roles.flatMap(role => role.skills))]

function applicationLink(title: string) {
  return `mailto:info@amirotechsolutions.com?subject=${encodeURIComponent(`Career application — ${title}`)}&body=${encodeURIComponent(`Hello Amiro Tech team,\n\nI would like to apply for the ${title} role.\n\nName:\nExperience:\nCurrent location:\nNotice period / availability:\nPortfolio or project links (optional):\n\nI have attached my resume.\n\nThank you.`)}`
}

function webmailLink(title: string, provider: 'gmail' | 'outlook') {
  const draft = new URL(applicationLink(title))
  const subject = draft.searchParams.get('subject') ?? ''
  const body = draft.searchParams.get('body') ?? ''
  if (provider === 'gmail') {
    return `https://mail.google.com/mail/?${new URLSearchParams({ view: 'cm', fs: '1', to: 'info@amirotechsolutions.com', su: subject, body })}`
  }
  return `https://outlook.live.com/mail/0/deeplink/compose?${new URLSearchParams({ to: 'info@amirotechsolutions.com', subject, body })}`
}

export function CareersPage() {
  const [search, setSearch] = useState('')
  const [team, setTeam] = useState('')
  const [technology, setTechnology] = useState('')
  const [applyingFor, setApplyingFor] = useState<string | null>(null)
  const [copyStatus, setCopyStatus] = useState('')
  async function copyApplication(title: string) {
    try {
      await navigator.clipboard.writeText(`To: info@amirotechsolutions.com\nSubject: Career application — ${title}\n\nPlease attach your resume and include your experience, current location, and availability.`)
      setCopyStatus('Copied. Paste these details into your email service, attach your resume, and send your application.')
    } catch {
      setCopyStatus('Copy is unavailable in this browser. Select and copy the email address and subject shown above.')
    }
  }
  const filteredRoles = roles.filter(role =>
    (!team || role.discipline === team) && (!technology || role.skills.includes(technology)) &&
    `${role.title} ${role.description} ${role.skills.join(' ')} Bangalore Bengaluru Hybrid`.toLowerCase().includes(search.trim().toLowerCase()),
  )
  const hasFilters = Boolean(search || team || technology)
  const matchingVacancies = filteredRoles.reduce((total, role) => total + role.vacancies, 0)
  function resetFilters() { setSearch(''); setTeam(''); setTechnology('') }
  return <div className="careers-page">
    <section className="careers-hero"><Container>
      <div className="careers-hero__layout">
        <div>
          <p className="careers-eyebrow">Careers at Amiro Tech</p>
          <h1>Build useful software.<br /><span>Grow with us.</span></h1>
          <p className="careers-lead">Bring your curiosity and engineering skills to software, AI, and cloud solutions built around real business needs.</p>
          <Button href="#open-roles" size="lg">Explore open roles <span aria-hidden="true">↗</span></Button>
        </div>
        <aside className="careers-hero__note" aria-label="Current opportunities">
          <span className="careers-eyebrow">Engineering / Open opportunities</span>
          <p className="careers-hero__count">{String(totalVacancies).padStart(2, '0')}<span>vacancies across {roles.length} roles.</span></p>
          <p>Bengaluru, India · Hybrid working</p>
          <div className="careers-stack">Python <span>/</span> FastAPI <span>/</span> Azure <span>/</span> React</div>
        </aside>
      </div>
    </Container></section>

    <section className="careers-openings" id="open-roles" aria-labelledby="roles-heading"><Container>
      <header className="careers-heading"><div><p className="careers-eyebrow">Your next chapter</p><h2 id="roles-heading">Current openings</h2></div><p>{totalVacancies} vacancies across development and quality assurance. Find your next role with Amiro Tech.</p></header>
      <div className="careers-filters" role="search" aria-label="Find a career opportunity">
        <label className="careers-search">Search opportunities<input type="search" placeholder="Job title or keyword" value={search} onChange={event => setSearch(event.target.value)} /></label>
        <label>Team<select value={team} onChange={event => setTeam(event.target.value)}><option value="">All teams</option>{teams.map(item => <option key={item}>{item}</option>)}</select></label>
        <label>Skills<select value={technology} onChange={event => setTechnology(event.target.value)}><option value="">All skills</option>{skills.map(skill => <option key={skill}>{skill}</option>)}</select></label>
      </div>
      <div className="careers-results"><p role="status">{matchingVacancies} {matchingVacancies === 1 ? 'vacancy' : 'vacancies'} across {filteredRoles.length} {filteredRoles.length === 1 ? 'role' : 'roles'}{hasFilters ? ' matching your search' : ''} <span>· Bengaluru · Hybrid</span></p>{hasFilters && <button type="button" onClick={resetFilters}>Clear filters</button>}</div>
      <div className="careers-jobs">{filteredRoles.map(role => <article className="careers-job" id={role.id} key={role.id}>
        <div className="careers-job__main">
        <div className="careers-job__top"><span>{role.discipline}</span></div>
        <h3>{role.title}</h3>
        <ul className="careers-job__meta" aria-label="Role information"><li>Bengaluru (Bangalore)</li><li>Hybrid</li>{role.experience && <li>{role.experience}</li>}<li>{role.vacancies} {role.vacancies === 1 ? 'vacancy' : 'vacancies'}</li></ul>
        <p>{role.description}</p>
        <ul className="careers-skills" aria-label="Technology stack">{role.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
        </div>
        <button className="careers-apply" type="button" aria-expanded={applyingFor === role.id} aria-controls={`${role.id}-application`} onClick={() => { setApplyingFor(applyingFor === role.id ? null : role.id); setCopyStatus('') }}>Apply now <span aria-hidden="true">↗</span><span className="careers-sr-only"> — {role.title}</span></button>
        {applyingFor === role.id && <section className="careers-apply-panel" id={`${role.id}-application`} aria-label={`Apply for ${role.title}`}>
          <h4>Apply for {role.title}</h4>
          <p>Send your resume with your experience, current location, and availability.</p>
          <dl><dt>Email</dt><dd>info@amirotechsolutions.com</dd><dt>Subject</dt><dd>Career application — {role.title}</dd></dl>
          <details className="careers-apply-dropdown">
            <summary>Choose application option</summary>
            <div className="careers-apply-panel__actions">
              <a href={webmailLink(role.title, 'gmail')} target="_blank" rel="noopener noreferrer">Open Gmail ↗</a>
              <a href={webmailLink(role.title, 'outlook')} target="_blank" rel="noopener noreferrer">Open Outlook ↗</a>
              <button type="button" onClick={() => copyApplication(role.title)}>Copy application details</button>
            </div>
          </details>
          <p className="careers-apply-panel__hint">Choose your email service to compose in a new browser tab. You may need to sign in. Attach your resume, review, and send. If a draft does not appear after sign-in, copy the details above into a new email. No application is sent automatically.</p>
          <p role="status">{copyStatus}</p>
        </section>}
        <details className="careers-details"><summary>View role details</summary><div><h4>What you’ll work on</h4><ul>{role.responsibilities.map(item => <li key={item}>{item}</li>)}</ul><h4>What you’ll bring</h4><ul>{role.requirements.map(item => <li key={item}>{item}</li>)}</ul></div></details>
      </article>)}</div>
      {filteredRoles.length === 0 && <div className="careers-empty"><h3>No matching opportunities</h3><p>Try another keyword or clear your filters to see our current openings.</p><button type="button" onClick={resetFilters}>View all roles</button></div>}
    </Container></section>

  </div>
}

