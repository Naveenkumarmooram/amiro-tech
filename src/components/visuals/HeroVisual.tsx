import { useEffect, useRef, useState, type CSSProperties } from 'react'

const services = [
  { position: 'ai', icon: '✦', label: 'AI Solutions', meta: 'Intelligence', description: 'Practical AI that turns business data into useful decisions.', path: 'M275 248 C220 225 190 175 150 140', accent: 'gold' },
  { position: 'voice', icon: '◉', label: 'Voice AI', meta: 'Conversations', description: 'Natural voice agents that support every customer conversation.', path: 'M265 300 C205 300 175 300 125 300', accent: 'cyan' },
  { position: 'cloud', icon: '☁', label: 'Cloud', meta: 'Infrastructure', description: 'Reliable cloud foundations built to grow with your business.', path: 'M275 352 C220 380 205 430 160 475', accent: 'gold' },
  { position: 'data', icon: '◫', label: 'Data Engineering', meta: 'Data systems', description: 'Connected, dependable data for clear operational insights.', path: 'M425 352 C480 380 500 430 545 475', accent: 'cyan' },
  { position: 'automation', icon: '↯', label: 'Automation', meta: 'Workflows', description: 'Connected workflows that reduce repetitive manual work.', path: 'M435 300 C500 300 525 300 575 300', accent: 'gold' },
  { position: 'software', icon: '⌘', label: 'Custom Software', meta: 'Applications', description: 'Purpose-built applications shaped around how your teams work.', path: 'M425 248 C480 220 505 170 550 140', accent: 'cyan' },
]

export function HeroVisual() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [keyboardFocus, setKeyboardFocus] = useState(false)
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [visible, setVisible] = useState(false)
  const [delay, setDelay] = useState(3500)
  const [interaction, setInteraction] = useState(0)
  const root = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const ignoreScroll = useRef(false)
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const settleTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const change = () => setReduced(media.matches)
    media.addEventListener('change', change)
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .15 })
    if (root.current) observer.observe(root.current)
    return () => { media.removeEventListener('change', change); observer.disconnect(); clearTimeout(scrollTimer.current); clearTimeout(settleTimer.current) }
  }, [])

  useEffect(() => {
    if (paused || hovered || keyboardFocus || reduced || !visible) return
    const timer = setTimeout(() => {
      if (!document.hidden) { setActive(current => (current + 1) % services.length); setDelay(3500) }
      else setInteraction(current => current + 1)
    }, delay)
    return () => clearTimeout(timer)
  }, [active, paused, hovered, keyboardFocus, reduced, visible, delay, interaction])

  useEffect(() => {
    const scroller = track.current
    if (!scroller) return
    const sync = () => {
      if (!window.matchMedia('(max-width: 47.999rem)').matches) return
      const card = scroller.children[active] as HTMLElement
      ignoreScroll.current = true
      scroller.scrollTo({ left: card.offsetLeft, behavior: reduced || active === 0 ? 'instant' : 'smooth' })
      clearTimeout(settleTimer.current)
      settleTimer.current = setTimeout(() => { ignoreScroll.current = false }, 650)
    }
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [active, reduced])

  function activate(index: number) {
    setActive(index)
    setDelay(6500)
    setInteraction(current => current + 1)
  }

  return (
    <div ref={root} className="ai-architecture ai-architecture--rotating" aria-label="Amiro enterprise AI platform architecture"
      onKeyDown={() => setKeyboardFocus(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setKeyboardFocus(false) }}>
      <div className="ai-architecture__grid" aria-hidden="true" />
      <div className="ai-architecture__halo" aria-hidden="true" />
      <svg className="ai-architecture__connections" viewBox="0 0 700 600" aria-hidden="true">
        {services.map((service, index) => <path key={service.position} d={service.path} className={active === index ? 'is-active' : ''} style={{ '--connection-color': service.accent === 'cyan' ? '#3bc9db' : '#e7a300' } as CSSProperties} />)}
      </svg>
      <div className="ai-architecture__core">
        <span className="ai-architecture__core-label">Unified intelligence</span>
        <div className="ai-architecture__core-mark"><i /><i /><i /></div>
        <h2>AI Platform</h2>
        <p className="ai-architecture__description" key={active}>{services[active].description}</p>
        <div className="ai-architecture__core-status"><span /> Systems operational</div>
      </div>
      <div ref={track} className="ai-architecture__carousel" onPointerDown={() => { ignoreScroll.current = false; setDelay(6500); setInteraction(current => current + 1) }}
        onScroll={() => {
          if (ignoreScroll.current) return
          clearTimeout(scrollTimer.current)
          scrollTimer.current = setTimeout(() => {
            const scroller = track.current
            if (!scroller || ignoreScroll.current) return
            const nearest = [...scroller.children].reduce((best, child, index) => Math.abs((child as HTMLElement).offsetLeft - scroller.scrollLeft) < Math.abs((scroller.children[best] as HTMLElement).offsetLeft - scroller.scrollLeft) ? index : best, 0)
            activate(nearest)
          }, 140)
        }}>
        {services.map((service, index) => (
          <button type="button" aria-pressed={active === index} aria-label={service.label} className={['ai-architecture__module', 'ai-architecture__module--' + service.position, active === index ? 'is-active' : ''].join(' ')}
            key={service.label} style={{ '--service-accent': service.accent === 'cyan' ? '#3bc9db' : '#e7a300' } as CSSProperties}
            onClick={() => activate(index)} onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(true) }} onPointerLeave={() => setHovered(false)}>
            <span className="ai-architecture__module-icon" aria-hidden="true">{service.icon}</span>
            <span className="ai-architecture__module-copy"><strong>{service.label}</strong><small>{service.meta}</small></span>
            <i className="ai-architecture__port" aria-hidden="true" />
          </button>
        ))}
      </div>
      <div className="ai-architecture__controls">
        <div className="ai-architecture__pagination" aria-label="Choose a service">
          {services.map((service, index) => <button type="button" key={service.label} aria-label={'Show ' + service.label} aria-pressed={active === index} onClick={() => activate(index)}><span /></button>)}
        </div>
        {!reduced && <button type="button" className="ai-architecture__pause" aria-label={paused ? 'Resume service rotation' : 'Pause service rotation'} onClick={() => setPaused(current => !current)}>{paused ? 'Resume' : 'Pause'}</button>}
      </div>
    </div>
  )
}
