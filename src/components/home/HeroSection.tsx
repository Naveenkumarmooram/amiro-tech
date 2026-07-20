import { Button, Container, Section } from '../common'
import { HeroVisual } from '../visuals'

type HeroSectionProps = { className?: string }

const trustItems = ['AI Solutions', 'Cloud Native', 'Enterprise Ready']

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <Section className={['home-hero', 'premium-hero', className].filter(Boolean).join(' ')} spacing="spacious">
      <div aria-hidden="true" className="home-hero__blueprint"><span /><span /><span /><span /></div>
      <Container>
        <div className="premium-hero__layout">
          <div className="premium-hero__content">
            <p className="premium-hero__eyebrow"><span /> Enterprise technology partner</p>
            <h1><strong>Software &amp; AI Services</strong><span>for Business Growth</span></h1>
            <p className="premium-hero__description">We design and build enterprise software, AI systems, voice agents, and automation platforms that turn complex operations into scalable business advantage.</p>
            <div className="premium-hero__actions">
              <Button href="/contact?type=consultation" size="lg">Book a Strategy Call <span aria-hidden="true">→</span></Button>
              <Button href="/services" size="lg" variant="secondary">Explore Services</Button>
            </div>
            <ul className="premium-hero__trust" aria-label="Platform qualities">
              {trustItems.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}
            </ul>
          </div>
          <HeroVisual />
        </div>
      </Container>
    </Section>
  )
}
