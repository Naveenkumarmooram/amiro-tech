import { useEffect, useRef, useState } from 'react'
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
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar({
  activePath = '/',
  brand = 'Amiro Tech Solutions',
  className,
  items = defaultItems,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!isMenuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setIsMenuOpen(false); toggleRef.current?.focus() }
    }
    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setIsMenuOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 64rem)')
    const closeOnDesktop = () => { if (desktop.matches) setIsMenuOpen(false) }
    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOutside)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOutside)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [isMenuOpen])
  const classes = ['navbar', className].filter(Boolean).join(' ')

  return (
    <header className={classes} ref={headerRef}>
      <Container>
        <nav aria-label="Primary" className="navbar__inner">
          <a className="navbar__brand" href="/">
            <img className="navbar__logo" src="/amiro-logo.svg" alt={brand} />
          </a>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            ref={toggleRef}
            className="navbar__menu-button"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d={isMenuOpen ? 'm6 6 12 12M18 6 6 18' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
            {isMenuOpen ? 'Close' : 'Menu'}
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
              onClick={() => setIsMenuOpen(false)}
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
