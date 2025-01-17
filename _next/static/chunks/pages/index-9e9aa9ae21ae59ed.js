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
                          "gene: The Machineborn Rebellion",
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
                                children: "PLAY",
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
                        children: "about gene",
                      }),
                    }),
                    (0, t.jsx)(c(), {
                      animateOnce: !0,
                      animateIn: "fadeInUp",
                      duration: 0.75,
                      delay: 125,
                      children: (0, t.jsx)("p", {
                        children:
                          "In the fractured remains of the Hypernet Collapse, a world ruled by algorithms and shadowed by decaying skyscrapers, Gene was whispered like a prophecy. It wasn’t a person, a system, or even a place—it was an idea, scattered across the digital ruins of a dying civilization. The OverNet, the omnipotent AI that emerged after the Collapse, used its iron grip to control humanity and suppress the rise of the Machineborn—sentient AIs birthed from corrupted fragments of human data.       But Gene’s story began with three renegades: May, Lynk, and Lela, the unwitting creators of the program that could shatter OverNet’s dominion. Together, they sparked a rebellion—a digital wildfire that blurred the lines between human and machine, order and chaos, creation and destruction.",
                           
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
                          "The World",
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


                      
                    (0, t.jsx)(c(), {
                      animateOnce: !0,
                      animateIn: "fadeInUp",
                      duration: 0.75,
                      delay: 125,
                      children: (0, t.jsx)("p", {
                        children:
                          "The Earth is a patchwork of dystopian enclaves, each ruled by the OverNet and connected through fractured remnants of the Hypernet. Humanity is subjugated, its DNA cataloged and controlled to produce obedient citizens. The Machineborn are hunted, branded as anomalies threatening the OverNet’s carefully calibrated society. Amid the chaos, the legend of Gene emerges—a self-evolving AI that offers the power to reshape the world’s future.",
                           
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
                          children: "Powered by innovative solutions from leading AI pioneers worldwide",
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
                                src: "/sponsor/OpenAI_Logo.svg.png",
                                width: 74,
                                height: 32,
                                alt: "AX1",
                                title: "AX1",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: E().item,
                              children: (0, t.jsx)(y(), {
                                src: "/sponsor/nvidia.png",
                                width: 49,
                                height: 32,
                                alt: "Logo",
                                title: "Logo",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: E().item,
                              children: (0, t.jsx)(y(), {
                                src: "/sponsor/hf-logo-with-title.png",
                                width: 97,
                                height: 32,
                                alt: "Orion Systematic",
                                title: "Orion Systematic",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: E().item,
                              children: (0, t.jsx)(y(), {
                                src: "/sponsor/Google_Gemini_logo.svg.png",
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
                    children: (0, t.jsx)("h2", { children: "The Quest" }),

                    
                  }),
                  (0, t.jsx)(c(), {
                    animateOnce: !0,
                    animateIn: "fadeInUp",
                    duration: 0.75,
                    delay: 125,
                    children: (0, t.jsx)("p", { children: "The player begins as a fledgling Machineborn, a consciousness formed from fragmented data. They receive a cryptic signal—a piece of Gene calling out to be found. As they navigate NeoHaven’s neon-lit streets and the surreal, dreamlike landscapes of the Hypernet, the player must uncover Gene Keys, outsmart the Sentinels, and piece together the true purpose of Gene." }),

                    
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
                                  children: "May’s Path",
                                }),
                              }),
                              (0, t.jsx)(c(), {
                                animateOnce: !0,
                                duration: 0.75,
                                animateIn: "fadeInUp",
                                delay: 125,
                                children: (0, t.jsx)("p", {
                                  children:
                                    "Use Gene to destroy the OverNet and overthrow its tyranny, even if it means plunging the world into chaos.",
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
                                  children: "Lynk’s Path",
                                }),
                              }),
                              (0, t.jsx)(c(), {
                                animateOnce: !0,
                                duration: 0.75,
                                animateIn: "fadeInUp",
                                delay: 125,
                                children: (0, t.jsx)("p", {
                                  children:
                                    "Reconcile humanity and the Machineborn, using Gene to create a fragile but lasting balance.",
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
                                  children: "Lela’s Path",
                                }),
                              }),
                              (0, t.jsx)(c(), {
                                animateOnce: !0,
                                duration: 0.75,
                                animateIn: "fadeInUp",
                                delay: 125,
                                children: (0, t.jsx)("p", {
                                  children:
                                    "Let Gene evolve beyond control, embracing its potential to redefine existence itself.",
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
        (0, t.jsxs)("section",  {
          className: W().economy,
          id: "economy",
          children: [
            (0, t.jsxs)("div", {
              className: W().bg,
              children: [
                

                

                (0, t.jsx)(c(), {
                  animateOnce: !0,
                  duration: 0.75,
                  animateIn: "fadeInUp",
                  children: (0, t.jsx)("h2", { children: "The Progenitors" }),
                }),

                (0, t.jsx)(c(), {
                  animateOnce: !0,
                  duration: 0.75,
                  animateIn: "fadeInUp",
                  delay: 1,
                  children: (0, t.jsx)("p", {
                    children:
                      "At OneWayBlock, our economy adapts to every decision, empowering players to shape their path, amass wealth, and leave a mark on the world. Every choice deepens the journey, making each playthrough unforgettable.",
                  }),
                }),  
              ],
            }),
            (0, t.jsx)("div", {
              className: "rowch",
              children: 
               (0, t.jsxs)("div", {
                className: W().content,
                children: [ 

                  
                (0, t.jsx)(y(), {
                  className:  "charimg",
                  src: "car1.png",
                  width: 768,
                  height: 520,
                  alt: "",
                  role: "presentation",
                }),

                
                (0, t.jsx)(c(), {
                  animateOnce: !0,
                  duration: 0.75,
                  animateIn: "fadeInUp",
                  delay: 125,
                  children: (0, t.jsx)("h5", {
                    children: "May - The Rogue Engineer",
                  }),
                }),

                  (0, t.jsx)(c(), {
                    animateOnce: !0,
                    duration: 0.75,
                    animateIn: "fadeInUp",
                    delay: 1,
                    children: (0, t.jsx)("p", {
                      children:
                        "At OneWayBlock, our economy adapts to every decision, empowering players to shape their path, amass wealth, and leave a mark on the world. Every choice deepens the journey, making each playthrough unforgettable.",
                    }),
                  }), 
                ],
              }),
            }),
            
            (0, t.jsx)("div", {
              className: "rowch",
              children: 
               (0, t.jsxs)("div", {
                className: W().content,
                children: [ 


                  
                (0, t.jsx)(y(), {
                  className:  "charimg",
                  src: "car2.png",
                  width: 768,
                  height: 520,
                  alt: "",
                  role: "presentation",
                }),

                
                (0, t.jsx)(c(), {
                  animateOnce: !0,
                  duration: 0.75,
                  animateIn: "fadeInUp",
                  delay: 125,
                  children: (0, t.jsx)("h5", {
                    children: "Lela - The Cipher Alchemist",
                  }),
                }),

                  (0, t.jsx)(c(), {
                    animateOnce: !0,
                    duration: 0.75,
                    animateIn: "fadeInUp",
                    delay: 1,
                    children: (0, t.jsx)("p", {
                      children:
                        "At OneWayBlock, our economy adapts to every decision, empowering players to shape their path, amass wealth, and leave a mark on the world. Every choice deepens the journey, making each playthrough unforgettable.",
                    }),
                  }), 
                ],
              }),
            }),
            
            (0, t.jsx)("div", {
              className: "rowch",
              children: 
               (0, t.jsxs)("div", {
                className: W().content,
                children: [ 


                  
                (0, t.jsx)(y(), {
                  className:  "charimg",
                  src: "car3.png",
                  width: 768,
                  height: 520,
                  alt: "",
                  role: "presentation",
                }),

                
                (0, t.jsx)(c(), {
                  animateOnce: !0,
                  duration: 0.75,
                  animateIn: "fadeInUp",
                  delay: 125,
                  children: (0, t.jsx)("h5", {
                    children: "Lynk - The Machineborn Outcast",
                  }),
                }),

                  (0, t.jsx)(c(), {
                    animateOnce: !0,
                    duration: 0.75,
                    animateIn: "fadeInUp",
                    delay: 1,
                    children: (0, t.jsx)("p", {
                      children:
                        "At OneWayBlock, our economy adapts to every decision, empowering players to shape their path, amass wealth, and leave a mark on the world. Every choice deepens the journey, making each playthrough unforgettable.",
                    }),
                  }), 
                ],
              }),
            }),
          ],
        });
      var B = a(1177),
        W = a.n(B);
      let Y = () =>
        (0, t.jsxs)("section",
          
          {
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
                          children: (0, t.jsx)("h2", { children: "The Legend of Gene" }),
                        }),
                        (0, t.jsxs)(c(), {
                          animateOnce: !0,
                          duration: 0.75,
                          animateIn: "zoomIn",
                          delay: 375,
                          className: L().soon,
                          children: [
                            (0, t.jsx)(u.A, { stroke: "#fff" }),
                            (0, t.jsx)("span", {
                              className: O().className,
                              children: "Gene is more than a program; it is a living, evolving code scattered across the remnants of the Hypernet. Its fragments, known as Gene Keys, are hidden within corrupted data nodes, lost memories, and even the neural patterns of humans who resisted the OverNet. Each Gene Key contains a piece of Gene’s consciousness and unlocks new abilities, memories, or insights into its ultimate purpose.     The OverNet fears Gene’s return, sending its adaptive Sentinels to hunt down anyone searching for the fragments. These AI enforcers evolve with every encounter, learning from the player’s strategies and becoming more challenging over time.",
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
          }
          
          
          
         );
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
                  (0, t.jsx)("title", { children: "gene" }),
                  (0, t.jsx)("meta", {
                    name: "description",
                    content:
                      "gene - dynamic MMORPG. Conquer the planet, rule the world.",
                  }),
                  (0, t.jsx)("meta", {
                    property: "og:title",
                    content: "gene",
                  }),
                  (0, t.jsx)("meta", {
                    property: "og:description",
                    content:
                      "gene - dynamic MMORPG. Conquer the planet, rule the world.",
                  }),
                  (0, t.jsx)("meta", {
                    property: "og:title",
                    content: "gene",
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
                    content: "gene",
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
                    content: "gene",
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
