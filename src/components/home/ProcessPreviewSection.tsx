import { Container, Section, SectionHeader, Stack } from '../common'

type ProcessPreviewSectionProps = {
  className?: string
}

const processSteps = [
  {
    description: 'Understand the business problem, workflow, users, and goals.',
    labels: ['Research', 'Requirements', 'Workshops'],
    visual: 'discover',
    title: 'Discover',
  },
  {
    description: 'Define solution architecture, user flow, and implementation plan.',
    labels: ['Architecture', 'Wireframes', 'Planning'],
    visual: 'design',
    title: 'Design',
  },
  {
    description: 'Develop clean, scalable software with modern technologies.',
    labels: ['Development', 'Testing', 'Integration'],
    visual: 'build',
    title: 'Build',
  },
  {
    description: 'Launch, train users, and support adoption.',
    labels: ['Launch', 'Cloud', 'Monitoring'],
    visual: 'deploy',
    title: 'Deploy',
  },
  {
    description: 'Measure, optimize, and add features as the business grows.',
    labels: ['Analytics', 'Feedback', 'Optimization'],
    visual: 'improve',
    title: 'Improve',
  },
]

function ProcessVisual({ type }: { type: string }) {
  if (type === 'discover') {
    return (
      <>
        <span className="process-preview__magnifier" />
        <span className="process-preview__scan-line" />
        <span className="process-preview__doc process-preview__doc--one" />
        <span className="process-preview__doc process-preview__doc--two" />
      </>
    )
  }

  if (type === 'design') {
    return (
      <>
        <span className="process-preview__blueprint" />
        <span className="process-preview__wire process-preview__wire--one" />
        <span className="process-preview__wire process-preview__wire--two" />
        <span className="process-preview__component process-preview__component--one" />
        <span className="process-preview__component process-preview__component--two" />
      </>
    )
  }

  if (type === 'build') {
    return (
      <>
        <span className="process-preview__terminal" />
        <span className="process-preview__code process-preview__code--one" />
        <span className="process-preview__code process-preview__code--two" />
        <span className="process-preview__code process-preview__code--three" />
        <span className="process-preview__api-link" />
      </>
    )
  }

  if (type === 'deploy') {
    return (
      <>
        <span className="process-preview__cloud" />
        <span className="process-preview__upload" />
        <span className="process-preview__deploy-check" />
        <span className="process-preview__deploy-line" />
      </>
    )
  }

  return (
    <>
      <span className="process-preview__chart" />
      <span className="process-preview__bar process-preview__bar--one" />
      <span className="process-preview__bar process-preview__bar--two" />
      <span className="process-preview__bar process-preview__bar--three" />
      <span className="process-preview__loop" />
    </>
  )
}

export function ProcessPreviewSection({ className }: ProcessPreviewSectionProps) {
  return (
    <Section className={['process-preview', className].filter(Boolean).join(' ')}>
      <div aria-hidden="true" className="process-preview__ambient">
        <span />
        <span />
        <span />
      </div>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            eyebrow="Process"
            title="How We Build"
          />
          <div className="process-preview__journey" aria-label="Software and AI solution build process">
            <div aria-hidden="true" className="process-preview__connector">
              <span className="process-preview__connector-line" />
              <span className="process-preview__connector-fill" />
              <span className="process-preview__connector-pulse" />
            </div>
            {processSteps.map((step, index) => (
              <article className={`process-preview__card process-preview__card--${step.visual}`} key={step.title}>
                <span aria-hidden="true" className="process-preview__tooltip">Current Phase</span>
                <div className="process-preview__visual" aria-hidden="true">
                  <ProcessVisual type={step.visual} />
                </div>
                <div className="process-preview__copy">
                  <span className="process-preview__number">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="process-preview__title">{step.title}</h3>
                  <p className="process-preview__text">{step.description}</p>
                </div>
                <ul className="process-preview__labels" aria-label={`${step.title} activities`}>
                  {step.labels.map((label) => (
                    <li key={label}>{label}</li>
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
