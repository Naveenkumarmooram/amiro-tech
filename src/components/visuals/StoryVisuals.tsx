type Accent = 'cyan' | 'gold'

type CapabilityVisualProps = {
  accent?: Accent
  type: 'software' | 'ai' | 'voice' | 'automation'
}

type ProductVisualProps = {
  type: 'hr' | 'inventory' | 'operations' | 'voice'
}

type GroupVisualProps = {
  type: 'ai' | 'integration' | 'platform'
}

const groupLabels = {
  ai: ['LLM', 'Agents', 'Voice', 'Workflows'],
  integration: ['API', 'Webhook', 'Data', 'Reports'],
  platform: ['Frontend', 'Backend', 'Cloud', 'DB'],
}

export function CapabilityMiniVisual({ accent = 'gold', type }: CapabilityVisualProps) {
  return (
    <div aria-hidden="true" className={`story-mini story-mini--${type} story-mini--${accent}`}>
      <span />
      <span />
      <span />
      <span />
    </div>
  )
}

export function ServiceGroupVisual({ type }: GroupVisualProps) {
  return (
    <div aria-hidden="true" className={`story-panel story-panel--${type}`}>
      <div className="story-panel__hub">
        <span>{type === 'platform' ? 'Platform' : type === 'ai' ? 'AI' : 'APIs'}</span>
      </div>
      <div className="story-panel__nodes">
        {groupLabels[type].map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
      <div className="story-panel__line story-panel__line--one" />
      <div className="story-panel__line story-panel__line--two" />
    </div>
  )
}

export function ProductMiniVisual({ type }: ProductVisualProps) {
  if (type === 'inventory') {
    return <div aria-hidden="true" className="product-ui product-ui--inventory"><div className="product-ui__bar"><strong>Inventory Control</strong><span>Live</span></div><div className="product-ui__metrics"><p><span>Total assets</span><strong>2,847</strong></p><p><span>Calibration</span><strong>96%</strong></p><p><span>Compliance</span><strong>98%</strong></p></div><div className="product-ui__body"><div className="product-ui__chart"><span>Asset visibility</span><div><i/><i/><i/><i/><i/></div></div><div className="product-ui__list"><span>Equipment status</span><p><i/>In service <b>234</b></p><p><i/>Due soon <b>12</b></p><p><i/>Review <b>05</b></p></div></div></div>
  }

  if (type === 'hr') {
    return <div aria-hidden="true" className="product-ui product-ui--hr"><div className="product-ui__bar"><strong>People Operations</strong><span>Today</span></div><div className="product-ui__metrics"><p><span>Employees</span><strong>186</strong></p><p><span>Attendance</span><strong>94%</strong></p><p><span>Onboarding</span><strong>08</strong></p></div><div className="product-ui__body"><div className="product-ui__people"><span>Workforce overview</span><div><i/><i/><i/><i/><i/><i/></div></div><div className="product-ui__list"><span>Team activity</span><p><i/>Present <b>172</b></p><p><i/>On leave <b>09</b></p><p><i/>Remote <b>05</b></p></div></div></div>
  }

  if (type === 'voice') {
    return <div aria-hidden="true" className="product-ui product-ui--voice"><div className="product-ui__bar"><strong>Voice AI Console</strong><span>Active</span></div><div className="product-ui__voice-main"><div><span>Live conversations</span><strong>24</strong><small>92% resolution rate</small></div><div className="product-ui__wave">{[1,2,3,4,5,6,7,8,9].map(item=><i key={item}/>)}</div></div><div className="product-ui__voice-stats"><p><span>Qualified</span><b>68%</b></p><p><span>Booked</span><b>31</b></p><p><span>Escalated</span><b>04</b></p></div></div>
  }

  if (type === 'operations') {
    return <div aria-hidden="true" className="product-ui product-ui--operations"><div className="product-ui__bar"><strong>Business Operations</strong><span>Synced</span></div><div className="product-ui__ops"><div><span>Workflow progress</span><strong>78%</strong><i><b/></i></div><div><span>Open tasks</span><strong>42</strong><small>12 completed today</small></div></div><div className="product-ui__flow"><p>CRM</p><i>→</i><p>Approvals</p><i>→</i><p>Reports</p></div></div>
  }

  return (
    <div aria-hidden="true" className={`product-visual product-visual--${type}`}>
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  )
}

export function PartnershipJourneyVisual() {
  const steps = ['Business Understanding', 'Solution Design', 'Engineering', 'Long-Term Partnership']

  return (
    <div aria-hidden="true" className="journey-visual">
      {steps.map((step, index) => (
        <div className="journey-visual__step" key={step}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <p>{step}</p>
        </div>
      ))}
    </div>
  )
}

export function ContactJourneyVisual() {
  const steps = ['Business', 'Consultation', 'Architecture', 'Development', 'Support']

  return (
    <div aria-hidden="true" className="contact-journey">
      {steps.map((step, index) => (
        <div className="contact-journey__step" key={step}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <p>{step}</p>
        </div>
      ))}
    </div>
  )
}
