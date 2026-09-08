import { useEffect, useRef, useState } from 'react'
import { Button, Container, Section } from '../common'
import { HeroVisual } from '../visuals'

const banners = [
  { label: 'Enterprise technology partner', title: 'Software & AI Services', subtitle: 'for Business Growth', description: 'We design and build enterprise software, AI systems, voice agents and automation platforms that turn complex operations into scalable business advantage.', cta: 'Book a Strategy Call', href: '/contact?type=consultation', features: ['AI Solutions', 'Cloud Native', 'Enterprise Ready'], name: 'Overview' },
  { label: 'Generative AI solutions', title: 'Turn Enterprise Knowledge', subtitle: 'Into Intelligent Answers', description: 'Build secure AI assistants that understand your business documents, data and workflows — helping teams find answers and make decisions faster.', cta: 'Explore AI Solutions', href: '/services#service-areas', features: ['Enterprise RAG', 'AI Assistants', 'Intelligent Search'], name: 'Generative AI' },
  { label: 'Conversational AI', title: 'AI That Talks, Listens', subtitle: 'and Gets Work Done', description: 'Create intelligent voice agents that handle customer conversations, answer questions and automate routine interactions at scale.', cta: 'Explore Voice AI', href: '/services#service-areas', features: ['24/7 Conversations', 'Natural Voice', 'Workflow Integration'], name: 'Voice AI' },
  { label: 'Intelligent automation', title: 'Less Manual Work.', subtitle: 'More Business Momentum.', description: 'Connect your systems and automate repetitive processes with intelligent workflows designed to improve speed, accuracy and efficiency.', cta: 'Explore Automation', href: '/services#service-areas', features: ['Workflow Automation', 'System Integration', 'AI Agents'], name: 'Automation' },
  { label: 'Cloud & data engineering', title: 'Build the Foundation', subtitle: 'for Intelligent Growth', description: 'Modernize applications, cloud infrastructure and data platforms to create secure, scalable foundations for AI and digital transformation.', cta: 'Explore Cloud & Data', href: '/services#service-areas', features: ['Cloud Native', 'Data Platforms', 'Enterprise Scale'], name: 'Cloud & Data' },
]
const diagrams = [
  [],
  [['Documents / Data', 'Your enterprise knowledge'], ['AI Knowledge Layer', 'Retrieve relevant context'], ['Intelligent Assistant', 'Understand and reason'], ['Trusted Answer', 'Grounded in your sources']],
  [['Customer', 'A conversation begins'], ['Voice AI Agent', 'Listen · Understand · Respond'], ['Business Systems', 'Connect the conversation to action']],
  [['Request', 'Capture the business need'], ['AI Processing', 'Understand and route'], ['Approval', 'Keep your team in control'], ['System Update', 'Sync connected tools'], ['Completed', 'A traceable outcome']],
  [['Applications', 'Connected digital experiences'], ['Cloud Platform', 'Secure, scalable infrastructure'], ['Data Layer', 'Reliable, unified information'], ['Analytics / AI', 'Intelligence ready for your teams']],
]
function BannerVisual({ index }: { index: number }) {
  if (index === 0) return <HeroVisual autoRotate={false} />
  return <div className={'hero-solution hero-solution--' + index} aria-label={banners[index].name + ' solution flow'}>
    <div className="hero-solution__header"><span>AMIRO / SOLUTION DESIGN</span><span>0{index + 1}</span></div>
    <ol className="hero-solution__flow">{diagrams[index].map(([title, description], step) => <li key={title} className={step === 1 ? 'is-featured' : ''}>
      <span className="hero-solution__number">0{step + 1}</span>
      <div><h2>{title}</h2><p>{description}</p>{index === 2 && step === 1 && <div className="hero-solution__wave" aria-hidden="true">{Array.from({ length: 21 }, (_, i) => <i key={i} style={{ height: 8 + ((i * 13) % 29), animationDelay: i * 70 + 'ms' }} />)}</div>}</div>
    </li>)}</ol>
    <p className="hero-solution__footer">{banners[index].features.join(' / ')}</p>
  </div>
}
export function HeroSection({ className }: { className?: string }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [visible, setVisible] = useState(false)
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [delay, setDelay] = useState(5500)
  const [interaction, setInteraction] = useState(0)
  const root = useRef<HTMLDivElement>(null)
  const touch = useRef({ x: 0, y: 0 })
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const change = () => setReduced(media.matches)
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .15 })
    if (root.current) observer.observe(root.current)
    media.addEventListener('change', change)
    return () => { observer.disconnect(); media.removeEventListener('change', change) }
  }, [])
  useEffect(() => {
    if (paused || hovered || focused || reduced || !visible) return
    const timer = setTimeout(() => {
      if (!document.hidden) { setActive(value => (value + 1) % banners.length); setDelay(5500) }
      setInteraction(value => value + 1)
    }, delay)
    return () => clearTimeout(timer)
  }, [active, paused, hovered, focused, reduced, visible, delay, interaction])
  function select(index: number) { setActive(index); setDelay(8000); setInteraction(value => value + 1) }
  const banner = banners[active]
  return <Section className={['home-hero', 'premium-hero', 'hero-banners', className].filter(Boolean).join(' ')} spacing="spacious">
    <div aria-hidden="true" className="home-hero__blueprint"><span /><span /><span /><span /></div>
    <Container><div ref={root} role="region" aria-roledescription="carousel" aria-label="Enterprise solutions"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false) }}
      onTouchStart={event => { touch.current = { x: event.touches[0].clientX, y: event.touches[0].clientY } }}
      onTouchEnd={event => { const dx = event.changedTouches[0].clientX - touch.current.x; const dy = event.changedTouches[0].clientY - touch.current.y; if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) && !(event.target as HTMLElement).closest('.ai-architecture__carousel')) select((active + (dx < 0 ? 1 : banners.length - 1)) % banners.length) }}>
      <div className="premium-hero__layout hero-banners__frame" key={active} role="group" aria-roledescription="slide" aria-label={(active + 1) + ' of 5: ' + banner.name}>
        <div className="premium-hero__content">
          <p className="premium-hero__eyebrow"><span />{banner.label}</p>
          <h1><strong>{banner.title}</strong><span>{banner.subtitle}</span></h1>
          <p className="premium-hero__description">{banner.description}</p>
          <div className="premium-hero__actions"><Button href={banner.href} size="lg">{banner.cta} <span aria-hidden="true">→</span></Button><Button href="/services" size="lg" variant="secondary">Explore Services</Button></div>
          <ul className="premium-hero__trust" aria-label="Solution capabilities">{banner.features.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
        </div><BannerVisual index={active} />
      </div>
      <div className="hero-banners__controls" aria-label="Choose a banner">
        {banners.map((item, index) => <button type="button" key={item.name} aria-label={'Show ' + item.name + ' banner'} aria-pressed={index === active} onClick={() => select(index)}><span /><small>{item.name}</small></button>)}
        {!reduced && <button type="button" className="hero-banners__pause" onClick={() => setPaused(value => !value)} aria-label={paused ? 'Resume banner rotation' : 'Pause banner rotation'}>{paused ? 'Resume' : 'Pause'}</button>}
      </div>
    </div></Container>
  </Section>
}
