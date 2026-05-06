// pages2.jsx — remaining pages
const {
  useState: useState3,
  useEffect: useEffect3
} = React;

// ── INFRASTRUCTURE ────────────────────────────────────────
const CORE_AREAS = [{
  ttl: "Real-time data processing systems",
  desc: "Stream-bus ingestion, transformation, routing across regions with deterministic ordering guarantees."
}, {
  ttl: "Quantitative workflow infrastructure",
  desc: "Reproducible execution graphs for analytical pipelines. Versioned, traceable, replayable."
}, {
  ttl: "Simulation and modeling environments",
  desc: "Sandboxed environments for parameter sweeps, scenario tests, and Monte Carlo runs at scale."
}, {
  ttl: "Distributed processing architecture",
  desc: "Horizontal compute across heterogeneous node fleets. Region-aware scheduling."
}, {
  ttl: "Enterprise analytics infrastructure",
  desc: "Columnar stores, time-series indices, query layers tuned for high-cardinality datasets."
}, {
  ttl: "Automation & orchestration frameworks",
  desc: "Event-driven schedulers with policy-based routing. Declarative workflow specs."
}, {
  ttl: "API connectivity systems",
  desc: "Hardened gateways, rate-aware adapters, normalization layer for external infrastructure."
}];
function PageInfrastructure() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "section section--hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "\xA7 03 \xB7 CORE INFRASTRUCTURE"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-h1",
    style: {
      maxWidth: 900
    }
  }, "Modular infrastructure systems ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "designed for scalability,"), " interoperability, operational flexibility."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cap-grid"
  }, CORE_AREAS.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "cap",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "\xA7 ", String(i + 1).padStart(2, "0"), " / 07"), /*#__PURE__*/React.createElement("span", {
    className: "ttl"
  }, c.ttl), /*#__PURE__*/React.createElement("span", {
    className: "desc"
  }, c.desc))), /*#__PURE__*/React.createElement("div", {
    className: "cap",
    style: {
      justifyContent: "space-between",
      alignItems: "flex-start",
      background: "var(--th-bg)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "DOMAIN COVERAGE"), /*#__PURE__*/React.createElement("span", {
    className: "ttl",
    style: {
      fontSize: 32,
      letterSpacing: "-0.02em"
    }
  }, "7 / 7"), /*#__PURE__*/React.createElement("span", {
    className: "desc"
  }, "All seven core infrastructure domains operational, instrumented, and integrated under a single coherent execution model."))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section-num"
  }, "\xA7 04 \xB7 LIVE TELEMETRY"), /*#__PURE__*/React.createElement("h2", {
    className: "section-h"
  }, "Infrastructure ", /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "in motion.")))), /*#__PURE__*/React.createElement(TelemetryGrid, null))));
}
function TelemetryGrid() {
  const items = [{
    k: "Stream-bus throughput",
    v: "184.2K/s",
    col: "#fff"
  }, {
    k: "Pipeline executions",
    v: "1,284",
    col: "#fff"
  }, {
    k: "Inference latency · p99",
    v: "5.91ms",
    col: "var(--th-profit)"
  }, {
    k: "Compute fleet · CPU",
    v: "37.8%",
    col: "#fff"
  }, {
    k: "Storage I/O",
    v: "62.1GB/s",
    col: "#fff"
  }, {
    k: "API gateway · p99",
    v: "18.4ms",
    col: "var(--th-profit)"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "cap-grid cap-grid--3"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "cap",
    key: i,
    style: {
      minHeight: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "METRIC \xB7 ", String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--mono)",
      fontSize: 10,
      color: "var(--th-profit)",
      letterSpacing: "0.08em"
    }
  }, "\u25CF LIVE")), /*#__PURE__*/React.createElement("span", {
    className: "ttl",
    style: {
      color: "var(--th-fg-2)",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      fontWeight: 500
    }
  }, it.k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      color: "#fff",
      fontVariantNumeric: "tabular-nums",
      letterSpacing: "-0.01em",
      fontWeight: 500
    }
  }, it.v), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement(MiniSpark, {
    seed: i + 10,
    color: it.col,
    fill: true
  })))));
}

// ── CAPABILITIES ──────────────────────────────────────────
const CAPABILITIES = [{
  ttl: "AI-assisted infrastructure systems",
  desc: "Model-augmented routing, anomaly detection, predictive scaling layered into the operational fabric."
}, {
  ttl: "Rule-engine architecture",
  desc: "Composable, declarative rule graphs. Hot-swappable conditions without redeploys."
}, {
  ttl: "Real-time monitoring systems",
  desc: "Sub-second metric resolution across the full stack. Trace-to-metric correlation built in."
}, {
  ttl: "Event-driven automation frameworks",
  desc: "Pure pub/sub backbone with replay, exactly-once semantics, and policy gates."
}, {
  ttl: "Large-scale analytical processing",
  desc: "Distributed query engines tuned for billion-row datasets and high-cardinality time series."
}, {
  ttl: "Data normalization and transformation",
  desc: "Schema-aware ETL with deterministic outputs and lineage tracking end-to-end."
}, {
  ttl: "Infrastructure observability",
  desc: "Three-pillar stack — metrics, logs, traces — bound to a single coherent operational view."
}, {
  ttl: "Diagnostics frameworks",
  desc: "Black-box and white-box probing, synthetic transactions, automated root-cause hints."
}];
function PageCapabilities() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "section section--hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "\xA7 04 \xB7 TECHNOLOGY CAPABILITIES"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-h1",
    style: {
      maxWidth: 900
    }
  }, "A stack designed for ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "high-performance computational"), " environments."), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "Eight capability domains, all production-hardened. No half-built primitives. No experimental defaults."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cap-grid"
  }, CAPABILITIES.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "cap",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "CAP \xB7 ", String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    className: "ttl"
  }, c.ttl), /*#__PURE__*/React.createElement("span", {
    className: "desc"
  }, c.desc)))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section-num"
  }, "\xA7 05 \xB7 INTEGRATION"), /*#__PURE__*/React.createElement("h2", {
    className: "section-h"
  }, "Enterprise integrations. ", /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "Modular by default.")))), /*#__PURE__*/React.createElement("div", {
    className: "cap-grid cap-grid--3"
  }, [["API interoperability", "REST, gRPC, message-bus adapters with schema enforcement."], ["External platform connectivity", "Hardened, rate-aware adapters for third-party infrastructure."], ["Workflow synchronization", "Cross-system orchestration with deterministic state machines."], ["Infrastructure coordination", "Cluster-aware scheduling and resource arbitration layers."], ["Enterprise deployment", "On-prem, hybrid, or VPC. Air-gapped builds available."], ["Identity & access", "SSO, SCIM, role-graph mapping, fine-grained policy enforcement."]].map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    className: "cap",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "INT \xB7 ", String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    className: "ttl"
  }, t), /*#__PURE__*/React.createElement("span", {
    className: "desc"
  }, d)))))));
}

// ── RESEARCH ──────────────────────────────────────────────
function PageResearch() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "section section--hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "\xA7 05 \xB7 RESEARCH & DEVELOPMENT"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-h1",
    style: {
      maxWidth: 900
    }
  }, "Research is ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "central to our"), " infrastructure philosophy."), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "Trend Hound continuously explores computational optimization, analytical modeling, workflow efficiency, infrastructure scalability, and intelligent automation systems."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section-num"
  }, "\xA7 05.1 \xB7 ACTIVE TRACKS"), /*#__PURE__*/React.createElement("h2", {
    className: "section-h"
  }, "Internal research environments. ", /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "Experimentation, simulation, testing, iteration."))), /*#__PURE__*/React.createElement("div", {
    className: "section-meta"
  }, /*#__PURE__*/React.createElement("span", null, "6 ACTIVE TRACKS"), /*#__PURE__*/React.createElement("span", null, "UPDATED \xB7 2026 / Q2"))), /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, [["TRACK · 01", "Computational optimization", "Throughput-per-watt across analytical pipelines.", 92], ["TRACK · 02", "Analytical modeling", "Probabilistic methods for high-cardinality data.", 78], ["TRACK · 03", "Workflow efficiency", "Determinism guarantees in orchestrated graphs.", 84], ["TRACK · 04", "Infrastructure scalability", "Sub-linear coordination overhead at fleet scale.", 71], ["TRACK · 05", "Intelligent automation", "Adaptive policies for event-driven systems.", 65], ["TRACK · 06", "Simulation environments", "Replayable, reproducible scenario harnesses.", 88]].map(([w, t, sub, p], i) => /*#__PURE__*/React.createElement("div", {
    className: "tl-row",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "when"
  }, w), /*#__PURE__*/React.createElement("div", {
    className: "what"
  }, t, /*#__PURE__*/React.createElement("small", null, sub)), /*#__PURE__*/React.createElement("div", {
    className: "meter"
  }, /*#__PURE__*/React.createElement("span", null, p, "%"), /*#__PURE__*/React.createElement("span", {
    className: "bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: `${p}%`
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--th-fg-2)"
    }
  }, "READY"))))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split-prose"
  }, /*#__PURE__*/React.createElement("p", null, "Internal research environments are designed to support experimentation, simulation, testing, and iterative system development."), /*#__PURE__*/React.createElement("p", null, "Outputs are integrated back into core infrastructure on a continuous cadence. Research and operations share tooling \u2014 there is no \"research stack\" disconnected from production reality."), /*#__PURE__*/React.createElement("p", null, "What ships is what was tested. What was tested is what was measured.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PrinciplesPanel, null))))));
}

// ── INDUSTRIES ────────────────────────────────────────────
const INDUSTRIES = [["Enterprise analytics", "Large-scale analytical workloads across business and operational data.", []], ["Research environments", "Controlled, reproducible compute for experimental modeling and analysis.", []], ["Workflow automation", "Event-driven orchestration of cross-system business processes.", []], ["Computational infrastructure", "Foundational compute, storage, and orchestration layers.", []], ["Quantitative systems", "High-throughput analytical pipelines with deterministic execution.", []], ["Data processing operations", "Real-time and batch transformation at production scale.", []]];
function PageIndustries() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "section section--hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "\xA7 06 \xB7 INDUSTRIES & APPLICATIONS"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-h1",
    style: {
      maxWidth: 900
    }
  }, "Built for ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "data-intensive and"), " automation-oriented environments."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "industries"
  }, INDUSTRIES.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    className: "ind-card",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "APPLICATION \xB7 ", String(i + 1).padStart(2, "0"), " / 06"), /*#__PURE__*/React.createElement("span", {
    className: "ttl"
  }, t), /*#__PURE__*/React.createElement("span", {
    className: "desc"
  }, d), /*#__PURE__*/React.createElement("div", {
    className: "spark"
  }, /*#__PURE__*/React.createElement(MiniSpark, {
    seed: i + 30,
    color: i % 2 === 0 ? "#fff" : "var(--th-profit)",
    fill: true
  }))))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section-num"
  }, "\xA7 07 \xB7 PARTNERSHIPS"), /*#__PURE__*/React.createElement("h2", {
    className: "section-h"
  }, "Long-term infrastructure partnerships. ", /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "Enterprise integration. Deployment collaboration.")))), /*#__PURE__*/React.createElement("div", {
    className: "split-prose"
  }, /*#__PURE__*/React.createElement("p", null, "Trend Hound collaborates with enterprise organizations, infrastructure providers, and technology partners requiring scalable analytical and automation systems."), /*#__PURE__*/React.createElement("p", null, "The company remains focused on long-term infrastructure partnerships, deployment collaborations, and enterprise technology integration \u2014 not transactional engagements.")))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section-num"
  }, "\xA7 08 \xB7 SECURITY & ARCHITECTURE"), /*#__PURE__*/React.createElement("h2", {
    className: "section-h"
  }, "Foundational, not bolted-on. ", /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "Security, scalability, operational resilience.")))), /*#__PURE__*/React.createElement("div", {
    className: "cap-grid cap-grid--3"
  }, [["Secure system architecture", "Defense-in-depth across network, compute, and data layers."], ["Scalable infrastructure design", "Horizontal scaling primitives baked into every component."], ["Reliability & fault tolerance", "Graceful degradation paths. No single points of failure."], ["Infrastructure redundancy", "Multi-region replication. Cross-zone failover."], ["Monitoring & visibility", "Continuous operational visibility. Closed-loop alerting."], ["Controlled access environments", "Zero-trust by default. Auditable access pathways."]].map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    className: "cap",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "SEC \xB7 ", String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    className: "ttl"
  }, t), /*#__PURE__*/React.createElement("span", {
    className: "desc"
  }, d)))))));
}

// ── CONTACT ───────────────────────────────────────────────
function PageContact() {
  const [submitted, setSubmitted] = useState3(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "section section--hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "\xA7 10 \xB7 CONTACT"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-h1",
    style: {
      maxWidth: 900
    }
  }, "Enterprise inquiries. ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "Infrastructure collaborations."), " Partnerships."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("form", {
    className: "contact-form",
    onSubmit: e => {
      e.preventDefault();
      setSubmitted(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    placeholder: "Full name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Organization"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Company / institution"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "field-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    placeholder: "name@org.com"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Inquiry type"), /*#__PURE__*/React.createElement("select", null, /*#__PURE__*/React.createElement("option", null, "Business inquiries"), /*#__PURE__*/React.createElement("option", null, "Enterprise partnerships"), /*#__PURE__*/React.createElement("option", null, "Technology collaborations")))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Message"), /*#__PURE__*/React.createElement("textarea", {
    required: true,
    placeholder: "Describe scope, scale, timeline."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--mono)",
      fontSize: 10,
      color: "var(--th-fg-3)",
      textTransform: "uppercase",
      letterSpacing: "0.08em"
    }
  }, submitted ? "● TRANSMITTED" : "READY · TLS 1.3"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn--primary",
    disabled: submitted
  }, submitted ? "Submitted" : "Transmit", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--mono)",
      opacity: .7
    }
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "contact-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-card"
  }, /*#__PURE__*/React.createElement("h4", null, "BUSINESS INQUIRIES"), /*#__PURE__*/React.createElement("p", null, "For commercial discussions, scoping, and procurement."), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "contact@trendhound.ai")), /*#__PURE__*/React.createElement("div", {
    className: "contact-card"
  }, /*#__PURE__*/React.createElement("h4", null, "ENTERPRISE PARTNERSHIPS"), /*#__PURE__*/React.createElement("p", null, "Long-term infrastructure partnerships and joint deployments."), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "contact@trendhound.ai")), /*#__PURE__*/React.createElement("div", {
    className: "contact-card"
  }, /*#__PURE__*/React.createElement("h4", null, "TECHNOLOGY COLLABORATIONS"), /*#__PURE__*/React.createElement("p", null, "Research, integration, and engineering collaboration."), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "contact@trendhound.ai")), /*#__PURE__*/React.createElement("div", {
    className: "contact-card"
  }, /*#__PURE__*/React.createElement("h4", null, "DIRECT LINE"), /*#__PURE__*/React.createElement("p", null, "Phone \u2014 UK business hours."), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "+44 7832 620694")))))));
}

// ── FOOTER ────────────────────────────────────────────────
function Footer({
  setPage
}) {
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--th-display)",
      fontSize: 32,
      letterSpacing: "0.16em",
      color: "#fff",
      lineHeight: 1
    }
  }, "TREND HOUND")), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, "Technology infrastructure provider. Computational systems, automation frameworks, analytics infrastructure, scalable enterprise software architecture."), /*#__PURE__*/React.createElement("div", {
    className: "desc",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      fontFamily: "var(--mono)",
      fontSize: 11,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--th-fg-3)",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      fontSize: 10,
      marginRight: 6
    }
  }, "EMAIL"), "contact@trendhound.ai"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--th-fg-3)",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      fontSize: 10,
      marginRight: 6
    }
  }, "TEL"), "+44 7832 620694")), /*#__PURE__*/React.createElement("div", {
    className: "desc",
    style: {
      fontFamily: "var(--mono)",
      fontSize: 10,
      color: "var(--th-fg-3)",
      textTransform: "uppercase",
      letterSpacing: "0.08em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--th-profit)",
      marginRight: 6,
      boxShadow: "0 0 6px rgba(74,222,128,.6)"
    }
  }), "ALL SYSTEMS \xB7 OPERATIONAL")), /*#__PURE__*/React.createElement("div", {
    className: "foot-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Sitemap"), /*#__PURE__*/React.createElement("ul", null, PAGES.map(p => /*#__PURE__*/React.createElement("li", {
    key: p.id
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => setPage(p.id),
    style: {
      cursor: "pointer"
    }
  }, p.label))))), /*#__PURE__*/React.createElement("div", {
    className: "foot-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Domains"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Core infrastructure")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Capabilities")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Integrations")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Security & architecture")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Research tracks")))), /*#__PURE__*/React.createElement("div", {
    className: "foot-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Legal"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Privacy Policy")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Terms of Use")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Technology Disclaimer")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Jurisdiction Notice"))))), /*#__PURE__*/React.createElement("div", {
    className: "foot-disclaimer"
  }, "Trend Hound provides software infrastructure and technology services only. The company does not provide brokerage, custody, investment advisory, portfolio management, or other regulated financial services. Nothing on this website constitutes investment advice, financial promotion, or an offer of regulated financial services."), /*#__PURE__*/React.createElement("div", {
    className: "foot-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 TREND HOUND \xB7 TECHNOLOGY INFRASTRUCTURE PROVIDER"), /*#__PURE__*/React.createElement("span", null, "ALL RIGHTS RESERVED"))));
}
window.PageInfrastructure = PageInfrastructure;
window.PageCapabilities = PageCapabilities;
window.PageResearch = PageResearch;
window.PageIndustries = PageIndustries;
window.PageContact = PageContact;
window.Footer = Footer;