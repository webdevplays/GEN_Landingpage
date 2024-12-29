(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [332],
  {
    2022: (e, n, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(2970);
        },
      ]);
    },
    2970: (e, n, a) => {
      "use strict";
      a.r(n), a.d(n, { default: () => G });
      var t = a(4848),
        s = a(6540),
        i = a(3368),
        r = a.n(i),
        l = a(6715),
        o = a(8396),
        c = a.n(o),
        d = a(2515),
        h = a.n(d),
        m = a(105),
        x = a(6424),
        j = a(7373),
        g = a(9698),
        p = a(1896);
      let _ = () => {
        let e = (0, x.useSearchParams)(),
          [n, a] = (0, j.A)("queryString", { defaultValue: e.toString() }),
          [i] = (0, j.A)("privy:token", { defaultValue: "" }),
          r = (0, p.A)();
        return (
          (0, s.useEffect)(() => {
            e.toString() && a(e.toString());
          }, [e]),
          (0, t.jsxs)("section", {
            className: h().intro,
            children: [
              (0, t.jsx)("div", {
                className: "container",
                children: (0, t.jsxs)("div", {
                  className: "".concat(h().header, " radialGradient"),
                  children: [
                    (0, t.jsx)(c(), {
                      animateOnce: !0,
                      animateIn: "fadeInUp",
                      duration: 0.75,
                      children: (0, t.jsxs)("h1", {
                        children: [
                          "CONQUER THE PLANET",
                          (0, t.jsx)("br", {}),
                          "RULE THE WORLD",
                        ],
                      }),
                    }),
                    (0, t.jsx)(c(), {
                      animateOnce: !0,
                      animateIn: "fadeInUp",
                      duration: 0.75,
                      delay: 375,
                      children: r.timerIsOver
                        ? (0, t.jsx)(m.A, {
                            orange: !0,
                            corners: !0,
                            animation: !0,
                            url: ""
                              .concat(i ? g.J.play : g.J.demos)
                              .concat(n ? "?" : "")
                              .concat(
                                n.slice(0, n.endsWith("=") ? -1 : void 0)
                              ),
                            children: (0, t.jsx)("span", {
                              className: h().playSpan,
                              children: (0, t.jsx)("span", {
                                children: "GEN AI DEMO",
                              }),
                            }),
                          })
                        : (0, t.jsx)(m.A, {
                            orange: !0,
                            corners: !0,
                            animation: !0,
                            url: " "
                              .concat(g.J.treasury)
                              .concat(n ? "?" : "")
                              .concat(
                                n.slice(0, n.endsWith("=") ? -1 : void 0)
                              ),
                            children: (0, t.jsx)("span", {
                              children: (0, t.jsxs)("span", {
                                children: [
                                  r.hours,
                                  " HOURS ",
                                  r.minutes,
                                  " MIN",
                                ],
                              }),
                            }),
                          }),
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("div", {
                className: h().video,
                children: (0, t.jsx)("video", {
                  muted: !0,
                  autoPlay: !0,
                  loop: !0,
                  playsInline: !0,
                  src: "bg.mp4",
                }),
              }),
              ,
              (0, t.jsx)("div", {
                className: "heroimg" , 
                children: (0, t.jsx)("img", {
                  muted: !0,
                  autoPlay: !0,
                  loop: !0,
                  playsInline: !0,
                  src: "hero.png",
                }),
              }),
            ],
          })
        );
      };
      var v = a(9965),
        y = a.n(v),
        u = a(7963),
        N = a(1988),
        I = a.n(N);
      let C = () => {
        let e = (0, s.useRef)(null),
          [n, a] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            e.current && (e.current.volume = 0.1);
          }, []),
          (0, t.jsxs)("section", {
            className: I().about,
            children: [
              (0, t.jsx)("div", {
                className: I().bg,
                children: (0, t.jsx)(y(), {
                  src: "/hex-bg-mask.svg",
                  width: 1366,
                  height: 1316,
                  alt: "",
                  role: "presentation",
                }),
              }),
              (0, t.jsx)("div", {
                className: "container",
                children: (0, t.jsxs)("div", {
                  className: "".concat(I().content, " radialGradient"),
                  children: [
                    (0, t.jsx)(c(), {
                      animateOnce: !0,
                      animateIn: "fadeInUp",
                      duration: 0.75,
                      children: (0, t.jsx)("h2", {
                        children: "ABOUT GEN AI",
                      }),
                    }),
                    (0, t.jsx)(c(), {
                      animateOnce: !0,
                      animateIn: "fadeInUp",
                      duration: 0.75,
                      delay: 125,
                      children: (0, t.jsx)("p", {
                        children:
                          "GEN AI (Generation AI) project is an initiatives and efforts focused on harnessing the power of generative artificial intelligence to drive innovation and create cutting-edge solutions. These projects aim to develop and apply AI technologies that can generate new, unique content, and revolutionize cyber security system, all by leveraging advanced machine learning algorithms, data, and computational power.",
                      }),
                    }),
                    (0, t.jsx)(c(), {
                      animateOnce: !0,
                      animateIn: "fadeInUp",
                      duration: 0.75,
                      delay: 250,
                      children: (0, t.jsx)("p", {
                        className: "orange",
                        children:
                          "WORLD OF AI",
                      }),
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("div", {
                onClick: () => {
                  console.log(123),
                    a((n) => {
                      var a, t;
                      return (
                        n
                          ? null === (a = e.current) ||
                            void 0 === a ||
                            a.pause()
                          : null === (t = e.current) ||
                            void 0 === t ||
                            t.play(),
                        !n
                      );
                    });
                },
                className: "container",
                children: (0, t.jsx)(c(), {
                  animateOnce: !0,
                  animateIn: "zoomIn",
                  duration: 0.75,
                  delay: 375,
                  children: (0, t.jsxs)("div", {
                    className: ""
                      .concat(I().video, " ")
                      .concat(n ? I().videoPlaying : ""),
                    children: [
                      (0, t.jsx)(u.A, {}),
                      (0, t.jsx)("video", {
                        loop: !0,
                        src: "trail.mp4",
                        ref: e,
                      }),
                      (0, t.jsx)("button", {
                        children: (0, t.jsxs)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 48 48",
                          fill: "none",
                          children: [
                            (0, t.jsx)("circle", {
                              cx: "24",
                              cy: "24",
                              r: "23.5",
                            }),
                            (0, t.jsx)("path", {
                              d: "M32 24L20 30.9282L20 17.0718L32 24Z",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      };
      var w = a(1521),
        f = a(5893),
        O = a.n(f),
        b = a(2066),
        E = a.n(b);
      let S = () => {
        let [e, n] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            let e = () => {
              n(window.innerWidth <= 1024);
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, t.jsxs)("section", {
            className: E().partners,
            id: "partners",
            children: [
              (0, t.jsx)("div", {
                className: "container",
                children: (0, t.jsx)(c(), {
                  animateOnce: !0,
                  animateIn: "fadeInUp",
                  duration: 0.75,
                  children: (0, t.jsx)("h4", { children: "FUELED BY VISION" }),
                }),
              }),
              (0, t.jsxs)("div", {
                className: E().content,
                children: [
                  (0, t.jsx)(c(), {
                    animateOnce: !0,
                    animateIn: "zoomIn",
                    duration: 0.75,
                    delay: 250,
                    children: (0, t.jsxs)("div", {
                      className: E().header,
                      children: [
                        (0, t.jsx)(u.A, { stroke: "#aaa" }),
                        (0, t.jsx)("span", {
                          className: O().className,
                          children: "key partners",
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: "container",
                    children: (0, t.jsxs)("div", {
                      className: E().list,
                      children: [
                        (0, t.jsxs)(w.A, {
                          autoFill: e,
                          play: e,
                          className: E().marquee,
                          children: [
                            (0, t.jsx)("div", {
                              className: E().item,
                              children: (0, t.jsx)(y(), {
                                src: "/v3v.svg",
                                width: 91,
                                height: 32,
                                alt: "v3v",
                                title: "v3v",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: E().item,
                              children: (0, t.jsx)(y(), {
                                src: "/nethermind.svg",
                                width: 212,
                                height: 32,
                                alt: "Nethermind",
                                title: "Nethermind",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: E().item,
                              children: (0, t.jsx)(y(), {
                                src: "/base.svg",
                                width: 99,
                                height: 32,
                                alt: "Base",
                                title: "Base",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: E().item,
                              children: (0, t.jsx)(y(), {
                                src: "/trustwallet.svg",
                                width: 196,
                                height: 32,
                                alt: "Trustwallet",
                                title: "Trustwallet",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: E().item,
                              children: (0, t.jsx)(y(), {
                                src: "/moonpay.svg",
                                width: 144,
                                height: 32,
                                alt: "Moonpay",
                                title: "Moonpay",
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsxs)(w.A, {
                          autoFill: e,
                          play: e,
                          className: E().marquee,
                          direction: "right",
                          children: [
                            (0, t.jsx)("div", {
                              className: E().item,
                              children: (0, t.jsx)(y(), {
                                src: "/privy.svg",
                                width: 110,
                                height: 32,
                                alt: "Privy",
                                title: "Privy",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: E().item,
                              children: (0, t.jsx)(y(), {
                                src: "/oxario.svg",
                                width: 149,
                                height: 32,
                                alt: "Oxario",
                                title: "Oxario",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: E().item,
                              children: (0, t.jsx)(y(), {
                                src: "/ax1.svg",
                                width: 74,
                                height: 32,
                                alt: "AX1",
                                title: "AX1",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: E().item,
                              children: (0, t.jsx)(y(), {
                                src: "/logo.png",
                                width: 49,
                                height: 32,
                                alt: "Logo",
                                title: "Logo",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: E().item,
                              children: (0, t.jsx)(y(), {
                                src: "/orion.svg",
                                width: 97,
                                height: 32,
                                alt: "Orion Systematic",
                                title: "Orion Systematic",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: E().item,
                              children: (0, t.jsx)(y(), {
                                src: "/angels.svg",
                                width: 134,
                                height: 32,
                                alt: "Angels 30+",
                                title: "Angels 30+",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var k = a(9990),
        A = a.n(k);
      let U = () =>
        (0, t.jsxs)("section", {
          className: A().early,
          id: "community",
          children: [
            (0, t.jsxs)("div", {
              className: A().bg,
              children: [
                (0, t.jsx)(y(), {
                  className: A().bg4k,
                  src: "/early-bg-desktop-4k.svg",
                  width: 4097,
                  height: 1700,
                  alt: "",
                  role: "presentation",
                }),
                (0, t.jsx)(y(), {
                  className: A().bgDesktop,
                  src: "/early-bg-desktop.svg",
                  width: 1366,
                  height: 548,
                  alt: "",
                  role: "presentation",
                }),
                (0, t.jsx)(y(), {
                  className: A().bgDevice,
                  src: "/early-bg-device.svg",
                  width: 768,
                  height: 520,
                  alt: "",
                  role: "presentation",
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "container",
              children: (0, t.jsxs)("div", {
                className: A().content,
                children: [
                  (0, t.jsx)(c(), {
                    animateOnce: !0,
                    animateIn: "fadeInUp",
                    duration: 0.75,
                    children: (0, t.jsx)("h4", {
                      children: "YOU’RE STILL EARLY",
                    }),
                  }),
                  (0, t.jsx)(c(), {
                    animateOnce: !0,
                    animateIn: "zoomIn",
                    duration: 0.75,
                    delay: 250,
                    children: (0, t.jsx)(m.A, {
                      url: "https://t.me/",
                      children: (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)("span", { children: "JOIN COMMUNITY" }),
                          (0, t.jsx)("svg", {
                            viewBox: "0 0 21 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, t.jsx)("path", {
                              d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.3583 9.38244C11.3857 9.787 9.44177 10.6243 6.52657 11.8944C6.05318 12.0827 5.8052 12.2669 5.78263 12.4469C5.74448 12.7513 6.12559 12.8711 6.64455 13.0343C6.71515 13.0565 6.78829 13.0795 6.86327 13.1038C7.37385 13.2698 8.06068 13.464 8.41773 13.4717C8.74161 13.4787 9.1031 13.3452 9.50219 13.0711C12.226 11.2325 13.632 10.3032 13.7202 10.2831C13.7825 10.269 13.8688 10.2512 13.9273 10.3032C13.9858 10.3552 13.98 10.4536 13.9738 10.48C13.9361 10.641 12.4401 12.0318 11.6659 12.7515C11.4246 12.9759 11.2534 13.135 11.2184 13.1714C11.14 13.2528 11.0601 13.3298 10.9833 13.4038C10.509 13.8611 10.1532 14.204 11.003 14.764C11.4114 15.0331 11.7381 15.2556 12.0641 15.4776C12.4201 15.7201 12.7752 15.9619 13.2347 16.2631C13.3517 16.3398 13.4635 16.4195 13.5724 16.4971C13.9867 16.7925 14.3589 17.0579 14.8188 17.0155C15.086 16.991 15.362 16.7397 15.5022 15.9903C15.8335 14.2193 16.4847 10.382 16.6352 8.80081C16.6484 8.66228 16.6318 8.48498 16.6185 8.40715C16.6051 8.32932 16.5773 8.21842 16.4761 8.13633C16.3563 8.03911 16.1714 8.01861 16.0886 8.02C15.7125 8.0267 15.1354 8.22735 12.3583 9.38244Z",
                              fill: "#101012",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      var T = a(5374),
        R = a.n(T);
      let P = () =>
        (0, t.jsxs)("section", {
          className: R().core,
          id: "core",
          children: [
            (0, t.jsx)(c(), {
              animateOnce: !0,
              animateIn: "fadeIn",
              duration: 2,
              delay: 500,
              initiallyVisible: !0,
              children: (0, t.jsx)("div", {
                className: R().bg,
                children: (0, t.jsx)(y(), {
                  src: "/core-bg.png",
                  width: 1366,
                  height: 2123,
                  alt: "",
                  role: "presentation",
                }),
              }),
            }),
            (0, t.jsx)("div", {
              className: "container",
              children: (0, t.jsxs)("div", {
                className: R().content,
                children: [
                  (0, t.jsx)(c(), {
                    animateOnce: !0,
                    animateIn: "fadeInUp",
                    duration: 0.75,
                    delay: 125,
                    children: (0, t.jsx)("h2", { children: "CORE" }),
                  }),
                  (0, t.jsxs)("div", {
                    className: R().list,
                    children: [
                      (0, t.jsxs)("div", {
                        className: R().item,
                        children: [
                          (0, t.jsxs)("div", {
                            className: R().left,
                            children: [
                              (0, t.jsx)(c(), {
                                animateOnce: !0,
                                duration: 0.75,
                                animateIn: "fadeInUp",
                                children: (0, t.jsx)("h5", {
                                  children: "EASY TO START",
                                }),
                              }),
                              (0, t.jsx)(c(), {
                                animateOnce: !0,
                                duration: 0.75,
                                animateIn: "fadeInUp",
                                delay: 125,
                                children: (0, t.jsx)("p", {
                                  children:
                                    "The game is designed with a simple entry point, allowing new players to jump in quickly and understand the basics of GEN AI without heavy crypto bullshit.",
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)(c(), {
                            animateOnce: !0,
                            duration: 1,
                            animateIn: "fadeInRight",
                            className: R().right,
                            children: [
                              (0, t.jsx)(u.A, {}),
                              (0, t.jsx)(y(), {
                                src: "/sc1.jpg",
                                width: 704,
                                height: 457,
                                alt: "Easy to Start",
                                title: "Easy to Start",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: R().item,
                        children: [
                          (0, t.jsxs)("div", {
                            className: R().left,
                            children: [
                              (0, t.jsx)(c(), {
                                animateOnce: !0,
                                duration: 0.75,
                                animateIn: "fadeInUp",
                                children: (0, t.jsx)("h5", {
                                  children: "DYNAMIC WORLD",
                                }),
                              }),
                              (0, t.jsx)(c(), {
                                animateOnce: !0,
                                duration: 0.75,
                                animateIn: "fadeInUp",
                                delay: 125,
                                children: (0, t.jsx)("p", {
                                  children:
                                    "The Gen Ai world fill of advance machine, simple and unique interface selecting a character.",
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)(c(), {
                            animateOnce: !0,
                            duration: 1,
                            animateIn: "fadeInRight",
                            className: R().right,
                            children: [
                              (0, t.jsx)(u.A, {}),
                              (0, t.jsx)(y(), {
                                src: "/sc2.jpg",
                                width: 704,
                                height: 457,
                                alt: "Dynamic World",
                                title: "Dynamic World",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: R().item,
                        children: [
                          (0, t.jsxs)("div", {
                            className: R().left,
                            children: [
                              (0, t.jsx)(c(), {
                                animateOnce: !0,
                                duration: 0.75,
                                animateIn: "fadeInUp",
                                children: (0, t.jsx)("h5", {
                                  children: "CONTROL & STRATEGY",
                                }),
                              }),
                              (0, t.jsx)(c(), {
                                animateOnce: !0,
                                duration: 0.75,
                                animateIn: "fadeInUp",
                                delay: 125,
                                children: (0, t.jsx)("p", {
                                  children:
                                    "Drive & initiate the command of an Ai code.",
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)(c(), {
                            animateOnce: !0,
                            duration: 1,
                            animateIn: "fadeInRight",
                            className: R().right,
                            children: [
                              (0, t.jsx)(u.A, {}),
                              (0, t.jsx)(y(), {
                                src: "/sc3.jpg",
                                width: 704,
                                height: 457,
                                alt: "Control & Strategy",
                                title: "Control & Strategy",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      var D = a(6205),
        L = a.n(D);
      let M = () =>
        (0, t.jsxs)("section", {
          className: L().owb,
          id: "owb",
          children: [
            (0, t.jsx)(y(), {
              src: "/separator.png",
              width: 1366,
              height: 24,
              alt: "",
              role: "presentation",
            }),
            (0, t.jsxs)("div", {
              className: L().body,
              children: [
                (0, t.jsx)(y(), {
                  src: "/blurimg.png",
                  width: 1366,
                  height: 514,
                  alt: "",
                  role: "presentation",
                }),
                (0, t.jsx)("div", {
                  className: L().content,
                  children: (0, t.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, t.jsx)(c(), {
                        animateOnce: !0,
                        duration: 0.75,
                        animateIn: "fadeInUp",
                        children: (0, t.jsx)("h2", { children: "$GEN" }),
                      }),
                      (0, t.jsxs)(c(), {
                        animateOnce: !0,
                        duration: 0.75,
                        animateIn: "zoomIn",
                        delay: 375,
                        className: L().soon,
                        children: [
                          (0, t.jsx)(u.A, { stroke: "#a640d799" }),
                          (0, t.jsx)("span", {
                            className: O().className,
                            children: "COMMUNITY FIRST, COMING SOON",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, t.jsx)(y(), {
              src: "/separator.png",
              width: 1366,
              height: 24,
              alt: "",
              role: "presentation",
            }),
          ],
        });
      var B = a(1177),
        W = a.n(B);
      let Y = () =>
        (0, t.jsxs)("section", {
          className: W().economy,
          id: "economy",
          children: [
            (0, t.jsxs)("div", {
              className: W().bg,
              children: [
                (0, t.jsx)(y(), {
                  className: W().bg4k,
                  src: "/economy-bg-desktop-4k.svg",
                  width: 4097,
                  height: 2160,
                  alt: "",
                  role: "presentation",
                }),
                (0, t.jsx)(y(), {
                  className: W().bgDesktop,
                  src: "/economy-bg-desktop.svg",
                  width: 1366,
                  height: 740,
                  alt: "",
                  role: "presentation",
                }),
                (0, t.jsx)(y(), {
                  className: W().bgDevice,
                  src: "/economy-bg-device.svg",
                  width: 768,
                  height: 520,
                  alt: "",
                  role: "presentation",
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "container",
              children: (0, t.jsxs)("div", {
                className: W().content,
                children: [
                  (0, t.jsx)(c(), {
                    animateOnce: !0,
                    duration: 0.75,
                    animateIn: "fadeInUp",
                    children: (0, t.jsx)("h2", { children: "ECONOMY" }),
                  }),
                  (0, t.jsx)(c(), {
                    animateOnce: !0,
                    duration: 0.75,
                    animateIn: "fadeInUp",
                    delay: 125,
                    children: (0, t.jsx)("h5", {
                      children: "CRAFTED BY EXPERTS, BUILT FOR STRATEGISTS",
                    }),
                  }),
                  (0, t.jsx)(c(), {
                    animateOnce: !0,
                    duration: 0.75,
                    animateIn: "fadeInUp",
                    delay: 250,
                    children: (0, t.jsx)("p", {
                      children:
                        "At OneWayBlock, our economy adapts to every decision, empowering players to shape their path, amass wealth, and leave a mark on the world. Every choice deepens the journey, making each playthrough unforgettable.",
                    }),
                  }),
                  (0, t.jsx)(c(), {
                    animateOnce: !0,
                    duration: 0.75,
                    animateIn: "zoomIn",
                    delay: 375,
                    children: (0, t.jsx)(m.A, {
                      url: "",
                      children: (0, t.jsx)("span", { children: "THE DOCS" }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      var q = a(7836);
      let G = () => {
        let e = q.env.NEXT_PUBLIC_WEBSITE_URL,
          n = (0, l.useRouter)(),
          [, a] = (0, s.useState)("");
        return (
          (0, s.useEffect)(() => {
            var e;
            let n = localStorage.getItem("invitationCode");
            if (n)
              try {
                JSON.parse(n);
              } catch (e) {
                (n = ""), a(""), localStorage.removeItem("invitationCode");
              }
            let t = new URLSearchParams(window.location.search),
              s =
                t.get("invitationCode") ||
                (null !== (e = t.keys().next().value) && void 0 !== e ? e : ""),
              i = (n ? JSON.parse(n) : null) || s;
            i &&
              (a(i),
              localStorage.setItem("invitationCode", JSON.stringify(i)),
              localStorage.setItem("invitationCode_v2", JSON.stringify(i)));
          }, [n.query]),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(r(), {
                children: [
                  (0, t.jsx)("title", { children: "GEN AI" }),
                  (0, t.jsx)("meta", {
                    name: "description",
                    content:
                      "GEN AI - dynamic MMORPG. Conquer the planet, rule the world.",
                  }),
                  (0, t.jsx)("meta", {
                    property: "og:title",
                    content: "GEN AI",
                  }),
                  (0, t.jsx)("meta", {
                    property: "og:description",
                    content:
                      "GEN AI - dynamic MMORPG. Conquer the planet, rule the world.",
                  }),
                  (0, t.jsx)("meta", {
                    property: "og:title",
                    content: "GEN AI",
                  }),
                  (0, t.jsx)("meta", {
                    property: "og:locale",
                    content: "en_US",
                  }),
                  (0, t.jsx)("meta", {
                    property: "og:image",
                    content: "".concat(e, "/og-image.png"),
                  }),
                  (0, t.jsx)("meta", {
                    property: "og:image:width",
                    content: "1200",
                  }),
                  (0, t.jsx)("meta", {
                    property: "og:image:height",
                    content: "630",
                  }),
                  (0, t.jsx)("meta", {
                    property: "og:type",
                    content: "website",
                  }),
                  (0, t.jsx)("meta", { property: "og:url", content: e }),
                  (0, t.jsx)("meta", {
                    property: "og:site_name",
                    content: "GEN AI",
                  }),
                  (0, t.jsx)("meta", {
                    property: "article:modified_time",
                    content: "2024-10-29T08:56:49Z",
                  }),
                  (0, t.jsx)("link", {
                    rel: "canonical",
                    href: "".concat(e, "/"),
                  }),
                  (0, t.jsx)("meta", {
                    name: "twitter:card",
                    content: "summary_large_image",
                  }),
                  (0, t.jsx)("meta", {
                    name: "twitter:title",
                    content: "GEN AI",
                  }),
                ],
              }),
              (0, t.jsxs)("main", {
                children: [
                  (0, t.jsx)(_, {}),
                  (0, t.jsx)(C, {}),
                  (0, t.jsx)(S, {}),
                  (0, t.jsx)(U, {}),
                  (0, t.jsx)(P, {}),
                  (0, t.jsx)(M, {}),
                  (0, t.jsx)(Y, {}),
                ],
              }),
            ],
          })
        );
      };
    },
    1988: (e) => {
      e.exports = {
        about: "About_about__iZ59c",
        bg: "About_bg__Ou8Ik",
        content: "About_content__vGFUp",
        video: "About_video__UIsUS",
        soon: "About_soon___JU22",
        videoPlaying: "About_videoPlaying__6IX3f",
      };
    },
    5374: (e) => {
      e.exports = {
        core: "Core_core__fbZ3H",
        bg: "Core_bg__PK6et",
        content: "Core_content__ij_lb",
        list: "Core_list__57v4K",
        item: "Core_item__EVc9k",
        left: "Core_left__wbYXI",
        right: "Core_right__J845V",
      };
    },
    9990: (e) => {
      e.exports = {
        early: "Early_early__MDlqD",
        bg: "Early_bg__RKky3",
        bg4k: "Early_bg4k__eXGYD",
        bgDevice: "Early_bgDevice___fdD6",
        content: "Early_content__yaKJc",
        bgDesktop: "Early_bgDesktop__5SQlZ",
      };
    },
    1177: (e) => {
      e.exports = {
        economy: "Economy_economy__4kGGh",
        bg: "Economy_bg__IggWs",
        bg4k: "Economy_bg4k__ShMWE",
        bgDevice: "Economy_bgDevice__REPFk",
        content: "Economy_content__DXYvA",
        bgDesktop: "Economy_bgDesktop__HMw0v",
      };
    },
    2515: (e) => {
      e.exports = {
        intro: "Intro_intro__7qqV8",
        header: "Intro_header__tUvrT",
        video: "Intro_video__TgN5S",
        playSpan: "Intro_playSpan__mOItU",
      };
    },
    6205: (e) => {
      e.exports = {
        owb: "OWB_owb__lV8Jw",
        body: "OWB_body__PRVhL",
        content: "OWB_content__YC9j4",
        soon: "OWB_soon__E3ZZS",
      };
    },
    2066: (e) => {
      e.exports = {
        partners: "Partners_partners__AuwJo",
        content: "Partners_content__4YKhC",
        header: "Partners_header__QqrvO",
        list: "Partners_list__EUd_G",
        item: "Partners_item__S_zq_",
        marquee: "Partners_marquee__uPf_W",
      };
    },
  },
  (e) => {
    var n = (n) => e((e.s = n));
    e.O(0, [279, 636, 593, 792], () => n(2022)), (_N_E = e.O());
  },
]);
