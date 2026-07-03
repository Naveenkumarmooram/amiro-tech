import { Button, Container, Section, SectionHeader } from '../common'

type ValueStripSectionProps = {
  className?: string
}

const outcomes = [
  'Digitize Operations',
  'Reduce Manual Work',
  'Connected Systems',
  'Improve Visibility',
  'Faster Delivery',
  'AI Assisted Decisions',
]

const transformationStages = [
  'Manual',
  'Automate',
  'AI',
  'Connect',
  'Insights',
]

export function ValueStripSection({ className }: ValueStripSectionProps) {
  return (
    <Section className={['value-strip', className].filter(Boolean).join(' ')} spacing="compact">
      <Container>
        <div className="value-strip__layout">
          <div className="value-strip__content">
            <SectionHeader
              className="value-strip__header"
              description="We turn disconnected operations into connected software systems that reduce manual work, improve visibility, and help teams move faster."
              title="What We Help Businesses Achieve"
            />
            <Button className="value-strip__cta" href="/services" variant="ghost">
              See Our Services →
            </Button>
          </div>
          <div aria-label="Business transformation flow" className="value-strip__visual">
            <div aria-hidden="true" className="value-strip__mesh" />
            <div className="value-strip__platform">
              <span aria-hidden="true" className="value-strip__platform-edge" />
              <span aria-hidden="true" className="value-strip__platform-glow" />
              <div className="value-strip__flow">
                {transformationStages.map((stage, index) => (
                  <div
                    className={[
                      'value-strip__node',
                      index === 2 ? 'value-strip__node--ai' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    key={stage}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{stage}</strong>
                  </div>
                ))}
                <span aria-hidden="true" className="value-strip__pulse" />
              </div>
            </div>
            <ul className="value-strip__badges" aria-label="Business outcomes">
              {outcomes.map((outcome) => (
                <li className="value-strip__badge" key={outcome}>
                  <span className="value-strip__badge-label">
                    <span aria-hidden="true">✓</span>
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}
