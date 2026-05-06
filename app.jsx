// app.jsx — Trend Hound website
const { useState, useEffect, useRef, useMemo } = React;

// ── Logo mark (inline so it inherits color) ─────────────────
function LogoMark() {
  return (
    <svg viewBox="0 0 23.134 42.082" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true">
      <g fill="currentColor">
        <path d="M 1.542 37.675 L 1.542 32.828 C 1.542 32.463 1.838 32.167 2.203 32.167 C 2.568 32.167 2.864 32.463 2.864 32.828 L 2.864 37.675 C 2.864 38.04 2.568 38.337 2.203 38.337 C 1.838 38.337 1.542 38.04 1.542 37.675 Z"/>
        <path d="M 3.085 39.879 C 3.085 39.392 2.69 38.997 2.203 38.997 C 1.717 38.997 1.322 39.392 1.322 39.879 C 1.322 40.366 1.717 40.76 2.203 40.76 L 2.203 42.082 C 0.986 42.082 0 41.096 0 39.879 C 0 38.662 0.986 37.676 2.203 37.676 C 3.42 37.676 4.406 38.662 4.406 39.879 C 4.406 41.096 3.42 42.082 2.203 42.082 L 2.203 40.76 C 2.69 40.76 3.085 40.366 3.085 39.879 Z"/>
        <path d="M 1.542 4.407 L 1.542 9.254 C 1.542 9.619 1.838 9.915 2.203 9.915 C 2.568 9.915 2.864 9.619 2.864 9.254 L 2.864 4.407 C 2.864 4.042 2.568 3.746 2.203 3.746 C 1.838 3.746 1.542 4.042 1.542 4.407 Z"/>
        <path d="M 3.085 2.203 C 3.085 2.69 2.69 3.085 2.203 3.085 C 1.717 3.085 1.322 2.69 1.322 2.203 C 1.322 1.717 1.717 1.322 2.203 1.322 L 2.203 0 C 0.986 0 0 0.986 0 2.203 C 0 3.42 0.986 4.406 2.203 4.406 C 3.42 4.406 4.406 3.42 4.406 2.203 C 4.406 0.986 3.42 0 2.203 0 L 2.203 1.322 C 2.69 1.322 3.085 1.717 3.085 2.203 Z"/>
        <path d="M 18.728 21.812 L 13.881 21.812 C 13.516 21.812 13.22 21.516 13.22 21.151 C 13.22 20.786 13.516 20.49 13.881 20.49 L 18.728 20.49 C 19.093 20.49 19.389 20.786 19.389 21.151 C 19.389 21.516 19.093 21.812 18.728 21.812 Z"/>
        <path d="M 20.931 20.27 C 20.445 20.27 20.05 20.664 20.05 21.151 C 20.05 21.638 20.445 22.033 20.931 22.033 C 21.418 22.033 21.813 21.638 21.813 21.151 L 23.134 21.151 C 23.134 22.368 22.148 23.354 20.931 23.354 C 19.714 23.354 18.728 22.368 18.728 21.151 C 18.728 19.934 19.714 18.948 20.931 18.948 C 22.148 18.948 23.134 19.934 23.134 21.151 L 21.813 21.151 C 21.813 20.664 21.418 20.27 20.931 20.27 Z"/>
        <path d="M 21.812 5.508 C 21.812 5.995 21.417 6.39 20.931 6.39 C 20.444 6.39 20.049 5.995 20.049 5.508 C 20.049 5.021 20.444 4.627 20.931 4.627 L 20.931 3.305 C 19.714 3.305 18.727 4.291 18.727 5.508 C 18.727 6.725 19.714 7.711 20.931 7.711 C 22.147 7.711 23.134 6.725 23.134 5.508 C 23.134 4.291 22.147 3.305 20.931 3.305 L 20.931 4.627 C 21.417 4.627 21.812 5.021 21.812 5.508 Z"/>
        <path d="M 18.727 4.847 C 19.092 4.847 19.388 5.143 19.388 5.508 C 19.388 5.873 19.092 6.169 18.727 6.169 L 10.419 6.169 L 6.649 10.149 C 6.398 10.414 5.979 10.425 5.714 10.174 C 5.449 9.923 5.438 9.505 5.689 9.24 L 9.524 5.191 L 9.606 5.114 C 9.805 4.943 10.059 4.847 10.324 4.847 L 18.727 4.847 Z"/>
        <path d="M 21.812 36.794 C 21.812 36.308 21.417 35.913 20.931 35.913 C 20.444 35.913 20.049 36.308 20.049 36.794 C 20.049 37.281 20.444 37.676 20.931 37.676 L 20.931 38.998 C 19.714 38.998 18.727 38.011 18.727 36.794 C 18.727 35.578 19.714 34.591 20.931 34.591 C 22.147 34.591 23.134 35.578 23.134 36.794 C 23.134 38.011 22.147 38.998 20.931 38.998 L 20.931 37.676 C 21.417 37.676 21.812 37.281 21.812 36.794 Z"/>
        <path d="M 18.727 37.456 C 19.092 37.456 19.388 37.159 19.388 36.794 C 19.388 36.429 19.092 36.133 18.727 36.133 L 10.419 36.133 L 6.649 32.153 C 6.398 31.889 5.979 31.877 5.714 32.128 C 5.449 32.379 5.438 32.798 5.689 33.063 L 9.524 37.112 L 9.606 37.189 C 9.805 37.36 10.059 37.455 10.324 37.456 L 18.727 37.456 Z"/>
        <path d="M 21.813 14.762 C 21.813 15.248 21.418 15.643 20.931 15.643 C 20.444 15.643 20.05 15.248 20.05 14.762 C 20.05 14.275 20.444 13.88 20.931 13.88 L 20.931 12.559 C 19.714 12.559 18.728 13.545 18.728 14.762 C 18.728 15.979 19.714 16.965 20.931 16.965 C 22.148 16.965 23.134 15.979 23.134 14.762 C 23.134 13.545 22.148 12.559 20.931 12.559 L 20.931 13.88 C 21.418 13.88 21.813 14.275 21.813 14.762 Z"/>
        <path d="M 18.838 14.211 C 19.203 14.211 19.499 14.507 19.499 14.872 C 19.499 15.237 19.203 15.533 18.838 15.533 L 15.947 15.533 L 14.162 17.615 C 13.925 17.892 13.507 17.925 13.23 17.687 C 12.953 17.45 12.921 17.032 13.158 16.755 L 15.009 14.596 L 15.092 14.509 C 15.295 14.318 15.565 14.211 15.846 14.211 L 18.838 14.211 Z"/>
        <path d="M 21.813 27.32 C 21.813 26.834 21.418 26.439 20.931 26.439 C 20.444 26.439 20.05 26.834 20.05 27.32 C 20.05 27.807 20.444 28.202 20.931 28.202 L 20.931 29.524 C 19.714 29.524 18.728 28.537 18.728 27.32 C 18.728 26.103 19.714 25.117 20.931 25.117 C 22.148 25.117 23.134 26.103 23.134 27.32 C 23.134 28.537 22.148 29.524 20.931 29.524 L 20.931 28.202 C 21.418 28.202 21.813 27.807 21.813 27.32 Z"/>
        <path d="M 18.838 27.871 C 19.203 27.871 19.499 27.575 19.499 27.21 C 19.499 26.845 19.203 26.549 18.838 26.549 L 15.947 26.549 L 14.162 24.467 C 13.925 24.19 13.507 24.157 13.23 24.395 C 12.953 24.632 12.921 25.05 13.158 25.327 L 15.009 27.486 L 15.092 27.573 C 15.295 27.764 15.565 27.871 15.846 27.871 L 15.846 27.871 L 18.838 27.871 Z"/>
      </g>
    </svg>
  );
}

// ── Top ticker ─────────────────────────────────────────────
const TICKER_ITEMS = [
  { sym: "INFRA-LATENCY", v: "2.41ms",  d: "-0.06", up: true },
  { sym: "EVT-THROUGHPUT", v: "184.2K/s", d: "+2.1%", up: true },
  { sym: "NODES-ACTIVE", v: "412",     d: "+3", up: true },
  { sym: "STREAM-CPU",   v: "37.8%",   d: "-1.4", up: true },
  { sym: "PIPELINES",    v: "1,284",   d: "+12", up: true },
  { sym: "QUEUE-DEPTH",  v: "0.42K",   d: "-0.8%", up: true },
  { sym: "ANALYTICS-IO", v: "62.1GB/s",d: "+4.3%", up: true },
  { sym: "API-P99",      v: "18.4ms",  d: "+0.2", up: false },
  { sym: "AUTOMATIONS",  v: "8,917",   d: "+44", up: true },
  { sym: "MODEL-INFER",  v: "5.91ms",  d: "-0.3", up: true },
  { sym: "DATA-INGEST",  v: "94.3K/s", d: "+1.7%", up: true },
  { sym: "ORCH-LAG",     v: "11.2ms",  d: "-0.1", up: true },
];
function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]; // duplicate for seamless loop
  return (
    <div className="ticker">
      <div className="ticker-label"><span className="dot"></span>LIVE · INFRASTRUCTURE</div>
      <div className="ticker-track">
        <div className="ticker-stream">
          {items.map((it, i) => (
            <span className="ticker-item" key={i}>
              <span className="sym">{it.sym}</span>
              <span>{it.v}</span>
              <span className={it.up ? "delta-up" : "delta-dn"}>{it.up ? "▲" : "▼"} {it.d}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Nav ────────────────────────────────────────────────────
const PAGES = [
  { id: "home",         label: "Home" },
  { id: "about",        label: "About" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "capabilities", label: "Capabilities" },
  { id: "research",     label: "Research" },
  { id: "industries",   label: "Industries" },
  { id: "contact",      label: "Contact" },
];

function Nav({ page, setPage }) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const utc = now.toISOString().slice(11, 19) + " UTC";
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="brand" onClick={() => setPage("home")} style={{cursor:"pointer"}}>
          <span style={{fontFamily:"var(--th-display)",fontSize:22,letterSpacing:"0.16em",color:"#fff",lineHeight:1}}>TREND HOUND</span>
        </a>
        <div className="nav-links">
          {PAGES.map(p => (
            <button key={p.id} className="nav-link"
              data-active={page === p.id ? true : undefined}
              onClick={() => setPage(p.id)}>{p.label}</button>
          ))}
        </div>
        <div className="nav-spacer"></div>
        <div className="nav-meta">
          <span><span className="dot"></span> SYS · OK</span>
          <span style={{fontVariantNumeric:"tabular-nums"}}>{utc}</span>
        </div>
        <button className="nav-cta" onClick={() => setPage("contact")}>Contact <span style={{fontFamily:"var(--mono)",opacity:.7}}>→</span></button>
      </div>
    </nav>
  );
}

// ── Live chart (SMOOTH, animated) ─────────────────────────
function useLiveSeries(len = 120, vol = 0.6, drift = 0.04) {
  const [data, setData] = useState(() => {
    const arr = [];
    let v = 100;
    for (let i = 0; i < len; i++) {
      v += (Math.random() - 0.5) * vol + drift;
      arr.push(v);
    }
    return arr;
  });
  useEffect(() => {
    const id = setInterval(() => {
      setData(prev => {
        const next = prev.slice(1);
        const last = prev[prev.length - 1];
        next.push(last + (Math.random() - 0.5) * vol + drift);
        return next;
      });
    }, 600);
    return () => clearInterval(id);
  }, []);
  return data;
}

function HeroChart() {
  const a = useLiveSeries(140, 0.7, 0.05);
  const b = useLiveSeries(140, 0.5, 0.02);
  const W = 720, H = 240, P = 16;
  const all = [...a, ...b];
  const min = Math.min(...all), max = Math.max(...all);
  const span = max - min || 1;
  const path = (data) => data.map((d, i) => {
    const x = P + (i / (data.length - 1)) * (W - 2*P);
    const y = P + (1 - (d - min) / span) * (H - 2*P);
    return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  const area = (data) => {
    const top = data.map((d, i) => {
      const x = P + (i / (data.length - 1)) * (W - 2*P);
      const y = P + (1 - (d - min) / span) * (H - 2*P);
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(" ");
    return `${top} L${W-P},${H-P} L${P},${H-P} Z`;
  };
  // last point coords for marker
  const lastIdx = a.length - 1;
  const lastX = P + (lastIdx / (a.length - 1)) * (W - 2*P);
  const lastY = P + (1 - (a[lastIdx] - min) / span) * (H - 2*P);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{width:"100%",height:240,display:"block"}}>
      <defs>
        <linearGradient id="hero-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.10"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
        </linearGradient>
        <pattern id="hero-grid" width="60" height="40" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 40" fill="none" stroke="#161616" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width={W} height={H} fill="url(#hero-grid)"/>
      {/* horizontal hairlines */}
      {[0.25, 0.5, 0.75].map((t, i) => (
        <line key={i} x1={P} x2={W-P} y1={P + t*(H-2*P)} y2={P + t*(H-2*P)} stroke="#1c1c1c" strokeWidth="1" strokeDasharray="2 4"/>
      ))}
      <path d={area(a)} fill="url(#hero-fill)"/>
      <path d={path(b)} fill="none" stroke="#666" strokeWidth="1" strokeDasharray="2 3"/>
      <path d={path(a)} fill="none" stroke="#ffffff" strokeWidth="1.4"/>
      {/* live marker */}
      <circle cx={lastX} cy={lastY} r="3" fill="#4ade80"/>
      <circle cx={lastX} cy={lastY} r="6" fill="none" stroke="#4ade80" strokeOpacity="0.4" strokeWidth="1">
        <animate attributeName="r" from="3" to="10" dur="1.4s" repeatCount="indefinite"/>
        <animate attributeName="stroke-opacity" from="0.6" to="0" dur="1.4s" repeatCount="indefinite"/>
      </circle>
      <line x1={lastX} x2={lastX} y1={P} y2={H-P} stroke="#2a2a2a" strokeWidth="1" strokeDasharray="2 3"/>
    </svg>
  );
}

// ── Mini live spark for industry/cap cards ───────────────
function MiniSpark({ seed = 1, color = "#fff", animated = true, fill = false }) {
  const data = useLiveSeries(40, 0.4, animated ? 0.03 : 0);
  const W = 200, H = 40;
  const min = Math.min(...data), max = Math.max(...data);
  const span = max - min || 1;
  const pts = data.map((d, i) => {
    const x = (i / (data.length - 1)) * W;
    const y = H - ((d - min) / span) * (H - 4) - 2;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const polyline = pts.join(" ");
  const areaPath = `M0,${H} L${pts.join(" L")} L${W},${H} Z`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="mini-spark">
      {fill && (
        <>
          <defs>
            <linearGradient id={"mini-fill-" + seed} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.18"/>
              <stop offset="100%" stopColor={color} stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d={areaPath} fill={`url(#mini-fill-${seed})`}/>
        </>
      )}
      <polyline fill="none" stroke={color} strokeWidth="1.25" points={polyline}/>
    </svg>
  );
}

// ── Animated counter ──────────────────────────────────────
function Counter({ to, duration = 1400, prefix = "", suffix = "", decimals = 0 }) {
  const [val, setVal] = useState(0);
  const start = useRef(null);
  useEffect(() => {
    let raf;
    const step = (ts) => {
      if (!start.current) start.current = ts;
      const t = Math.min(1, (ts - start.current) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(eased * to);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  const formatted = val.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return <span>{prefix}{formatted}{suffix}</span>;
}

window.LogoMark = LogoMark;
window.Ticker = Ticker;
window.Nav = Nav;
window.PAGES = PAGES;
window.HeroChart = HeroChart;
window.MiniSpark = MiniSpark;
window.Counter = Counter;
window.useLiveSeries = useLiveSeries;
