import { Button, Card, Container, Grid, Section, SectionHeader, Stack } from '../components/common'
import { ProductMiniVisual, ProductsHeroVisual } from '../components/visuals'

const products = [
  {
    accent: 'gold',
    category: 'Inventory & Compliance',
    cta: 'Request Demo',
    description:
      'A custom inventory, compliance, calibration, and audit management system designed for NDT laboratories to improve tracking, audit readiness, and operational visibility.',
    features: [
      'Inventory Tracking',
      'Calibration Tracking',
      'Equipment Lifecycle',
      'Compliance Visibility',
      'Audit Readiness',
      'Dashboards & Reports',
    ],
    href: '/contact?type=product-demo&product=ims',
    status: 'Available',
    title: 'Inventory Management System for NDT Labs',
    visual: 'inventory',
  },
  {
    accent: 'gold',
    category: 'People Operations',
    cta: 'Join Waitlist',
    description:
      'A modern HR platform for small and medium businesses to manage employee records, attendance, leave, onboarding, documents, and workforce operations.',
    features: [
      'Employee Records',
      'Attendance',
      'Leave Management',
      'Onboarding',
      'HR Documents',
      'Reports',
    ],
    href: '/contact?type=product-demo&product=hr',
    status: 'Coming Soon',
    title: 'HR Management System',
    visual: 'hr',
  },
  {
    accent: 'cyan',
    category: 'Conversational AI',
    cta: 'Request Early Access',
    description:
      'AI-powered voice agents that help businesses answer customer calls, qualify leads, schedule appointments, provide support, and automate routine conversations.',
    features: [
      'AI Receptionist',
      'Appointment Booking',
      'Lead Qualification',
      'Customer Support',
      'Voice Workflows',
      'CRM Integration',
    ],
    href: '/contact?type=product-demo&product=voice-ai',
    status: 'Coming Soon',
    title: 'Voice AI Agent Platform',
    visual: 'voice',
  },
  {
    accent: 'gold',
    category: 'Business Operations',
    cta: 'Discuss Requirement',
    description:
      'An integrated operations platform for growing companies to manage CRM, tasks, approvals, dashboards, documents, and workflow automation in one place.',
    features: ['CRM', 'Tasks', 'Approvals', 'Dashboards', 'Documents', 'Automation'],
    href: '/contact?type=product-demo&product=business-ops',
    status: 'Coming Soon',
    title: 'Business Operations Platform',
    visual: 'operations',
  },
]

export function ProductsPage() {
  return (
    <>
      <Section className="products-page-hero products-premium-hero" spacing="spacious">
        <Container>
          <div className="products-premium-hero__layout">
            <div className="products-premium-hero__content">
                <p className="products-premium-hero__eyebrow"><span /> Products</p>
                <h1><span>Business Solutions Built</span><span>for Growing Companies</span></h1>
                <p className="products-premium-hero__description">
                  Alongside custom software development, Amiro Tech is building practical
                  software products that help growing businesses digitize operations, automate
                  workflows, and improve visibility.
                </p>
                <p className="products-premium-hero__badge">
                  Based in Bangalore <span aria-hidden="true">•</span> Serving Clients Globally
                </p>
              <div className="products-premium-hero__actions">
                <Button href="/contact?type=product-demo" size="lg">
                  Request Product Demo <span aria-hidden="true">→</span>
                </Button>
                <Button href="/contact?type=custom-software" size="lg" variant="secondary">
                  Discuss Custom Software <span aria-hidden="true">→</span>
                </Button>
              </div>
            </div>
            <ProductsHeroVisual />
          </div>
        </Container>
      </Section>

      <Section className="products-section">
        <Container>
          <Stack gap="xl">
            <SectionHeader
              description="Productized systems for teams that need practical operational software without unnecessary enterprise complexity."
              eyebrow="Product Line"
              title="Software products shaped around real business workflows."
            />
            <Grid columns={2}>
              {products.map((product, index) => (
                <Card
                  className={`product-card product-card--${product.accent}`}
                  interactive
                  key={product.title}
                >
                  <Stack gap="lg">
                    <ProductMiniVisual type={product.visual as 'hr' | 'inventory' | 'operations' | 'voice'} />
                    <Stack gap="md">
                      <div className="product-card__meta">
                        <span
                          className={`product-card__status ${
                            product.status === 'Available'
                              ? 'product-card__status--available'
                              : 'product-card__status--soon'
                          }`}
                        >
                          {product.status}
                        </span>
                        <span className="product-card__category">{product.category}</span>
                        <span className="product-card__number">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <h2 className="product-card__title">{product.title}</h2>
                      <p className="product-card__description">{product.description}</p>
                    </Stack>
                    <ul className="product-card__features" aria-label={`${product.title} features`}>
                      {product.features.map((feature) => (
                        <li className="product-card__feature" key={feature}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="product-card__cta" href={product.href} variant="secondary">
                      {product.cta}
                    </Button>
                  </Stack>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      <Section className="products-audience" tone="soft">
        <Container>
          <div className="products-audience__layout">
            <SectionHeader
              description="We focus on practical, cost-effective software and AI solutions for startups, small businesses, and mid-sized companies that need reliable systems without unnecessary enterprise complexity."
              eyebrow="Who We Build For"
              title="Built for Startups, Small Businesses & Growing Teams"
            />
            <Card className="products-audience__card">
              <Stack gap="md">
                <span className="products-audience__marker" />
                <h2 className="page-card__title">Practical systems, not bloated platforms.</h2>
                <p className="page-card__text">
                  Amiro Tech keeps product strategy focused on adoption, clarity, workflows,
                  and measurable business value.
                </p>
              </Stack>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="final-cta" spacing="spacious">
        <Container>
          <Card className="final-cta__panel" padding="spacious">
            <Stack className="final-cta__content" gap="xl">
              <Stack gap="md">
                <p className="final-cta__eyebrow">Next step</p>
                <h2 className="final-cta__title">Need a product demo or custom solution?</h2>
                <p className="final-cta__description">
                  Start with a focused conversation about your product requirement, workflow,
                  or business process challenge.
                </p>
              </Stack>
              <div className="home-actions">
                <Button href="/contact?type=product-demo" size="lg">
                  Request Product Demo
                </Button>
                <Button href="/contact?type=custom-software" size="lg" variant="secondary">
                  Discuss Custom Software
                </Button>
              </div>
            </Stack>
          </Card>
        </Container>
      </Section>
    </>
  )
}
