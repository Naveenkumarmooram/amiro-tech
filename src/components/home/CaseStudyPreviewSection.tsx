import { useEffect, useState } from 'react'
import { Button, Container, Section } from '../common'

type CaseStudyPreviewSectionProps = { className?: string }

const challenges = ['Manual inventory tracking', 'Compliance documentation', 'Limited operational visibility']
const impact = ['98% inventory accuracy', 'Faster, audit-ready reporting', 'Real-time inventory visibility', 'Reduced manual effort']
const activity = [
  ['Calibration updated', 'UTM-204', '2m'],
  ['Inventory received', '12 items', '18m'],
  ['Audit trail exported', 'Q3 report', '1h'],
]

function CountUpMetric({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let frame = 0
    let animationFrame = 0
    const tick = () => {
      frame += 1
      setDisplayValue(Math.round(value * (1 - Math.pow(1 - Math.min(frame / 52, 1), 3))))
      if (frame < 52) animationFrame = window.requestAnimationFrame(tick)
    }
    animationFrame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(animationFrame)
  }, [value])

  return <>{displayValue}</>
}

function CheckIcon() {
  return <svg aria-hidden="true" fill="none" viewBox="0 0 20 20"><path d="m5 10 3 3 7-7" /></svg>
}

export function CaseStudyPreviewSection({ className }: CaseStudyPreviewSectionProps) {
  return (
    <Section className={['featured-work', 'enterprise-case', className].filter(Boolean).join(' ')} tone="soft">
      <Container>
        <div className="enterprise-case__layout">
          <div className="enterprise-case__story">
            <p className="enterprise-case__eyebrow"><span /> Case Study</p>
            <h2>Inventory Management Platform</h2>
            <p className="enterprise-case__client">for Scientech Services</p>
            <p className="enterprise-case__summary">A unified inventory and compliance platform built for an NDT laboratory—giving teams accurate records, complete traceability, and real-time operational control.</p>

            <dl className="enterprise-case__meta">
              <div><dt>Industry</dt><dd>Laboratory / Manufacturing</dd></div>
              <div><dt>Platform</dt><dd>Enterprise IMS</dd></div>
              <div><dt>Role</dt><dd>End-to-End Development</dd></div>
            </dl>

            <div className="enterprise-case__insights">
              <article>
                <div className="enterprise-case__insight-icon">!</div>
                <h3>Challenges</h3>
                <ul>{challenges.map((item) => <li key={item}><CheckIcon />{item}</li>)}</ul>
              </article>
              <article className="enterprise-case__impact">
                <div className="enterprise-case__insight-icon">↗</div>
                <h3>Business Impact</h3>
                <ul>{impact.map((item) => <li key={item}><CheckIcon />{item}</li>)}</ul>
              </article>
            </div>

            <Button className="enterprise-case__cta" href="/contact?type=similar-project">View Case Study <span aria-hidden="true">→</span></Button>
          </div>

          <div className="ims-shell" aria-label="Inventory management platform dashboard preview">
            <div className="ims-shell__browser"><i /><i /><i /><span>app.scientech.io/dashboard</span><b>⌁</b></div>
            <div className="ims-app">
              <aside className="ims-sidebar">
                <div className="ims-sidebar__brand"><span>S</span><strong>Scientech</strong></div>
                <nav aria-label="Dashboard preview navigation">
                  <a className="is-active" href="#dashboard"><i>⌂</i>Overview</a>
                  <a href="#inventory"><i>□</i>Inventory</a>
                  <a href="#compliance"><i>✓</i>Compliance</a>
                  <a href="#reports"><i>⌁</i>Reports</a>
                  <a href="#settings"><i>⚙</i>Settings</a>
                </nav>
                <div className="ims-sidebar__user"><span>AS</span><div><strong>Arun Sharma</strong><small>Administrator</small></div></div>
              </aside>

              <main className="ims-dashboard">
                <header className="ims-topbar">
                  <div><h3>Good morning, Arun</h3><p>Here’s what’s happening today.</p></div>
                  <label><span>⌕</span><input aria-label="Search dashboard" placeholder="Search inventory…" readOnly /></label>
                  <button aria-label="Notifications">♢<i /></button><div className="ims-topbar__avatar">AS</div>
                </header>

                <div className="ims-kpis">
                  <article><span>Total inventory <i>↗</i></span><strong>2,847</strong><small><b>+12.4%</b> vs last month</small></article>
                  <article><span>Inventory accuracy <i>✓</i></span><strong><CountUpMetric value={98} />%</strong><small><b>+3.2%</b> this quarter</small></article>
                  <article><span>Items requiring action <i>!</i></span><strong>18</strong><small className="is-warning">6 high priority</small></article>
                </div>

                <div className="ims-dashboard__grid">
                  <article className="ims-chart">
                    <div className="ims-widget-head"><div><span>Inventory overview</span><strong>Stock movement</strong></div><button>Last 6 months⌄</button></div>
                    <div className="ims-chart__plot" aria-hidden="true"><i /><i /><i /><i /><i /><i /><svg preserveAspectRatio="none" viewBox="0 0 500 140"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#e7a300" stopOpacity=".3"/><stop offset="1" stopColor="#e7a300" stopOpacity="0"/></linearGradient></defs><path className="area" d="M0 115 C55 105 72 80 120 89 S195 102 235 61 S310 76 350 42 S430 58 500 18 V140 H0Z"/><path className="line" d="M0 115 C55 105 72 80 120 89 S195 102 235 61 S310 76 350 42 S430 58 500 18"/></svg></div>
                    <div className="ims-chart__labels"><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span></div>
                  </article>

                  <article className="ims-status">
                    <div className="ims-widget-head"><div><span>Inventory status</span><strong>2,847 total items</strong></div><b>•••</b></div>
                    <div className="ims-status__ring"><div><strong>82%</strong><span>Available</span></div></div>
                    <ul><li><i />Available <b>2,334</b></li><li><i />In use <b>361</b></li><li><i />Attention <b>152</b></li></ul>
                  </article>

                  <article className="ims-activity">
                    <div className="ims-widget-head"><div><span>Recent activity</span><strong>Live operations</strong></div><a href="#activity">View all</a></div>
                    <ul>{activity.map(([title, detail, time]) => <li key={title}><i>✓</i><div><strong>{title}</strong><span>{detail}</span></div><time>{time}</time></li>)}</ul>
                  </article>

                  <article className="ims-compliance">
                    <div className="ims-widget-head"><div><span>Compliance</span><strong>Audit readiness</strong></div><b>94%</b></div>
                    <div className="ims-compliance__bar"><i /></div>
                    <p><span><i />Certificates</span><b>286 / 294</b></p><p><span><i />Documentation</span><b>Up to date</b></p>
                  </article>
                </div>
              </main>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
