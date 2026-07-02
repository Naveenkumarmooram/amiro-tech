import { serviceGroups } from '../data/services'
import { Button, Card, Container, Grid, Section, SectionHeader, Stack } from '../components/common'

export function ServicesPage() {
  return (
    <>
      <Section className="services-page-hero" spacing="spacious">
        <Container>
          <Stack className="services-page-hero__content" gap="xl">
            <Stack gap="lg">
              <p className="services-page-hero__eyebrow">Services</p>
              <h1 className="services-page-hero__title">
                Software &amp; AI Services for Business Growth
              </h1>
              <p className="services-page-hero__description">
                We help businesses build custom applications, AI-powered systems, Voice AI
                agents, automation workflows, and scalable digital platforms.
              </p>
            </Stack>
            <div className="home-actions">
              <Button size="lg">Book a Strategy Call</Button>
              <Button size="lg" variant="secondary">
                Explore Service Areas
              </Button>
            </div>
          </Stack>
        </Container>
      </Section>

      {serviceGroups.map((group) => (
        <Section className="services-page-group" key={group.title}>
          <Container>
            <Stack gap="xl">
              <SectionHeader description={group.description} eyebrow="Service group" title={group.title} />
              <Grid columns={group.services.length === 4 ? 4 : 3}>
                {group.services.map((service) => (
                  <Card
                    className={`services-page-card services-page-card--${service.accent ?? 'gold'}`}
                    interactive
                    key={service.title}
                  >
                    <Stack gap="lg">
                      <span className="services-page-card__marker" />
                      <Stack gap="sm">
                        <h2 className="services-page-card__title">{service.title}</h2>
                        <div className="services-page-card__detail">
                          <p className="services-page-card__label">Business problem</p>
                          <p>{service.problem}</p>
                        </div>
                        <div className="services-page-card__detail">
                          <p className="services-page-card__label">Solution</p>
                          <p>{service.solution}</p>
                        </div>
                        <div className="services-page-card__detail">
                          <p className="services-page-card__label">Business outcome</p>
                          <p>{service.outcome}</p>
                        </div>
                      </Stack>
                      <Button className="services-page-card__cta" size="sm" variant="secondary">
                        {service.cta}
                      </Button>
                    </Stack>
                  </Card>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>
      ))}
    </>
  )
}
