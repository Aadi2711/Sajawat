!(function i(n, l, r) {
  function s(t, e) {
    if (!l[t]) {
      if (!n[t]) {
        var o = "function" == typeof require && require;
        if (!e && o) return o(t, !0);
        if (a) return a(t, !0);
        throw (
          (((o = new Error("Cannot find module '" + t + "'")).code =
            "MODULE_NOT_FOUND"),
          o)
        );
      }
      (o = l[t] = { exports: {} }),
        n[t][0].call(
          o.exports,
          function (e) {
            return s(n[t][1][e] || e);
          },
          o,
          o.exports,
          i,
          n,
          l,
          r
        );
    }
    return l[t].exports;
  }
  for (
    var a = "function" == typeof require && require, e = 0;
    e < r.length;
    e++
  )
    s(r[e]);
  return s;
})(
  {
    1: [
      function (e, t, o) {
        "use strict";
        var i = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.fadeOutNav =
            o.fadeInNav =
            o.isSelectorValid =
            o.isElement =
            o.getSiblings =
            o.visible =
            o.offset =
            o.fadeToggle =
            o.fadeOut =
            o.fadeIn =
            o.slideToggle =
            o.slideUp =
            o.slideDown =
            o.wrap =
              void 0);
        var n = i(e("@babel/runtime/helpers/typeof"));
        o.wrap = function (e) {
          var t =
            1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : document.createElement("div");
          return (
            e.nextSibling
              ? e.parentNode.insertBefore(t, e.nextSibling)
              : e.parentNode.appendChild(t),
            t.appendChild(e)
          );
        };
        function l(e) {
          var t =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : 300,
            o = window.getComputedStyle(e).display;
          "none" === o && (o = "block"),
            (e.style.transitionProperty = "height"),
            (e.style.transitionDuration = "".concat(t, "ms")),
            (e.style.opacity = 0),
            (e.style.display = o);
          var i = e.offsetHeight;
          (e.style.height = 0),
            (e.style.opacity = 1),
            (e.style.overflow = "hidden"),
            setTimeout(function () {
              e.style.height = "".concat(i, "px");
            }, 5),
            window.setTimeout(function () {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.style.removeProperty("opacity");
            }, t + 50);
        }
        o.slideDown = l;
        function r(e) {
          var t =
            1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : 300;
          (e.style.boxSizing = "border-box"),
            (e.style.transitionProperty = "height, margin"),
            (e.style.transitionDuration = "".concat(t, "ms")),
            (e.style.height = "".concat(e.offsetHeight, "px")),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            (e.style.overflow = "hidden"),
            setTimeout(function () {
              e.style.height = 0;
            }, 5),
            window.setTimeout(function () {
              (e.style.display = "none"),
                e.style.removeProperty("height"),
                e.style.removeProperty("margin-top"),
                e.style.removeProperty("margin-bottom"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property");
            }, t + 50);
        }
        o.slideUp = r;
        o.slideToggle = function (e, t) {
          ("none" === window.getComputedStyle(e).display ? l : r)(e, t);
        };
        function s(e) {
          var t = { duration: 300, display: null, opacity: 1, callback: null };
          Object.assign(
            t,
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
          ),
            (e.style.opacity = 0),
            (e.style.display = t.display || "block"),
            setTimeout(function () {
              (e.style.transition = "".concat(t.duration, "ms opacity ease")),
                (e.style.opacity = t.opacity);
            }, 5),
            setTimeout(function () {
              e.style.removeProperty("transition"), t.callback && t.callback();
            }, t.duration + 50);
        }
        o.fadeIn = s;
        function a(e) {
          var t;
          "none" !== e.style.display &&
            ((t = { duration: 300, display: null, opacity: 0, callback: null }),
            Object.assign(
              t,
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            ),
            (e.style.opacity = 1),
            (e.style.display = t.display || "block"),
            setTimeout(function () {
              (e.style.transition = "".concat(t.duration, "ms opacity ease")),
                (e.style.opacity = t.opacity);
            }, 5),
            setTimeout(function () {
              (e.style.display = "none"),
                e.style.removeProperty("transition"),
                t.callback && t.callback();
            }, t.duration + 50));
        }
        o.fadeOut = a;
        o.fadeToggle = function (e, t) {
          ("none" === window.getComputedStyle(e).display ? s : a)(e, t);
        };
        o.offset = function (e) {
          if (!e.getClientRects().length) return { top: 0, left: 0 };
          var t = e.getBoundingClientRect(),
            e = e.ownerDocument.defaultView;
          return { top: t.top + e.pageYOffset, left: t.left + e.pageXOffset };
        };
        o.visible = function (e) {
          return (
            !!e &&
            !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
          );
        };
        o.getSiblings = function (e) {
          var t = [];
          if (!e.parentNode) return t;
          for (var o = e.parentNode.firstChild; o; )
            1 === o.nodeType && o !== e && t.push(o), (o = o.nextSibling);
          return t;
        };
        o.isElement = function (e) {
          return "object" ===
            ("undefined" == typeof HTMLElement
              ? "undefined"
              : (0, n.default)(HTMLElement))
            ? e instanceof HTMLElement
            : e &&
                "object" === (0, n.default)(e) &&
                null !== e &&
                1 === e.nodeType &&
                "string" == typeof e.nodeName;
        };
        var u,
          e =
            ((u = document.createDocumentFragment()),
            function (e) {
              try {
                u.querySelector(e);
              } catch (e) {
                return !1;
              }
              return !0;
            });
        o.isSelectorValid = e;
        o.fadeInNav = function (e) {
          var t = {
            duration: 300,
            visibility: "visible",
            opacity: 1,
            callback: null,
          };
          Object.assign(
            t,
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
          ),
            (e.style.opacity = 0),
            (e.style.visibility = t.visibility || "visible"),
            setTimeout(function () {
              (e.style.transition = "".concat(t.duration, "ms opacity ease")),
                (e.style.opacity = t.opacity);
            }, 5);
        };
        o.fadeOutNav = function (e) {
          var t;
          "hidden" !== e.style.visibility &&
            ((t = {
              duration: 300,
              visibility: "hidden",
              opacity: 0,
              callback: null,
            }),
            Object.assign(
              t,
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            ),
            (e.style.opacity = 1),
            (e.style.visibility = t.visibility || "visible"),
            setTimeout(function () {
              (e.style.transition = "".concat(t.duration, "ms opacity ease")),
                (e.style.opacity = t.opacity);
            }, 5),
            setTimeout(function () {
              (e.style.visibility = "hidden"),
                e.style.removeProperty("transition"),
                t.callback && t.callback();
            }, t.duration + 50));
        };
      },
      {
        "@babel/runtime/helpers/interopRequireDefault": 9,
        "@babel/runtime/helpers/typeof": 10,
      },
    ],
    2: [
      function (e, t, o) {
        "use strict";
        var i = e("@babel/runtime/helpers/interopRequireDefault"),
          n = i(e("@babel/runtime/helpers/classCallCheck")),
          l = i(e("@babel/runtime/helpers/classPrivateFieldSet")),
          r = i(e("@babel/runtime/helpers/classPrivateFieldGet")),
          s = e("../lib/utils"),
          a = new WeakMap(),
          u = new WeakMap(),
          c = new WeakMap(),
          p = new WeakMap(),
          d = new WeakMap(),
          f = new WeakMap(),
          e = function e() {
            var t = this;
            (0, n.default)(this, e),
              a.set(this, { writable: !0, value: void 0 }),
              u.set(this, {
                writable: !0,
                value: function () {
                  (0, l.default)(t, a, {
                    scrollTop: document.querySelector("#scroll-top"),
                    goTop: document.querySelector('a[href="#go-top"]'),
                    goTopSlash: document.querySelector(
                      'body.home a[href="/#go-top"]'
                    ),
                    html: document.querySelector("html"),
                  });
                },
              }),
              c.set(this, { writable: !0, value: function () {} }),
              p.set(this, {
                writable: !0,
                value: function () {
                  var e;
                  window.addEventListener("scroll", (0, r.default)(t, d)),
                    null !== (e = (0, r.default)(t, a).scrollTop) &&
                      void 0 !== e &&
                      e.addEventListener("click", (0, r.default)(t, f)),
                    null !== (e = (0, r.default)(t, a).goTop) &&
                      void 0 !== e &&
                      e.addEventListener("click", (0, r.default)(t, f)),
                    null !== (e = (0, r.default)(t, a).goTopSlash) &&
                      void 0 !== e &&
                      e.addEventListener("click", (0, r.default)(t, f));
                },
              }),
              d.set(this, {
                writable: !0,
                value: function (e) {
                  (0, r.default)(t, a).scrollTop &&
                    (100 < window.pageYOffset
                      ? "none" ===
                          window.getComputedStyle(
                            (0, r.default)(t, a).scrollTop
                          ).display &&
                        (0, s.fadeIn)((0, r.default)(t, a).scrollTop)
                      : "none" !==
                          window.getComputedStyle(
                            (0, r.default)(t, a).scrollTop
                          ).display &&
                        (0, s.fadeOut)((0, r.default)(t, a).scrollTop));
                },
              }),
              f.set(this, {
                writable: !0,
                value: function (e) {
                  e.preventDefault();
                  var e = e.currentTarget;
                  (0, r.default)(t, a).html.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  }),
                    null !== (e = e.parentNode) &&
                      void 0 !== e &&
                      e.classList.remove("sfHover");
                },
              }),
              (0, r.default)(this, u).call(this),
              (0, r.default)(this, c).call(this),
              (0, r.default)(this, p).call(this);
          };
        (window.oceanwp = window.oceanwp || {}), (oceanwp.scrollTop = new e());
      },
      {
        "../lib/utils": 1,
        "@babel/runtime/helpers/classCallCheck": 5,
        "@babel/runtime/helpers/classPrivateFieldGet": 7,
        "@babel/runtime/helpers/classPrivateFieldSet": 8,
        "@babel/runtime/helpers/interopRequireDefault": 9,
      },
    ],
    3: [
      function (e, t, o) {
        (t.exports = function (e, t) {
          return t.get ? t.get.call(e) : t.value;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {},
    ],
    4: [
      function (e, t, o) {
        (t.exports = function (e, t, o) {
          if (t.set) t.set.call(e, o);
          else {
            if (!t.writable)
              throw new TypeError("attempted to set read only private field");
            t.value = o;
          }
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {},
    ],
    5: [
      function (e, t, o) {
        (t.exports = function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {},
    ],
    6: [
      function (e, t, o) {
        (t.exports = function (e, t, o) {
          if (!t.has(e))
            throw new TypeError(
              "attempted to " + o + " private field on non-instance"
            );
          return t.get(e);
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {},
    ],
    7: [
      function (e, t, o) {
        var i = e("./classApplyDescriptorGet.js"),
          n = e("./classExtractFieldDescriptor.js");
        (t.exports = function (e, t) {
          return (t = n(e, t, "get")), i(e, t);
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {
        "./classApplyDescriptorGet.js": 3,
        "./classExtractFieldDescriptor.js": 6,
      },
    ],
    8: [
      function (e, t, o) {
        var i = e("./classApplyDescriptorSet.js"),
          n = e("./classExtractFieldDescriptor.js");
        (t.exports = function (e, t, o) {
          return (t = n(e, t, "set")), i(e, t, o), o;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {
        "./classApplyDescriptorSet.js": 4,
        "./classExtractFieldDescriptor.js": 6,
      },
    ],
    9: [
      function (e, t, o) {
        (t.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {},
    ],
    10: [
      function (e, t, o) {
        function i(e) {
          return (
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? (t.exports = i =
                  function (e) {
                    return typeof e;
                  })
              : (t.exports = i =
                  function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            (t.exports.default = t.exports),
            (t.exports.__esModule = !0),
            i(e)
          );
        }
        (t.exports = i),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {},
    ],
  },
  {},
  [2]
);
