import { Card, Container, Grid, Section, SectionHeader, Stack } from '../common'

type ValueStripSectionProps = {
  className?: string
}

const outcomes = [
  'Digitize Operations',
  'Automate Workflows',
  'Build Intelligent Software',
  'Integrate Systems',
  'Improve Visibility',
  'Scale Faster',
]

export function ValueStripSection({ className }: ValueStripSectionProps) {
  return (
    <Section className={['value-strip', className].filter(Boolean).join(' ')} spacing="compact">
      <Container>
        <Stack gap="lg">
          <SectionHeader
            align="center"
            className="value-strip__header"
            title="What We Help Businesses Achieve"
          />
          <Grid className="value-strip__grid" columns="auto" gap="sm">
            {outcomes.map((outcome) => (
              <Card className="value-strip__item" key={outcome} padding="compact">
                <span className="value-strip__marker" />
                <h3 className="value-strip__title">{outcome}</h3>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  )
}
