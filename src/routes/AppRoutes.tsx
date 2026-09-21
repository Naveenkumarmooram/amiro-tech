import { useEffect, useMemo } from 'react'
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

import { pageSeo, siteUrl } from './seo'

const routes = [
  { path: '/', Component: HomePage },
  { path: '/services', Component: ServicesPage },
  { path: '/products', Component: ProductsPage },
  { path: '/about', Component: AboutPage },
  { path: '/process', Component: ProcessPage },
  { path: '/case-studies', Component: CaseStudiesPage },
  { path: '/contact', Component: ContactPage },
]

function setMeta(selector: string, attribute: 'content' | 'href', value: string) {
  const element = document.head.querySelector(selector)

  if (element) {
    element.setAttribute(attribute, value)
  }
}

export function AppRoutes({ pathname }: { pathname?: string }) {
  const path = (pathname ?? window.location.pathname).replace(/\/+$/, '') || '/'
  const matched = routes.find((item) => item.path === path)
  const route = useMemo(() => pageSeo.find(item => item.path === path) ?? { path, title: 'Page Not Found | Amiro Tech Solutions', description: 'The requested page could not be found.' }, [path])
  const Page = matched?.Component

  useEffect(() => {
    const canonical = `${siteUrl}${route.path}`

    document.title = route.title
    setMeta('meta[name="robots"]', 'content', matched ? 'index, follow' : 'noindex, follow')
    setMeta('meta[name="description"]', 'content', route.description)
    setMeta('meta[property="og:title"]', 'content', route.title)
    setMeta('meta[property="og:description"]', 'content', route.description)
    setMeta('meta[property="og:url"]', 'content', canonical)
    setMeta('meta[name="twitter:title"]', 'content', route.title)
    setMeta('meta[name="twitter:description"]', 'content', route.description)
    setMeta('link[rel="canonical"]', 'href', canonical)
  }, [route, matched])

  return (
    <PageLayout activePath={route.path}>
      {Page ? <Page /> : <section className="section"><div className="container"><h1>Page not found</h1><p>This page may have moved or no longer exists.</p><a href="/">Return to home</a></div></section>}
    </PageLayout>
  )
}
