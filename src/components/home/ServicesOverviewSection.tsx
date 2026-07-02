import { Card, Container, Grid, Section, SectionHeader, Stack } from '../common'
import { CapabilityMiniVisual } from '../visuals'

type ServicesOverviewSectionProps = {
  className?: string
}

const services = [
  {
    accent: 'gold',
    description:
      'Custom web applications, enterprise systems, SaaS platforms, portals, dashboards, and internal business tools.',
    tags: ['Web Apps', 'SaaS', 'Dashboards'],
    title: 'Software Engineering',
    visual: 'software',
  },
  {
    accent: 'cyan',
    description:
      'Generative AI applications, AI assistants, AI agents, document intelligence, and intelligent workflows.',
    tags: ['Gen AI', 'Agents', 'Documents'],
    title: 'AI Solutions',
    visual: 'ai',
  },
  {
    accent: 'cyan',
    description:
      'Voice agents, AI receptionists, support bots, appointment booking agents, and voice-enabled workflows.',
    tags: ['Voice Agents', 'Support Bots', 'Booking'],
    title: 'Voice AI',
    visual: 'voice',
  },
  {
    accent: 'gold',
    description:
      'Workflow automation, reporting automation, API integrations, system connections, and process digitization.',
    tags: ['Automation', 'APIs', 'Reporting'],
    title: 'Automation & Integration',
    visual: 'automation',
  },
]

export function ServicesOverviewSection({ className }: ServicesOverviewSectionProps) {
  return (
    <Section className={['services-overview', className].filter(Boolean).join(' ')} tone="soft">
      <Container>
        <Stack gap="xl">
          <SectionHeader
            description="We combine software engineering, AI, Voice AI, automation, and integration to build systems that improve how businesses operate."
            eyebrow="Services"
            title="Solutions That Turn Business Problems into Digital Systems"
          />
          <Grid columns={4}>
            {services.map((service) => (
              <Card
                className={`services-overview__card services-overview__card--${service.accent}`}
                interactive
                key={service.title}
              >
                <Stack gap="lg">
                  <div className="services-overview__visual-row">
                    <span className="services-overview__marker" />
                    <CapabilityMiniVisual accent={service.accent as 'cyan' | 'gold'} type={service.visual as 'ai' | 'automation' | 'software' | 'voice'} />
                  </div>
                  <Stack gap="sm">
                    <h3 className="services-overview__title">{service.title}</h3>
                    <p className="services-overview__text">{service.description}</p>
                  </Stack>
                  <ul className="services-overview__tags" aria-label={`${service.title} capabilities`}>
                    {service.tags.map((tag) => (
                      <li className="services-overview__tag" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  )
}
