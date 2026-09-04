import { Button, Card, Container, Grid, Section, SectionHeader, Stack } from '../components/common'
import { AboutHeroVisual, PartnershipJourneyVisual } from '../components/visuals'

const aboutSections = [
  {
    description:
      'Amiro Tech is a software and AI solutions partner focused on building practical systems for real operations.',
    title: 'Who We Are',
  },
  {
    description:
      'We exist to help businesses replace disconnected manual work with reliable digital platforms, automation, and AI-supported workflows.',
    title: 'Why We Exist',
  },
  {
    description:
      'We start with the business process, users, constraints, and goals before choosing tools or writing code.',
    title: 'Business-First Philosophy',
  },
  {
    description:
      'Our work combines product thinking, solution architecture, clean UI/UX, and disciplined engineering.',
    title: 'Our Approach',
  },
  {
    description:
      'We move through discovery, design, build, deployment, and continuous improvement with clear communication.',
    title: 'How We Work',
  },
  {
    description:
      'Clients trust us for calm execution, practical technical judgment, and a long-term support mindset.',
    title: 'Why Clients Trust Us',
  },
]

const trustSignals = [
  { description: 'Turning complex requirements into a clear path forward.', title: 'Business Clarity', type: 'clarity' },
  { description: 'Systems designed for stability, security, and scale.', title: 'Reliable Engineering', type: 'engineering' },
  { description: 'Practical AI integrated where it creates measurable value.', title: 'AI Capability', type: 'ai' },
  { description: 'Supporting your platform beyond the first release.', title: 'Long-term Partnership', type: 'partnership' },
] as const

function TrustVisual({ type }: { type: typeof trustSignals[number]['type'] }) {
  if (type === 'clarity') return <svg className="trust-visual trust-visual--clarity" viewBox="0 0 260 100" aria-hidden="true"><path className="trust-visual__path" d="M30 25 78 72 126 30 174 68 224 35"/><circle cx="30" cy="25" r="5"/><circle cx="78" cy="72" r="5"/><circle cx="126" cy="30" r="5"/><circle cx="174" cy="68" r="5"/><circle className="trust-visual__target" cx="224" cy="35" r="9"/><circle className="trust-visual__target-ring" cx="224" cy="35" r="17"/></svg>
  if (type === 'engineering') return <svg className="trust-visual trust-visual--engineering" viewBox="0 0 260 100" aria-hidden="true"><rect x="18" y="29" width="54" height="42" rx="8"/><rect x="103" y="29" width="54" height="42" rx="8"/><rect x="188" y="29" width="54" height="42" rx="8"/><path className="trust-visual__path" d="M72 50h31m54 0h31"/><path className="trust-visual__check" d="m119 50 8 8 16-18"/></svg>
  if (type === 'ai') return <svg className="trust-visual trust-visual--ai" viewBox="0 0 260 100" aria-hidden="true"><path className="trust-visual__path" d="M32 22 112 50M35 78l77-28m36 0 75-25m-75 25 75 27"/><circle cx="32" cy="22" r="5"/><circle cx="35" cy="78" r="5"/><circle className="trust-visual__core" cx="130" cy="50" r="17"/><circle cx="223" cy="25" r="6"/><rect className="trust-visual__output" x="214" y="68" width="20" height="20" rx="5"/><circle className="trust-visual__pulse trust-visual__pulse--one" cx="73" cy="36" r="3"/><circle className="trust-visual__pulse trust-visual__pulse--two" cx="180" cy="36" r="3"/></svg>
  return <svg className="trust-visual trust-visual--partnership" viewBox="0 0 260 100" aria-hidden="true"><path className="trust-visual__path" d="M35 70c20-47 65-56 92-26 25 28 59 26 98-15"/><circle cx="35" cy="70" r="6"/><circle cx="127" cy="44" r="6"/><circle className="trust-visual__target" cx="225" cy="29" r="8"/><path className="trust-visual__arrow" d="m213 25 12 4-5 12"/><text x="27" y="92">Launch</text><text x="107" y="92">Improve</text><text x="205" y="92">Scale</text></svg>
}

export function AboutPage() {
  return (
    <>
      <Section className="page-hero about-premium-hero" spacing="spacious">
        <Container>
          <div className="about-premium-hero__layout">
            <div className="about-premium-hero__content">
              <p className="about-premium-hero__eyebrow"><span /> About Amiro Tech</p>
              <h1><strong>Building Software &amp; AI Solutions</strong><span>for Modern Businesses</span></h1>
              <p className="about-premium-hero__description">We help ambitious businesses replace disconnected processes with thoughtful software, practical AI, and reliable automation—designed around the way their teams actually work.</p>
              <div className="about-premium-hero__actions">
                <Button href="/contact?type=consultation" size="lg">
                  Discuss Your Goals
                </Button>
                <Button href="/services" size="lg" variant="secondary">
                  Explore Services
                </Button>
              </div>
              <ul className="about-premium-hero__trust" aria-label="Amiro capabilities">
                {['Enterprise Software', 'AI Solutions', 'Automation', 'Cloud Native'].map((item) => <li key={item}><span>✓</span>{item}</li>)}
              </ul>
            </div>
            <AboutHeroVisual />
          </div>
        </Container>
      </Section>

      <Section className="page-section">
        <Container>
          <Stack gap="xl">
            <SectionHeader
              description="Amiro Tech is built around the idea that technology should make business operations clearer, faster, and easier to control."
              eyebrow="Company"
              title="A practical partner for digital operations."
            />
            <Card className="about-journey-card" padding="spacious">
              <PartnershipJourneyVisual />
            </Card>
            <Grid columns={3}>
              {aboutSections.map((section, index) => (
                <Card className="page-card" key={section.title}>
                  <Stack gap="md">
                    <span className="page-card__number">{String(index + 1).padStart(2, '0')}</span>
                    <h2 className="page-card__title">{section.title}</h2>
                    <p className="page-card__text">{section.description}</p>
                  </Stack>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      <Section className="page-section page-section--soft">
        <Container>
          <div className="about-trust">
            <Stack gap="lg">
              <SectionHeader
                description="We keep projects grounded in measurable business value while building with modern software and AI practices."
                eyebrow="Trust"
                title="Strategy, execution, and support in one delivery mindset."
              />
              <div className="home-actions">
                <Button href="/contact?type=consultation">Start a Conversation</Button>
                <Button href="/process" variant="secondary">
                  View Our Process
                </Button>
              </div>
            </Stack>
            <Grid columns={2} gap="sm">
              {trustSignals.map((signal, index) => (
                <Card className={`about-trust__item about-trust__item--${signal.type}`} key={signal.title} padding="compact">
                  <div className="about-trust__visual"><TrustVisual type={signal.type} /></div>
                  <div className="about-trust__label"><span>{String(index + 1).padStart(2, '0')}</span><h3>{signal.title}</h3></div>
                  <p>{signal.description}</p>
                </Card>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>
    </>
  )
}
