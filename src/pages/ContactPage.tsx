import { type FormEvent, useMemo, useState } from 'react'

import { Button, Card, Container, Grid, Section, SectionHeader, Stack } from '../components/common'
import { ContactHeroVisual, ContactJourneyVisual } from '../components/visuals'

const requirementTypes = [
  'Custom Software',
  'AI Solution',
  'Voice AI',
  'AI Agent',
  'Automation',
  'Product Demo',
  'SaaS Platform',
  'Dashboard & Reporting',
  'System Integration',
  'Website',
  'Other',
]

const productInterests = [
  'Not Applicable',
  'IMS for NDT Labs',
  'HR Management System',
  'Voice AI Agent',
  'Business Operations Platform',
]

const nextSteps = ['Review', 'Discovery Call', 'Solution Recommendation', 'Proposal / Demo']

const trustItems = [
  'Response within 24 Hours',
  'Serving Clients Globally',
  'Based in Bangalore',
  'Product Demonstrations',
]

const quickInquiryTypes = ['Custom Software', 'AI Solution', 'Voice AI', 'Product Demo', 'Automation']
const quickProducts = ['IMS for NDT Labs', 'Voice AI Agent', 'Business Operations Platform']

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
  const [requirementType, setRequirementType] = useState('')
  const [productInterest, setProductInterest] = useState('Not Applicable')

  const nextStepRecommendation = useMemo(() => {
    if (requirementType === 'Product Demo' || productInterest !== 'Not Applicable') {
      return 'We will prepare a focused product demo conversation around your selected product.'
    }

    if (['AI Solution', 'Voice AI', 'AI Agent'].includes(requirementType)) {
      return 'We will map the AI use case, data flow, human handoff, and safest first implementation.'
    }

    if (['Automation', 'System Integration', 'Dashboard & Reporting'].includes(requirementType)) {
      return 'We will review the current workflow, tools, data sources, and automation opportunities.'
    }

    if (requirementType === 'Custom Software' || requirementType === 'SaaS Platform') {
      return 'We will clarify users, workflows, scope, architecture, and the best build path.'
    }

    return 'Choose a quick inquiry type or describe your requirement, and we will recommend the clearest next step.'
  }, [productInterest, requirementType])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const inquiry = {
      company: String(formData.get('company') ?? ''),
      email: String(formData.get('email') ?? ''),
      message: String(formData.get('message') ?? ''),
      name: String(formData.get('name') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      productInterest: String(formData.get('productInterest') ?? ''),
      requirementType: String(formData.get('requirementType') ?? ''),
    }

    const body = [
      `Name: ${inquiry.name}`,
      `Company: ${inquiry.company}`,
      `Email: ${inquiry.email}`,
      `Phone: ${inquiry.phone}`,
      `Requirement Type: ${inquiry.requirementType}`,
      `Product Interest: ${inquiry.productInterest}`,
      '',
      'Message:',
      inquiry.message,
    ].join('\n')

    window.location.href = `mailto:amirotechsolutions@gmail.com?subject=${encodeURIComponent(
      'New Website Inquiry',
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <Section className="page-hero contact-hero" spacing="spacious">
        <Container>
          <div className="inner-hero-layout contact-hero__layout">
            <Stack className="page-hero__content contact-hero__content" gap="xl">
              <p className="page-hero__eyebrow">Contact</p>
              <h1 className="page-hero__title">Start a Conversation About Your Next System</h1>
              <p className="page-hero__description">
                Tell us about your business challenge, software requirement, AI initiative, or the
                product you would like to explore.
              </p>
            </Stack>
            <ContactHeroVisual />
          </div>
        </Container>
      </Section>

      <Section className="contact-section">
        <Container>
          <div className="contact-layout contact-layout--premium">
            <Stack className="contact-sidebar" gap="xl">
              <SectionHeader
                description="We will review your inquiry and contact you to discuss the best solution."
                eyebrow="Contact Details"
                title="Business-first inquiry support from Bangalore to global clients."
              />
              <Grid columns={1} gap="sm">
                <Card className="contact-detail" padding="compact">
                  <span>Email</span>
                  <a href="mailto:amirotechsolutions@gmail.com">amirotechsolutions@gmail.com</a>
                </Card>
                <Card className="contact-detail" padding="compact">
                  <span>Phone</span>
                  <p>Available upon request</p>
                </Card>
                <Card className="contact-detail" padding="compact">
                  <span>Location</span>
                  <p>Bangalore, Karnataka, India</p>
                </Card>
                <Card className="contact-detail" padding="compact">
                  <span>Global</span>
                  <p>Serving Clients Globally</p>
                </Card>
              </Grid>
            </Stack>

            <Card className="contact-form-card" padding="spacious">
              <div className="contact-form-shell">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <Stack gap="sm">
                    <h2 className="contact-form__title">Tell us what you need</h2>
                    <p className="contact-form__helper">
                      We review every inquiry before recommending a project path, product demo, or
                      discovery call.
                    </p>
                  </Stack>
                  <div className="contact-quick" aria-label="Quick inquiry choices">
                    <p className="contact-quick__label">Start with a quick choice</p>
                    <div className="contact-quick__options">
                      {quickInquiryTypes.map((type) => (
                        <button
                          aria-pressed={requirementType === type}
                          className="contact-quick__button"
                          key={type}
                          onClick={() => setRequirementType(type)}
                          type="button"
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="form-grid">
                    <label>
                      Name
                      <input name="name" placeholder="Your name" required type="text" />
                    </label>
                    <label>
                      Company
                      <input name="company" placeholder="Company name" type="text" />
                    </label>
                    <label>
                      Business Email
                      <input name="email" placeholder="you@company.com" required type="email" />
                    </label>
                    <label>
                      Phone
                      <input name="phone" placeholder="Phone number" type="tel" />
                    </label>
                  </div>
                  <label>
                    Requirement Type
                    <select
                      name="requirementType"
                      onChange={(event) => setRequirementType(event.target.value)}
                      required
                      value={requirementType}
                    >
                      <option disabled value="">
                        Select a requirement
                      </option>
                      {requirementTypes.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Product Interest
                    <select
                      name="productInterest"
                      onChange={(event) => setProductInterest(event.target.value)}
                      value={productInterest}
                    >
                      {productInterests.map((product) => (
                        <option key={product}>{product}</option>
                      ))}
                    </select>
                  </label>
                  <div className="contact-product-picks" aria-label="Product interest shortcuts">
                    {quickProducts.map((product) => (
                      <button
                        aria-pressed={productInterest === product}
                        className="contact-product-picks__button"
                        key={product}
                        onClick={() => {
                          setProductInterest(product)
                          if (!requirementType) {
                            setRequirementType('Product Demo')
                          }
                        }}
                        type="button"
                      >
                        {product}
                      </button>
                    ))}
                  </div>
                  <label>
                    Message
                    <textarea
                      name="message"
                      placeholder="Tell us about your business challenge, current workflow, timeline, or product interest."
                      required
                      rows={6}
                    />
                  </label>
                  <div className="contact-form__insight" aria-live="polite">
                    <span>Recommended next step</span>
                    <p>{nextStepRecommendation}</p>
                  </div>
                  <div className="contact-form__actions">
                    <Button className="contact-form__submit" size="lg" type="submit">
                      Submit Inquiry
                    </Button>
                    <a className="contact-form__email-link" href="mailto:amirotechsolutions@gmail.com">
                      Email directly
                    </a>
                  </div>
                </form>
                <ContactJourneyVisual />
              </div>
              <div className="contact-trust" aria-label="Trust indicators">
                {trustItems.map((item) => (
                  <span className="contact-trust__chip" key={item}>
                    <span aria-hidden="true">✓</span>
                    {item}
                  </span>
                ))}
              </div>
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
            <div className="contact-next">
              {nextSteps.map((step, index) => (
                <Card className="page-card contact-next__card" key={step}>
                  <Stack gap="sm">
                    <span className="page-card__number">{String(index + 1).padStart(2, '0')}</span>
                    <h2 className="page-card__title">{step}</h2>
                    <p className="page-card__text">
                      We clarify goals, constraints, and the most practical route forward.
                    </p>
                  </Stack>
                </Card>
              ))}
            </div>
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
