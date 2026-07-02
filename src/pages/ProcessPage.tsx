import { Button, Card, Container, Grid, Section, SectionHeader, Stack } from '../components/common'

const deliverySteps = [
  {
    description: 'Clarify the business problem, users, workflow, success criteria, and constraints.',
    title: 'Discovery',
  },
  {
    description: 'Define the right product shape, user flow, features, and implementation roadmap.',
    title: 'Solution Design',
  },
  {
    description: 'Create a scalable technical foundation for data, integrations, AI, and future growth.',
    title: 'Architecture',
  },
  {
    description: 'Build clean, maintainable software with practical engineering discipline.',
    title: 'Development',
  },
  {
    description: 'Validate functionality, usability, edge cases, and business-critical workflows.',
    title: 'Testing',
  },
  {
    description: 'Launch the system, support handover, train users, and monitor adoption.',
    title: 'Deployment',
  },
  {
    description: 'Measure usage, improve workflows, and add features as the business evolves.',
    title: 'Continuous Improvement',
  },
]

const collaborationSteps = ['Discovery call', 'Workflow mapping', 'Build reviews', 'Launch support']

export function ProcessPage() {
  return (
    <>
      <Section className="page-hero" spacing="spacious">
        <Container>
          <Stack className="page-hero__content" gap="xl">
            <Stack gap="lg">
              <p className="page-hero__eyebrow">Process</p>
              <h1 className="page-hero__title">A Clear Delivery Model for Software &amp; AI Projects</h1>
              <p className="page-hero__description">
                We guide projects from business discovery to launch and continuous improvement
                with clear ownership, practical architecture, and steady collaboration.
              </p>
            </Stack>
            <div className="home-actions">
              <Button size="lg">Start Discovery</Button>
              <Button size="lg" variant="secondary">
                View Services
              </Button>
            </div>
          </Stack>
        </Container>
      </Section>

      <Section className="page-section">
        <Container>
          <Stack gap="xl">
            <SectionHeader
              description="Each phase reduces uncertainty and moves the project closer to a useful, reliable business system."
              eyebrow="Our Delivery Model"
              title="From discovery to continuous improvement."
            />
            <div className="process-timeline">
              {deliverySteps.map((step, index) => (
                <Card className="process-timeline__item" key={step.title}>
                  <Stack gap="sm">
                    <span className="process-timeline__number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="page-card__title">{step.title}</h2>
                    <p className="page-card__text">{step.description}</p>
                  </Stack>
                </Card>
              ))}
            </div>
          </Stack>
        </Container>
      </Section>

      <Section className="page-section page-section--soft">
        <Container>
          <Stack gap="xl">
            <SectionHeader
              description="Clients stay close to the work through structured checkpoints, reviews, and adoption support."
              eyebrow="Collaboration"
              title="Client Collaboration Timeline"
            />
            <Grid columns={4}>
              {collaborationSteps.map((step) => (
                <Card className="page-card" key={step} padding="compact">
                  <Stack gap="sm">
                    <span className="page-card__marker" />
                    <h2 className="page-card__title">{step}</h2>
                  </Stack>
                </Card>
              ))}
            </Grid>
            <div className="home-actions">
              <Button>Discuss Your Project</Button>
              <Button variant="secondary">Contact Us</Button>
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  )
}
