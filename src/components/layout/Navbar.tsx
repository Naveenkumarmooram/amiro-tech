import { useState } from 'react'
import { Container } from '../common'

type NavItem = {
  href: string
  label: string
}

type NavbarProps = {
  activePath?: string
  brand?: string
  className?: string
  items?: NavItem[]
}

const defaultItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/process', label: 'Process' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar({
  activePath = '/',
  brand = 'Amiro Tech Solutions',
  className,
  items = defaultItems,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const classes = ['navbar', className].filter(Boolean).join(' ')

  return (
    <header className={classes}>
      <Container>
        <nav aria-label="Primary" className="navbar__inner">
          <a className="navbar__brand" href="/">
            <img className="navbar__logo" src="/amiro-logo.svg" alt={brand} />
          </a>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            className="navbar__menu-button"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            Menu
          </button>
          <div className="navbar__links">
            {items.map((item) => (
              <a
                aria-current={activePath === item.href ? 'page' : undefined}
                className="navbar__link"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
        <div
          className={['navbar__mobile', isMenuOpen ? 'navbar__mobile--open' : '']
            .filter(Boolean)
            .join(' ')}
          id="mobile-navigation"
        >
          {items.map((item) => (
            <a
              aria-current={activePath === item.href ? 'page' : undefined}
              className="navbar__mobile-link"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </Container>
    </header>
  )
}
