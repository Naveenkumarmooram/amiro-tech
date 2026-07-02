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
  { href: '/about', label: 'About' },
  { href: '/process', label: 'Process' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact' },
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
          </div>
          <div className="footer__nav-groups">
            <nav aria-label="Footer" className="footer__links">
              {links.map((link) => (
                <a className="footer__link" href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
            <nav aria-label="Social" className="footer__links footer__links--social">
              {socialLinks.map((link) => (
                <a className="footer__link" href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  )
}
