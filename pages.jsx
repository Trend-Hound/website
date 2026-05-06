// pages.jsx — page bodies for Trend Hound site
const { useState: useState2, useEffect: useEffect2 } = React;

// ── HOME ──────────────────────────────────────────────────────
function PageHome({ setPage }) {
  return (
    <>
      {/* HERO */}
      <section className="section section--hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">TECHNOLOGY INFRASTRUCTURE PROVIDER</div>
              <h1 className="hero-h1">
                Computational systems<br/>
                <span className="accent">built for data-intensive</span><br/>
                environments.
              </h1>
              <p className="hero-sub">
                Trend Hound builds software systems for performance, reliability, and real-time
                infrastructure orchestration. Automation frameworks, analytics infrastructure,
                scalable enterprise software architecture.
              </p>
              <div className="hero-tags">
                <span className="tag">ENTERPRISE INFRASTRUCTURE</span>
                <span className="tag">QUANTITATIVE SYSTEMS</span>
                <span className="tag">INTELLIGENT AUTOMATION</span>
              </div>
              <div className="hero-actions">
                <button className="btn btn--primary" onClick={() => setPage("contact")}>
                  Contact <span style={{fontFamily:"var(--mono)",opacity:.7}}>→</span>
                </button>
                <button className="btn btn--ghost" onClick={() => setPage("infrastructure")}>
                  View infrastructure
                </button>
              </div>
            </div>
            <div>
              <HeroDataPanel />
            </div>
          </div>

          {/* STATS */}
          <div className="stats">
            <div>
              <span className="k">Events / second</span>
              <span className="v"><Counter to={184243} /></span>
              <span className="sub">Sustained, multi-region</span>
            </div>
            <div>
              <span className="k">Pipelines</span>
              <span className="v"><Counter to={1284} /></span>
              <span className="sub">Concurrent orchestrations</span>
            </div>
            <div>
              <span className="k">P99 latency</span>
              <span className="v"><Counter to={2.41} decimals={2} suffix="ms" /></span>
              <span className="sub">Stream-bus, end-to-end</span>
            </div>
            <div>
              <span className="k">Uptime · 90d</span>
              <span className="v"><Counter to={99.992} decimals={3} suffix="%" /></span>
              <span className="sub">Across all regions</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE INFRASTRUCTURE preview */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="section-num">§ 02 · CORE INFRASTRUCTURE</div>
              <h2 className="section-h">
                Modular systems designed for <span className="muted">scalability, interoperability, and operational flexibility.</span>
              </h2>
            </div>
            <div className="section-meta">
              <span>UPDATED · 2026 / Q2</span>
              <span>7 DOMAINS</span>
            </div>
          </div>
          <CoreGridPreview />
        </div>
      </section>

      {/* ARCHITECTURE diagram */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="section-num">§ 03 · ARCHITECTURE</div>
              <h2 className="section-h">
                Event-driven by default. <span className="muted">Distributed by design.</span>
              </h2>
            </div>
            <div className="section-meta">
              <span><span style={{display:"inline-block",width:8,height:2,background:"var(--th-profit)",verticalAlign:"middle",marginRight:6}}></span>LIVE PATH</span>
              <span><span style={{display:"inline-block",width:8,height:2,background:"#3a3a3a",verticalAlign:"middle",marginRight:6}}></span>STATIC LINK</span>
            </div>
          </div>
          <ArchDiagram />
        </div>
      </section>

      {/* COMPLIANCE TEASER */}
      <section className="section">
        <div className="wrap">
          <div className="compliance">
            <div>
              <div className="label">§ 09 · COMPLIANCE</div>
            </div>
            <div>
              <p>Trend Hound is a technology and infrastructure provider.</p>
              <p>The company does not provide brokerage, custody, investment advisory, portfolio management, or other regulated financial services. Any regulated activities are performed by appropriately licensed third-party institutions where applicable.</p>
              <p>Nothing on this website constitutes investment advice, financial promotion, or an offer of regulated financial services.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// hero data panel — strip + chart
function HeroDataPanel() {
  const [tf, setTf] = useState2("1H");
  return (
    <div className="hero-card">
      <div className="hero-card-head">
        <span className="ttl">INFRA · STREAM-BUS / NORTH-1</span>
        <span className="meta">
          <span><span className="dot"></span>STREAMING</span>
          <span>{tf}</span>
        </span>
      </div>
      <div className="hero-strip">
        <div>
          <span className="k">Throughput</span>
          <span className="v">184.2K<span style={{color:"var(--th-fg-3)",fontSize:11}}> /s</span></span>
        </div>
        <div>
          <span className="k">Latency · p99</span>
          <span className="v up">2.41ms</span>
        </div>
        <div>
          <span className="k">Nodes</span>
          <span className="v">412</span>
        </div>
        <div>
          <span className="k">Δ 1H</span>
          <span className="v up">+4.31%</span>
        </div>
      </div>
      <div className="hero-chart">
        <HeroChart />
      </div>
      <div className="hero-card-foot">
        <span className="dots">
          <span><span className="swatch"></span> THROUGHPUT</span>
          <span><span className="swatch" style={{background:"#666"}}></span> BASELINE</span>
          <span><span className="swatch green"></span> LIVE</span>
        </span>
        <span style={{display:"flex",gap:0,border:"1px solid var(--th-border-strong)",borderRadius:3,overflow:"hidden"}}>
          {["1H","6H","24H","7D"].map((t,i) => (
            <button key={t} onClick={() => setTf(t)} style={{
              background: tf===t ? "var(--th-surface-2)" : "transparent",
              color: tf===t ? "#fff" : "var(--th-fg-3)",
              border:0,borderRight: i<3 ? "1px solid var(--th-border)" : "0",
              padding:"4px 9px",fontFamily:"var(--mono)",fontSize:10,cursor:"pointer",
            }}>{t}</button>
          ))}
        </span>
      </div>
    </div>
  );
}

// ── core grid preview (4 items) ──
const CORE_PREVIEW = [
  { ttl: "Real-time data processing", desc: "Stream-bus ingestion, transformation and routing across regions." },
  { ttl: "Quantitative workflow infrastructure", desc: "Deterministic execution graphs for analytical pipelines." },
  { ttl: "Distributed processing architecture", desc: "Horizontal compute across heterogeneous node fleets." },
  { ttl: "Automation & orchestration frameworks", desc: "Event-driven schedulers with policy-based routing." },
];
function CoreGridPreview() {
  return (
    <div className="cap-grid">
      {CORE_PREVIEW.map((c, i) => (
        <div className="cap" key={i}>
          <span className="num">{String(i + 1).padStart(2, "0")} / 07</span>
          <span className="ttl">{c.ttl}</span>
          <span className="desc">{c.desc}</span>
        </div>
      ))}
    </div>
  );
}

// ── ARCHITECTURE DIAGRAM ─────────────────────────────────
function ArchDiagram() {
  // animated pulse along the edges
  const W = 1200, H = 360;
  const layers = [
    { x: 80,  nodes: ["EXCHANGE FEEDS", "ENTERPRISE APIS", "RESEARCH SOURCES"] },
    { x: 360, nodes: ["INGEST · NORMALIZE", "EVENT STREAM-BUS"] },
    { x: 640, nodes: ["RULE ENGINE", "MODEL INFERENCE", "SIMULATION"] },
    { x: 920, nodes: ["WORKFLOW ORCHESTRATOR", "OBSERVABILITY"] },
  ];
  return (
    <div className="arch">
      <svg viewBox={`0 0 ${W} ${H}`} className="arch-svg" preserveAspectRatio="xMidYMid meet">
        <defs>
          <pattern id="arch-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#161616" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width={W} height={H} fill="url(#arch-grid)"/>

        {/* connections */}
        {layers.slice(0,-1).map((L, li) => {
          const next = layers[li+1];
          const nW = 200;
          return L.nodes.flatMap((_, ni) => next.nodes.map((__, mi) => {
            const y1 = 60 + ni * 90 + 24;
            const y2 = 60 + mi * 90 + 24;
            const x1 = L.x + nW;
            const x2 = next.x;
            const live = (ni + mi + li) % 3 === 0;
            const cx = (x1 + x2) / 2;
            return (
              <g key={`${li}-${ni}-${mi}`}>
                <path
                  d={`M${x1},${y1} C${cx},${y1} ${cx},${y2} ${x2},${y2}`}
                  className={live ? "arch-edge arch-edge--live" : "arch-edge"}
                />
                {live && (
                  <circle r="3" className="arch-pulse">
                    <animateMotion dur={`${2.5 + ((ni+mi)%3)*0.6}s`} repeatCount="indefinite"
                      path={`M${x1},${y1} C${cx},${y1} ${cx},${y2} ${x2},${y2}`}/>
                  </circle>
                )}
              </g>
            );
          }));
        })}

        {/* nodes */}
        {layers.map((L, li) => L.nodes.map((n, ni) => {
          const y = 60 + ni * 90;
          const accent = li === 1 || (li === 2 && ni === 1);
          return (
            <g key={`n-${li}-${ni}`} className={"arch-node" + (accent ? " arch-node--accent" : "")} transform={`translate(${L.x},${y})`}>
              <rect width="200" height="48" rx="4"/>
              <text x="14" y="20" fill="#a8a8a8" style={{fontSize:9,letterSpacing:"0.08em",textTransform:"uppercase"}}>LAYER {li+1}</text>
              <text x="14" y="36">{n}</text>
            </g>
          );
        }))}

        {/* layer labels */}
        {["SOURCES","INGEST","COMPUTE","ORCHESTRATION"].map((L, i) => (
          <text key={L} x={layers[i].x} y={H-18} fill="#444" style={{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.08em"}}>§ 0{i+1} · {L}</text>
        ))}
      </svg>
    </div>
  );
}

// ── ABOUT ──────────────────────────────────────────────────
function PageAbout() {
  return (
    <>
      <section className="section section--hero">
        <div className="wrap">
          <div className="eyebrow">§ 01 · ABOUT</div>
          <h1 className="hero-h1" style={{maxWidth:880}}>
            Software infrastructure <span className="accent">and analytical systems for enterprise</span> environments.
          </h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="split">
            <div className="split-prose">
              <p>Trend Hound develops software infrastructure and analytical systems designed for enterprise and research-oriented environments.</p>
              <p>Our work focuses on scalable computational infrastructure, automation frameworks, workflow orchestration, AI-assisted systems, and real-time analytical environments.</p>
              <p>The company operates strictly as a technology and infrastructure provider and does not provide regulated financial services.</p>
            </div>
            <div>
              <PrinciplesPanel />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="section-num">§ 02 · DOCTRINE</div>
              <h2 className="section-h">Operator-grade defaults. <span className="muted">No marketing fluff.</span></h2>
            </div>
          </div>
          <div className="cap-grid">
            <div className="cap"><span className="num">01</span><span className="ttl">Performance is non-negotiable</span><span className="desc">P99 latencies are budgets, not aspirations. Every component carries an SLO.</span></div>
            <div className="cap"><span className="num">02</span><span className="ttl">Determinism over magic</span><span className="desc">Reproducible execution graphs. No black boxes in critical paths.</span></div>
            <div className="cap"><span className="num">03</span><span className="ttl">Observability by default</span><span className="desc">If it ships without metrics, traces, and structured logs, it doesn't ship.</span></div>
            <div className="cap"><span className="num">04</span><span className="ttl">Modularity over monoliths</span><span className="desc">Composable layers. Replace any block without rewriting the system.</span></div>
          </div>
        </div>
      </section>
    </>
  );
}

function PrinciplesPanel() {
  const cpu = useLiveSeries(60, 0.6, 0.0);
  const mem = useLiveSeries(60, 0.4, 0.0);
  return (
    <div style={{background:"var(--th-surface-1)",border:"1px solid var(--th-border)",borderRadius:6,overflow:"hidden"}}>
      <div style={{display:"flex",justifyContent:"space-between",padding:"10px 14px",borderBottom:"1px solid var(--th-border)"}}>
        <span style={{fontSize:11,fontWeight:600,letterSpacing:"0.02em"}}>SYSTEM · PRINCIPLES MONITOR</span>
        <span style={{fontFamily:"var(--mono)",fontSize:10,color:"var(--th-fg-3)",textTransform:"uppercase",letterSpacing:"0.08em"}}>LIVE</span>
      </div>
      <div style={{padding:14,display:"flex",flexDirection:"column",gap:14}}>
        {[
          ["Reliability index", "99.992%", cpu, "var(--th-profit)"],
          ["Determinism score", "1.000",   mem, "#fff"],
          ["Observability cov.", "100%",   useLiveSeries(60,0.3,0.0), "#fff"],
          ["Modularity ratio", "0.94",    useLiveSeries(60,0.5,0.0), "#a8a8a8"],
        ].map(([k, v, data, col], i) => (
          <div key={i}>
            <div style={{display:"flex",justifyContent:"space-between",fontFamily:"var(--mono)",fontSize:11}}>
              <span style={{color:"var(--th-fg-3)",textTransform:"uppercase",letterSpacing:"0.08em",fontSize:10}}>{k}</span>
              <span style={{color:"#fff"}}>{v}</span>
            </div>
            <MiniSpark seed={i} color={col} fill={true}/>
          </div>
        ))}
      </div>
    </div>
  );
}

window.PageHome = PageHome;
window.PageAbout = PageAbout;
