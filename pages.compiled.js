// pages.jsx — page bodies for Trend Hound site
const {
  useState: useState2,
  useEffect: useEffect2
} = React;

// ── HOME ──────────────────────────────────────────────────────
function PageHome({
  setPage
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "section section--hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "TECHNOLOGY INFRASTRUCTURE PROVIDER"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-h1"
  }, "Computational systems", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "built for data-intensive"), /*#__PURE__*/React.createElement("br", null), "environments."), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "Trend Hound builds software systems for performance, reliability, and real-time infrastructure orchestration. Automation frameworks, analytics infrastructure, scalable enterprise software architecture."), /*#__PURE__*/React.createElement("div", {
    className: "hero-tags"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "ENTERPRISE INFRASTRUCTURE"), /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "QUANTITATIVE SYSTEMS"), /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "INTELLIGENT AUTOMATION")), /*#__PURE__*/React.createElement("div", {
    className: "hero-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary",
    onClick: () => setPage("contact")
  }, "Contact ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--mono)",
      opacity: .7
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--ghost",
    onClick: () => setPage("infrastructure")
  }, "View infrastructure"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroDataPanel, null))), /*#__PURE__*/React.createElement("div", {
    className: "stats"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Events / second"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, /*#__PURE__*/React.createElement(Counter, {
    to: 184243
  })), /*#__PURE__*/React.createElement("span", {
    className: "sub"
  }, "Sustained, multi-region")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Pipelines"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, /*#__PURE__*/React.createElement(Counter, {
    to: 1284
  })), /*#__PURE__*/React.createElement("span", {
    className: "sub"
  }, "Concurrent orchestrations")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "P99 latency"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, /*#__PURE__*/React.createElement(Counter, {
    to: 2.41,
    decimals: 2,
    suffix: "ms"
  })), /*#__PURE__*/React.createElement("span", {
    className: "sub"
  }, "Stream-bus, end-to-end")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Uptime \xB7 90d"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, /*#__PURE__*/React.createElement(Counter, {
    to: 99.992,
    decimals: 3,
    suffix: "%"
  })), /*#__PURE__*/React.createElement("span", {
    className: "sub"
  }, "Across all regions"))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section-num"
  }, "\xA7 02 \xB7 CORE INFRASTRUCTURE"), /*#__PURE__*/React.createElement("h2", {
    className: "section-h"
  }, "Modular systems designed for ", /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "scalability, interoperability, and operational flexibility."))), /*#__PURE__*/React.createElement("div", {
    className: "section-meta"
  }, /*#__PURE__*/React.createElement("span", null, "UPDATED \xB7 2026 / Q2"), /*#__PURE__*/React.createElement("span", null, "7 DOMAINS"))), /*#__PURE__*/React.createElement(CoreGridPreview, null))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section-num"
  }, "\xA7 03 \xB7 ARCHITECTURE"), /*#__PURE__*/React.createElement("h2", {
    className: "section-h"
  }, "Event-driven by default. ", /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "Distributed by design."))), /*#__PURE__*/React.createElement("div", {
    className: "section-meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 8,
      height: 2,
      background: "var(--th-profit)",
      verticalAlign: "middle",
      marginRight: 6
    }
  }), "LIVE PATH"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 8,
      height: 2,
      background: "#3a3a3a",
      verticalAlign: "middle",
      marginRight: 6
    }
  }), "STATIC LINK"))), /*#__PURE__*/React.createElement(ArchDiagram, null))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "compliance"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "\xA7 09 \xB7 COMPLIANCE")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Trend Hound is a technology and infrastructure provider."), /*#__PURE__*/React.createElement("p", null, "The company does not provide brokerage, custody, investment advisory, portfolio management, or other regulated financial services. Any regulated activities are performed by appropriately licensed third-party institutions where applicable."), /*#__PURE__*/React.createElement("p", null, "Nothing on this website constitutes investment advice, financial promotion, or an offer of regulated financial services."))))));
}

// hero data panel — strip + chart
function HeroDataPanel() {
  const [tf, setTf] = useState2("1H");
  return /*#__PURE__*/React.createElement("div", {
    className: "hero-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-card-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ttl"
  }, "INFRA \xB7 STREAM-BUS / NORTH-1"), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "STREAMING"), /*#__PURE__*/React.createElement("span", null, tf))), /*#__PURE__*/React.createElement("div", {
    className: "hero-strip"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Throughput"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "184.2K", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--th-fg-3)",
      fontSize: 11
    }
  }, " /s"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Latency \xB7 p99"), /*#__PURE__*/React.createElement("span", {
    className: "v up"
  }, "2.41ms")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Nodes"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "412")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "\u0394 1H"), /*#__PURE__*/React.createElement("span", {
    className: "v up"
  }, "+4.31%"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-chart"
  }, /*#__PURE__*/React.createElement(HeroChart, null)), /*#__PURE__*/React.createElement("div", {
    className: "hero-card-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dots"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "swatch"
  }), " THROUGHPUT"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "swatch",
    style: {
      background: "#666"
    }
  }), " BASELINE"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "swatch green"
  }), " LIVE")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 0,
      border: "1px solid var(--th-border-strong)",
      borderRadius: 3,
      overflow: "hidden"
    }
  }, ["1H", "6H", "24H", "7D"].map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTf(t),
    style: {
      background: tf === t ? "var(--th-surface-2)" : "transparent",
      color: tf === t ? "#fff" : "var(--th-fg-3)",
      border: 0,
      borderRight: i < 3 ? "1px solid var(--th-border)" : "0",
      padding: "4px 9px",
      fontFamily: "var(--mono)",
      fontSize: 10,
      cursor: "pointer"
    }
  }, t)))));
}

// ── core grid preview (4 items) ──
const CORE_PREVIEW = [{
  ttl: "Real-time data processing",
  desc: "Stream-bus ingestion, transformation and routing across regions."
}, {
  ttl: "Quantitative workflow infrastructure",
  desc: "Deterministic execution graphs for analytical pipelines."
}, {
  ttl: "Distributed processing architecture",
  desc: "Horizontal compute across heterogeneous node fleets."
}, {
  ttl: "Automation & orchestration frameworks",
  desc: "Event-driven schedulers with policy-based routing."
}];
function CoreGridPreview() {
  return /*#__PURE__*/React.createElement("div", {
    className: "cap-grid"
  }, CORE_PREVIEW.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "cap",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, String(i + 1).padStart(2, "0"), " / 07"), /*#__PURE__*/React.createElement("span", {
    className: "ttl"
  }, c.ttl), /*#__PURE__*/React.createElement("span", {
    className: "desc"
  }, c.desc))));
}

// ── ARCHITECTURE DIAGRAM ─────────────────────────────────
function ArchDiagram() {
  // animated pulse along the edges
  const W = 1200,
    H = 360;
  const layers = [{
    x: 80,
    nodes: ["EXCHANGE FEEDS", "ENTERPRISE APIS", "RESEARCH SOURCES"]
  }, {
    x: 360,
    nodes: ["INGEST · NORMALIZE", "EVENT STREAM-BUS"]
  }, {
    x: 640,
    nodes: ["RULE ENGINE", "MODEL INFERENCE", "SIMULATION"]
  }, {
    x: 920,
    nodes: ["WORKFLOW ORCHESTRATOR", "OBSERVABILITY"]
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "arch"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    className: "arch-svg",
    preserveAspectRatio: "xMidYMid meet"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "arch-grid",
    width: "40",
    height: "40",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 40 0 L 0 0 0 40",
    fill: "none",
    stroke: "#161616",
    strokeWidth: "1"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: W,
    height: H,
    fill: "url(#arch-grid)"
  }), layers.slice(0, -1).map((L, li) => {
    const next = layers[li + 1];
    const nW = 200;
    return L.nodes.flatMap((_, ni) => next.nodes.map((__, mi) => {
      const y1 = 60 + ni * 90 + 24;
      const y2 = 60 + mi * 90 + 24;
      const x1 = L.x + nW;
      const x2 = next.x;
      const live = (ni + mi + li) % 3 === 0;
      const cx = (x1 + x2) / 2;
      return /*#__PURE__*/React.createElement("g", {
        key: `${li}-${ni}-${mi}`
      }, /*#__PURE__*/React.createElement("path", {
        d: `M${x1},${y1} C${cx},${y1} ${cx},${y2} ${x2},${y2}`,
        className: live ? "arch-edge arch-edge--live" : "arch-edge"
      }), live && /*#__PURE__*/React.createElement("circle", {
        r: "3",
        className: "arch-pulse"
      }, /*#__PURE__*/React.createElement("animateMotion", {
        dur: `${2.5 + (ni + mi) % 3 * 0.6}s`,
        repeatCount: "indefinite",
        path: `M${x1},${y1} C${cx},${y1} ${cx},${y2} ${x2},${y2}`
      })));
    }));
  }), layers.map((L, li) => L.nodes.map((n, ni) => {
    const y = 60 + ni * 90;
    const accent = li === 1 || li === 2 && ni === 1;
    return /*#__PURE__*/React.createElement("g", {
      key: `n-${li}-${ni}`,
      className: "arch-node" + (accent ? " arch-node--accent" : ""),
      transform: `translate(${L.x},${y})`
    }, /*#__PURE__*/React.createElement("rect", {
      width: "200",
      height: "48",
      rx: "4"
    }), /*#__PURE__*/React.createElement("text", {
      x: "14",
      y: "20",
      fill: "#a8a8a8",
      style: {
        fontSize: 9,
        letterSpacing: "0.08em",
        textTransform: "uppercase"
      }
    }, "LAYER ", li + 1), /*#__PURE__*/React.createElement("text", {
      x: "14",
      y: "36"
    }, n));
  })), ["SOURCES", "INGEST", "COMPUTE", "ORCHESTRATION"].map((L, i) => /*#__PURE__*/React.createElement("text", {
    key: L,
    x: layers[i].x,
    y: H - 18,
    fill: "#444",
    style: {
      fontFamily: "var(--mono)",
      fontSize: 10,
      letterSpacing: "0.08em"
    }
  }, "\xA7 0", i + 1, " \xB7 ", L))));
}

// ── ABOUT ──────────────────────────────────────────────────
function PageAbout() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "section section--hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "\xA7 01 \xB7 ABOUT"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-h1",
    style: {
      maxWidth: 880
    }
  }, "Software infrastructure ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "and analytical systems for enterprise"), " environments."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split-prose"
  }, /*#__PURE__*/React.createElement("p", null, "Trend Hound develops software infrastructure and analytical systems designed for enterprise and research-oriented environments."), /*#__PURE__*/React.createElement("p", null, "Our work focuses on scalable computational infrastructure, automation frameworks, workflow orchestration, AI-assisted systems, and real-time analytical environments."), /*#__PURE__*/React.createElement("p", null, "The company operates strictly as a technology and infrastructure provider and does not provide regulated financial services.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PrinciplesPanel, null))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section-num"
  }, "\xA7 02 \xB7 DOCTRINE"), /*#__PURE__*/React.createElement("h2", {
    className: "section-h"
  }, "Operator-grade defaults. ", /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "No marketing fluff.")))), /*#__PURE__*/React.createElement("div", {
    className: "cap-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "01"), /*#__PURE__*/React.createElement("span", {
    className: "ttl"
  }, "Performance is non-negotiable"), /*#__PURE__*/React.createElement("span", {
    className: "desc"
  }, "P99 latencies are budgets, not aspirations. Every component carries an SLO.")), /*#__PURE__*/React.createElement("div", {
    className: "cap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "02"), /*#__PURE__*/React.createElement("span", {
    className: "ttl"
  }, "Determinism over magic"), /*#__PURE__*/React.createElement("span", {
    className: "desc"
  }, "Reproducible execution graphs. No black boxes in critical paths.")), /*#__PURE__*/React.createElement("div", {
    className: "cap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "03"), /*#__PURE__*/React.createElement("span", {
    className: "ttl"
  }, "Observability by default"), /*#__PURE__*/React.createElement("span", {
    className: "desc"
  }, "If it ships without metrics, traces, and structured logs, it doesn't ship.")), /*#__PURE__*/React.createElement("div", {
    className: "cap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "04"), /*#__PURE__*/React.createElement("span", {
    className: "ttl"
  }, "Modularity over monoliths"), /*#__PURE__*/React.createElement("span", {
    className: "desc"
  }, "Composable layers. Replace any block without rewriting the system."))))));
}
function PrinciplesPanel() {
  const cpu = useLiveSeries(60, 0.6, 0.0);
  const mem = useLiveSeries(60, 0.4, 0.0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--th-surface-1)",
      border: "1px solid var(--th-border)",
      borderRadius: 6,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 14px",
      borderBottom: "1px solid var(--th-border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.02em"
    }
  }, "SYSTEM \xB7 PRINCIPLES MONITOR"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--mono)",
      fontSize: 10,
      color: "var(--th-fg-3)",
      textTransform: "uppercase",
      letterSpacing: "0.08em"
    }
  }, "LIVE")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, [["Reliability index", "99.992%", cpu, "var(--th-profit)"], ["Determinism score", "1.000", mem, "#fff"], ["Observability cov.", "100%", useLiveSeries(60, 0.3, 0.0), "#fff"], ["Modularity ratio", "0.94", useLiveSeries(60, 0.5, 0.0), "#a8a8a8"]].map(([k, v, data, col], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--mono)",
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--th-fg-3)",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      fontSize: 10
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff"
    }
  }, v)), /*#__PURE__*/React.createElement(MiniSpark, {
    seed: i,
    color: col,
    fill: true
  })))));
}
window.PageHome = PageHome;
window.PageAbout = PageAbout;