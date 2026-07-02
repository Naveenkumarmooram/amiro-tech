import { useEffect } from 'react'
import { PageLayout } from '../components/layout'
import {
  AboutPage,
  CaseStudiesPage,
  ContactPage,
  HomePage,
  ProcessPage,
  ProductsPage,
  ServicesPage,
} from '../pages'

const siteUrl = 'https://amirotechsolutions.com'

const routes = [
  {
    Component: HomePage,
    description:
      'Amiro Tech Solutions builds custom software, AI systems, Voice AI agents, automation workflows, and digital platforms for business growth.',
    path: '/',
    title: 'Amiro Tech Solutions | Software & AI Solutions',
  },
  {
    Component: ServicesPage,
    description:
      'Explore Amiro Tech services in custom software, enterprise applications, AI solutions, Voice AI, automation, dashboards, and integrations.',
    path: '/services',
    title: 'Services | Amiro Tech Solutions',
  },
  {
    Component: ProductsPage,
    description:
      'Explore future Amiro Tech productized software, AI, Voice AI, and automation solution concepts for business operations.',
    path: '/products',
    title: 'Products | Amiro Tech Solutions',
  },
  {
    Component: AboutPage,
    description:
      'Learn how Amiro Tech Solutions builds software, AI, automation, and digital transformation systems around real business problems.',
    path: '/about',
    title: 'About | Amiro Tech Solutions',
  },
  {
    Component: ProcessPage,
    description:
      'See Amiro Tech Solutions delivery process for software, AI, automation, architecture, development, testing, deployment, and improvement.',
    path: '/process',
    title: 'Process | Amiro Tech Solutions',
  },
  {
    Component: CaseStudiesPage,
    description:
      'View Amiro Tech Solutions featured project showcase for inventory, compliance, audit readiness, and operational control.',
    path: '/case-studies',
    title: 'Case Studies | Amiro Tech Solutions',
  },
  {
    Component: ContactPage,
    description:
      'Contact Amiro Tech Solutions to discuss custom software, AI solutions, Voice AI, automation, dashboards, and system integrations.',
    path: '/contact',
    title: 'Contact | Amiro Tech Solutions',
  },
]

function setMeta(selector: string, attribute: 'content' | 'href', value: string) {
  const element = document.head.querySelector(selector)

  if (element) {
    element.setAttribute(attribute, value)
  }
}

export function AppRoutes() {
  const path = window.location.pathname
  const route = routes.find((item) => item.path === path) ?? routes[0]
  const Page = route.Component

  useEffect(() => {
    const canonical = `${siteUrl}${route.path}`

    document.title = route.title
    setMeta('meta[name="description"]', 'content', route.description)
    setMeta('meta[property="og:title"]', 'content', route.title)
    setMeta('meta[property="og:description"]', 'content', route.description)
    setMeta('meta[property="og:url"]', 'content', canonical)
    setMeta('meta[name="twitter:title"]', 'content', route.title)
    setMeta('meta[name="twitter:description"]', 'content', route.description)
    setMeta('link[rel="canonical"]', 'href', canonical)
  }, [route])

  return (
    <PageLayout activePath={route.path}>
      <Page />
    </PageLayout>
  )
}
