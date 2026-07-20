import type { CSSProperties, ReactNode } from 'react'
import { Container, Section, SectionHeader, Stack } from '../common'

type TechnologySectionProps = {
  className?: string
}

type IconProps = {
  children: ReactNode
}

function TechIcon({ children }: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      {children}
    </svg>
  )
}

const technologyGroups = [
  {
    description: 'Modern user interfaces built for speed and scale.',
    icon: <TechIcon><rect height="14" rx="2" width="20" x="2" y="3" /><path d="M8 21h8M12 17v4" /></TechIcon>,
    items: ['React', 'Next.js', 'TypeScript'],
    title: 'Frontend',
  },
  {
    description: 'Secure, resilient systems engineered for growth.',
    icon: <TechIcon><rect height="8" rx="2" width="20" x="2" y="3" /><rect height="8" rx="2" width="20" x="2" y="13" /><path d="M6 7h.01M6 17h.01" /></TechIcon>,
    items: ['Python', 'FastAPI', 'Node.js'],
    title: 'Backend',
  },
  {
    description: 'Intelligent products powered by production-ready AI.',
    icon: <TechIcon><rect height="16" rx="3" width="16" x="4" y="4" /><path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" /></TechIcon>,
    items: ['OpenAI', 'LangChain', 'Vector DB', 'RAG'],
    title: 'AI',
  },
  {
    description: 'Cloud-native infrastructure that stays dependable.',
    icon: <TechIcon><path d="M17.5 19H7a5 5 0 1 1 1.7-9.7A6 6 0 0 1 20 12a3.5 3.5 0 0 1-2.5 7Z" /></TechIcon>,
    items: ['AWS', 'Docker', 'Kubernetes'],
    title: 'Cloud',
  },
  {
    description: 'Reliable data foundations for real-time decisions.',
    icon: <TechIcon><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" /></TechIcon>,
    items: ['PostgreSQL', 'Redis'],
    title: 'Database',
  },
  {
    description: 'Connected workflows across every tool and platform.',
    icon: <TechIcon><rect height="6" rx="1.5" width="6" x="3" y="3" /><rect height="6" rx="1.5" width="6" x="15" y="15" /><path d="M9 6h3a3 3 0 0 1 3 3v6M15 18h-3a3 3 0 0 1-3-3V9" /></TechIcon>,
    items: ['REST APIs', 'GraphQL', 'Webhooks'],
    title: 'Integration',
  },
]

export function TechnologySection({ className }: TechnologySectionProps) {
  return (
    <Section className={['technology-section', className].filter(Boolean).join(' ')} spacing="compact">
      <div className="technology-section__ambient" aria-hidden="true"><span /><span /><span /></div>
      <Container>
        <Stack gap="lg">
          <SectionHeader
            description="We use proven technologies to build scalable AI products, enterprise software, automation platforms, and cloud-native applications."
            eyebrow="Technology"
            title="Modern Technologies"
          />
          <div className="technology-card-grid" aria-label="Modern technology stack">
            {technologyGroups.map((group, groupIndex) => (
              <article
                className="technology-card"
                key={group.title}
                style={{ '--card-delay': `${groupIndex * 80}ms` } as CSSProperties}
              >
                <div className="technology-card__icon">{group.icon}</div>
                <h3 className="technology-card__title">{group.title}</h3>
                <p className="technology-card__description">{group.description}</p>
                <ul className="technology-card__tags" aria-label={`${group.title} technologies`}>
                  {group.items.map((item) => <li className="technology-card__tag" key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  )
}
