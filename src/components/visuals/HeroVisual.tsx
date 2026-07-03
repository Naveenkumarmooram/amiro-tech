export function HeroVisual() {
  const flowLayers = ['Business Ops', 'AI Layer', 'Automation', 'Insights']
  const systemNodes = ['CRM', 'ERP', 'Inventory', 'API']
  const automationSteps = ['Analyze', 'Route', 'Report']

  return (
    <div aria-hidden="true" className="hero-visual">
      <div className="hero-visual__grid" />
      <div className="hero-visual__glow hero-visual__glow--gold" />
      <div className="hero-visual__glow hero-visual__glow--cyan" />
      <div className="hero-visual__ambient-ring" />

      <div className="hero-visual__ecosystem">
        <div className="hero-visual__topbar">
          <strong>Amiro Intelligence Platform</strong>
          <span>Connected operations</span>
        </div>

        <div className="hero-visual__flow-map">
          {flowLayers.map((layer, index) => (
            <div
              className={index === 1 || index === 3 ? 'hero-visual__flow-node hero-visual__flow-node--cyan' : 'hero-visual__flow-node'}
              key={layer}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{layer}</p>
            </div>
          ))}
        </div>

        <div className="hero-visual__core">
          <div className="hero-visual__core-header">
            <div>
              <p>Operations Command Center</p>
              <strong>Live business platform</strong>
            </div>
            <span>AI assisted</span>
          </div>

          <div className="hero-visual__metrics">
            <div>
              <p>Speed</p>
              <strong>84%</strong>
            </div>
            <div>
              <p>Systems</p>
              <strong>12</strong>
            </div>
            <div className="hero-visual__metric-note">
              <span />
              <p>AI assisted operations</p>
            </div>
          </div>

          <div className="hero-visual__insight-panel">
            <div className="hero-visual__line-chart">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="hero-visual__ai-panel">
              <span />
              <p>AI Layer</p>
            </div>
          </div>

          <div className="hero-visual__automation-row">
            {automationSteps.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual__systems">
          {systemNodes.map((node, index) => (
            <span className={index === 4 || index === 5 ? 'hero-visual__system hero-visual__system--cyan' : 'hero-visual__system'} key={node}>
              {node}
            </span>
          ))}
        </div>

        <div className="hero-visual__voice-card">
          <div>
            <p>Voice AI</p>
            <span>Active</span>
          </div>
          <div className="hero-visual__voice-wave">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="hero-visual__data-rail">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  )
}
