import type { MouseEvent } from 'react'

import { Container, Section, SectionHeader, Stack } from '../common'

type ServicesOverviewSectionProps = {
  className?: string
}

const services = [
  {
    cta: 'See Projects',
    description:
      'Custom web applications, enterprise systems, SaaS platforms, portals, dashboards, and internal business tools.',
    features: ['SaaS Platforms', 'Enterprise Apps', 'Dashboards', 'APIs'],
    gradient: 'orange',
    metric: '50+ Projects',
    tags: ['Web Apps', 'SaaS', 'Dashboards'],
    title: 'Software Engineering',
    visual: 'software',
  },
  {
    cta: 'Explore Solutions',
    description:
      'Generative AI applications, AI assistants, AI agents, document intelligence, and intelligent workflows.',
    features: ['AI Agents', 'RAG Systems', 'Documents', 'Workflows'],
    gradient: 'cyan',
    metric: '10x Productivity',
    tags: ['Gen AI', 'Agents', 'Documents'],
    title: 'AI Solutions',
    visual: 'ai',
  },
  {
    cta: 'Learn More',
    description:
      'Voice agents, AI receptionists, support bots, appointment booking agents, and voice-enabled workflows.',
    features: ['Voice Agents', 'Support Bots', 'Booking', '24/7 AI'],
    gradient: 'violet',
    metric: '24/7 AI',
    tags: ['Voice Agents', 'Support Bots', 'Booking'],
    title: 'Voice AI',
    visual: 'voice',
  },
  {
    cta: 'Explore Solutions',
    description:
      'Workflow automation, reporting automation, API integrations, system connections, and process digitization.',
    features: ['Automation', 'APIs', 'Reporting', 'Integrations'],
    gradient: 'amber',
    metric: 'Enterprise Ready',
    tags: ['Automation', 'APIs', 'Reporting'],
    title: 'Automation & Integration',
    visual: 'automation',
  },
]

function handleCardPointerMove(event: MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`)
  event.currentTarget.style.setProperty('--tilt-x', `${((event.clientY - rect.top) / rect.height - 0.5) * -6}deg`)
  event.currentTarget.style.setProperty('--tilt-y', `${((event.clientX - rect.left) / rect.width - 0.5) * 6}deg`)
}

function handleCardPointerLeave(event: MouseEvent<HTMLElement>) {
  event.currentTarget.style.setProperty('--tilt-x', '0deg')
  event.currentTarget.style.setProperty('--tilt-y', '0deg')
}

function ServiceIllustration({ type }: { type: string }) {
  if (type === 'software') {
    return (
      <>
        <span className="services-overview__software-window" />
        <span className="services-overview__software-line services-overview__software-line--one" />
        <span className="services-overview__software-line services-overview__software-line--two" />
        <span className="services-overview__software-line services-overview__software-line--three" />
        <span className="services-overview__software-node services-overview__software-node--one" />
        <span className="services-overview__software-node services-overview__software-node--two" />
      </>
    )
  }

  if (type === 'ai') {
    return (
      <>
        <span className="services-overview__ai-core" />
        <span className="services-overview__ai-link services-overview__ai-link--one" />
        <span className="services-overview__ai-link services-overview__ai-link--two" />
        <span className="services-overview__ai-link services-overview__ai-link--three" />
        <span className="services-overview__ai-node services-overview__ai-node--one" />
        <span className="services-overview__ai-node services-overview__ai-node--two" />
        <span className="services-overview__ai-node services-overview__ai-node--three" />
        <span className="services-overview__ai-output" />
      </>
    )
  }

  if (type === 'voice') {
    return (
      <>
        <span className="services-overview__voice-mic" />
        <span className="services-overview__voice-wave services-overview__voice-wave--one" />
        <span className="services-overview__voice-wave services-overview__voice-wave--two" />
        <span className="services-overview__voice-wave services-overview__voice-wave--three" />
        <span className="services-overview__voice-bar services-overview__voice-bar--one" />
        <span className="services-overview__voice-bar services-overview__voice-bar--two" />
        <span className="services-overview__voice-bar services-overview__voice-bar--three" />
      </>
    )
  }

  return (
    <>
      <span className="services-overview__automation-path services-overview__automation-path--one" />
      <span className="services-overview__automation-path services-overview__automation-path--two" />
      <span className="services-overview__automation-node services-overview__automation-node--one" />
      <span className="services-overview__automation-node services-overview__automation-node--two" />
      <span className="services-overview__automation-node services-overview__automation-node--three" />
      <span className="services-overview__automation-trigger" />
    </>
  )
}

export function ServicesOverviewSection({ className }: ServicesOverviewSectionProps) {
  return (
    <Section className={['services-overview', className].filter(Boolean).join(' ')} tone="soft">
      <div className="services-overview__ambient" aria-hidden="true">
        <span className="services-overview__blob services-overview__blob--one" />
        <span className="services-overview__blob services-overview__blob--two" />
        <span className="services-overview__blob services-overview__blob--three" />
        <span className="services-overview__particle services-overview__particle--one" />
        <span className="services-overview__particle services-overview__particle--two" />
        <span className="services-overview__particle services-overview__particle--three" />
        <span className="services-overview__particle services-overview__particle--four" />
      </div>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            description="We combine software engineering, AI, Voice AI, automation, and integration to build systems that improve how businesses operate."
            eyebrow="Services"
            title="Solutions That Turn Business Problems into Digital Systems"
          />
          <div className="services-overview__grid">
            {services.map((service) => (
              <article
                className={`services-overview__card services-overview__card--${service.gradient}`}
                key={service.title}
                onMouseLeave={handleCardPointerLeave}
                onMouseMove={handleCardPointerMove}
              >
                <div className="services-overview__card-glow" />
                <div className="services-overview__circuit" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="services-overview__topline">
                  <span className="services-overview__marker" />
                  <span className="services-overview__metric">{service.metric}</span>
                </div>
                <div className="services-overview__visual-row">
                  <div className={`services-overview__icon services-overview__icon--${service.visual}`} aria-hidden="true">
                    <ServiceIllustration type={service.visual} />
                  </div>
                  <span className="services-overview__accent-line" />
                </div>
                <div className="services-overview__body">
                  <h3 className="services-overview__title">{service.title}</h3>
                  <p className="services-overview__text">{service.description}</p>
                </div>
                <ul className="services-overview__features" aria-label={`${service.title} highlights`}>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="services-overview__footer">
                  <ul className="services-overview__tags" aria-label={`${service.title} capabilities`}>
                    {service.tags.map((tag) => (
                      <li className="services-overview__tag" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <a className="services-overview__cta" href="/services">
                    {service.cta}
                    <span aria-hidden="true">-&gt;</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  )
}
