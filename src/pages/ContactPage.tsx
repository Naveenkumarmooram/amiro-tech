import { Button, Card, Container, Grid, Section, SectionHeader, Stack } from '../components/common'

const requirementTypes = [
  'Custom Software',
  'Enterprise Application',
  'AI Solution',
  'Voice AI',
  'AI Agent',
  'Automation',
  'Dashboard',
  'System Integration',
  'Website',
  'Other',
]

const faqs = [
  {
    answer: 'Most projects begin with a focused discovery conversation and a clear next-step plan.',
    question: 'How does a project usually start?',
  },
  {
    answer: 'Yes. We can work from an existing workflow, spreadsheet, tool, or business challenge.',
    question: 'Can you help define the requirements?',
  },
  {
    answer: 'Yes. We build practical AI, Voice AI, automation, and software systems around real operations.',
    question: 'Do you build AI and automation systems?',
  },
]

export function ContactPage() {
  return (
    <>
      <Section className="page-hero" spacing="spacious">
        <Container>
          <Stack className="page-hero__content" gap="xl">
            <Stack gap="lg">
              <p className="page-hero__eyebrow">Contact</p>
              <h1 className="page-hero__title">Start a Conversation About Your Next System</h1>
              <p className="page-hero__description">
                Tell us what you want to build, improve, automate, or connect. We will help
                identify the practical next step.
              </p>
            </Stack>
          </Stack>
        </Container>
      </Section>

      <Section className="contact-section">
        <Container>
          <div className="contact-layout">
            <Stack gap="xl">
              <SectionHeader
                description="Reach out for software, AI, Voice AI, automation, dashboard, and integration projects."
                eyebrow="Contact Details"
                title="Let us understand the business problem first."
              />
              <Grid columns={1} gap="sm">
                <Card className="contact-detail" padding="compact">
                  <span>Email</span>
                  <a href="mailto:hello@amirotechsolutions.com">hello@amirotechsolutions.com</a>
                </Card>
                <Card className="contact-detail" padding="compact">
                  <span>Phone</span>
                  <a href="tel:+10000000000">+1 (000) 000-0000</a>
                </Card>
                <Card className="contact-detail" padding="compact">
                  <span>Location</span>
                  <p>Remote-first delivery</p>
                </Card>
              </Grid>
            </Stack>

            <Card className="contact-form-card">
              <form className="contact-form">
                <div className="form-grid">
                  <label>
                    Name
                    <input name="name" placeholder="Your name" type="text" />
                  </label>
                  <label>
                    Company
                    <input name="company" placeholder="Company name" type="text" />
                  </label>
                  <label>
                    Email
                    <input name="email" placeholder="you@company.com" type="email" />
                  </label>
                  <label>
                    Phone
                    <input name="phone" placeholder="Phone number" type="tel" />
                  </label>
                </div>
                <label>
                  Requirement Type
                  <select name="requirementType" defaultValue="">
                    <option disabled value="">
                      Select a requirement
                    </option>
                    {requirementTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Message
                  <textarea name="message" placeholder="Tell us what you want to build or improve." rows={6} />
                </label>
                <Button type="submit">Submit Inquiry</Button>
              </form>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="page-section page-section--soft">
        <Container>
          <Stack gap="xl">
            <SectionHeader
              description="After you submit an inquiry, we review the business context and suggest the clearest next step."
              eyebrow="What Happens Next"
              title="A simple path from inquiry to discovery."
            />
            <Grid columns={3}>
              {['Review', 'Discovery Call', 'Next-Step Plan'].map((step, index) => (
                <Card className="page-card" key={step}>
                  <Stack gap="sm">
                    <span className="page-card__number">{String(index + 1).padStart(2, '0')}</span>
                    <h2 className="page-card__title">{step}</h2>
                    <p className="page-card__text">
                      We clarify goals, constraints, and the most practical route forward.
                    </p>
                  </Stack>
                </Card>
              ))}
            </Grid>
            <Grid columns={3}>
              {faqs.map((faq) => (
                <Card className="page-card" key={faq.question}>
                  <Stack gap="sm">
                    <h2 className="page-card__title">{faq.question}</h2>
                    <p className="page-card__text">{faq.answer}</p>
                  </Stack>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>
    </>
  )
}
