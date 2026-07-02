import { Card, Container, Grid, Section, SectionHeader, Stack } from '../common'

type TechnologySectionProps = {
  className?: string
}

const technologies = [
  {
    accent: 'gold',
    items: ['React', 'TypeScript'],
    title: 'Frontend',
  },
  {
    accent: 'gold',
    items: ['Python', 'FastAPI'],
    title: 'Backend',
  },
  {
    accent: 'gold',
    items: ['PostgreSQL'],
    title: 'Database',
  },
  {
    accent: 'cyan',
    items: ['LLMs', 'Generative AI', 'AI Agents', 'Voice AI'],
    title: 'AI',
  },
  {
    accent: 'gold',
    items: ['AWS', 'Vercel', 'Supabase'],
    title: 'Cloud',
  },
  {
    accent: 'gold',
    items: ['APIs', 'Webhooks', 'Automation'],
    title: 'Integration',
  },
]

export function TechnologySection({ className }: TechnologySectionProps) {
  return (
    <Section className={['technology-section', className].filter(Boolean).join(' ')}>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            description="We use practical, modern technologies to build reliable software, AI systems, automation workflows, and cloud-ready platforms."
            eyebrow="Technology"
            title="Modern Technology for Scalable Solutions"
          />
          <Grid columns={3}>
            {technologies.map((technology) => (
              <Card
                className={`technology-section__card technology-section__card--${technology.accent}`}
                key={technology.title}
              >
                <Stack gap="lg">
                  <span className="technology-section__marker" />
                  <h3 className="technology-section__title">{technology.title}</h3>
                  <ul className="technology-section__tags" aria-label={`${technology.title} tools`}>
                    {technology.items.map((item) => (
                      <li className="technology-section__tag" key={item}>
                        {item}
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
