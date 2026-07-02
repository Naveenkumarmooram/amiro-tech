import { Button, Container, Section, Stack } from '../common'
import { HeroVisual } from '../visuals'

type HeroSectionProps = {
  className?: string
}

const trustTags = [
  'Custom Software',
  'AI Solutions',
  'Voice AI',
  'AI Agents',
  'Automation',
  'System Integration',
  'Cloud Ready',
]

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <Section className={['home-hero', className].filter(Boolean).join(' ')} spacing="spacious">
      <Container>
        <div className="home-hero__layout">
          <Stack className="home-hero__content" gap="xl">
            <Stack gap="lg">
              <p className="home-hero__eyebrow">Amiro Tech Solutions</p>
              <h1 className="home-hero__title">
                <span>Software &amp; AI Solutions</span>
                <span>Built Around Your Business</span>
              </h1>
              <p className="home-hero__description">
                We design and build custom software, AI solutions, Voice AI agents,
                automation systems, and scalable digital platforms that help businesses
                digitize operations, reduce manual work, and grow faster.
              </p>
            </Stack>
            <div className="home-actions">
              <Button size="lg">Book a Strategy Call</Button>
              <Button size="lg" variant="secondary">
                Explore Services
              </Button>
            </div>
            <ul aria-label="Amiro Tech capabilities" className="home-hero__tags">
              {trustTags.map((tag) => (
                <li className="home-hero__tag" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </Stack>
          <HeroVisual />
        </div>
      </Container>
    </Section>
  )
}
