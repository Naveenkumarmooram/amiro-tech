import { Button, Card, Container, Grid, Section, SectionHeader, Stack } from '../components/common'
import { CaseStudyHeroVisual } from '../components/visuals'

const outcomes = [
  'Inventory visibility',
  'Compliance tracking',
  'Audit readiness',
  'Centralized records',
]

const technology = ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Dashboards']

const lessons = [
  'Inventory systems must match real laboratory workflows.',
  'Compliance visibility works best when audit data is captured by default.',
  'Operational dashboards should make exceptions easy to find.',
]

const enhancements = [
  'Predictive stock alerts',
  'Role-based approval flows',
  'Advanced audit analytics',
  'Equipment lifecycle tracking',
]

export function CaseStudiesPage() {
  return (
    <>
      <Section className="page-hero" spacing="spacious">
        <Container>
          <div className="inner-hero-layout page-hero__content">
            <Stack gap="xl">
              <Stack gap="lg">
                <p className="page-hero__eyebrow">Case Studies</p>
                <h1 className="page-hero__title">Project Showcases Built Around Business Outcomes</h1>
                <p className="page-hero__description">
                  Explore how Amiro Tech turns operational problems into focused digital systems
                  with clear workflows, measurable outcomes, and scalable architecture.
                </p>
              </Stack>
            </Stack>
            <CaseStudyHeroVisual />
          </div>
        </Container>
      </Section>

      <Section className="case-showcase">
        <Container>
          <div className="case-showcase__layout">
            <Stack gap="xl">
              <SectionHeader
                description="A custom inventory, compliance, and audit management system for an NDT laboratory."
                eyebrow="Featured Project"
                title="Inventory Management System for Scientech Services"
              />
              <Grid columns={2} gap="sm">
                {outcomes.map((outcome) => (
                  <Card className="featured-work__outcome" key={outcome} padding="compact">
                    <span className="featured-work__outcome-marker" />
                    <p>{outcome}</p>
                  </Card>
                ))}
              </Grid>
              <Button href="/contact?type=similar-project">Discuss a Similar Project</Button>
            </Stack>
            <Card className="case-showcase__visual" padding="compact">
              <div className="case-dashboard">
                <div className="case-dashboard__header">
                  <strong>Inventory &amp; compliance</strong>
                  <small>Platform overview</small>
                </div>
                <Grid columns={2} gap="sm">
                  <div className="case-dashboard__tile">Inventory Status</div>
                  <div className="case-dashboard__tile">Audit Readiness</div>
                </Grid>
                <div className="case-dashboard__chart">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="page-section page-section--soft">
        <Container>
          <Grid columns={3}>
            <Card className="page-card">
              <Stack gap="sm">
                <h2 className="page-card__title">Problem</h2>
                <p className="page-card__text">
                  Inventory, compliance, and audit information was difficult to track across
                  manual records and disconnected processes.
                </p>
              </Stack>
            </Card>
            <Card className="page-card">
              <Stack gap="sm">
                <h2 className="page-card__title">Solution</h2>
                <p className="page-card__text">
                  Amiro Tech built a custom platform for inventory visibility, traceability,
                  compliance review, and audit preparation.
                </p>
              </Stack>
            </Card>
            <Card className="page-card">
              <Stack gap="sm">
                <h2 className="page-card__title">Business Outcomes</h2>
                <p className="page-card__text">
                  The system improved operational control, centralized records, and made audit
                  readiness easier to maintain.
                </p>
              </Stack>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section className="page-section">
        <Container>
          <Stack gap="xl">
            <SectionHeader
              description="The project combined practical web technology, structured data, and dashboard-style interfaces."
              eyebrow="Technology Used"
              title="A reliable platform foundation."
            />
            <div className="case-tags">
              {technology.map((item) => (
                <span className="case-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <Grid columns={2}>
              <Card className="page-card">
                <Stack gap="md">
                  <h2 className="page-card__title">Lessons Learned</h2>
                  <ul className="page-list">
                    {lessons.map((lesson) => (
                      <li key={lesson}>{lesson}</li>
                    ))}
                  </ul>
                </Stack>
              </Card>
              <Card className="page-card">
                <Stack gap="md">
                  <h2 className="page-card__title">Future Enhancements</h2>
                  <ul className="page-list">
                    {enhancements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Stack>
              </Card>
            </Grid>
          </Stack>
        </Container>
      </Section>
    </>
  )
}
