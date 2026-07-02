import { Button, Card, Container, Section, Stack } from '../common'

type FinalCTASectionProps = {
  className?: string
}

export function FinalCTASection({ className }: FinalCTASectionProps) {
  return (
    <Section className={['final-cta', className].filter(Boolean).join(' ')} spacing="spacious">
      <Container>
        <Card className="final-cta__panel" padding="spacious">
          <Stack className="final-cta__content" gap="xl">
            <Stack gap="md">
              <p className="final-cta__eyebrow">Next step</p>
              <h2 className="final-cta__title">
                Ready to Build Smarter Software for Your Business?
              </h2>
              <p className="final-cta__description">
                Whether you're planning a custom platform, AI solution, Voice AI assistant,
                automation workflow, or enterprise application, we're here to help.
              </p>
            </Stack>
            <div className="home-actions">
              <Button href="/contact?type=consultation" size="lg">
                Book a Strategy Call
              </Button>
              <Button href="/contact" size="lg" variant="secondary">
                Contact Us
              </Button>
            </div>
          </Stack>
        </Card>
      </Container>
    </Section>
  )
}
