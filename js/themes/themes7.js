!(function n(o, i, l) {
  function a(t, e) {
    if (!i[t]) {
      if (!o[t]) {
        var r = "function" == typeof require && require;
        if (!e && r) return r(t, !0);
        if (u) return u(t, !0);
        throw (
          (((r = new Error("Cannot find module '" + t + "'")).code =
            "MODULE_NOT_FOUND"),
          r)
        );
      }
      (r = i[t] = { exports: {} }),
        o[t][0].call(
          r.exports,
          function (e) {
            return a(o[t][1][e] || e);
          },
          r,
          r.exports,
          n,
          o,
          i,
          l
        );
    }
    return i[t].exports;
  }
  for (
    var u = "function" == typeof require && require, e = 0;
    e < l.length;
    e++
  )
    a(l[e]);
  return a;
})(
  {
    1: [
      function (e, t, r) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault"),
          o = n(e("@babel/runtime/helpers/classCallCheck")),
          i = n(e("@babel/runtime/helpers/defineProperty")),
          e = function e() {
            var r = this;
            (0, o.default)(this, e),
              (0, i.default)(this, "flickity", void 0),
              (0, i.default)(this, "start", function () {
                var e =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : document.querySelectorAll(
                        ".gallery-format, .product-entry-slider"
                      );
                (r.flickity = []),
                  null != e &&
                    e.forEach(function (e) {
                      var t = new Flickity(e, {
                        autoPlay:
                          !e.classList.contains("woo-entry-image") && 6e3,
                        rightToLeft: !!document.body.classList.contains("rtl"),
                        imagesLoaded: !0,
                        pageDots: !1,
                        on: {
                          ready: function () {
                            (e.style.opacity = 1),
                              (e.style.visibility = "visible"),
                              (e.style.height = "auto");
                          },
                        },
                      });
                      r.flickity.push(t);
                    });
              }),
              this.start();
          };
        (window.oceanwp = window.oceanwp || {}),
          (window.oceanwp.theme = window.oceanwp.theme || {}),
          (oceanwp.owSlider = new e()),
          (oceanwp.theme.owSlider = oceanwp.owSlider);
      },
      {
        "@babel/runtime/helpers/classCallCheck": 2,
        "@babel/runtime/helpers/defineProperty": 3,
        "@babel/runtime/helpers/interopRequireDefault": 4,
      },
    ],
    2: [
      function (e, t, r) {
        (t.exports = function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {},
    ],
    3: [
      function (e, t, r) {
        (t.exports = function (e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {},
    ],
    4: [
      function (e, t, r) {
        (t.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {},
    ],
  },
  {},
  [1]
);
