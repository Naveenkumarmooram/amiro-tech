import type { ReactNode } from 'react'
import { Container } from '../components/common'
import { office } from '../routes/office'

type PolicySection = { title: string; content: ReactNode }
const email = <a href="mailto:info@amirotechsolutions.com">info@amirotechsolutions.com</a>

function PolicyPage({ title, introduction, sections }: { title: string; introduction: string; sections: PolicySection[] }) {
  return <div className="policy-page"><Container>
    <header><p className="policy-eyebrow">Amiro Tech / Legal</p><h1>{title}</h1><p>{introduction}</p><small>Draft prepared 7 October 2026 · Pending company review</small></header>
    <div className="policy-layout"><nav aria-label="On this page">{sections.map((section, index) => <a key={section.title} href={`#policy-${index + 1}`}>{String(index + 1).padStart(2, '0')} · {section.title}</a>)}</nav>
      <div>{sections.map((section, index) => <section key={section.title} id={`policy-${index + 1}`}><h2>{section.title}</h2>{section.content}</section>)}
        <section><h2>Contact us</h2><p>{office.companyName}<br />{office.name}<br />{office.street}<br />{office.city}, {office.region} {office.postalCode}, {office.country}</p><p>{email}</p></section>
      </div>
    </div>
    <nav className="policy-related" aria-label="Related policies"><a href="/privacy-policy">Privacy Policy</a><a href="/terms-and-conditions">Terms & Conditions</a><a href="/cookie-policy">Cookies & External Services</a></nav>
  </Container></div>
}

export function PrivacyPolicyPage() {
  return <PolicyPage title="Privacy Policy" introduction="How information is handled when you contact Amiro Tech or apply for a role through this website." sections={[
    { title: 'Scope', content: <p>This notice covers the company website, enquiries, and career applications. Client projects and software products may have separate privacy notices and contractual terms. This draft must be reviewed against the company’s actual operating practices before adoption.</p> },
    { title: 'Information you provide', content: <p>Enquiries include your name, email, optional company and phone number, service or product interests, and message. Applications sent by email may include a resume, experience, location, availability, and project links. Please do not submit passwords, financial details, identity documents, or confidential client information.</p> },
    { title: 'How submissions work', content: <p>When the contact form prepares an email draft, you must send it through your email service. If direct submission is enabled, the form sends the entered details to our server and then through Resend to our company inbox. Career applications open your chosen email service; clicking Apply or copying details does not submit an application or upload a resume.</p> },
    { title: 'Use of information', content: <p>Information provided in an enquiry is used to understand and respond to that request and discuss relevant services or products. Application information is used to consider the role you applied for and communicate about recruitment. A product-interest request does not automatically subscribe you to a marketing mailing list.</p> },
    { title: 'Service providers and external links', content: <p>Hosting and email providers process information needed to operate their services. Webmail, social media, and map links take you to external providers whose privacy terms apply. Providers may process information in other countries. Contact us for details relevant to your submission; do not assume data is stored only in India.</p> },
    { title: 'Retention and security', content: <p>Email submissions remain in company email systems and may also be handled by the relevant service providers. The website does not implement an automatic deletion schedule for those emails. Contact us about retention or deletion of a particular enquiry or application. No online transmission or storage method can be guaranteed completely secure.</p> },
    { title: 'Requests and concerns', content: <p>Contact {email} to ask about your information, request correction or deletion, withdraw a request, or raise a privacy concern. Include enough context to identify your enquiry without sending sensitive documents. Verification may be needed, and applicable legal or contractual obligations may affect what can be deleted. This notice does not limit rights available under applicable law.</p> },
    { title: 'Changes to this notice', content: <p>Review this page for updates when the website’s features or data-handling practices change. See also our <a href="/cookie-policy">Cookies & External Services</a> notice.</p> },
  ]} />
}

export function TermsPage() {
  return <PolicyPage title="Terms & Conditions" introduction="Website-use terms for Amiro Tech Solutions Pvt Ltd. Commercial engagements are governed by a separate agreement." sections={[
    { title: 'Website scope', content: <p>This website provides information about our company, services, products, and vacancies. These draft terms concern website use, not a software licence or a signed services agreement. Mandatory rights under applicable law are not excluded.</p> },
    { title: 'Responsible use', content: <p>Use the site lawfully. Do not attempt unauthorised access, disrupt services, upload malicious material, impersonate another person, or submit information you do not have permission to share.</p> },
    { title: 'Content and intellectual property', content: <p>Website content, branding, and software may be protected by intellectual-property rights held by Amiro Tech or their respective owners. Viewing the site does not transfer those rights or grant a licence to reuse company branding, resell content, or present it as your own. Contact us to request permission.</p> },
    { title: 'Enquiries, demos, and availability', content: <p>An enquiry, demo request, waitlist request, or early-access request is not a purchase or a guarantee of availability. Product features, timelines, and service scope require confirmation. Pricing, deliverables, payment, cancellation, and refund provisions must be set out in the applicable proposal or agreement before work begins.</p> },
    { title: 'Career applications', content: <p>Submitting an application does not guarantee an interview or employment. Provide accurate information and share only material you are authorised to disclose. Vacancies and hiring requirements may change; employment terms are confirmed separately.</p> },
    { title: 'External services', content: <p>Links to email, maps, and social platforms are provided for convenience. Their availability and terms are controlled by the respective providers. Review their terms before using those services.</p> },
    { title: 'Information and availability', content: <p>Website information may contain errors or become outdated, and uninterrupted availability is not guaranteed. Confirm material details with the team before relying on them for a business decision. Nothing on this page excludes obligations or liability that cannot lawfully be excluded.</p> },
    { title: 'Privacy and questions', content: <p>Read our <a href="/privacy-policy">Privacy Policy</a> for information about enquiries and applications. Contact {email} about website issues or these terms. Project-specific disputes and obligations are addressed under the relevant agreement and applicable law.</p> },
  ]} />
}

export function CookiePolicyPage() {
  return <PolicyPage title="Cookies & External Services" introduction="A practical explanation of browser storage and links to third-party services." sections={[
    { title: 'Website application', content: <p>The current application code does not intentionally set advertising or analytics cookies or save form details in browser local storage. Search filters and form selections are held in page memory. This statement describes application code, not a guarantee about cookies or logs added by the hosting infrastructure.</p> },
    { title: 'Hosting and technical information', content: <p>Hosting and security services may process technical request information, such as IP addresses and browser details, to deliver and protect the website. Deployment-level settings should be checked separately from the application code.</p> },
    { title: 'External providers', content: <p>Opening Gmail, Outlook, Google Maps, LinkedIn, or Instagram takes you to another service. Those providers may use their own cookies or account information. Their policies govern activity on their sites; opening an application draft may pass the selected role and draft text to your email provider.</p> },
    { title: 'Your choices', content: <p>You can review or remove site data in your browser settings and choose not to open external services. Blocking browser storage may affect third-party services. If optional tracking is introduced, this notice and any required consent controls should be updated before that tracking starts.</p> },
  ]} />
}
