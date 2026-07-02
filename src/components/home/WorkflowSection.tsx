import { Card, Container, Section, SectionHeader, Stack } from '../common'

type WorkflowSectionProps = {
  className?: string
}

const workflowSteps = [
  { accent: 'gold', detail: 'Manual work', label: 'Business Process' },
  { accent: 'gold', detail: 'Core system', label: 'Software Platform' },
  { accent: 'cyan', detail: 'Decision support', label: 'AI Layer' },
  { accent: 'cyan', detail: 'Call workflows', label: 'Voice AI' },
  { accent: 'gold', detail: 'Task routing', label: 'Automation' },
  { accent: 'gold', detail: 'Live visibility', label: 'Insights' },
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
            <span aria-hidden="true" className="workflow-section__data-flow" />
            {workflowSteps.map((step) => (
              <Card
                className={`workflow-section__node workflow-section__node--${step.accent}`}
                key={step.label}
                padding="compact"
              >
                <span className="workflow-section__dot" />
                <div>
                  <p>{step.label}</p>
                  <span>{step.detail}</span>
                </div>
              </Card>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  )
}
