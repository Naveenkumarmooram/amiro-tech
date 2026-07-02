import { Card, Container, Section, SectionHeader, Stack } from '../common'

type WorkflowSectionProps = {
  className?: string
}

const workflowSteps = [
  { accent: 'gold', label: 'Business Process' },
  { accent: 'gold', label: 'Software Platform' },
  { accent: 'cyan', label: 'AI Layer' },
  { accent: 'cyan', label: 'Voice AI' },
  { accent: 'gold', label: 'Automation' },
  { accent: 'gold', label: 'Insights' },
]

export function WorkflowSection({ className }: WorkflowSectionProps) {
  return (
    <Section className={['workflow-section', className].filter(Boolean).join(' ')} tone="soft">
      <Container>
        <Stack gap="xl">
          <SectionHeader
            description="We connect business workflows, software, AI, Voice AI, automation, and data into systems that improve speed, visibility, and control."
            eyebrow="Workflow"
            title="From Manual Processes to Intelligent Digital Systems"
          />
          <div className="workflow-section__flow" aria-label="Business process to insights workflow">
            {workflowSteps.map((step) => (
              <Card
                className={`workflow-section__node workflow-section__node--${step.accent}`}
                key={step.label}
                padding="compact"
              >
                <span className="workflow-section__dot" />
                <p>{step.label}</p>
              </Card>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  )
}
