import type { CSSProperties } from 'react'

const productCards = [
  { accent: 'gold', icon: '▥', label: 'IMS', meta: 'Inventory + Compliance' },
  { accent: 'cyan', icon: '♙', label: 'HR', meta: 'People + Operations' },
  { accent: 'cyan', icon: '◉', label: 'Voice AI', meta: 'Customer Conversations' },
  { accent: 'gold', icon: '⌘', label: 'Business Ops', meta: 'CRM + Workflows' },
]
const aboutSteps = [
  { description: 'Clarify goals, users, and operational needs.', icon: '⌕', title: 'Discover' },
  { description: 'Define the roadmap and technical direction.', icon: '◇', title: 'Strategy' },
  { description: 'Shape clear experiences and system flows.', icon: '✦', title: 'Design' },
  { description: 'Engineer, integrate, and validate the solution.', icon: '⌘', title: 'Develop' },
  { description: 'Launch, improve, and support long-term growth.', icon: '↗', title: 'Support' },
]
const contactSteps = ['Inquiry', 'Demo', 'Architecture', 'Build plan']
const deliverySteps = ['Discover', 'Design', 'Architect', 'Build', 'Launch']
const caseModules = ['Inventory', 'Calibration', 'Audit', 'Reports']

export function ServicesHeroVisual() {
  return (
    <div className="solution-architecture" aria-label="Enterprise software and AI solution architecture">
      <div className="solution-architecture__header">
        <div><span>Solution architecture</span><strong>Connected enterprise systems</strong></div>
        <p><i /> Operational</p>
      </div>
      <div className="solution-architecture__canvas">
        <svg className="solution-architecture__lines" viewBox="0 0 660 430" preserveAspectRatio="none" aria-hidden="true">
          <path d="M148 87 C215 87 215 164 266 164" /><path d="M148 161 C215 161 215 188 266 188" />
          <path d="M394 164 C445 164 445 87 512 87" /><path d="M394 188 C445 188 445 161 512 161" /><path d="M394 212 C445 212 445 235 512 235" />
          <path d="M330 240 L330 315" /><path d="M125 350 C220 350 220 350 266 350" /><path d="M394 350 C440 350 440 350 535 350" />
        </svg>
        <div className="solution-architecture__group solution-architecture__group--experience"><span>Experience layer</span></div>
        <div className="solution-architecture__node solution-architecture__node--frontend"><i>⌘</i><div><strong>Frontend</strong><small>Web &amp; mobile</small></div></div>
        <div className="solution-architecture__node solution-architecture__node--backend"><i>⌗</i><div><strong>Backend</strong><small>Services &amp; APIs</small></div></div>

        <div className="solution-architecture__core">
          <span>Unified foundation</span><i className="solution-architecture__core-mark"><b /><b /><b /></i>
          <strong>Software + AI<br />Platform</strong><small>Secure · Scalable · Integrated</small>
        </div>

        <div className="solution-architecture__group solution-architecture__group--intelligence"><span>Intelligence layer</span></div>
        <div className="solution-architecture__node solution-architecture__node--ai"><i>✦</i><div><strong>AI Layer</strong><small>Models &amp; agents</small></div></div>
        <div className="solution-architecture__node solution-architecture__node--voice"><i>◉</i><div><strong>Voice AI</strong><small>Conversations</small></div></div>
        <div className="solution-architecture__node solution-architecture__node--automation"><i>↯</i><div><strong>Automation</strong><small>Business workflows</small></div></div>

        <div className="solution-architecture__foundation">
          <span>Enterprise foundation</span>
          <div><p><i>⇄</i><strong>APIs</strong></p><p><i>▥</i><strong>Data</strong></p><p><i>☁</i><strong>Cloud</strong></p><p><i>⌁</i><strong>Dashboards</strong></p></div>
        </div>
      </div>
    </div>
  )
}

export function ProductsHeroVisual() {
  return (
    <div className="product-ecosystem" aria-label="Amiro Tech product ecosystem">
      <div className="product-ecosystem__header"><div><span>Product ecosystem</span><strong>Connected platforms for business operations</strong></div><p><i /> Building for growth</p></div>
      <div className="product-ecosystem__canvas">
        <svg className="product-ecosystem__connections" viewBox="0 0 620 440" preserveAspectRatio="none" aria-hidden="true"><path d="M245 187 C205 160 185 120 155 100"/><path d="M375 187 C415 160 435 120 465 100"/><path d="M245 253 C205 280 185 320 155 340"/><path d="M375 253 C415 280 435 320 465 340"/></svg>
        <div className="product-ecosystem__hub"><span>Amiro Tech</span><i><b/><b/><b/></i><strong>Product Suite</strong><small>Connected business platforms</small></div>
        <div className="product-ecosystem__modules">{productCards.map((product,index)=><article className={`product-ecosystem__module product-ecosystem__module--${index+1} product-ecosystem__module--${product.accent}`} key={product.label}><i>{product.icon}</i><div><strong>{product.label}</strong><p>{product.meta}</p></div></article>)}</div>
      </div>
    </div>
  )
}

export function AboutHeroVisual() {
  return (
    <div className="delivery-timeline" aria-label="Our five-step delivery process">
      <div className="delivery-timeline__heading">
        <span>How we work</span>
        <h2>From business context to lasting impact.</h2>
        <p>A structured approach that keeps business goals, technology, and delivery aligned.</p>
      </div>
      <div className="delivery-timeline__track" aria-hidden="true" />
      <div className="delivery-timeline__steps">
        {aboutSteps.map((step, index) => (
          <article className={index === 0 ? 'delivery-timeline__step is-active' : 'delivery-timeline__step'} key={step.title} style={{ '--step-index': index } as CSSProperties}>
            <span className="delivery-timeline__number">{String(index + 1).padStart(2, '0')}</span>
            <span className="delivery-timeline__icon" aria-hidden="true">{step.icon}</span>
            <div><h3>{step.title}</h3><p>{step.description}</p></div>
          </article>
        ))}
      </div>
    </div>
  )
}

export function ContactHeroVisual() {
  return (
    <div aria-hidden="true" className="inner-hero-visual inner-hero-visual--contact">
      <div className="inner-hero-visual__grid" />
      <div className="hero-scene hero-scene--contact">
        <div className="hero-scene__contact-network"><span /><span /><span /><span /></div>
        <div className="hero-scene__globe"><span /><span /><span /></div>
        <div className="hero-scene__inbox">
          <i className="hero-scene__inbox-indicator" />
          <span>New inquiry</span>
          <strong>Project / Product Demo</strong>
        </div>
        <div className="hero-scene__message-cycle">
          <span>New project inquiry</span><span>Demo request</span>
        </div>
        <div className="hero-scene__response-flow">
          {contactSteps.map((step) => <span key={step}>{step}</span>)}
        </div>
        <div className="hero-scene__sla">
          <i /><strong>24h</strong><span>Response target</span>
        </div>
      </div>
    </div>
  )
}

export function ProcessHeroVisual() {
  return (
    <div aria-hidden="true" className="inner-hero-visual inner-hero-visual--process">
      <div className="inner-hero-visual__grid" />
      <div className="hero-scene hero-scene--process">
        <div className="hero-scene__delivery-platform">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-scene__delivery-core">
          <span>Delivery Model</span>
          <strong>Clear path from problem to platform</strong>
        </div>
        <div className="hero-scene__delivery-steps">
          {deliverySteps.map((step, index) => (
            <span key={step}>
              <i>{String(index + 1).padStart(2, '0')}</i>
              {step}
            </span>
          ))}
        </div>
        <span className="hero-scene__suite-line hero-scene__suite-line--one" />
      </div>
    </div>
  )
}

export function CaseStudyHeroVisual() {
  return (
    <div aria-hidden="true" className="inner-hero-visual inner-hero-visual--case">
      <div className="inner-hero-visual__grid" />
      <div className="hero-scene hero-scene--case">
        <div className="hero-scene__case-dashboard">
          <div className="hero-scene__case-topbar">
            <span />
            <strong>IMS Dashboard</strong>
          </div>
          <div className="hero-scene__case-metrics">
            <span>Traceability</span>
            <span>Audit Ready</span>
            <span>Compliance</span>
          </div>
          <div className="hero-scene__case-chart">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="hero-scene__case-modules">
          {caseModules.map((module) => (
            <span key={module}>{module}</span>
          ))}
        </div>
        <div className="hero-scene__case-ring" />
      </div>
    </div>
  )
}
