export type ServiceItem = {
  accent?: 'gold' | 'cyan'
  cta: string
  href: string
  outcome: string
  problem: string
  solution: string
  title: string
}

export type ServiceGroup = {
  description: string
  services: ServiceItem[]
  title: string
}

export const serviceGroups: ServiceGroup[] = [
  {
    description:
      'Product and platform engineering for teams that need reliable, scalable software built around real workflows.',
    title: 'Product & Platform Engineering',
    services: [
      {
        cta: 'Discuss custom software',
        href: '/contact?type=custom-software',
        outcome: 'Better operational control, workflow fit, and long-term scalability.',
        problem: 'Off-the-shelf software does not match how the business actually operates.',
        solution:
          'Custom applications designed around internal processes, user roles, and business logic.',
        title: 'Custom Software Development',
      },
      {
        cta: 'Plan an enterprise app',
        href: '/contact?type=enterprise-application',
        outcome: 'Centralized tools that improve consistency, access, and daily execution.',
        problem: 'Teams rely on scattered tools, manual handoffs, and disconnected records.',
        solution:
          'Secure enterprise web applications for operations, reporting, approvals, and collaboration.',
        title: 'Enterprise Web Applications',
      },
      {
        cta: 'Explore SaaS development',
        href: '/contact?type=saas-platform',
        outcome: 'A scalable product foundation ready for users, growth, and iteration.',
        problem: 'A product idea needs to become a dependable platform, not just a prototype.',
        solution:
          'SaaS products with clean architecture, user flows, dashboards, and admin systems.',
        title: 'SaaS Product Development',
      },
    ],
  },
  {
    description:
      'AI, Voice AI, agents, and automation systems that reduce manual work and improve response speed.',
    title: 'Intelligence & Automation',
    services: [
      {
        accent: 'cyan',
        cta: 'Explore AI opportunities',
        href: '/contact?type=ai-solution',
        outcome: 'Faster knowledge access, smarter workflows, and better team productivity.',
        problem: 'Teams want practical AI adoption but need it aligned with real operations.',
        solution:
          'Generative AI tools, assistants, document intelligence, and workflow-aware AI systems.',
        title: 'AI & Generative AI Solutions',
      },
      {
        accent: 'cyan',
        cta: 'Build a Voice AI agent',
        href: '/contact?type=voice-ai',
        outcome: 'More responsive communication and lower pressure on service teams.',
        problem: 'Calls, inquiries, and repetitive conversations consume valuable team time.',
        solution:
          'Voice AI agents for reception, support, booking, qualification, and workflow actions.',
        title: 'Voice AI Solutions',
      },
      {
        accent: 'cyan',
        cta: 'Design agentic workflows',
        href: '/contact?type=ai-agent',
        outcome: 'Repeatable digital execution for research, routing, support, and operations.',
        problem: 'Complex tasks need coordinated steps across tools, data, and decisions.',
        solution:
          'AI agents and agentic workflows that reason through tasks and trigger business actions.',
        title: 'AI Agents & Agentic Workflows',
      },
      {
        cta: 'Automate a workflow',
        href: '/contact?type=automation',
        outcome: 'Lower manual effort, fewer errors, and faster operational cycles.',
        problem: 'Repetitive manual work slows delivery and creates avoidable mistakes.',
        solution:
          'Automation flows for approvals, reporting, notifications, data movement, and task routing.',
        title: 'Business Process Automation',
      },
    ],
  },
  {
    description:
      'Integration and insight systems that connect tools, expose data, and support better decisions.',
    title: 'Integration & Insight',
    services: [
      {
        cta: 'Connect business systems',
        href: '/contact?type=system-integration',
        outcome: 'Cleaner data flow and fewer gaps between teams, tools, and processes.',
        problem: 'Important systems do not communicate, forcing teams to duplicate work.',
        solution:
          'API integrations, webhooks, data syncs, and system connections across platforms.',
        title: 'API & System Integrations',
      },
      {
        cta: 'Create better visibility',
        href: '/contact?type=dashboard-reporting',
        outcome: 'Clearer reporting, faster decisions, and better operational awareness.',
        problem: 'Leaders lack real-time visibility into performance, work, or operational status.',
        solution:
          'Dashboards, reporting tools, KPI views, and data interfaces tailored to business needs.',
        title: 'Dashboards & Reporting',
      },
      {
        cta: 'Modernize operations',
        href: '/contact?type=digital-transformation',
        outcome: 'More mature digital operations that can scale with the business.',
        problem: 'Legacy processes and disconnected tools limit growth and adaptability.',
        solution:
          'Practical transformation planning and implementation across software, data, and workflows.',
        title: 'Digital Transformation',
      },
    ],
  },
]
