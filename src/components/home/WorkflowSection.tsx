import type { CSSProperties } from 'react'
import { useState } from 'react'

import { Container, Section, SectionHeader, Stack } from '../common'

type WorkflowSectionProps = {
  className?: string
}

const workflowSteps = [
  {
    detail: 'Manual work',
    features: ['Manual operations', 'Disconnected systems', 'Repetitive work'],
    icon: 'business',
    label: 'Business Process',
  },
  {
    detail: 'Core system',
    features: ['Centralized apps', 'APIs', 'Cloud systems'],
    icon: 'platform',
    label: 'Software Platform',
  },
  {
    detail: 'Decision support',
    features: ['LLMs', 'RAG', 'Decision Engine'],
    icon: 'ai',
    label: 'AI Layer',
  },
  {
    detail: 'Call workflows',
    features: ['AI Receptionist', 'Calling', 'Speech'],
    icon: 'voice',
    label: 'Voice AI',
  },
  {
    detail: 'Task routing',
    features: ['Workflows', 'Integrations', 'Triggers'],
    icon: 'automation',
    label: 'Automation',
  },
  {
    detail: 'Live visibility',
    features: ['Dashboards', 'Reports', 'Predictions'],
    icon: 'insights',
    label: 'Insights',
  },
]

export function WorkflowSection({ className }: WorkflowSectionProps) {
  const [activeStep, setActiveStep] = useState(2)

  return (
    <Section className={['workflow-section', className].filter(Boolean).join(' ')} tone="soft">
      <div className="workflow-section__ambient" aria-hidden="true">
        <span className="workflow-section__blob workflow-section__blob--one" />
        <span className="workflow-section__blob workflow-section__blob--two" />
        <span className="workflow-section__particle workflow-section__particle--one" />
        <span className="workflow-section__particle workflow-section__particle--two" />
        <span className="workflow-section__particle workflow-section__particle--three" />
      </div>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            description="We connect business workflows, software, AI, Voice AI, automation, and data into systems that improve speed, visibility, and control."
            eyebrow="Workflow"
            title="From Manual Processes to Intelligent Digital Systems"
          />
          <div
            className="workflow-section__flow"
            style={{ '--active-step': activeStep } as CSSProperties}
            aria-label="Business process to insights workflow"
            onMouseLeave={() => setActiveStep(2)}
          >
            <div className="workflow-section__pipeline" aria-hidden="true">
              <span className="workflow-section__pipeline-base" />
              <span className="workflow-section__pipeline-active" />
              <span className="workflow-section__pipeline-pulse" />
              <span className="workflow-section__pipeline-particle workflow-section__pipeline-particle--one" />
              <span className="workflow-section__pipeline-particle workflow-section__pipeline-particle--two" />
              <span className="workflow-section__pipeline-particle workflow-section__pipeline-particle--three" />
            </div>
            {workflowSteps.map((step, index) => (
              <article
                className={[
                  'workflow-section__node',
                  `workflow-section__node--${step.icon}`,
                  activeStep === index ? 'workflow-section__node--active' : '',
                  activeStep >= index ? 'workflow-section__node--reached' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                key={step.label}
                onFocus={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
                tabIndex={0}
              >
                <span className="workflow-section__node-number">{String(index + 1).padStart(2, '0')}</span>
                <div className="workflow-section__icon" aria-hidden="true">
                  <span className="workflow-section__icon-shape" />
                  <span className="workflow-section__icon-spark" />
                </div>
                <div className="workflow-section__content">
                  <p>{step.label}</p>
                  <span>{step.detail}</span>
                </div>
                <ul className="workflow-section__features" aria-label={`${step.label} features`}>
                  {step.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  )
}
