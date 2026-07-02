import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

type PageLayoutProps = {
  activePath?: string
  children?: ReactNode
  className?: string
}

export function PageLayout({ activePath = '/', children, className }: PageLayoutProps) {
  const classes = ['app-shell', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <Navbar activePath={activePath} />
      <main className="app-shell__main" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}
