import { Button, Container, Section } from '../components/common'
import { ServicesHeroVisual } from '../components/visuals'

const coreServices = [
  { capabilities: ['Enterprise applications', 'SaaS platforms', 'Operational systems'], description: 'Purpose-built software aligned with your workflows, users, and long-term growth.', icon: '⌘', title: 'Custom Software Development' },
  { capabilities: ['Generative AI', 'Intelligent agents', 'Document intelligence'], description: 'Practical AI solutions that improve decisions, knowledge access, and team productivity.', icon: '✦', title: 'AI & Generative AI Solutions' },
  { capabilities: ['Voice agents', 'Call automation', 'Conversational workflows'], description: 'Natural voice experiences for support, booking, qualification, and operations.', icon: '◉', title: 'Voice AI & Conversational Systems' },
  { capabilities: ['Process orchestration', 'Approvals & routing', 'System triggers'], description: 'Reliable automations that reduce repetitive work, delays, and operational errors.', icon: '↯', title: 'Workflow & Business Automation' },
  { capabilities: ['Cloud architecture', 'Platform modernization', 'Secure deployment'], description: 'Resilient cloud foundations engineered for performance, reliability, and scale.', icon: '☁', title: 'Cloud & Platform Engineering' },
  { capabilities: ['API ecosystems', 'Data pipelines', 'System integration'], description: 'Connected data and integration layers that create one dependable operational picture.', icon: '⇄', title: 'Data & API Engineering' },
]

const outcomes = [
  { description: 'Replace repetitive tasks with dependable digital workflows.', icon: <><path d="M4 6h5v5H4zM15 13h5v5h-5z"/><path d="M9 8.5h3a3 3 0 0 1 3 3V13M15 15.5h-3a3 3 0 0 1-3-3V11"/></>, number: '01', title: 'Reduce manual operations' },
  { description: 'Move from requirements to production with greater clarity.', icon: <><path d="M14 4c3-1 5-1 6-1 0 1 0 3-1 6l-5 5-5-5 5-5Z"/><path d="m9 10-4 1-2 3 6 1m5-5 1-4 3-2 1 6M8 17c-1 2-3 3-5 3 0-2 1-4 3-5"/></>, number: '02', title: 'Accelerate product delivery' },
  { description: 'Create seamless data flow across tools and teams.', icon: <><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><circle cx="18" cy="6" r="3"/><path d="M9 6h6M8 8l8 8"/></>, number: '03', title: 'Integrate disconnected systems' },
  { description: 'Deliver faster, more consistent digital interactions.', icon: <><path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 0 0 0-8m5 17v-2a4 4 0 0 0-3-3.8"/></>, number: '04', title: 'Improve customer experiences' },
  { description: 'Build reliable foundations ready for business growth.', icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/></>, number: '05', title: 'Scale securely' },
  { description: 'Turn operational information into useful intelligence.', icon: <><path d="M4 19V9m6 10V5m6 14v-7m4 7H2"/><path d="m4 7 6-4 6 6 4-4"/></>, number: '06', title: 'Activate business data' },
]

const approach = [
  { description: 'Understand the business, users, constraints, and desired outcomes.', icon: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4M11 8v6M8 11h6"/></>, title: 'Discover' },
  { description: 'Define the right product, data, AI, and infrastructure foundation.', icon: <><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></>, title: 'Architect' },
  { description: 'Engineer and validate the solution through focused delivery cycles.', icon: <><path d="m8 9-4 3 4 3m8-6 4 3-4 3M14 5l-4 14"/></>, title: 'Build' },
  { description: 'Connect systems, migrate data, and prepare teams for adoption.', icon: <><circle cx="5" cy="12" r="3"/><circle cx="19" cy="5" r="3"/><circle cx="19" cy="19" r="3"/><path d="m8 11 8-4m-8 6 8 4"/></>, title: 'Integrate' },
  { description: 'Measure, optimize, and evolve the platform as the business grows.', icon: <><path d="M4 19V9m6 10V5m6 14v-7m4 7H2"/><path d="m4 7 6-4 6 6 4-4"/></>, title: 'Scale' },
]

const capabilities = [
  { icon: <><path d="M12 3v3m0 12v3M3 12h3m12 0h3"/><circle cx="12" cy="12" r="4"/><path d="m5.6 5.6 2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1"/></>, technologies: ['Generative AI', 'RAG', 'Agents', 'OpenAI'], title: 'AI & LLMs' },
  { icon: <path d="M17.5 19H7a5 5 0 1 1 1.7-9.7A6 6 0 0 1 20 12a3.5 3.5 0 0 1-2.5 7Z"/>, technologies: ['AWS', 'Containers', 'Serverless', 'Security'], title: 'Cloud' },
  { icon: <><rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6"/></>, technologies: ['Python', 'FastAPI', 'Node.js', 'APIs'], title: 'Backend' },
  { icon: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/></>, technologies: ['React', 'TypeScript', 'Responsive UI'], title: 'Frontend' },
  { icon: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/></>, technologies: ['PostgreSQL', 'Redis', 'Vector databases'], title: 'Data' },
  { icon: <><rect x="3" y="3" width="6" height="6" rx="1.5"/><rect x="15" y="15" width="6" height="6" rx="1.5"/><path d="M9 6h3a3 3 0 0 1 3 3v6M15 18h-3a3 3 0 0 1-3-3V9"/></>, technologies: ['CI/CD', 'Docker', 'Workflows', 'Monitoring'], title: 'DevOps & Automation' },
]

export function ServicesPage() {
  return <>
    <Section className="services-page-hero services-premium-hero" spacing="spacious"><Container><div className="services-premium-hero__layout">
      <div className="services-premium-hero__content"><p className="services-premium-hero__eyebrow"><span /> Services</p><h1><strong>Software &amp; AI Services</strong><span>for Business Growth</span></h1><p className="services-premium-hero__description">We design and engineer custom applications, intelligent AI systems, voice agents, automation workflows, and cloud platforms built for real business operations.</p><div className="services-premium-hero__actions"><Button href="/contact?type=consultation" size="lg">Book a Strategy Call <span aria-hidden="true">→</span></Button><Button href="#service-areas" size="lg" variant="secondary">Explore Service Areas</Button></div><p className="services-premium-hero__note"><span /> Architecture-led. Business-focused. Built to scale.</p></div><ServicesHeroVisual />
    </div></Container></Section>

    <Section className="services-core" id="service-areas"><Container><header className="services-section-heading"><div><p>Core Services</p><h2>Expertise across the digital enterprise.</h2></div><span>From strategic architecture to production engineering, we bring the capabilities needed to solve complex operational challenges.</span></header><div className="services-core__grid">{coreServices.map((service,index)=><article className={`services-core__card ${index===1||index===2?'services-core__card--cyan':''}`} key={service.title}><div className="services-core__top"><i>{service.icon}</i><span>{String(index+1).padStart(2,'0')}</span></div><h3>{service.title}</h3><p>{service.description}</p><ul>{service.capabilities.map(item=><li key={item}><span />{item}</li>)}</ul><a href="/contact?type=service">Learn More <span>→</span></a></article>)}</div></Container></Section>

    <Section className="services-outcomes" tone="soft"><Container><header className="services-section-heading services-section-heading--center"><div><p>Business Impact</p><h2>Technology Built Around <span>Business Outcomes</span></h2></div><span>Engineering choices matter only when they create measurable progress for your organization.</span></header><div className="services-outcomes__grid">{outcomes.map((outcome)=><article key={outcome.title}><div className="services-outcomes__card-top"><span>{outcome.number}</span><i><svg aria-hidden="true" fill="none" viewBox="0 0 24 24">{outcome.icon}</svg></i></div><h3>{outcome.title}</h3><p>{outcome.description}</p></article>)}</div></Container></Section>

    <Section className="services-approach"><Container><header className="services-section-heading"><div><p>Our Approach</p><h2>A clear path from complexity to scale.</h2></div><span>Disciplined delivery keeps strategy, engineering, and business priorities aligned at every stage.</span></header><ol className="services-approach__timeline">{approach.map((step,index)=><li key={step.title}><span className="services-approach__node">{String(index+1).padStart(2,'0')}</span><div className="services-approach__stage"><i><svg aria-hidden="true" fill="none" viewBox="0 0 24 24">{step.icon}</svg></i><h3>{step.title}</h3><p>{step.description}</p></div></li>)}</ol><p className="services-approach__closing">From first conversation to scalable production <span>—</span> one structured delivery path.</p></Container></Section>

    <Section className="services-capabilities" tone="soft"><Container><header className="services-section-heading"><div><p>Technology Capabilities</p><h2>Modern technology, applied with purpose.</h2></div><span>We choose proven tools around the needs of your platform—not trends or unnecessary complexity.</span></header><div className="services-capabilities__grid">{capabilities.map((capability,index)=><article className={index%2?'services-capabilities__card services-capabilities__card--cyan':'services-capabilities__card'} key={capability.title}><i><svg aria-hidden="true" fill="none" viewBox="0 0 24 24">{capability.icon}</svg></i><h3>{capability.title}</h3><ul>{capability.technologies.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></Container></Section>

    <Section className="services-final-cta"><Container><div className="services-final-cta__panel"><div className="services-final-cta__content"><p>Start a Conversation</p><h2><span>Have a Business Challenge?</span><span>Let&apos;s Architect the Right Solution.</span></h2><p className="services-final-cta__description">We&apos;ll help evaluate your requirements and identify the right combination of software, AI, automation, data, and cloud technology.</p></div><div className="services-final-cta__actions"><Button href="/contact?type=consultation" size="lg">Book a Strategy Call <span>→</span></Button><Button href="/contact" size="lg" variant="secondary">Contact Our Team</Button></div></div></Container></Section>
  </>
}
