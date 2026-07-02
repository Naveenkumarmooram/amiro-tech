import { Container } from '../common'

type FooterLink = {
  href: string
  label: string
}

type FooterProps = {
  brand?: string
  className?: string
  links?: FooterLink[]
}

const defaultLinks: FooterLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const productLinks: FooterLink[] = [
  { href: '/products', label: 'IMS for NDT Labs' },
  { href: '/products', label: 'HR Management System' },
  { href: '/products', label: 'Voice AI Agent Platform' },
  { href: '/products', label: 'Business Operations Platform' },
]

const serviceLinks: FooterLink[] = [
  { href: '/services', label: 'Custom Software' },
  { href: '/services', label: 'AI Solutions' },
  { href: '/services', label: 'Voice AI' },
  { href: '/services', label: 'Automation & Integration' },
]

const socialLinks: FooterLink[] = [
  { href: '#', label: 'LinkedIn' },
  { href: '#', label: 'GitHub' },
]

export function Footer({
  brand = 'Amiro Tech Solutions',
  className,
  links = defaultLinks,
}: FooterProps) {
  const classes = ['footer', className].filter(Boolean).join(' ')

  return (
    <footer className={classes}>
      <Container>
        <div className="footer__inner">
          <div className="footer__identity">
            <a className="footer__brand" href="/">
              <img className="footer__logo" loading="lazy" src="/amiro-logo.svg" alt={brand} />
            </a>
            <p>Software, AI, Voice AI, automation, and digital platforms for modern businesses.</p>
            <div className="footer__availability">
              <span>Based in Bangalore</span>
              <span>Serving clients globally</span>
            </div>
          </div>
          <div className="footer__nav-groups">
            <nav aria-label="Footer main" className="footer__group">
              <p className="footer__group-title">Company</p>
              <div className="footer__links">
                {links.map((link) => (
                  <a className="footer__link" href={link.href} key={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
            <nav aria-label="Footer services" className="footer__group">
              <p className="footer__group-title">Services</p>
              <div className="footer__links">
                {serviceLinks.map((link) => (
                  <a className="footer__link" href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
            <nav aria-label="Footer products" className="footer__group">
              <p className="footer__group-title">Products</p>
              <div className="footer__links">
                {productLinks.map((link) => (
                  <a className="footer__link" href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
            <div className="footer__group">
              <p className="footer__group-title">Contact</p>
              <div className="footer__links">
                <a className="footer__link" href="mailto:amirotechsolutions@gmail.com">
                  amirotechsolutions@gmail.com
                </a>
                <a className="footer__link" href="/contact?type=consultation">
                  Book a strategy call
                </a>
              </div>
              <div className="footer__links footer__links--social" aria-label="Social placeholders">
                {socialLinks.map((link) => (
                  <span aria-disabled="true" className="footer__link footer__link--disabled" key={link.label}>
                    {link.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <p>© 2026 Amiro Tech Solutions. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
