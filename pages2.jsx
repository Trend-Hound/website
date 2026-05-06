// pages2.jsx — remaining pages
const { useState: useState3, useEffect: useEffect3 } = React;

// ── INFRASTRUCTURE ────────────────────────────────────────
const CORE_AREAS = [
  { ttl: "Real-time data processing systems", desc: "Stream-bus ingestion, transformation, routing across regions with deterministic ordering guarantees." },
  { ttl: "Quantitative workflow infrastructure", desc: "Reproducible execution graphs for analytical pipelines. Versioned, traceable, replayable." },
  { ttl: "Simulation and modeling environments", desc: "Sandboxed environments for parameter sweeps, scenario tests, and Monte Carlo runs at scale." },
  { ttl: "Distributed processing architecture", desc: "Horizontal compute across heterogeneous node fleets. Region-aware scheduling." },
  { ttl: "Enterprise analytics infrastructure", desc: "Columnar stores, time-series indices, query layers tuned for high-cardinality datasets." },
  { ttl: "Automation & orchestration frameworks", desc: "Event-driven schedulers with policy-based routing. Declarative workflow specs." },
  { ttl: "API connectivity systems", desc: "Hardened gateways, rate-aware adapters, normalization layer for external infrastructure." },
];

function PageInfrastructure() {
  return (
    <>
      <section className="section section--hero">
        <div className="wrap">
          <div className="eyebrow">§ 03 · CORE INFRASTRUCTURE</div>
          <h1 className="hero-h1" style={{maxWidth:900}}>
            Modular infrastructure systems <span className="accent">designed for scalability,</span> interoperability, operational flexibility.
          </h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="cap-grid">
            {CORE_AREAS.map((c, i) => (
              <div className="cap" key={i}>
                <span className="num">§ {String(i+1).padStart(2,"0")} / 07</span>
                <span className="ttl">{c.ttl}</span>
                <span className="desc">{c.desc}</span>
              </div>
            ))}
            <div className="cap" style={{justifyContent:"space-between",alignItems:"flex-start",background:"var(--th-bg)"}}>
              <span className="num">DOMAIN COVERAGE</span>
              <span className="ttl" style={{fontSize:32,letterSpacing:"-0.02em"}}>7 / 7</span>
              <span className="desc">All seven core infrastructure domains operational, instrumented, and integrated under a single coherent execution model.</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="section-num">§ 04 · LIVE TELEMETRY</div>
              <h2 className="section-h">Infrastructure <span className="muted">in motion.</span></h2>
            </div>
          </div>
          <TelemetryGrid />
        </div>
      </section>
    </>
  );
}

function TelemetryGrid() {
  const items = [
    { k:"Stream-bus throughput", v:"184.2K/s", col:"#fff" },
    { k:"Pipeline executions", v:"1,284", col:"#fff" },
    { k:"Inference latency · p99", v:"5.91ms", col:"var(--th-profit)" },
    { k:"Compute fleet · CPU", v:"37.8%", col:"#fff" },
    { k:"Storage I/O", v:"62.1GB/s", col:"#fff" },
    { k:"API gateway · p99", v:"18.4ms", col:"var(--th-profit)" },
  ];
  return (
    <div className="cap-grid cap-grid--3">
      {items.map((it, i) => (
        <div className="cap" key={i} style={{minHeight:200}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <span className="num">METRIC · {String(i+1).padStart(2,"0")}</span>
            <span style={{fontFamily:"var(--mono)",fontSize:10,color:"var(--th-profit)",letterSpacing:"0.08em"}}>● LIVE</span>
          </div>
          <span className="ttl" style={{color:"var(--th-fg-2)",fontSize:11,textTransform:"uppercase",letterSpacing:"0.06em",fontWeight:500}}>{it.k}</span>
          <span style={{fontSize:24,color:"#fff",fontVariantNumeric:"tabular-nums",letterSpacing:"-0.01em",fontWeight:500}}>{it.v}</span>
          <div style={{marginTop:"auto"}}><MiniSpark seed={i+10} color={it.col} fill={true}/></div>
        </div>
      ))}
    </div>
  );
}

// ── CAPABILITIES ──────────────────────────────────────────
const CAPABILITIES = [
  { ttl:"AI-assisted infrastructure systems", desc:"Model-augmented routing, anomaly detection, predictive scaling layered into the operational fabric." },
  { ttl:"Rule-engine architecture", desc:"Composable, declarative rule graphs. Hot-swappable conditions without redeploys." },
  { ttl:"Real-time monitoring systems", desc:"Sub-second metric resolution across the full stack. Trace-to-metric correlation built in." },
  { ttl:"Event-driven automation frameworks", desc:"Pure pub/sub backbone with replay, exactly-once semantics, and policy gates." },
  { ttl:"Large-scale analytical processing", desc:"Distributed query engines tuned for billion-row datasets and high-cardinality time series." },
  { ttl:"Data normalization and transformation", desc:"Schema-aware ETL with deterministic outputs and lineage tracking end-to-end." },
  { ttl:"Infrastructure observability", desc:"Three-pillar stack — metrics, logs, traces — bound to a single coherent operational view." },
  { ttl:"Diagnostics frameworks", desc:"Black-box and white-box probing, synthetic transactions, automated root-cause hints." },
];

function PageCapabilities() {
  return (
    <>
      <section className="section section--hero">
        <div className="wrap">
          <div className="eyebrow">§ 04 · TECHNOLOGY CAPABILITIES</div>
          <h1 className="hero-h1" style={{maxWidth:900}}>
            A stack designed for <span className="accent">high-performance computational</span> environments.
          </h1>
          <p className="hero-sub">Eight capability domains, all production-hardened. No half-built primitives. No experimental defaults.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="cap-grid">
            {CAPABILITIES.map((c, i) => (
              <div className="cap" key={i}>
                <span className="num">CAP · {String(i+1).padStart(2,"0")}</span>
                <span className="ttl">{c.ttl}</span>
                <span className="desc">{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="section-num">§ 05 · INTEGRATION</div>
              <h2 className="section-h">Enterprise integrations. <span className="muted">Modular by default.</span></h2>
            </div>
          </div>
          <div className="cap-grid cap-grid--3">
            {[
              ["API interoperability","REST, gRPC, message-bus adapters with schema enforcement."],
              ["External platform connectivity","Hardened, rate-aware adapters for third-party infrastructure."],
              ["Workflow synchronization","Cross-system orchestration with deterministic state machines."],
              ["Infrastructure coordination","Cluster-aware scheduling and resource arbitration layers."],
              ["Enterprise deployment","On-prem, hybrid, or VPC. Air-gapped builds available."],
              ["Identity & access","SSO, SCIM, role-graph mapping, fine-grained policy enforcement."],
            ].map(([t,d], i) => (
              <div className="cap" key={i}><span className="num">INT · {String(i+1).padStart(2,"0")}</span><span className="ttl">{t}</span><span className="desc">{d}</span></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ── RESEARCH ──────────────────────────────────────────────
function PageResearch() {
  return (
    <>
      <section className="section section--hero">
        <div className="wrap">
          <div className="eyebrow">§ 05 · RESEARCH & DEVELOPMENT</div>
          <h1 className="hero-h1" style={{maxWidth:900}}>
            Research is <span className="accent">central to our</span> infrastructure philosophy.
          </h1>
          <p className="hero-sub">
            Trend Hound continuously explores computational optimization, analytical modeling, workflow efficiency,
            infrastructure scalability, and intelligent automation systems.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="section-num">§ 05.1 · ACTIVE TRACKS</div>
              <h2 className="section-h">Internal research environments. <span className="muted">Experimentation, simulation, testing, iteration.</span></h2>
            </div>
            <div className="section-meta">
              <span>6 ACTIVE TRACKS</span>
              <span>UPDATED · 2026 / Q2</span>
            </div>
          </div>
          <div className="timeline">
            {[
              ["TRACK · 01","Computational optimization","Throughput-per-watt across analytical pipelines.",92],
              ["TRACK · 02","Analytical modeling","Probabilistic methods for high-cardinality data.",78],
              ["TRACK · 03","Workflow efficiency","Determinism guarantees in orchestrated graphs.",84],
              ["TRACK · 04","Infrastructure scalability","Sub-linear coordination overhead at fleet scale.",71],
              ["TRACK · 05","Intelligent automation","Adaptive policies for event-driven systems.",65],
              ["TRACK · 06","Simulation environments","Replayable, reproducible scenario harnesses.",88],
            ].map(([w, t, sub, p], i) => (
              <div className="tl-row" key={i}>
                <div className="when">{w}</div>
                <div className="what">{t}<small>{sub}</small></div>
                <div className="meter">
                  <span>{p}%</span>
                  <span className="bar"><span style={{width:`${p}%`}}></span></span>
                  <span style={{color:"var(--th-fg-2)"}}>READY</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="split">
            <div className="split-prose">
              <p>Internal research environments are designed to support experimentation, simulation, testing, and iterative system development.</p>
              <p>Outputs are integrated back into core infrastructure on a continuous cadence. Research and operations share tooling — there is no "research stack" disconnected from production reality.</p>
              <p>What ships is what was tested. What was tested is what was measured.</p>
            </div>
            <div>
              <PrinciplesPanel />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ── INDUSTRIES ────────────────────────────────────────────
const INDUSTRIES = [
  ["Enterprise analytics","Large-scale analytical workloads across business and operational data.",[]],
  ["Research environments","Controlled, reproducible compute for experimental modeling and analysis.",[]],
  ["Workflow automation","Event-driven orchestration of cross-system business processes.",[]],
  ["Computational infrastructure","Foundational compute, storage, and orchestration layers.",[]],
  ["Quantitative systems","High-throughput analytical pipelines with deterministic execution.",[]],
  ["Data processing operations","Real-time and batch transformation at production scale.",[]],
];

function PageIndustries() {
  return (
    <>
      <section className="section section--hero">
        <div className="wrap">
          <div className="eyebrow">§ 06 · INDUSTRIES & APPLICATIONS</div>
          <h1 className="hero-h1" style={{maxWidth:900}}>
            Built for <span className="accent">data-intensive and</span> automation-oriented environments.
          </h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="industries">
            {INDUSTRIES.map(([t, d], i) => (
              <div className="ind-card" key={i}>
                <span className="num">APPLICATION · {String(i+1).padStart(2,"0")} / 06</span>
                <span className="ttl">{t}</span>
                <span className="desc">{d}</span>
                <div className="spark"><MiniSpark seed={i+30} color={i%2===0 ? "#fff" : "var(--th-profit)"} fill={true}/></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="section-num">§ 07 · PARTNERSHIPS</div>
              <h2 className="section-h">Long-term infrastructure partnerships. <span className="muted">Enterprise integration. Deployment collaboration.</span></h2>
            </div>
          </div>
          <div className="split-prose">
            <p>Trend Hound collaborates with enterprise organizations, infrastructure providers, and technology partners requiring scalable analytical and automation systems.</p>
            <p>The company remains focused on long-term infrastructure partnerships, deployment collaborations, and enterprise technology integration — not transactional engagements.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="section-num">§ 08 · SECURITY & ARCHITECTURE</div>
              <h2 className="section-h">Foundational, not bolted-on. <span className="muted">Security, scalability, operational resilience.</span></h2>
            </div>
          </div>
          <div className="cap-grid cap-grid--3">
            {[
              ["Secure system architecture","Defense-in-depth across network, compute, and data layers."],
              ["Scalable infrastructure design","Horizontal scaling primitives baked into every component."],
              ["Reliability & fault tolerance","Graceful degradation paths. No single points of failure."],
              ["Infrastructure redundancy","Multi-region replication. Cross-zone failover."],
              ["Monitoring & visibility","Continuous operational visibility. Closed-loop alerting."],
              ["Controlled access environments","Zero-trust by default. Auditable access pathways."],
            ].map(([t,d], i) => (
              <div className="cap" key={i}><span className="num">SEC · {String(i+1).padStart(2,"0")}</span><span className="ttl">{t}</span><span className="desc">{d}</span></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ── CONTACT ───────────────────────────────────────────────
function PageContact() {
  const [submitted, setSubmitted] = useState3(false);
  return (
    <>
      <section className="section section--hero">
        <div className="wrap">
          <div className="eyebrow">§ 10 · CONTACT</div>
          <h1 className="hero-h1" style={{maxWidth:900}}>
            Enterprise inquiries. <span className="accent">Infrastructure collaborations.</span> Partnerships.
          </h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="field-row">
                <div className="field"><label>Name</label><input type="text" required placeholder="Full name" /></div>
                <div className="field"><label>Organization</label><input type="text" placeholder="Company / institution" /></div>
              </div>
              <div className="field-row">
                <div className="field"><label>Email</label><input type="email" required placeholder="name@org.com" /></div>
                <div className="field"><label>Inquiry type</label>
                  <select>
                    <option>Business inquiries</option>
                    <option>Enterprise partnerships</option>
                    <option>Technology collaborations</option>
                  </select>
                </div>
              </div>
              <div className="field"><label>Message</label><textarea required placeholder="Describe scope, scale, timeline."></textarea></div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:6}}>
                <span style={{fontFamily:"var(--mono)",fontSize:10,color:"var(--th-fg-3)",textTransform:"uppercase",letterSpacing:"0.08em"}}>
                  {submitted ? "● TRANSMITTED" : "READY · TLS 1.3"}
                </span>
                <button type="submit" className="btn btn--primary" disabled={submitted}>
                  {submitted ? "Submitted" : "Transmit"} <span style={{fontFamily:"var(--mono)",opacity:.7}}>→</span>
                </button>
              </div>
            </form>
            <div className="contact-side">
              <div className="contact-card">
                <h4>BUSINESS INQUIRIES</h4>
                <p>For commercial discussions, scoping, and procurement.</p>
                <span className="mono">contact@trendhound.ai</span>
              </div>
              <div className="contact-card">
                <h4>ENTERPRISE PARTNERSHIPS</h4>
                <p>Long-term infrastructure partnerships and joint deployments.</p>
                <span className="mono">contact@trendhound.ai</span>
              </div>
              <div className="contact-card">
                <h4>TECHNOLOGY COLLABORATIONS</h4>
                <p>Research, integration, and engineering collaboration.</p>
                <span className="mono">contact@trendhound.ai</span>
              </div>
              <div className="contact-card">
                <h4>DIRECT LINE</h4>
                <p>Phone — UK business hours.</p>
                <span className="mono">+44 7832 620694</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ── FOOTER ────────────────────────────────────────────────
function Footer({ setPage }) {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="brand">
              <span style={{fontFamily:"var(--th-display)",fontSize:32,letterSpacing:"0.16em",color:"#fff",lineHeight:1}}>TREND HOUND</span>
            </div>
            <div className="desc">Technology infrastructure provider. Computational systems, automation frameworks, analytics infrastructure, scalable enterprise software architecture.</div>
            <div className="desc" style={{display:"flex",flexDirection:"column",gap:4,fontFamily:"var(--mono)",fontSize:11,color:"#fff"}}>
              <span><span style={{color:"var(--th-fg-3)",textTransform:"uppercase",letterSpacing:"0.08em",fontSize:10,marginRight:6}}>EMAIL</span>contact@trendhound.ai</span>
              <span><span style={{color:"var(--th-fg-3)",textTransform:"uppercase",letterSpacing:"0.08em",fontSize:10,marginRight:6}}>TEL</span>+44 7832 620694</span>
            </div>
            <div className="desc" style={{fontFamily:"var(--mono)",fontSize:10,color:"var(--th-fg-3)",textTransform:"uppercase",letterSpacing:"0.08em"}}>
              <span style={{display:"inline-block",width:6,height:6,borderRadius:"50%",background:"var(--th-profit)",marginRight:6,boxShadow:"0 0 6px rgba(74,222,128,.6)"}}></span>
              ALL SYSTEMS · OPERATIONAL
            </div>
          </div>
          <div className="foot-col">
            <h5>Sitemap</h5>
            <ul>
              {PAGES.map(p => <li key={p.id}><a onClick={() => setPage(p.id)} style={{cursor:"pointer"}}>{p.label}</a></li>)}
            </ul>
          </div>
          <div className="foot-col">
            <h5>Domains</h5>
            <ul>
              <li><a>Core infrastructure</a></li>
              <li><a>Capabilities</a></li>
              <li><a>Integrations</a></li>
              <li><a>Security & architecture</a></li>
              <li><a>Research tracks</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Legal</h5>
            <ul>
              <li><a>Privacy Policy</a></li>
              <li><a>Terms of Use</a></li>
              <li><a>Technology Disclaimer</a></li>
              <li><a>Jurisdiction Notice</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-disclaimer">
          Trend Hound provides software infrastructure and technology services only. The company does not provide brokerage, custody, investment advisory, portfolio management, or other regulated financial services. Nothing on this website constitutes investment advice, financial promotion, or an offer of regulated financial services.
        </div>
        <div className="foot-bottom">
          <span>© 2026 TREND HOUND · TECHNOLOGY INFRASTRUCTURE PROVIDER</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
}

window.PageInfrastructure = PageInfrastructure;
window.PageCapabilities = PageCapabilities;
window.PageResearch = PageResearch;
window.PageIndustries = PageIndustries;
window.PageContact = PageContact;
window.Footer = Footer;
