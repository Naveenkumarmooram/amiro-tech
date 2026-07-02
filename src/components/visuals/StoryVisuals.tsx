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
