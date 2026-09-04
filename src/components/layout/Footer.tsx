import { Container } from '../common'

type FooterLink = { href: string; label: string }
type FooterProps = { brand?: string; className?: string; links?: FooterLink[] }

const defaultLinks = [{ href: '/', label: 'Home' }, { href: '/services', label: 'Services' }, { href: '/products', label: 'Products' }, { href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }]
const productLinks = [{ href: '/products', label: 'IMS for NDT Labs' }, { href: '/products', label: 'HR Management System' }, { href: '/products', label: 'Voice AI Agent Platform' }, { href: '/products', label: 'Business Operations Platform' }]
const serviceLinks = [{ href: '/services', label: 'Custom Software' }, { href: '/services', label: 'AI Solutions' }, { href: '/services', label: 'Voice AI' }, { href: '/services', label: 'Automation & Integration' }]
const socialLinks = ['LinkedIn', 'GitHub']

function SocialIcon({ name }: { name: string }) {
  return name === 'LinkedIn' ? <svg aria-hidden="true" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7m0-10v.01M12 17v-4a3 3 0 0 1 6 0v4m-6 0v-7"/></svg> : <svg aria-hidden="true" fill="none" viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.2 5.2 0 0 0 19.2.5S18 0 15 2a13.4 13.4 0 0 0-6 0C6 0 4.8.5 4.8.5A5.2 5.2 0 0 0 4.7 4a5.5 5.5 0 0 0-1.5 3.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4M9 19c-3 .9-3-1.5-4.2-2"/></svg>
}

function LinkGroup({ label, links }: { label: string; links: FooterLink[] }) {
  return <nav aria-label={`Footer ${label.toLowerCase()}`} className="footer__group"><p className="footer__group-title">{label}</p><div className="footer__links">{links.map(link => <a className="footer__link" href={link.href} key={link.label}>{link.label}</a>)}</div></nav>
}

export function Footer({ brand = 'Amiro Tech Solutions', className, links = defaultLinks }: FooterProps) {
  return <footer className={['footer', 'footer-premium', className].filter(Boolean).join(' ')}><Container><div className="footer__inner">
    <div className="footer-premium__top">
      <div className="footer__identity"><a className="footer__brand" href="/"><img className="footer__logo" loading="lazy" src="/amiro-logo.svg" alt={brand}/></a><p>Software, AI, Voice AI, automation, and digital platforms for modern businesses.</p><div className="footer__availability"><span><i/>Based in Bangalore</span><span><i/>Serving clients globally</span></div></div>
      <LinkGroup label="Company" links={links}/>
      <LinkGroup label="Services" links={serviceLinks}/>
      <div className="footer-premium__combined"><LinkGroup label="Products" links={productLinks}/><div className="footer__group footer-premium__contact"><p className="footer__group-title">Contact</p><div className="footer__links"><a className="footer__link footer-premium__email" href="mailto:amirotechsolutions@gmail.com">amirotechsolutions@gmail.com</a><a className="footer__link footer-premium__call" href="/contact?type=consultation">Book a Strategy Call <span>→</span></a></div><div className="footer__links footer__links--social" aria-label="Social channels">{socialLinks.map(label => <span aria-disabled="true" className="footer__link footer__link--disabled" key={label}><SocialIcon name={label}/>{label}</span>)}</div></div></div>
    </div>
    <div className="footer__bottom"><p>© 2026 Amiro Tech Solutions. All rights reserved.</p><span>Enterprise software · AI · Automation</span></div>
  </div></Container></footer>
}
