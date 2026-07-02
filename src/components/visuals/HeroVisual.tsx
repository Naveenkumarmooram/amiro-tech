export function HeroVisual() {
  return (
    <div aria-hidden="true" className="hero-visual">
      <div className="hero-visual__grid" />
      <div className="hero-visual__line hero-visual__line--one" />
      <div className="hero-visual__line hero-visual__line--two" />

      <div className="hero-visual__card hero-visual__card--dashboard">
        <div className="hero-visual__card-header">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-visual__chart">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="hero-visual__metric-row">
          <span />
          <span />
        </div>
      </div>

      <div className="hero-visual__card hero-visual__card--agent">
        <p>AI Agent</p>
        <div className="hero-visual__agent-core" />
        <span className="hero-visual__status">Active</span>
      </div>

      <div className="hero-visual__card hero-visual__card--voice">
        <p>Voice AI</p>
        <div className="hero-visual__signal">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="hero-visual__nodes">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}
