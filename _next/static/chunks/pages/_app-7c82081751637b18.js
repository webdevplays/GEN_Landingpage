(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [636],
  {
    7587: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function ({
          html: e,
          height: t = null,
          width: r = null,
          children: a,
          dataNtpc: s = "",
        }) {
          return (
            (0, o.useEffect)(() => {
              s &&
                performance.mark("mark_feature_usage", {
                  detail: { feature: `next-third-parties-${s}` },
                });
            }, [s]),
            (0, n.jsxs)(n.Fragment, {
              children: [
                a,
                e
                  ? (0, n.jsx)("div", {
                      style: {
                        height: null != t ? `${t}px` : "auto",
                        width: null != r ? `${r}px` : "auto",
                      },
                      "data-ntpc": s,
                      dangerouslySetInnerHTML: { __html: e },
                    })
                  : null,
              ],
            })
          );
        });
      let n = r(4848),
        o = r(6540);
    },
    2402: function (e, t, r) {
      "use strict";
      let n;
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GoogleAnalytics = function (e) {
          let {
            gaId: t,
            debugMode: r,
            dataLayerName: o = "dataLayer",
            nonce: c,
          } = e;
          return (
            void 0 === n && (n = o),
            (0, s.useEffect)(() => {
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-ga" },
              });
            }, []),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(i.default, {
                  id: "_next-ga-init",
                  dangerouslySetInnerHTML: {
                    __html: `
          window['${o}'] = window['${o}'] || [];
          function gtag(){window['${o}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}' ${r ? ",{ 'debug_mode': true }" : ""});`,
                  },
                  nonce: c,
                }),
                (0, a.jsx)(i.default, {
                  id: "_next-ga",
                  src: `https://www.googletagmanager.com/gtag/js?id=${t}`,
                  nonce: c,
                }),
              ],
            })
          );
        }),
        (t.sendGAEvent = function (...e) {
          if (void 0 === n) {
            console.warn("@next/third-parties: GA has not been initialized");
            return;
          }
          window[n]
            ? window[n].push(arguments)
            : console.warn(
                `@next/third-parties: GA dataLayer ${n} does not exist`
              );
        });
      let a = r(4848),
        s = r(6540),
        i = o(r(8133));
    },
    4885: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          let { apiKey: t, ...r } = e,
            n = { ...r, key: t },
            { html: i } = (0, a.GoogleMapsEmbed)(n);
          return (0, o.jsx)(s.default, {
            height: n.height || null,
            width: n.width || null,
            html: i,
            dataNtpc: "GoogleMapsEmbed",
          });
        });
      let o = r(4848),
        a = r(2235),
        s = n(r(7587));
    },
    7142: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGTMEvent = void 0),
        (t.GoogleTagManager = function (e) {
          let {
            gtmId: t,
            gtmScriptUrl: r = "https://www.googletagmanager.com/gtm.js",
            dataLayerName: n = "dataLayer",
            auth: c,
            preview: u,
            dataLayer: l,
            nonce: d,
          } = e;
          i = n;
          let f = "dataLayer" !== n ? `&l=${n}` : "",
            p = c ? `&gtm_auth=${c}` : "",
            h = u ? `&gtm_preview=${u}&gtm_cookies_win=x` : "";
          return (
            (0, a.useEffect)(() => {
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-gtm" },
              });
            }, []),
            (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(s.default, {
                  id: "_next-gtm-init",
                  dangerouslySetInnerHTML: {
                    __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${l ? `w[l].push(${JSON.stringify(l)})` : ""}
      })(window,'${n}');`,
                  },
                  nonce: d,
                }),
                (0, o.jsx)(s.default, {
                  id: "_next-gtm",
                  "data-ntpc": "GTM",
                  src: `${r}?id=${t}${f}${p}${h}`,
                }),
              ],
            })
          );
        });
      let o = r(4848),
        a = r(6540),
        s = n(r(8133)),
        i = "dataLayer";
      t.sendGTMEvent = (e, t) => {
        let r = t || i;
        (window[r] = window[r] || []), window[r].push(e);
      };
    },
    3804: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGAEvent =
          t.GoogleAnalytics =
          t.sendGTMEvent =
          t.GoogleTagManager =
          t.YouTubeEmbed =
          t.GoogleMapsEmbed =
            void 0);
      var o = r(4885);
      Object.defineProperty(t, "GoogleMapsEmbed", {
        enumerable: !0,
        get: function () {
          return n(o).default;
        },
      });
      var a = r(697);
      Object.defineProperty(t, "YouTubeEmbed", {
        enumerable: !0,
        get: function () {
          return n(a).default;
        },
      });
      var s = r(7142);
      Object.defineProperty(t, "GoogleTagManager", {
        enumerable: !0,
        get: function () {
          return s.GoogleTagManager;
        },
      }),
        Object.defineProperty(t, "sendGTMEvent", {
          enumerable: !0,
          get: function () {
            return s.sendGTMEvent;
          },
        });
      var i = r(2402);
      Object.defineProperty(t, "GoogleAnalytics", {
        enumerable: !0,
        get: function () {
          return i.GoogleAnalytics;
        },
      }),
        Object.defineProperty(t, "sendGAEvent", {
          enumerable: !0,
          get: function () {
            return i.sendGAEvent;
          },
        });
    },
    697: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          let { html: t, scripts: r, stylesheets: n } = (0, s.YouTubeEmbed)(e);
          return (0, o.jsx)(i.default, {
            height: e.height || null,
            width: e.width || null,
            html: t,
            dataNtpc: "YouTubeEmbed",
            children:
              null == r
                ? void 0
                : r.map((e) =>
                    (0, o.jsx)(
                      a.default,
                      { src: e.url, strategy: c[e.strategy], stylesheets: n },
                      e.url
                    )
                  ),
          });
        });
      let o = r(4848),
        a = n(r(8133)),
        s = r(2235),
        i = n(r(7587)),
        c = {
          server: "beforeInteractive",
          client: "afterInteractive",
          idle: "lazyOnload",
          worker: "worker",
        };
    },
    8424: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(9253);
        },
      ]);
    },
    105: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => u });
      var n = r(4848),
        o = r(5893),
        a = r.n(o),
        s = r(5078),
        i = r.n(s),
        c = r(7963);
      let u = (e) => {
        let {
          small: t = !1,
          corners: r = !1,
          orange: o = !1,
          animation: s = !1,
          url: u,
          children: l,
        } = e;
        return (0, n.jsxs)("a", {
          className: ""
            .concat(a().className, " ")
            .concat(o ? i().orange : "", " ")
            .concat(s ? i().animation : "", " ")
            .concat(i().button, " ")
            .concat(t ? i().small : ""),
          href: u,
          target: "_blank",
          rel: "noreferrer",
          children: [
            r &&
              (0, n.jsx)("div", {
                className: i().corners,
                children: (0, n.jsx)(c.A, {}),
              }),
            l,
          ],
        });
      };
    },
    7963: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      var n = r(4848),
        o = r(8430),
        a = r.n(o);
      let s = (e) => {
        let { stroke: t = "white" } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("div", {
              className: a().corner,
              style: { top: "-1px", left: "-1px" },
              children: (0, n.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 6 6",
                fill: "none",
                children: (0, n.jsx)("path", { d: "M6 1H1V6", stroke: t }),
              }),
            }),
            (0, n.jsx)("div", {
              className: a().corner,
              style: { top: "-1px", right: "-1px" },
              children: (0, n.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 6 6",
                fill: "none",
                children: (0, n.jsx)("path", { d: "M0 1H5V6", stroke: t }),
              }),
            }),
            (0, n.jsx)("div", {
              className: a().corner,
              style: { bottom: "-1px", left: "-1px" },
              children: (0, n.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 6 6",
                fill: "none",
                children: (0, n.jsx)("path", { d: "M6 5H1V0", stroke: t }),
              }),
            }),
            (0, n.jsx)("div", {
              className: a().corner,
              style: { bottom: "-1px", right: "-1px" },
              children: (0, n.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 6 6",
                fill: "none",
                children: (0, n.jsx)("path", { d: "M0 5H5V0", stroke: t }),
              }),
            }),
          ],
        });
      };
    },
    9698: (e, t, r) => {
      "use strict";
      r.d(t, { J: () => n });
      let n = {
        home: "/",
        terms: "/#terms",
        privacy: "/#privacy",
        branding: "/#branding",
        play: "/#play",
        treasury: "https://dexscreener.com/solana/0x00000000000",
        demos: "https://app.gen-ai.website/",
      };
    },
    1896: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var n = r(6540);
      let o = new Date("Dec 05, 2024 12:15:00 UTC").getTime();
      function a() {
        let [e, t] = (0, n.useState)(r());
        function r() {
          let e = o - new Date().getTime();
          return e < 0
            ? { hours: 0, minutes: 0, timerIsOver: !0 }
            : {
                hours: Math.floor(e / 36e5),
                minutes: Math.floor((e % 36e5) / 6e4),
              };
        }
        return (
          (0, n.useEffect)(() => {
            if (e.timerIsOver) return;
            let n = setInterval(() => {
              t(r());
            }, 1e3);
            return () => clearInterval(n);
          }, []),
          e
        );
      }
    },
    958: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          DynamicServerError: function () {
            return n;
          },
          isDynamicServerError: function () {
            return o;
          },
        });
      let r = "DYNAMIC_SERVER_USAGE";
      class n extends Error {
        constructor(e) {
          super("Dynamic server usage: " + e),
            (this.description = e),
            (this.digest = r);
        }
      }
      function o(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "digest" in e &&
          "string" == typeof e.digest &&
          e.digest === r
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7643: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isNextRouterError", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(7966),
        o = r(8600);
      function a(e) {
        return (0, o.isRedirectError)(e) || (0, n.isNotFoundError)(e);
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3750: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ReadonlyURLSearchParams: function () {
            return c.ReadonlyURLSearchParams;
          },
          RedirectType: function () {
            return c.RedirectType;
          },
          ServerInsertedHTMLContext: function () {
            return l.ServerInsertedHTMLContext;
          },
          notFound: function () {
            return c.notFound;
          },
          permanentRedirect: function () {
            return c.permanentRedirect;
          },
          redirect: function () {
            return c.redirect;
          },
          unstable_rethrow: function () {
            return c.unstable_rethrow;
          },
          useParams: function () {
            return h;
          },
          usePathname: function () {
            return f;
          },
          useRouter: function () {
            return p;
          },
          useSearchParams: function () {
            return d;
          },
          useSelectedLayoutSegment: function () {
            return g;
          },
          useSelectedLayoutSegments: function () {
            return m;
          },
          useServerInsertedHTML: function () {
            return l.useServerInsertedHTML;
          },
        });
      let n = r(6540),
        o = r(9258),
        a = r(8519),
        s = r(4365),
        i = r(274),
        c = r(4531),
        u = r(8228),
        l = r(465);
      function d() {
        let e = (0, n.useContext)(a.SearchParamsContext);
        return (0, n.useMemo)(
          () => (e ? new c.ReadonlyURLSearchParams(e) : null),
          [e]
        );
      }
      function f() {
        return (
          (0, u.useDynamicRouteParams)("usePathname()"),
          (0, n.useContext)(a.PathnameContext)
        );
      }
      function p() {
        let e = (0, n.useContext)(o.AppRouterContext);
        if (null === e)
          throw Error("invariant expected app router to be mounted");
        return e;
      }
      function h() {
        return (
          (0, u.useDynamicRouteParams)("useParams()"),
          (0, n.useContext)(a.PathParamsContext)
        );
      }
      function m(e) {
        void 0 === e && (e = "children"),
          (0, u.useDynamicRouteParams)("useSelectedLayoutSegments()");
        let t = (0, n.useContext)(o.LayoutRouterContext);
        return t
          ? (function e(t, r, n, o) {
              let a;
              if ((void 0 === n && (n = !0), void 0 === o && (o = []), n))
                a = t[1][r];
              else {
                var c;
                let e = t[1];
                a = null != (c = e.children) ? c : Object.values(e)[0];
              }
              if (!a) return o;
              let u = a[0],
                l = (0, s.getSegmentValue)(u);
              return !l || l.startsWith(i.PAGE_SEGMENT_KEY)
                ? o
                : (o.push(l), e(a, r, !1, o));
            })(t.tree, e)
          : null;
      }
      function g(e) {
        void 0 === e && (e = "children"),
          (0, u.useDynamicRouteParams)("useSelectedLayoutSegment()");
        let t = m(e);
        if (!t || 0 === t.length) return null;
        let r = "children" === e ? t[0] : t[t.length - 1];
        return r === i.DEFAULT_SEGMENT_KEY ? null : r;
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4531: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ReadonlyURLSearchParams: function () {
            return i;
          },
          RedirectType: function () {
            return n.RedirectType;
          },
          notFound: function () {
            return o.notFound;
          },
          permanentRedirect: function () {
            return n.permanentRedirect;
          },
          redirect: function () {
            return n.redirect;
          },
          unstable_rethrow: function () {
            return a.unstable_rethrow;
          },
        });
      let n = r(8600),
        o = r(7966),
        a = r(8542);
      class s extends Error {
        constructor() {
          super(
            "Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams"
          );
        }
      }
      class i extends URLSearchParams {
        append() {
          throw new s();
        }
        delete() {
          throw new s();
        }
        set() {
          throw new s();
        }
        sort() {
          throw new s();
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7966: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          isNotFoundError: function () {
            return o;
          },
          notFound: function () {
            return n;
          },
        });
      let r = "NEXT_NOT_FOUND";
      function n() {
        let e = Error(r);
        throw ((e.digest = r), e);
      }
      function o(e) {
        return (
          "object" == typeof e && null !== e && "digest" in e && e.digest === r
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4357: (e, t) => {
      "use strict";
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RedirectStatusCode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (function (e) {
          (e[(e.SeeOther = 303)] = "SeeOther"),
            (e[(e.TemporaryRedirect = 307)] = "TemporaryRedirect"),
            (e[(e.PermanentRedirect = 308)] = "PermanentRedirect");
        })(r || (r = {})),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    8600: (e, t, r) => {
      "use strict";
      var n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          RedirectType: function () {
            return n;
          },
          getRedirectError: function () {
            return i;
          },
          getRedirectStatusCodeFromError: function () {
            return p;
          },
          getRedirectTypeFromError: function () {
            return f;
          },
          getURLFromRedirectError: function () {
            return d;
          },
          isRedirectError: function () {
            return l;
          },
          permanentRedirect: function () {
            return u;
          },
          redirect: function () {
            return c;
          },
        });
      let o = r(7860),
        a = r(4357),
        s = "NEXT_REDIRECT";
      function i(e, t, r) {
        void 0 === r && (r = a.RedirectStatusCode.TemporaryRedirect);
        let n = Error(s);
        return (n.digest = s + ";" + t + ";" + e + ";" + r + ";"), n;
      }
      function c(e, t) {
        let r = o.actionAsyncStorage.getStore();
        throw i(
          e,
          t || ((null == r ? void 0 : r.isAction) ? "push" : "replace"),
          a.RedirectStatusCode.TemporaryRedirect
        );
      }
      function u(e, t) {
        throw (
          (void 0 === t && (t = "replace"),
          i(e, t, a.RedirectStatusCode.PermanentRedirect))
        );
      }
      function l(e) {
        if (
          "object" != typeof e ||
          null === e ||
          !("digest" in e) ||
          "string" != typeof e.digest
        )
          return !1;
        let t = e.digest.split(";"),
          [r, n] = t,
          o = t.slice(2, -2).join(";"),
          i = Number(t.at(-2));
        return (
          r === s &&
          ("replace" === n || "push" === n) &&
          "string" == typeof o &&
          !isNaN(i) &&
          i in a.RedirectStatusCode
        );
      }
      function d(e) {
        return l(e) ? e.digest.split(";").slice(2, -2).join(";") : null;
      }
      function f(e) {
        if (!l(e)) throw Error("Not a redirect error");
        return e.digest.split(";", 2)[1];
      }
      function p(e) {
        if (!l(e)) throw Error("Not a redirect error");
        return Number(e.digest.split(";").at(-2));
      }
      !(function (e) {
        (e.push = "push"), (e.replace = "replace");
      })(n || (n = {})),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    4365: (e, t) => {
      "use strict";
      function r(e) {
        return Array.isArray(e) ? e[1] : e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSegmentValue", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    627: (e, t) => {
      "use strict";
      var r, n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ACTION_HMR_REFRESH: function () {
            return u;
          },
          ACTION_NAVIGATE: function () {
            return a;
          },
          ACTION_PREFETCH: function () {
            return c;
          },
          ACTION_REFRESH: function () {
            return o;
          },
          ACTION_RESTORE: function () {
            return s;
          },
          ACTION_SERVER_ACTION: function () {
            return l;
          },
          ACTION_SERVER_PATCH: function () {
            return i;
          },
          PrefetchCacheEntryStatus: function () {
            return n;
          },
          PrefetchKind: function () {
            return r;
          },
        });
      let o = "refresh",
        a = "navigate",
        s = "restore",
        i = "server-patch",
        c = "prefetch",
        u = "hmr-refresh",
        l = "server-action";
      !(function (e) {
        (e.AUTO = "auto"), (e.FULL = "full"), (e.TEMPORARY = "temporary");
      })(r || (r = {})),
        (function (e) {
          (e.fresh = "fresh"),
            (e.reusable = "reusable"),
            (e.expired = "expired"),
            (e.stale = "stale");
        })(n || (n = {})),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    1480: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          StaticGenBailoutError: function () {
            return n;
          },
          isStaticGenBailoutError: function () {
            return o;
          },
        });
      let r = "NEXT_STATIC_GEN_BAILOUT";
      class n extends Error {
        constructor(...e) {
          super(...e), (this.code = r);
        }
      }
      function o(e) {
        return (
          "object" == typeof e && null !== e && "code" in e && e.code === r
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8542: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "unstable_rethrow", {
          enumerable: !0,
          get: function () {
            return function e(t) {
              if (
                (0, s.isNextRouterError)(t) ||
                (0, a.isBailoutToCSRError)(t) ||
                (0, n.isDynamicUsageError)(t) ||
                (0, o.isPostpone)(t)
              )
                throw t;
              t instanceof Error && "cause" in t && e(t.cause);
            };
          },
        });
      let n = r(8837),
        o = r(9222),
        a = r(8431),
        s = r(7643);
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5157: (e, t, r) => {
      "use strict";
      function n(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(2063),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    6526: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return v;
          },
        });
      let n = r(7677),
        o = r(544),
        a = r(4848),
        s = o._(r(6540)),
        i = n._(r(961)),
        c = n._(r(6085)),
        u = r(7282),
        l = r(2105),
        d = r(9641);
      r(7679);
      let f = r(7644),
        p = n._(r(5472)),
        h = r(1903),
        m = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        };
      function g(e, t, r, n, o, a, s) {
        let i = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== i &&
          ((e["data-loaded-src"] = i),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && o(!0), null == r ? void 0 : r.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let n = !1,
                    o = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => o,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (o = !0), t.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(e);
              }
            }));
      }
      function y(e) {
        return s.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      let b = (0, s.forwardRef)((e, t) => {
        let {
            src: r,
            srcSet: n,
            sizes: o,
            height: i,
            width: c,
            decoding: u,
            className: l,
            style: d,
            fetchPriority: f,
            placeholder: p,
            loading: m,
            unoptimized: b,
            fill: _,
            onLoadRef: v,
            onLoadingCompleteRef: j,
            setBlurComplete: w,
            setShowAltText: x,
            sizesInput: E,
            onLoad: O,
            onError: S,
            ...P
          } = e,
          M = (0, s.useCallback)(
            (e) => {
              e && (S && (e.src = e.src), e.complete && g(e, p, v, j, w, b, E));
            },
            [r, p, v, j, w, S, b, E]
          ),
          R = (0, h.useMergedRef)(t, M);
        return (0, a.jsx)("img", {
          ...P,
          ...y(f),
          loading: m,
          width: c,
          height: i,
          decoding: u,
          "data-nimg": _ ? "fill" : "1",
          className: l,
          style: d,
          sizes: o,
          srcSet: n,
          src: r,
          ref: R,
          onLoad: (e) => {
            g(e.currentTarget, p, v, j, w, b, E);
          },
          onError: (e) => {
            x(!0), "empty" !== p && w(!0), S && S(e);
          },
        });
      });
      function _(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...y(r.fetchPriority),
          };
        return t && i.default.preload
          ? (i.default.preload(r.src, n), null)
          : (0, a.jsx)(c.default, {
              children: (0, a.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...n },
                "__nimg-" + r.src + r.srcSet + r.sizes
              ),
            });
      }
      let v = (0, s.forwardRef)((e, t) => {
        let r = (0, s.useContext)(f.RouterContext),
          n = (0, s.useContext)(d.ImageConfigContext),
          o = (0, s.useMemo)(() => {
            let e = m || n || l.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              r = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: r };
          }, [n]),
          { onLoad: i, onLoadingComplete: c } = e,
          h = (0, s.useRef)(i);
        (0, s.useEffect)(() => {
          h.current = i;
        }, [i]);
        let g = (0, s.useRef)(c);
        (0, s.useEffect)(() => {
          g.current = c;
        }, [c]);
        let [y, v] = (0, s.useState)(!1),
          [j, w] = (0, s.useState)(!1),
          { props: x, meta: E } = (0, u.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: o,
            blurComplete: y,
            showAltText: j,
          });
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(b, {
              ...x,
              unoptimized: E.unoptimized,
              placeholder: E.placeholder,
              fill: E.fill,
              onLoadRef: h,
              onLoadingCompleteRef: g,
              setBlurComplete: v,
              setShowAltText: w,
              sizesInput: e.sizes,
              ref: t,
            }),
            E.priority
              ? (0, a.jsx)(_, { isAppRouter: !r, imgAttributes: x })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6397: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return j;
          },
        });
      let n = r(7677),
        o = r(4848),
        a = n._(r(6540)),
        s = r(6847),
        i = r(7785),
        c = r(2772),
        u = r(1278),
        l = r(6185),
        d = r(7644),
        f = r(9258),
        p = r(6334),
        h = r(5157),
        m = r(296),
        g = r(627),
        y = r(1903),
        b = new Set();
      function _(e, t, r, n, o, a) {
        if (a || (0, i.isLocalURL)(t)) {
          if (!n.bypassPrefetchedCheck && !a) {
            let o =
              t +
              "%" +
              r +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (b.has(o)) return;
            b.add(o);
          }
          (async () => (a ? e.prefetch(t, o) : e.prefetch(t, r, n)))().catch(
            (e) => {}
          );
        }
      }
      function v(e) {
        return "string" == typeof e ? e : (0, c.formatUrl)(e);
      }
      let j = a.default.forwardRef(function (e, t) {
        let r, n;
        let {
          href: c,
          as: b,
          children: j,
          prefetch: w = null,
          passHref: x,
          replace: E,
          shallow: O,
          scroll: S,
          locale: P,
          onClick: M,
          onMouseEnter: R,
          onTouchStart: C,
          legacyBehavior: k = !1,
          ...A
        } = e;
        (r = j),
          k &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = (0, o.jsx)("a", { children: r }));
        let N = a.default.useContext(d.RouterContext),
          D = a.default.useContext(f.AppRouterContext),
          T = null != N ? N : D,
          L = !N,
          I = !1 !== w,
          B = null === w ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
          { href: G, as: $ } = a.default.useMemo(() => {
            if (!N) {
              let e = v(c);
              return { href: e, as: b ? v(b) : e };
            }
            let [e, t] = (0, s.resolveHref)(N, c, !0);
            return { href: e, as: b ? (0, s.resolveHref)(N, b) : t || e };
          }, [N, c, b]),
          U = a.default.useRef(G),
          F = a.default.useRef($);
        k && (n = a.default.Children.only(r));
        let H = k ? n && "object" == typeof n && n.ref : t,
          [W, z, Y] = (0, p.useIntersection)({ rootMargin: "200px" }),
          J = a.default.useCallback(
            (e) => {
              (F.current !== $ || U.current !== G) &&
                (Y(), (F.current = $), (U.current = G)),
                W(e);
            },
            [$, G, Y, W]
          ),
          V = (0, y.useMergedRef)(J, H);
        a.default.useEffect(() => {
          T && z && I && _(T, G, $, { locale: P }, { kind: B }, L);
        }, [$, G, z, P, I, null == N ? void 0 : N.locale, T, L, B]);
        let q = {
          ref: V,
          onClick(e) {
            k || "function" != typeof M || M(e),
              k &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              T &&
                !e.defaultPrevented &&
                (function (e, t, r, n, o, s, c, u, l) {
                  let { nodeName: d } = e.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!l && !(0, i.isLocalURL)(r)))
                  )
                    return;
                  e.preventDefault();
                  let f = () => {
                    let e = null == c || c;
                    "beforePopState" in t
                      ? t[o ? "replace" : "push"](r, n, {
                          shallow: s,
                          locale: u,
                          scroll: e,
                        })
                      : t[o ? "replace" : "push"](n || r, { scroll: e });
                  };
                  l ? a.default.startTransition(f) : f();
                })(e, T, G, $, E, O, S, P, L);
          },
          onMouseEnter(e) {
            k || "function" != typeof R || R(e),
              k &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              T &&
                (I || !L) &&
                _(
                  T,
                  G,
                  $,
                  { locale: P, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: B },
                  L
                );
          },
          onTouchStart: function (e) {
            k || "function" != typeof C || C(e),
              k &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              T &&
                (I || !L) &&
                _(
                  T,
                  G,
                  $,
                  { locale: P, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: B },
                  L
                );
          },
        };
        if ((0, u.isAbsoluteUrl)($)) q.href = $;
        else if (!k || x || ("a" === n.type && !("href" in n.props))) {
          let e = void 0 !== P ? P : null == N ? void 0 : N.locale,
            t =
              (null == N ? void 0 : N.isLocaleDomain) &&
              (0, h.getDomainLocale)(
                $,
                e,
                null == N ? void 0 : N.locales,
                null == N ? void 0 : N.domainLocales
              );
          q.href =
            t ||
            (0, m.addBasePath)(
              (0, l.addLocale)($, e, null == N ? void 0 : N.defaultLocale)
            );
        }
        return k
          ? a.default.cloneElement(n, q)
          : (0, o.jsx)("a", { ...A, ...q, children: r });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6334: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let n = r(6540),
        o = r(4959),
        a = "function" == typeof IntersectionObserver,
        s = new Map(),
        i = [];
      function c(e) {
        let { rootRef: t, rootMargin: r, disabled: c } = e,
          u = c || !a,
          [l, d] = (0, n.useState)(!1),
          f = (0, n.useRef)(null),
          p = (0, n.useCallback)((e) => {
            f.current = e;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (a) {
              if (u || l) return;
              let e = f.current;
              if (e && e.tagName)
                return (function (e, t, r) {
                  let {
                    id: n,
                    observer: o,
                    elements: a,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = i.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (n && (t = s.get(n))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: r,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r);
                          });
                        }, e),
                        elements: o,
                      }),
                      i.push(r),
                      s.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    a.set(e, t),
                    o.observe(e),
                    function () {
                      if ((a.delete(e), o.unobserve(e), 0 === a.size)) {
                        o.disconnect(), s.delete(n);
                        let e = i.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        e > -1 && i.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
            } else if (!l) {
              let e = (0, o.requestIdleCallback)(() => d(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [u, r, t, l, f.current]),
          [
            p,
            l,
            (0, n.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1903: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(6540);
      function o(e, t) {
        let r = (0, n.useRef)(() => {}),
          o = (0, n.useRef)(() => {});
        return (0, n.useMemo)(
          () =>
            e && t
              ? (n) => {
                  null === n
                    ? (r.current(), o.current())
                    : ((r.current = a(e, n)), (o.current = a(t, n)));
                }
              : e || t,
          [e, t]
        );
      }
      function a(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let r = e(t);
          return "function" == typeof r ? r : () => e(null);
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7282: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        r(7679);
      let n = r(9197),
        o = r(2105);
      function a(e) {
        return void 0 !== e.default;
      }
      function s(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function i(e, t) {
        var r;
        let i,
          c,
          u,
          {
            src: l,
            sizes: d,
            unoptimized: f = !1,
            priority: p = !1,
            loading: h,
            className: m,
            quality: g,
            width: y,
            height: b,
            fill: _ = !1,
            style: v,
            overrideSrc: j,
            onLoad: w,
            onLoadingComplete: x,
            placeholder: E = "empty",
            blurDataURL: O,
            fetchPriority: S,
            decoding: P = "async",
            layout: M,
            objectFit: R,
            objectPosition: C,
            lazyBoundary: k,
            lazyRoot: A,
            ...N
          } = e,
          { imgConf: D, showAltText: T, blurComplete: L, defaultLoader: I } = t,
          B = D || o.imageConfigDefault;
        if ("allSizes" in B) i = B;
        else {
          let e = [...B.deviceSizes, ...B.imageSizes].sort((e, t) => e - t),
            t = B.deviceSizes.sort((e, t) => e - t);
          i = { ...B, allSizes: e, deviceSizes: t };
        }
        if (void 0 === I)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let G = N.loader || I;
        delete N.loader, delete N.srcSet;
        let $ = "__next_img_default" in G;
        if ($) {
          if ("custom" === i.loader)
            throw Error(
              'Image with src "' +
                l +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = G;
          G = (t) => {
            let { config: r, ...n } = t;
            return e(n);
          };
        }
        if (M) {
          "fill" === M && (_ = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[M];
          e && (v = { ...v, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[M];
          t && !d && (d = t);
        }
        let U = "",
          F = s(y),
          H = s(b);
        if ((r = l) && "object" == typeof r && (a(r) || void 0 !== r.src)) {
          let e = a(l) ? l.default : l;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((c = e.blurWidth),
            (u = e.blurHeight),
            (O = O || e.blurDataURL),
            (U = e.src),
            !_)
          ) {
            if (F || H) {
              if (F && !H) {
                let t = F / e.width;
                H = Math.round(e.height * t);
              } else if (!F && H) {
                let t = H / e.height;
                F = Math.round(e.width * t);
              }
            } else (F = e.width), (H = e.height);
          }
        }
        let W = !p && ("lazy" === h || void 0 === h);
        (!(l = "string" == typeof l ? l : U) ||
          l.startsWith("data:") ||
          l.startsWith("blob:")) &&
          ((f = !0), (W = !1)),
          i.unoptimized && (f = !0),
          $ && l.endsWith(".svg") && !i.dangerouslyAllowSVG && (f = !0);
        let z = s(g),
          Y = Object.assign(
            _
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: R,
                  objectPosition: C,
                }
              : {},
            T ? {} : { color: "transparent" },
            v
          ),
          J =
            L || "empty" === E
              ? null
              : "blur" === E
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: F,
                  heightInt: H,
                  blurWidth: c,
                  blurHeight: u,
                  blurDataURL: O || "",
                  objectFit: Y.objectFit,
                }) +
                '")'
              : 'url("' + E + '")',
          V = J
            ? {
                backgroundSize: Y.objectFit || "cover",
                backgroundPosition: Y.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: J,
              }
            : {},
          q = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: n,
              width: o,
              quality: a,
              sizes: s,
              loader: i,
            } = e;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: c, kind: u } = (function (e, t, r) {
                let { deviceSizes: n, allSizes: o } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let n; (n = e.exec(r)); n) t.push(parseInt(n[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: o.filter((t) => t >= n[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: o, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => o.find((t) => t >= e) || o[o.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, o, s),
              l = c.length - 1;
            return {
              sizes: s || "w" !== u ? s : "100vw",
              srcSet: c
                .map(
                  (e, n) =>
                    i({ config: t, src: r, quality: a, width: e }) +
                    " " +
                    ("w" === u ? e : n + 1) +
                    u
                )
                .join(", "),
              src: i({ config: t, src: r, quality: a, width: c[l] }),
            };
          })({
            config: i,
            src: l,
            unoptimized: f,
            width: F,
            quality: z,
            sizes: d,
            loader: G,
          });
        return {
          props: {
            ...N,
            loading: W ? "lazy" : h,
            fetchPriority: S,
            width: F,
            height: H,
            decoding: P,
            className: m,
            style: { ...Y, ...V },
            sizes: q.sizes,
            srcSet: q.srcSet,
            src: j || q.src,
          },
          meta: { unoptimized: f, priority: p, placeholder: E, fill: _ },
        };
      }
    },
    9197: (e, t) => {
      "use strict";
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: n,
            blurHeight: o,
            blurDataURL: a,
            objectFit: s,
          } = e,
          i = n ? 40 * n : t,
          c = o ? 40 * o : r,
          u = i && c ? "viewBox='0 0 " + i + " " + c + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === s
            ? "xMidYMid"
            : "cover" === s
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          a +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    2364: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return c;
          },
          getImageProps: function () {
            return i;
          },
        });
      let n = r(7677),
        o = r(7282),
        a = r(6526),
        s = n._(r(5472));
      function i(e) {
        let { props: t } = (0, o.getImgProps)(e, {
          defaultLoader: s.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let c = a.Image;
    },
    5472: (e, t) => {
      "use strict";
      function r(e) {
        let { config: t, src: r, width: n, quality: o } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(r) +
          "&w=" +
          n +
          "&q=" +
          (o || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (r.__next_img_default = !0);
      let n = r;
    },
    465: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ServerInsertedHTMLContext: function () {
            return o;
          },
          useServerInsertedHTML: function () {
            return a;
          },
        });
      let n = r(544)._(r(6540)),
        o = n.default.createContext(null);
      function a(e) {
        let t = (0, n.useContext)(o);
        t && t(e);
      }
    },
    9253: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => G });
      var n = r(4848),
        o = r(8808),
        a = r.n(o),
        s = r(6540),
        i = r(5893),
        c = r.n(i),
        u = r(6937),
        l = r.n(u);
      let d = () =>
          (0, n.jsx)("a", {
            className: l().social,
            href: "#tg",
            target: "_blank",
            rel: "noreferrer",
            children: (0, n.jsx)("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, n.jsx)("path", {
                d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.3583 9.38244C11.3857 9.787 9.44177 10.6243 6.52657 11.8944C6.05318 12.0827 5.8052 12.2669 5.78263 12.4469C5.74448 12.7513 6.12559 12.8711 6.64455 13.0343C6.71515 13.0565 6.78829 13.0795 6.86327 13.1038C7.37385 13.2698 8.06068 13.464 8.41773 13.4717C8.74161 13.4787 9.1031 13.3452 9.50219 13.0711C12.226 11.2325 13.632 10.3032 13.7202 10.2831C13.7825 10.269 13.8688 10.2512 13.9273 10.3032C13.9858 10.3552 13.98 10.4536 13.9738 10.48C13.9361 10.641 12.4401 12.0318 11.6659 12.7515C11.4246 12.9759 11.2534 13.135 11.2184 13.1714C11.14 13.2528 11.0601 13.3298 10.9833 13.4038C10.509 13.8611 10.1532 14.204 11.003 14.764C11.4114 15.0331 11.7381 15.2556 12.0641 15.4776C12.4201 15.7201 12.7752 15.9619 13.2347 16.2631C13.3517 16.3398 13.4635 16.4195 13.5724 16.4971C13.9867 16.7925 14.3589 17.0579 14.8188 17.0155C15.086 16.991 15.362 16.7397 15.5022 15.9903C15.8335 14.2193 16.4847 10.382 16.6352 8.80081C16.6484 8.66228 16.6318 8.48498 16.6185 8.40715C16.6051 8.32932 16.5773 8.21842 16.4761 8.13633C16.3563 8.03911 16.1714 8.01861 16.0886 8.02C15.7125 8.0267 15.1354 8.22735 12.3583 9.38244Z",
              }),
            }),
          }),
        f = () =>
          (0, n.jsx)("a", {
            className: l().social,
            href: "https://x.com/Gen_Ai25",
            target: "_blank",
            rel: "noreferrer",
            children: (0, n.jsx)("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, n.jsx)("path", {
                d: "M18.1707 2.27734H21.4617L14.2736 10.5141L22.7303 21.7227H16.1095L10.9237 14.9235L4.9895 21.7227H1.69721L9.38548 12.9119L1.27344 2.27734H8.0632L12.7502 8.49046L18.1707 2.27734ZM17.0174 19.7486H18.8413L7.07082 4.14812H5.11556L17.0174 19.7486Z",
              }),
            }),
          });
      var p = r(9011),
        h = r.n(p),
        m = r(2609),
        g = r.n(m),
        y = r(7963);
      let b = (e) => {
        let { small: t = !1, url: r, children: o } = e;
        return (0, n.jsxs)("div", {
          className: g().wrapper,
          children: [
            (0, n.jsx)("div", {
              className: g().wrapperCorners,
              children: (0, n.jsx)("div", {
                className: g().wrapCorners,
                children: (0, n.jsx)(y.A, {}),
              }),
            }),
            (0, n.jsx)("span", { className: g().shadow1 }),
            (0, n.jsx)("span", { className: g().shadow2 }),
            (0, n.jsx)("span", { className: g().shadow3 }),
            (0, n.jsx)("a", {
              className: ""
                .concat(c().className, " ")
                .concat(g().button, " ")
                .concat(t ? g().small : ""),
              href: r,
              target: "_blank",
              rel: "noreferrer",
              children: o,
            }),
          ],
        });
      };
      var _ = r(6424),
        v = r(7373),
        j = r(6715),
        w = r(9698),
        x = r(1896),
        E = r(105);
      let O = () => {
        let e = (0, j.useRouter)(),
          [t, r] = (0, s.useState)(!1),
          o = (0, x.A)(),
          a = (t) => {
            e.pathname !== w.J.home && e.push(w.J.home),
              setTimeout(() => {
                let e = document.getElementById(t),
                  n = "core" === t ? 0.5 * window.innerHeight : 0;
                e &&
                  (r(!1),
                  window.scrollTo({
                    top: e.offsetTop + n,
                    behavior: "smooth",
                  }));
              }, 100);
          },
          i = (0, _.useSearchParams)(),
          [u, l] = (0, v.A)("queryString", { defaultValue: i.toString() });
        return (
          (0, s.useEffect)(() => {
            i.toString() && l(i.toString());
          }, [i]),
          (0, n.jsx)("header", {
            className: ""
              .concat(h().header, " ")
              .concat(t ? h().headerOpen : ""),
            children: (0, n.jsx)("div", {
              className: "container",
              children: (0, n.jsxs)("div", {
                className: h().content,
                children: [
                  (0, n.jsx)("div", {
                    className: h().logo,
                    onClick: () => {
                      e.pathname !== w.J.home && e.push(w.J.home),
                        r(!1),
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    },

                 
                    children: (0, n.jsxs)("img", {
                      className: "logotop",
                      src: "logoone.png", 
                       
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className: h().headerPopupMobile,
                    children: [
                      (0, n.jsxs)("nav", {
                        className: c().className,
                        children: [
                          (0, n.jsx)("a", {
                            onClick: () => a("partners"),
                            target: "_blank",
                            rel: "noreferrer",
                            children: "PARTNERS",
                          }),
                          (0, n.jsx)("a", {
                            onClick: () => a("community"),
                            target: "_blank",
                            rel: "noreferrer",
                            children: "COMMUNITY",
                          }),
                          (0, n.jsx)("a", {
                            onClick: () => a("core"),
                            target: "_blank",
                            rel: "noreferrer",
                            children: "CORE",
                          }),
                          (0, n.jsx)("a", {
                            onClick: () => a("owb"),
                            target: "_blank",
                            rel: "noreferrer",
                            children: "$GEN",
                          }),
                          
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: h().headerRight,
                        children: [
                          (0, n.jsxs)("nav", {
                            children: [(0, n.jsx)(d, {}), (0, n.jsx)(f, {})],
                          }),
                          o.timerIsOver
                            ? (0, n.jsx)(E.A, {
                                small: !0,
                                url: ""
                                  .concat(w.J.treasury)
                                  .concat(u ? "?" : "")
                                  .concat(
                                    u.slice(0, u.endsWith("=") ? -1 : void 0)
                                  ),
                                children: (0, n.jsx)("span", {
                                  children: "BUY $GEN",
                                }),
                              })
                            : (0, n.jsx)(b, {
                                small: !0,
                                url: ""
                                  .concat(w.J.treasury)
                                  .concat(u ? "?" : "")
                                  .concat(
                                    u.slice(0, u.endsWith("=") ? -1 : void 0)
                                  ),
                                children: (0, n.jsxs)("span", {
                                  children: [
                                    " ",
                                    o.hours,
                                    " hours ",
                                    o.minutes,
                                    " min",
                                  ],
                                }),
                              }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: h().headerPopup,
                    children: [
                      (0, n.jsxs)("nav", {
                        className: c().className,
                        children: [
                          (0, n.jsx)("a", {
                            onClick: () => a("partners"),
                            target: "_blank",
                            rel: "noreferrer",
                            children: "PARTNERS",
                          }),
                          (0, n.jsx)("a", {
                            onClick: () => a("community"),
                            target: "_blank",
                            rel: "noreferrer",
                            children: "COMMUNITY",
                          }),
                          (0, n.jsx)("a", {
                            onClick: () => a("core"),
                            target: "_blank",
                            rel: "noreferrer",
                            children: "CORE",
                          }),
                          (0, n.jsx)("a", {
                            onClick: () => a("owb"),
                            target: "_blank",
                            rel: "noreferrer",
                            children: "$GEN",
                          }),
                          
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: h().headerRight,
                        children: [
                          (0, n.jsxs)("nav", {
                            children: [(0, n.jsx)(d, {}), (0, n.jsx)(f, {})],
                          }),
                          o.timerIsOver
                            ? (0, n.jsx)("button", {
                                onClick: () =>
                                  window.open(
                                    ""
                                      .concat(w.J.treasury)
                                      .concat(u ? "?" : "")
                                      .concat(
                                        u.slice(
                                          0,
                                          u.endsWith("=") ? -1 : void 0
                                        )
                                      ),
                                    "_blank"
                                  ),
                                className: " ".concat(h().treasuryBttn),
                                children: (0, n.jsx)("span", {
                                  children: "BUY $GEN",
                                }),
                              })
                            : (0, n.jsx)(b, {
                                small: !0,
                                url: ""
                                  .concat(w.J.treasury)
                                  .concat(u ? "?" : "")
                                  .concat(
                                    u.slice(0, u.endsWith("=") ? -1 : void 0)
                                  ),
                                children: (0, n.jsxs)("span", {
                                  children: [
                                    o.hours,
                                    " hours ",
                                    o.minutes,
                                    " min",
                                  ],
                                }),
                              }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)("button", {
                    className: h().hamburger,
                    onClick: () => {
                      r((e) => !e);
                    },
                    children: (0, n.jsx)("span", {}),
                  }),
                  (0, n.jsx)("button", {
                    onClick: () =>
                      window.open(
                        ""
                          .concat(w.J.treasury)
                          .concat(u ? "?" : "")
                          .concat(u.slice(0, u.endsWith("=") ? -1 : void 0)),
                        "_blank"
                      ),
                    className: ""
                      .concat(h().mobileBttn, " ")
                      .concat(t ? h().mobileBttnNone : ""),
                    children: (0, n.jsx)("span", { children: "BUY $GEN" }),
                  }),
                ],
              }),
            }),
          })
        );
      };
      var S = r(9965),
        P = r.n(S),
        M = r(3922),
        R = r.n(M),
        C = r(5078),
        k = r.n(C);
      let A = () => {
        let e = (0, s.useRef)(null),
          [t, r] = (0, s.useState)(""),
          [o, a] = (0, s.useState)(!1),
          [i, u] = (0, s.useState)(!1),
          [l, d] = (0, s.useState)(!1),
          f = (e) =>
            0 === e.trim().length
              ? (r("Email is required"), !1)
              : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                  e
                )
              ? (r(""), !0)
              : (r("Email is invalid"), !1),
          p = (e) => {
            d(!1), f(e.target.value);
          },
          h = async () => {
            f(e.current ? e.current.value : "") &&
              (a(!0),
              fetch("https://api.clashofcoins.com/api/email-subscription", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                  email: { email: e.current ? e.current.value : "" }.email,
                }),
              })
                .then(() => {
                  a(!1), u(!0);
                })
                .catch((e) => {
                  console.log(e), d(!0), a(!1);
                }));
          };
        return (0, n.jsxs)("div", {
          className: R().newsletter,
          children: [
            (0, n.jsx)(y.A, {}),
            (0, n.jsx)("h5", { children: "STAY IN THE LOOP" }),
            (0, n.jsxs)("div", {
              className: R().form,
              children: [
                (0, n.jsx)("div", {
                  className: "input "
                    .concat(t ? "inputError" : "", " ")
                    .concat(o ? "inputDisabled" : ""),
                  children: (0, n.jsx)("input", {
                    disabled: o,
                    onChange: (e) => {
                      p(e);
                    },
                    ref: e,
                    className: c().className,
                    type: "email",
                    inputMode: "email",
                    placeholder: "ENTER YOUR EMAIL",
                  }),
                }),
                (0, n.jsxs)("button", {
                  className: ""
                    .concat(k().button, " ")
                    .concat(o ? R().loading : "", " ")
                    .concat(c().className),
                  disabled: o || "" !== t,
                  onClick: h,
                  children: [
                    (0, n.jsx)("span", { children: "SUBSCRIBE" }),
                    (0, n.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 100 100",
                      preserveAspectRatio: "xMidYMid",
                      children: (0, n.jsx)("circle", {
                        strokeDasharray: "164.93361431346415 56.97787143782138",
                        r: "35",
                        strokeWidth: "10",
                        stroke: "#242424",
                        fill: "none",
                        cy: "50",
                        cx: "50",
                        children: (0, n.jsx)("animateTransform", {
                          keyTimes: "0;1",
                          values: "0 50 50;360 50 50",
                          dur: "1s",
                          repeatCount: "indefinite",
                          type: "rotate",
                          attributeName: "transform",
                        }),
                      }),
                    }),
                  ],
                }),
                t &&
                  (0, n.jsx)("div", { className: R().fieldError, children: t }),
                i &&
                  (0, n.jsx)("div", {
                    className: "".concat(R().result, " ").concat(R().success),
                    children: "Thank you for subscribing!",
                  }),
                l &&
                  (0, n.jsx)("div", {
                    className: "".concat(R().result, " ").concat(R().formError),
                    children: "Server is busy at the moment, try again later",
                  }),
              ],
            }),
          ],
        });
      };
      var N = r(1106),
        D = r.n(N),
        T = r(2521),
        L = r.n(T);
      let I = () => {
        let e = (0, j.useRouter)();
        return (0, n.jsx)("footer", {
          className: "".concat(
            e.pathname !== w.J.home ? L().brandFooter : L().footer
          ),
          children:
            e.pathname === w.J.home
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className: L().bg,
                      children: (0, n.jsx)(P(), {
                        src: "/footer-bg.svg",
                        width: 1366,
                        height: 919,
                        alt: "",
                        role: "presentation",
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: "container",
                      children: (0, n.jsxs)("div", {
                        className: L().content,
                        children: [
                          (0, n.jsx)(A, {}),
                          (0, n.jsxs)("div", {
                            className: L().top,
                            children: [
                              (0, n.jsx)(P(), {
                                src: "/logo.png",
                                width: 240,
                                height: 42,
                                alt: "",
                                role: "presentation",
                              }),
                              (0, n.jsxs)("nav", {
                                children: [
                                  (0, n.jsx)(d, {}),
                                  (0, n.jsx)(f, {}),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: ""
                              .concat(L().bottom, " ")
                              .concat(c().className),
                            children: [
                              (0, n.jsx)("div", {
                                className: L().copyright,
                                children: "GEN AI STUDIO 2024 \xa9",
                              }),
                              (0, n.jsxs)("nav", {
                                children: [
                                  (0, n.jsx)(D(), {
                                    href: w.J.privacy,
                                    children: "privacy policy",
                                  }),
                                  (0, n.jsx)(D(), {
                                    href: w.J.terms,
                                    children: "terms of use",
                                  }),
                                  (0, n.jsx)(D(), {
                                    href: w.J.branding,
                                    children: "Media Kit",
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className: L().developer,
                                children: [
                                  "developed by",
                                  " ",
                                  (0, n.jsx)("a", {
                                    href: "GENAI",
                                    target: "_blank",
                                    children: "GEN",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                })
              : (0, n.jsx)("div", {
                  className: "container",
                  children: (0, n.jsxs)("div", {
                    className: ""
                      .concat(L().brandBottom, " ")
                      .concat(c().className),
                    children: [
                      (0, n.jsxs)("nav", {
                        children: [
                          (0, n.jsx)(D(), {
                            href: w.J.privacy,
                            children: "privacy policy",
                          }),
                          (0, n.jsx)(D(), {
                            href: w.J.terms,
                            children: "terms of use",
                          }),
                          (0, n.jsx)(D(), {
                            href: w.J.branding,
                            children: "Media Kit",
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: L().brandCopyright,
                        children: "GEN AI STUDIO 2024 \xa9",
                      }),
                    ],
                  }),
                }),
        });
      };
      r(3478), r(6059);
      var B = r(3804);
      function G(e) {
        let { Component: t, pageProps: r } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(B.GoogleTagManager, { gtmId: "GTM-T2B2PWMZ" }),
            (0, n.jsxs)("div", {
              className: a().className,
              children: [
                (0, n.jsx)(O, {}),
                (0, n.jsx)(t, { ...r }),
                (0, n.jsx)(I, {}),
              ],
            }),
          ],
        });
      }
    },
    6059: () => {},
    3478: () => {},
    8808: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Archivo', 'Archivo Fallback'",
          fontStyle: "normal",
        },
        className: "__className_3de817",
      };
    },
    5893: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Space Grotesk', 'Space Grotesk Fallback'",
          fontStyle: "normal",
        },
        className: "__className_2a7f48",
      };
    },
    3922: (e) => {
      e.exports = {
        newsletter: "Newsletter_newsletter__B6ovW",
        form: "Newsletter_form__JFBkD",
        loading: "Newsletter_loading__SQ3mS",
        fieldError: "Newsletter_fieldError__UvPwo",
        result: "Newsletter_result__TCg9j",
        success: "Newsletter_success__WLsmX",
        formError: "Newsletter_formError__yW21f",
      };
    },
    2521: (e) => {
      e.exports = {
        footer: "Footer_footer__RDRE2",
        brandFooter: "Footer_brandFooter__mCjWy",
        bg: "Footer_bg__SRk6M",
        bg4k: "Footer_bg4k__dEnrd",
        content: "Footer_content__pYBPn",
        brandContent: "Footer_brandContent__CjORp",
        top: "Footer_top__gFbLM",
        bottom: "Footer_bottom__eWZ74",
        brandBottom: "Footer_brandBottom__Uq1t4",
        copyright: "Footer_copyright__LHXwE",
        brandCopyright: "Footer_brandCopyright__fxa2U",
        developer: "Footer_developer__T909j",
        bgDesktop: "Footer_bgDesktop__qdI4A",
      };
    },
    9011: (e) => {
      e.exports = {
        header: "Header_header__eIO94",
        content: "Header_content__j5zGQ",
        logo: "Header_logo__1NnQW",
        headerPopup: "Header_headerPopup__4_7Fc",
        headerPopupMobile: "Header_headerPopupMobile__EpH6y",
        headerRight: "Header_headerRight__O314r",
        hamburger: "Header_hamburger__FR8A9",
        treasuryBttn: "Header_treasuryBttn__ZRcBC",
        mobileBttn: "Header_mobileBttn__djKDG",
        mobileBttnNone: "Header_mobileBttnNone__d2h2e",
        headerOpen: "Header_headerOpen__hy5Nj",
      };
    },
    5078: (e) => {
      e.exports = {
        button: "Button_button__SzD1Z",
        small: "Button_small__4Wewg",
        orange: "Button_orange__TtyJG",
        corners: "Button_corners__Yc6Pj",
        animation: "Button_animation__5q1Z2",
        buttonBefore: "Button_buttonBefore__NShLf",
        buttonAfter: "Button_buttonAfter__CWPBK",
        buttonSpanBefore: "Button_buttonSpanBefore__sbom8",
      };
    },
    2609: (e) => {
      e.exports = {
        wrapper: "ButtonEarlyAccess_wrapper__RVElh",
        button: "ButtonEarlyAccess_button__1Hji2",
        shadow1: "ButtonEarlyAccess_shadow1__EUFuC",
        shadow2: "ButtonEarlyAccess_shadow2__bA37o",
        shadow3: "ButtonEarlyAccess_shadow3__UXQL_",
        wrapperCorners: "ButtonEarlyAccess_wrapperCorners__qsYep",
        wrapCorners: "ButtonEarlyAccess_wrapCorners__PcH3X",
        shadow: "ButtonEarlyAccess_shadow__MoZ0X",
        small: "ButtonEarlyAccess_small__jowhs",
      };
    },
    8430: (e) => {
      e.exports = { corner: "Corners_corner__8mTDC" };
    },
    6937: (e) => {
      e.exports = { social: "Social_social__fQapU" };
    },
    8837: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicUsageError", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(958),
        o = r(8431),
        a = r(7643),
        s = r(8228),
        i = (e) =>
          (0, n.isDynamicServerError)(e) ||
          (0, o.isBailoutToCSRError)(e) ||
          (0, a.isNextRouterError)(e) ||
          (0, s.isDynamicPostpone)(e);
    },
    8126: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          METADATA_BOUNDARY_NAME: function () {
            return r;
          },
          OUTLET_BOUNDARY_NAME: function () {
            return o;
          },
          VIEWPORT_BOUNDARY_NAME: function () {
            return n;
          },
        });
      let r = "__next_metadata_boundary__",
        n = "__next_viewport_boundary__",
        o = "__next_outlet_boundary__";
    },
    1913: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "actionAsyncStorage", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = (0, r(8626).createAsyncLocalStorage)();
    },
    7860: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "actionAsyncStorage", {
          enumerable: !0,
          get: function () {
            return n.actionAsyncStorage;
          },
        });
      let n = r(1913);
    },
    8626: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          bindSnapshot: function () {
            return s;
          },
          createAsyncLocalStorage: function () {
            return a;
          },
          createSnapshot: function () {
            return i;
          },
        });
      let r = Error(
        "Invariant: AsyncLocalStorage accessed in runtime where it is not available"
      );
      class n {
        disable() {
          throw r;
        }
        getStore() {}
        run() {
          throw r;
        }
        exit() {
          throw r;
        }
        enterWith() {
          throw r;
        }
        static bind(e) {
          return e;
        }
      }
      let o = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;
      function a() {
        return o ? new o() : new n();
      }
      function s(e) {
        return o ? o.bind(e) : n.bind(e);
      }
      function i() {
        return o
          ? o.snapshot()
          : function (e, ...t) {
              return e(...t);
            };
      }
    },
    8228: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          Postpone: function () {
            return x;
          },
          abortAndThrowOnSynchronousRequestDataAccess: function () {
            return j;
          },
          abortOnSynchronousPlatformIOAccess: function () {
            return _;
          },
          accessedDynamicData: function () {
            return k;
          },
          annotateDynamicAccess: function () {
            return L;
          },
          consumeDynamicAccess: function () {
            return A;
          },
          createDynamicTrackingState: function () {
            return d;
          },
          createDynamicValidationState: function () {
            return f;
          },
          createPostponedAbortSignal: function () {
            return T;
          },
          formatDynamicAPIAccesses: function () {
            return N;
          },
          getFirstDynamicReason: function () {
            return p;
          },
          isDynamicPostpone: function () {
            return S;
          },
          isPrerenderInterruptedError: function () {
            return C;
          },
          markCurrentScopeAsDynamic: function () {
            return h;
          },
          postponeWithTracking: function () {
            return E;
          },
          throwIfDisallowedDynamic: function () {
            return H;
          },
          throwToInterruptStaticGeneration: function () {
            return g;
          },
          trackAllowedDynamicAccess: function () {
            return F;
          },
          trackDynamicDataInDynamicRender: function () {
            return y;
          },
          trackFallbackParamAccessed: function () {
            return m;
          },
          trackSynchronousPlatformIOAccessInDev: function () {
            return v;
          },
          trackSynchronousRequestDataAccessInDev: function () {
            return w;
          },
          useDynamicRouteParams: function () {
            return I;
          },
        });
      let n = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(r(6540)),
        o = r(958),
        a = r(1480),
        s = r(3074),
        i = r(7305),
        c = r(2249),
        u = r(8126),
        l = "function" == typeof n.default.unstable_postpone;
      function d(e) {
        return {
          isDebugDynamicAccesses: e,
          dynamicAccesses: [],
          syncDynamicExpression: void 0,
          syncDynamicErrorWithStack: null,
        };
      }
      function f() {
        return {
          hasSuspendedDynamic: !1,
          hasDynamicMetadata: !1,
          hasDynamicViewport: !1,
          hasSyncDynamicErrors: !1,
          dynamicErrors: [],
        };
      }
      function p(e) {
        var t;
        return null == (t = e.dynamicAccesses[0]) ? void 0 : t.expression;
      }
      function h(e, t, r) {
        if (
          (!t || ("cache" !== t.type && "unstable-cache" !== t.type)) &&
          !e.forceDynamic &&
          !e.forceStatic
        ) {
          if (e.dynamicShouldError)
            throw new a.StaticGenBailoutError(
              `Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${r}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`
            );
          if (t) {
            if ("prerender-ppr" === t.type) E(e.route, r, t.dynamicTracking);
            else if ("prerender-legacy" === t.type) {
              t.revalidate = 0;
              let n = new o.DynamicServerError(
                `Route ${e.route} couldn't be rendered statically because it used ${r}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`
              );
              throw (
                ((e.dynamicUsageDescription = r),
                (e.dynamicUsageStack = n.stack),
                n)
              );
            }
          }
        }
      }
      function m(e, t) {
        let r = s.workUnitAsyncStorage.getStore();
        r && "prerender-ppr" === r.type && E(e.route, t, r.dynamicTracking);
      }
      function g(e, t, r) {
        let n = new o.DynamicServerError(
          `Route ${t.route} couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`
        );
        throw (
          ((r.revalidate = 0),
          (t.dynamicUsageDescription = e),
          (t.dynamicUsageStack = n.stack),
          n)
        );
      }
      function y(e, t) {
        t &&
          "cache" !== t.type &&
          "unstable-cache" !== t.type &&
          ("prerender" === t.type || "prerender-legacy" === t.type) &&
          (t.revalidate = 0);
      }
      function b(e, t, r) {
        let n = R(
          `Route ${e} needs to bail out of prerendering at this point because it used ${t}.`
        );
        r.controller.abort(n);
        let o = r.dynamicTracking;
        o &&
          o.dynamicAccesses.push({
            stack: o.isDebugDynamicAccesses ? Error().stack : void 0,
            expression: t,
          });
      }
      function _(e, t, r, n) {
        let o = n.dynamicTracking;
        return (
          o &&
            null === o.syncDynamicErrorWithStack &&
            ((o.syncDynamicExpression = t), (o.syncDynamicErrorWithStack = r)),
          b(e, t, n)
        );
      }
      function v(e) {
        e.prerenderPhase = !1;
      }
      function j(e, t, r, n) {
        let o = n.dynamicTracking;
        throw (
          (o &&
            null === o.syncDynamicErrorWithStack &&
            ((o.syncDynamicExpression = t),
            (o.syncDynamicErrorWithStack = r),
            !0 === n.validating && (o.syncDynamicLogged = !0)),
          b(e, t, n),
          R(
            `Route ${e} needs to bail out of prerendering at this point because it used ${t}.`
          ))
        );
      }
      let w = v;
      function x({ reason: e, route: t }) {
        let r = s.workUnitAsyncStorage.getStore();
        E(t, e, r && "prerender-ppr" === r.type ? r.dynamicTracking : null);
      }
      function E(e, t, r) {
        D(),
          r &&
            r.dynamicAccesses.push({
              stack: r.isDebugDynamicAccesses ? Error().stack : void 0,
              expression: t,
            }),
          n.default.unstable_postpone(O(e, t));
      }
      function O(e, t) {
        return `Route ${e} needs to bail out of prerendering at this point because it used ${t}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
      }
      function S(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "string" == typeof e.message &&
          P(e.message)
        );
      }
      function P(e) {
        return (
          e.includes(
            "needs to bail out of prerendering at this point because it used"
          ) &&
          e.includes(
            "Learn more: https://nextjs.org/docs/messages/ppr-caught-error"
          )
        );
      }
      if (!1 === P(O("%%%", "^^^")))
        throw Error(
          "Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"
        );
      let M = "NEXT_PRERENDER_INTERRUPTED";
      function R(e) {
        let t = Error(e);
        return (t.digest = M), t;
      }
      function C(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.digest === M &&
          "name" in e &&
          "message" in e &&
          e instanceof Error
        );
      }
      function k(e) {
        return e.length > 0;
      }
      function A(e, t) {
        return e.dynamicAccesses.push(...t.dynamicAccesses), e.dynamicAccesses;
      }
      function N(e) {
        return e
          .filter((e) => "string" == typeof e.stack && e.stack.length > 0)
          .map(
            ({ expression: e, stack: t }) => (
              (t = t
                .split("\n")
                .slice(4)
                .filter(
                  (e) =>
                    !(
                      e.includes("node_modules/next/") ||
                      e.includes(" (<anonymous>)") ||
                      e.includes(" (node:")
                    )
                )
                .join("\n")),
              `Dynamic API Usage Debug - ${e}:
${t}`
            )
          );
      }
      function D() {
        if (!l)
          throw Error(
            "Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"
          );
      }
      function T(e) {
        D();
        let t = new AbortController();
        try {
          n.default.unstable_postpone(e);
        } catch (e) {
          t.abort(e);
        }
        return t.signal;
      }
      function L(e, t) {
        let r = t.dynamicTracking;
        r &&
          r.dynamicAccesses.push({
            stack: r.isDebugDynamicAccesses ? Error().stack : void 0,
            expression: e,
          });
      }
      function I(e) {
        if ("undefined" == typeof window) {
          let t = i.workAsyncStorage.getStore();
          if (
            t &&
            t.isStaticGeneration &&
            t.fallbackRouteParams &&
            t.fallbackRouteParams.size > 0
          ) {
            let r = s.workUnitAsyncStorage.getStore();
            r &&
              ("prerender" === r.type
                ? n.default.use((0, c.makeHangingPromise)(r.renderSignal, e))
                : "prerender-ppr" === r.type
                ? E(t.route, e, r.dynamicTracking)
                : "prerender-legacy" === r.type && g(e, t, r));
          }
        }
      }
      let B = /\n\s+at Suspense \(<anonymous>\)/,
        G = RegExp(`\\n\\s+at ${u.METADATA_BOUNDARY_NAME}[\\n\\s]`),
        $ = RegExp(`\\n\\s+at ${u.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`),
        U = RegExp(`\\n\\s+at ${u.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
      function F(e, t, r, n, o) {
        if (!U.test(t)) {
          if (G.test(t)) {
            r.hasDynamicMetadata = !0;
            return;
          }
          if ($.test(t)) {
            r.hasDynamicViewport = !0;
            return;
          }
          if (B.test(t)) {
            r.hasSuspendedDynamic = !0;
            return;
          }
          if (n.syncDynamicErrorWithStack || o.syncDynamicErrorWithStack) {
            r.hasSyncDynamicErrors = !0;
            return;
          } else {
            let n = (function (e, t) {
              let r = Error(e);
              return (r.stack = "Error: " + e + t), r;
            })(
              `Route "${e}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`,
              t
            );
            r.dynamicErrors.push(n);
            return;
          }
        }
      }
      function H(e, t, r, n) {
        let o, s, i;
        if (
          (r.syncDynamicErrorWithStack
            ? ((o = r.syncDynamicErrorWithStack),
              (s = r.syncDynamicExpression),
              (i = !0 === r.syncDynamicLogged))
            : n.syncDynamicErrorWithStack
            ? ((o = n.syncDynamicErrorWithStack),
              (s = n.syncDynamicExpression),
              (i = !0 === n.syncDynamicLogged))
            : ((o = null), (s = void 0), (i = !1)),
          t.hasSyncDynamicErrors && o)
        )
          throw (i || console.error(o), new a.StaticGenBailoutError());
        let c = t.dynamicErrors;
        if (c.length) {
          for (let e = 0; e < c.length; e++) console.error(c[e]);
          throw new a.StaticGenBailoutError();
        }
        if (!t.hasSuspendedDynamic) {
          if (t.hasDynamicMetadata) {
            if (o)
              throw (
                (console.error(o),
                new a.StaticGenBailoutError(
                  `Route "${e}" has a \`generateMetadata\` that could not finish rendering before ${s} was used. Follow the instructions in the error for this expression to resolve.`
                ))
              );
            throw new a.StaticGenBailoutError(
              `Route "${e}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`
            );
          }
          if (t.hasDynamicViewport) {
            if (o)
              throw (
                (console.error(o),
                new a.StaticGenBailoutError(
                  `Route "${e}" has a \`generateViewport\` that could not finish rendering before ${s} was used. Follow the instructions in the error for this expression to resolve.`
                ))
              );
            throw new a.StaticGenBailoutError(
              `Route "${e}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`
            );
          }
        }
      }
    },
    2528: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorage", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = (0, r(8626).createAsyncLocalStorage)();
    },
    7305: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorage", {
          enumerable: !0,
          get: function () {
            return n.workAsyncStorage;
          },
        });
      let n = r(2528);
    },
    8379: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workUnitAsyncStorage", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = (0, r(8626).createAsyncLocalStorage)();
    },
    3074: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getExpectedRequestStore: function () {
            return o;
          },
          getPrerenderResumeDataCache: function () {
            return a;
          },
          getRenderResumeDataCache: function () {
            return s;
          },
          workUnitAsyncStorage: function () {
            return n.workUnitAsyncStorage;
          },
        });
      let n = r(8379);
      function o(e) {
        let t = n.workUnitAsyncStorage.getStore();
        if (t) {
          if ("request" === t.type) return t;
          if (
            "prerender" === t.type ||
            "prerender-ppr" === t.type ||
            "prerender-legacy" === t.type
          )
            throw Error(
              `\`${e}\` cannot be called inside a prerender. This is a bug in Next.js.`
            );
          if ("cache" === t.type)
            throw Error(
              `\`${e}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`
            );
          if ("unstable-cache" === t.type)
            throw Error(
              `\`${e}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`
            );
        }
        throw Error(
          `\`${e}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`
        );
      }
      function a(e) {
        return "prerender-legacy" !== e.type &&
          "cache" !== e.type &&
          "unstable-cache" !== e.type
          ? "request" === e.type
            ? e.devWarmupPrerenderResumeDataCache
            : e.prerenderResumeDataCache
          : null;
      }
      function s(e) {
        return "prerender-legacy" !== e.type &&
          "cache" !== e.type &&
          "unstable-cache" !== e.type
          ? "request" === e.type
            ? e.renderResumeDataCache
            : e.prerenderResumeDataCache
          : null;
      }
    },
    2249: (e, t) => {
      "use strict";
      function r(e, t) {
        let r = new Promise((r, n) => {
          e.addEventListener(
            "abort",
            () => {
              n(
                Error(
                  `During prerendering, ${t} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${t} to a different context by using \`setTimeout\`, \`unstable_after\`, or similar functions you may observe this error and you should handle it in that context.`
                )
              );
            },
            { once: !0 }
          );
        });
        return r.catch(n), r;
      }
      function n() {}
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "makeHangingPromise", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    9222: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isPostpone", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let r = Symbol.for("react.postpone");
      function n(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r;
      }
    },
    9965: (e, t, r) => {
      e.exports = r(2364);
    },
    1106: (e, t, r) => {
      e.exports = r(6397);
    },
    6424: (e, t, r) => {
      e.exports = r(3750);
    },
    6715: (e, t, r) => {
      e.exports = r(8440);
    },
    8133: (e, t, r) => {
      e.exports = r(7610);
    },
    2235: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.YouTubeEmbed = t.GoogleMapsEmbed = t.GoogleAnalytics = void 0);
      var n = r(5911);
      Object.defineProperty(t, "GoogleAnalytics", {
        enumerable: !0,
        get: function () {
          return n.GoogleAnalytics;
        },
      });
      var o = r(6398);
      Object.defineProperty(t, "GoogleMapsEmbed", {
        enumerable: !0,
        get: function () {
          return o.GoogleMapsEmbed;
        },
      });
      var a = r(2594);
      Object.defineProperty(t, "YouTubeEmbed", {
        enumerable: !0,
        get: function () {
          return a.YouTubeEmbed;
        },
      });
    },
    5911: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__rest) ||
          function (e, t) {
            var r = {};
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) &&
                0 > t.indexOf(n) &&
                (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var o = 0, n = Object.getOwnPropertySymbols(e);
                o < n.length;
                o++
              )
                0 > t.indexOf(n[o]) &&
                  Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                  (r[n[o]] = e[n[o]]);
            return r;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GoogleAnalytics = void 0);
      let a = o(r(452)),
        s = r(5909);
      t.GoogleAnalytics = (e) => {
        var t = n(e, []);
        return (0, s.formatData)(a.default, t);
      };
    },
    6398: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__rest) ||
          function (e, t) {
            var r = {};
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) &&
                0 > t.indexOf(n) &&
                (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var o = 0, n = Object.getOwnPropertySymbols(e);
                o < n.length;
                o++
              )
                0 > t.indexOf(n[o]) &&
                  Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                  (r[n[o]] = e[n[o]]);
            return r;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GoogleMapsEmbed = void 0);
      let a = o(r(4399)),
        s = r(5909);
      t.GoogleMapsEmbed = (e) => {
        var t = n(e, []);
        return (0, s.formatData)(a.default, t);
      };
    },
    2594: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__rest) ||
          function (e, t) {
            var r = {};
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) &&
                0 > t.indexOf(n) &&
                (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var o = 0, n = Object.getOwnPropertySymbols(e);
                o < n.length;
                o++
              )
                0 > t.indexOf(n[o]) &&
                  Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                  (r[n[o]] = e[n[o]]);
            return r;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.YouTubeEmbed = void 0);
      let a = o(r(9699)),
        s = r(5909);
      t.YouTubeEmbed = (e) => {
        var t = n(e, []);
        return (0, s.formatData)(a.default, t);
      };
    },
    5909: (e, t) => {
      "use strict";
      function r(e, t, n = !1) {
        return t
          ? Object.keys(e)
              .filter((e) => (n ? !t.includes(e) : t.includes(e)))
              .reduce((t, r) => ((t[r] = e[r]), t), {})
          : {};
      }
      function n(e, t, r, n) {
        let o =
          n && Object.keys(n).length > 0
            ? new URL(Object.values(n)[0], e)
            : new URL(e);
        return (
          t &&
            r &&
            t.forEach((e) => {
              r[e] && o.searchParams.set(e, r[e]);
            }),
          o.toString()
        );
      }
      function o(e, t, r, o, a) {
        var s;
        if (!t) return `<${e}></${e}>`;
        let i = (null === (s = t.src) || void 0 === s ? void 0 : s.url)
            ? Object.assign(Object.assign({}, t), {
                src: n(t.src.url, t.src.params, o, a),
              })
            : t,
          c = Object.keys(Object.assign(Object.assign({}, i), r)).reduce(
            (e, t) => {
              let n = null == r ? void 0 : r[t],
                o = i[t],
                a = null != n ? n : o,
                s = !0 === a ? t : `${t}="${a}"`;
              return a ? e + ` ${s}` : e;
            },
            ""
          );
        return `<${e}${c}></${e}>`;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatData = t.createHtml = t.formatUrl = void 0),
        (t.formatUrl = n),
        (t.createHtml = o),
        (t.formatData = function (e, t) {
          var a, s, i, c, u;
          let l = r(
              t,
              null === (a = e.scripts) || void 0 === a
                ? void 0
                : a.reduce(
                    (e, t) => [
                      ...e,
                      ...(Array.isArray(t.params) ? t.params : []),
                    ],
                    []
                  )
            ),
            d = r(
              t,
              null ===
                (i =
                  null === (s = e.html) || void 0 === s
                    ? void 0
                    : s.attributes.src) || void 0 === i
                ? void 0
                : i.params
            ),
            f = r(t, [
              null ===
                (u =
                  null === (c = e.html) || void 0 === c
                    ? void 0
                    : c.attributes.src) || void 0 === u
                ? void 0
                : u.slugParam,
            ]),
            p = r(
              t,
              [...Object.keys(l), ...Object.keys(d), ...Object.keys(f)],
              !0
            );
          return Object.assign(Object.assign({}, e), {
            html: e.html ? o(e.html.element, e.html.attributes, p, d, f) : null,
            scripts: e.scripts
              ? e.scripts.map((e) =>
                  Object.assign(Object.assign({}, e), {
                    url: n(e.url, e.params, l),
                  })
                )
              : null,
          });
        });
    },
    7373: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => c });
      var n = r(6540);
      let o = new Map(),
        a = new Set();
      function s(e) {
        for (let t of [...a]) t(e);
      }
      function i(e) {
        try {
          return e();
        } catch {}
      }
      let c = function (e, t) {
        let r = t?.serializer,
          [c] = (0, n.useState)(t?.defaultValue);
        return (function (
          e,
          t,
          r = !0,
          c = function (e) {
            return "undefined" === e ? void 0 : JSON.parse(e);
          },
          u = JSON.stringify
        ) {
          let l = (0, n.useRef)({ string: null, parsed: void 0 }),
            d = (0, n.useSyncExternalStore)(
              (0, n.useCallback)(
                (t) => {
                  let r = (r) => {
                    e === r && t();
                  };
                  return (
                    a.add(r),
                    () => {
                      a.delete(r);
                    }
                  );
                },
                [e]
              ),
              () => {
                let r = i(() => localStorage.getItem(e)) ?? null;
                if (o.has(e)) l.current.parsed = o.get(e);
                else if (r !== l.current.string) {
                  let e;
                  try {
                    e = null === r ? t : c(r);
                  } catch {
                    e = t;
                  }
                  l.current.parsed = e;
                }
                return (
                  (l.current.string = r),
                  void 0 !== t &&
                    null === r &&
                    i(() => {
                      let r = u(t);
                      localStorage.setItem(e, r),
                        (l.current = { string: r, parsed: t });
                    }),
                  l.current.parsed
                );
              },
              () => t
            ),
            f = (0, n.useCallback)(
              (t) => {
                let r = t instanceof Function ? t(l.current.parsed) : t;
                try {
                  localStorage.setItem(e, u(r)), o.delete(e);
                } catch {
                  o.set(e, r);
                }
                s(e);
              },
              [e, u]
            ),
            p = (0, n.useCallback)(() => {
              i(() => localStorage.removeItem(e)), o.delete(e), s(e);
            }, [e]);
          return (
            (0, n.useEffect)(() => {
              if (!r) return;
              let t = (t) => {
                t.key === e && t.storageArea === i(() => localStorage) && s(e);
              };
              return (
                window.addEventListener("storage", t),
                () => window.removeEventListener("storage", t)
              );
            }, [e, r]),
            (0, n.useMemo)(
              () => [
                d,
                f,
                { isPersistent: d === t || !o.has(e), removeItem: p },
              ],
              [e, f, d, t, p]
            )
          );
        })(e, c, t?.storageSync, r?.parse, r?.stringify);
      };
    },
    452: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}'
      );
    },
    4399: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}'
      );
    },
    9699: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}'
      );
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [593, 792], () => (t(8424), t(8440))), (_N_E = e.O());
  },
]);
