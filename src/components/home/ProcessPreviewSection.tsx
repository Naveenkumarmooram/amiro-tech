import { Card, Container, Grid, Section, SectionHeader, Stack } from '../common'

type ProcessPreviewSectionProps = {
  className?: string
}

const processSteps = [
  {
    description: 'Understand the business problem, workflow, users, and goals.',
    title: 'Discover',
  },
  {
    description: 'Define solution architecture, user flow, and implementation plan.',
    title: 'Design',
  },
  {
    description: 'Develop clean, scalable software with modern technologies.',
    title: 'Build',
  },
  {
    description: 'Launch, train users, and support adoption.',
    title: 'Deploy',
  },
  {
    description: 'Measure, optimize, and add features as the business grows.',
    title: 'Improve',
  },
]

export function ProcessPreviewSection({ className }: ProcessPreviewSectionProps) {
  return (
    <Section className={['process-preview', className].filter(Boolean).join(' ')}>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            eyebrow="Process"
            title="How We Build"
          />
          <Grid className="process-preview__grid" columns="auto">
            {processSteps.map((step, index) => (
              <Card className="process-preview__card" key={step.title}>
                <Stack gap="sm">
                  <span className="process-preview__number">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="process-preview__title">{step.title}</h3>
                  <p className="process-preview__text">{step.description}</p>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  )
}
