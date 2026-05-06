(function () {
  const {
    useState,
    useEffect
  } = React;
  function App() {
    const [page, setPage] = useState(() => {
      const h = window.location.hash.replace("#", "");
      return PAGES.find(p => p.id === h) ? h : "home";
    });
    useEffect(() => {
      window.location.hash = page;
      window.scrollTo({
        top: 0,
        behavior: "instant"
      });
    }, [page]);
    useEffect(() => {
      const onHash = () => {
        const h = window.location.hash.replace("#", "");
        if (PAGES.find(p => p.id === h)) setPage(h);
      };
      window.addEventListener("hashchange", onHash);
      return () => window.removeEventListener("hashchange", onHash);
    }, []);
    let body;
    if (page === "home") body = /*#__PURE__*/React.createElement(PageHome, {
      setPage: setPage
    });else if (page === "about") body = /*#__PURE__*/React.createElement(PageAbout, null);else if (page === "infrastructure") body = /*#__PURE__*/React.createElement(PageInfrastructure, null);else if (page === "capabilities") body = /*#__PURE__*/React.createElement(PageCapabilities, null);else if (page === "research") body = /*#__PURE__*/React.createElement(PageResearch, null);else if (page === "industries") body = /*#__PURE__*/React.createElement(PageIndustries, null);else if (page === "contact") body = /*#__PURE__*/React.createElement(PageContact, null);
    return /*#__PURE__*/React.createElement("div", {
      "data-screen-label": "Page · " + page
    }, /*#__PURE__*/React.createElement(Ticker, null), /*#__PURE__*/React.createElement(Nav, {
      page: page,
      setPage: setPage
    }), body, /*#__PURE__*/React.createElement(Footer, {
      setPage: setPage
    }));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})();