import type { CSSProperties } from 'react'

const services = [
  { className: 'ai-architecture__module--ai', icon: '✦', label: 'AI Solutions', meta: 'Intelligence' },
  { className: 'ai-architecture__module--software', icon: '⌘', label: 'Custom Software', meta: 'Applications' },
  { className: 'ai-architecture__module--voice', icon: '◉', label: 'Voice AI', meta: 'Conversations' },
  { className: 'ai-architecture__module--automation', icon: '↯', label: 'Automation', meta: 'Workflows' },
  { className: 'ai-architecture__module--cloud', icon: '☁', label: 'Cloud', meta: 'Infrastructure' },
  { className: 'ai-architecture__module--data', icon: '◫', label: 'Data Engineering', meta: 'Data systems' },
]

export function HeroVisual() {
  return (
    <div className="ai-architecture" aria-label="Amiro enterprise AI platform architecture">
      <div className="ai-architecture__grid" aria-hidden="true" />
      <div className="ai-architecture__halo" aria-hidden="true" />
      <svg className="ai-architecture__connections" viewBox="0 0 700 600" aria-hidden="true">
        <defs>
          <linearGradient id="archGold" x1="0" x2="1"><stop stopColor="#e7a300" stopOpacity=".12"/><stop offset=".55" stopColor="#e7a300" stopOpacity=".75"/><stop offset="1" stopColor="#e7a300" stopOpacity=".12"/></linearGradient>
          <linearGradient id="archCyan" x1="0" x2="1"><stop stopColor="#3bc9db" stopOpacity=".12"/><stop offset=".55" stopColor="#3bc9db" stopOpacity=".65"/><stop offset="1" stopColor="#3bc9db" stopOpacity=".12"/></linearGradient>
        </defs>
        <path d="M275 248 C220 225 190 175 150 140"/><path d="M425 248 C480 220 505 170 550 140"/>
        <path d="M265 300 C205 300 175 300 125 300"/><path d="M435 300 C500 300 525 300 575 300"/>
        <path d="M275 352 C220 380 205 430 160 475"/><path d="M425 352 C480 380 500 430 545 475"/>
      </svg>
      <div className="ai-architecture__core">
        <span className="ai-architecture__core-label">Unified intelligence</span>
        <div className="ai-architecture__core-mark"><i /><i /><i /></div>
        <h2>AI Platform</h2>
        <p>One connected foundation for intelligent business operations.</p>
        <div className="ai-architecture__core-status"><span /> Systems operational</div>
      </div>
      {services.map((service, index) => (
        <article className={`ai-architecture__module ${service.className}`} key={service.label} style={{ '--node-index': index } as CSSProperties}>
          <span className="ai-architecture__module-icon">{service.icon}</span>
          <div><strong>{service.label}</strong><small>{service.meta}</small></div>
          <i className="ai-architecture__port" />
        </article>
      ))}
      <span className="ai-architecture__signal ai-architecture__signal--one" aria-hidden="true" />
      <span className="ai-architecture__signal ai-architecture__signal--two" aria-hidden="true" />
      <span className="ai-architecture__signal ai-architecture__signal--three" aria-hidden="true" />
    </div>
  )
}
