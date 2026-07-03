const serviceLanes = ['Frontend', 'Backend', 'AI Layer', 'Voice AI', 'Automation', 'Cloud']
const productCards = [
  { accent: 'gold', label: 'IMS', meta: 'Inventory + compliance' },
  { accent: 'gold', label: 'HR', meta: 'People operations' },
  { accent: 'cyan', label: 'Voice AI', meta: 'Customer calls' },
  { accent: 'gold', label: 'Business Ops', meta: 'CRM + workflows' },
]
const aboutSteps = ['Understand', 'Strategy', 'Design', 'Build', 'Support']
const contactSteps = ['Inquiry', 'Demo', 'Architecture', 'Build plan']
const deliverySteps = ['Discover', 'Design', 'Architect', 'Build', 'Launch']
const caseModules = ['Inventory', 'Calibration', 'Audit', 'Reports']

export function ServicesHeroVisual() {
  return (
    <div aria-hidden="true" className="inner-hero-visual inner-hero-visual--services">
      <div className="inner-hero-visual__grid" />
      <div className="hero-scene hero-scene--architecture">
        <div className="hero-scene__isometric-base">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-scene__code">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="hero-scene__core">
          <span>Solution Architecture</span>
          <strong>Software + AI Platform</strong>
          <i />
        </div>
        <div className="hero-scene__lanes">
          {serviceLanes.map((lane) => (
            <span className={lane.includes('AI') ? 'hero-scene__lane hero-scene__lane--cyan' : 'hero-scene__lane'} key={lane}>
              {lane}
            </span>
          ))}
        </div>
        <div className="hero-scene__cloud">
          <span>APIs</span>
          <span>Data</span>
          <span>Dashboards</span>
        </div>
        <span className="hero-scene__wire hero-scene__wire--one" />
        <span className="hero-scene__wire hero-scene__wire--two" />
      </div>
    </div>
  )
}

export function ProductsHeroVisual() {
  return (
    <div aria-hidden="true" className="inner-hero-visual inner-hero-visual--products">
      <div className="inner-hero-visual__grid" />
      <div className="hero-scene hero-scene--products">
        <div className="hero-scene__product-platform">
          <span />
          <span />
        </div>
        <div className="hero-scene__product-hub">
          <span>Amiro Tech</span>
          <strong>Product Suite</strong>
        </div>
        <div className="hero-scene__product-grid">
          {productCards.map((product) => (
            <div className={`hero-scene__product-card hero-scene__product-card--${product.accent}`} key={product.label}>
              <strong>{product.label}</strong>
              <p>{product.meta}</p>
            </div>
          ))}
        </div>
        <span className="hero-scene__suite-line hero-scene__suite-line--one" />
        <span className="hero-scene__suite-line hero-scene__suite-line--two" />
      </div>
    </div>
  )
}

export function AboutHeroVisual() {
  return (
    <div aria-hidden="true" className="inner-hero-visual inner-hero-visual--about">
      <div className="inner-hero-visual__grid" />
      <div className="hero-scene hero-scene--partner">
        <div className="hero-scene__partnership-map">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-scene__brief">
          <span>Business context</span>
          <strong>Workflow clarity before technology</strong>
        </div>
        <div className="hero-scene__journey">
          {aboutSteps.map((step, index) => (
            <div className="hero-scene__journey-step" key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
        <div className="hero-scene__partner-loop">
          <span />
          <strong>Long-term partnership</strong>
        </div>
      </div>
    </div>
  )
}

export function ContactHeroVisual() {
  return (
    <div aria-hidden="true" className="inner-hero-visual inner-hero-visual--contact">
      <div className="inner-hero-visual__grid" />
      <div className="hero-scene hero-scene--contact">
        <div className="hero-scene__contact-network">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="hero-scene__globe">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-scene__inbox">
          <span>New inquiry</span>
          <strong>Project / Product Demo</strong>
        </div>
        <div className="hero-scene__response-flow">
          {contactSteps.map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>
        <div className="hero-scene__sla">
          <strong>24h</strong>
          <span>Response target</span>
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
