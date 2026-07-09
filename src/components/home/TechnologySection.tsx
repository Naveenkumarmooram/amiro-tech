import type { CSSProperties } from 'react'
import { Container, Section, SectionHeader, Stack } from '../common'

type TechnologySectionProps = {
  className?: string
}

const technologyGroups = [
  {
    items: ['React', 'Next.js', 'TypeScript'],
    title: 'Frontend',
  },
  {
    items: ['Python', 'FastAPI', 'Node.js'],
    title: 'Backend',
  },
  {
    items: ['OpenAI', 'LangChain', 'Vector Database', 'RAG'],
    title: 'AI',
  },
  {
    items: ['AWS', 'Docker', 'Kubernetes'],
    title: 'Cloud',
  },
  {
    items: ['PostgreSQL', 'Redis'],
    title: 'Database',
  },
  {
    items: ['REST APIs', 'GraphQL', 'Webhooks'],
    title: 'Integration',
  },
]

export function TechnologySection({ className }: TechnologySectionProps) {
  return (
    <Section className={['technology-section', className].filter(Boolean).join(' ')} spacing="compact">
      <div className="technology-section__ambient" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <Container>
        <Stack gap="lg">
          <SectionHeader
            description="We use proven technologies to build scalable AI products, enterprise software, automation platforms, and cloud-native applications."
            eyebrow="Technology"
            title="Modern Technologies"
          />
          <div className="technology-section__groups" aria-label="Modern technology stack">
            {technologyGroups.map((group, groupIndex) => (
              <article className="technology-section__group" key={group.title}>
                <h3 className="technology-section__title">{group.title}</h3>
                <ul className="technology-section__tags" aria-label={`${group.title} technologies`}>
                  {group.items.map((item, itemIndex) => (
                    <li
                      className="technology-section__tag"
                      key={item}
                      style={{ '--tech-delay': `${(groupIndex * 80) + (itemIndex * 45)}ms` } as CSSProperties}
                    >
                      {item}
                    </li>
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
