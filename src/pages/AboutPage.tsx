import { Button, Card, Container, Grid, Section, SectionHeader, Stack } from '../components/common'

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

const trustSignals = ['Business clarity', 'Reliable engineering', 'AI capability', 'Long-term partnership']

export function AboutPage() {
  return (
    <>
      <Section className="page-hero" spacing="spacious">
        <Container>
          <Stack className="page-hero__content" gap="xl">
            <Stack gap="lg">
              <p className="page-hero__eyebrow">About Amiro Tech</p>
              <h1 className="page-hero__title">
                Building Software &amp; AI Solutions for Real Business Problems
              </h1>
              <p className="page-hero__description">
                Amiro Tech Solutions helps businesses move from manual, disconnected
                processes to intelligent digital systems through software engineering, AI,
                automation, and practical digital transformation.
              </p>
            </Stack>
            <div className="home-actions">
              <Button size="lg">Discuss Your Goals</Button>
              <Button size="lg" variant="secondary">
                Explore Services
              </Button>
            </div>
          </Stack>
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
                <Button>Start a Conversation</Button>
                <Button variant="secondary">View Our Process</Button>
              </div>
            </Stack>
            <Grid columns={2} gap="sm">
              {trustSignals.map((signal) => (
                <Card className="about-trust__item" key={signal} padding="compact">
                  <span className="about-trust__marker" />
                  <p>{signal}</p>
                </Card>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>
    </>
  )
}
