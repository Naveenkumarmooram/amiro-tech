import { Card, Container, Grid, Section, SectionHeader, Stack } from '../common'

type WhyAmiroSectionProps = {
  className?: string
}

const reasons = [
  {
    description: 'We understand your process before choosing the technology.',
    marker: '01',
    title: 'Business-first approach',
  },
  {
    description:
      'Every system is designed around your workflows, users, and business goals.',
    marker: '02',
    title: 'Custom-built solutions',
  },
  {
    description:
      'We build practical AI, voice agents, and automation systems for real operations.',
    marker: '03',
    title: 'AI + Voice AI expertise',
  },
  {
    description:
      'Interfaces are designed to be simple, modern, and easy for teams to adopt.',
    marker: '04',
    title: 'Clean UI/UX',
  },
  {
    description:
      'Solutions are built with long-term growth, integration, and reliability in mind.',
    marker: '05',
    title: 'Scalable architecture',
  },
  {
    description: 'We think beyond launch and support continuous improvement.',
    marker: '06',
    title: 'Long-term support mindset',
  },
]

export function WhyAmiroSection({ className }: WhyAmiroSectionProps) {
  return (
    <Section className={['why-amiro', className].filter(Boolean).join(' ')}>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            description="Amiro Tech combines strategic problem-solving, careful product thinking, and practical engineering for business-critical systems."
            eyebrow="Why Amiro"
            title="Why Businesses Choose Amiro Tech"
          />
          <div className="why-amiro__connected-grid">
            <div aria-hidden="true" className="why-amiro__workflow-visual">
              <span>Process</span>
              <span>Design</span>
              <span>Build</span>
              <span>Support</span>
            </div>
            <Grid columns={3}>
              {reasons.map((reason) => (
              <Card className="why-amiro__card" interactive key={reason.title}>
                <Stack gap="md">
                  <span className="why-amiro__marker">{reason.marker}</span>
                  <Stack gap="sm">
                    <h3 className="why-amiro__title">{reason.title}</h3>
                    <p className="why-amiro__text">{reason.description}</p>
                  </Stack>
                </Stack>
              </Card>
              ))}
            </Grid>
          </div>
        </Stack>
      </Container>
    </Section>
  )
}
