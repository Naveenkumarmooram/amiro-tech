export function HeroVisual() {
  const integrationNodes = [
    { label: 'CRM', tone: 'cyan' },
    { label: 'ERP', tone: 'gold' },
    { label: 'API', tone: 'cyan' },
    { label: 'Reports', tone: 'gold' },
  ]
  const workflowNodes = ['Trigger', 'Process', 'Approve', 'Notify']

  return (
    <div aria-hidden="true" className="hero-visual">
      <div className="hero-visual__grid" />
      <div className="hero-visual__glow hero-visual__glow--gold" />
      <div className="hero-visual__glow hero-visual__glow--cyan" />

      <div className="hero-visual__orbit hero-visual__orbit--outer" />
      <div className="hero-visual__orbit hero-visual__orbit--inner" />

      <div className="hero-visual__platform">
        <div className="hero-visual__topbar">
          <strong>Operations Dashboard</strong>
          <span>Live operations</span>
        </div>
        <div className="hero-visual__sidebar">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="hero-visual__workspace">
          <div className="hero-visual__metric">
            <p>Workflow speed</p>
            <strong>84%</strong>
            <small>+12%</small>
          </div>
          <div className="hero-visual__metric hero-visual__metric--cyan">
            <p>Systems linked</p>
            <strong>12</strong>
            <small>active</small>
          </div>
          <div className="hero-visual__chart-card">
            <p>Business insights</p>
            <div className="hero-visual__chart">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="hero-visual__donut-card">
            <p>Efficiency</p>
            <span />
            <strong>76%</strong>
          </div>
          <div className="hero-visual__workflow-card">
            <p>Automation workflow</p>
            <div>
              {workflowNodes.map((node) => (
                <span key={node}>{node}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-visual__module hero-visual__module--agent">
        <div className="hero-visual__module-header">
          <p>AI Agent</p>
          <span>Processing</span>
        </div>
        <div className="hero-visual__agent-bot">
          <span />
          <span />
          <span />
        </div>
        <span className="hero-visual__status">Analyzing data</span>
      </div>

      <div className="hero-visual__module hero-visual__module--voice">
        <div className="hero-visual__module-header">
          <p>Voice AI</p>
          <span>Live</span>
        </div>
        <div className="hero-visual__signal">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="hero-visual__integrations">
        {integrationNodes.map((node) => (
          <span className={`hero-visual__integration hero-visual__integration--${node.tone}`} key={node.label}>
            {node.label}
          </span>
        ))}
      </div>

      <span className="hero-visual__path hero-visual__path--one" />
      <span className="hero-visual__path hero-visual__path--two" />
      <span className="hero-visual__path hero-visual__path--three" />
    </div>
  )
}
