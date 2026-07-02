import { Button, Card, Container, Grid, Section, SectionHeader, Stack } from '../common'

type CaseStudyPreviewSectionProps = {
  className?: string
}

const outcomes = [
  'Inventory Tracking',
  'Compliance Visibility',
  'Audit Readiness',
  'Operational Control',
]

const metrics = [
  '100% Traceability',
  'Compliance Ready',
  'Inventory Visibility',
  'Centralized Records',
]

const dashboardModules = ['Inventory', 'Calibration', 'Compliance', 'Audit', 'Reports']

export function CaseStudyPreviewSection({ className }: CaseStudyPreviewSectionProps) {
  return (
    <Section className={['featured-work', className].filter(Boolean).join(' ')} tone="soft">
      <Container>
        <div className="featured-work__layout">
          <Stack gap="xl">
            <SectionHeader
              description="A custom inventory, compliance, and audit management platform built for an NDT laboratory to improve inventory visibility, traceability, compliance, and operational efficiency."
              eyebrow="Featured Work"
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
            <Button className="featured-work__cta" href="/contact?type=similar-project">
              Discuss a Similar Project
            </Button>
          </Stack>

          <Card className="featured-work__dashboard" padding="compact">
            <div className="featured-dashboard" aria-label="Conceptual inventory dashboard preview">
              <aside className="featured-dashboard__sidebar">
                {dashboardModules.map((module) => (
                  <span key={module}>{module.slice(0, 1)}</span>
                ))}
              </aside>
              <div className="featured-dashboard__main">
                <div className="featured-dashboard__topbar">
                  <p>IMS Control Center</p>
                  <span>Audit Ready</span>
                </div>
                <Grid columns={2} gap="sm">
                  {metrics.map((metric) => (
                    <div className="featured-dashboard__metric" key={metric}>
                      <span className="featured-dashboard__metric-dot" />
                      <p>{metric}</p>
                    </div>
                  ))}
                </Grid>
                <div className="featured-dashboard__content">
                  <div className="featured-dashboard__chart">
                    <p>Stock Visibility</p>
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="featured-dashboard__panel">
                    <p>Calibration Queue</p>
                    <span>Due</span>
                    <span>Scheduled</span>
                    <span>Cleared</span>
                  </div>
                </div>
                <div className="featured-dashboard__traceability">
                  <span>Equipment ID</span>
                  <span>Batch</span>
                  <span>Certificate</span>
                  <span>Audit Trail</span>
                </div>
                <div className="featured-dashboard__equipment">
                  <div>
                    <span />
                    <p>Equipment</p>
                    <strong>128 tracked</strong>
                  </div>
                  <div>
                    <span />
                    <p>Reports</p>
                    <strong>Live export</strong>
                  </div>
                </div>
                <div className="featured-dashboard__compliance">
                  <span className="featured-dashboard__ring" />
                  <div>
                    <p>Compliance indicator</p>
                    <strong>Ready for review</strong>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  )
}
