!(function o(i, r, l) {
  function a(t, e) {
    if (!r[t]) {
      if (!i[t]) {
        var n = "function" == typeof require && require;
        if (!e && n) return n(t, !0);
        if (s) return s(t, !0);
        throw (
          (((n = new Error("Cannot find module '" + t + "'")).code =
            "MODULE_NOT_FOUND"),
          n)
        );
      }
      (n = r[t] = { exports: {} }),
        i[t][0].call(
          n.exports,
          function (e) {
            return a(i[t][1][e] || e);
          },
          n,
          n.exports,
          o,
          i,
          r,
          l
        );
    }
    return r[t].exports;
  }
  for (
    var s = "function" == typeof require && require, e = 0;
    e < l.length;
    e++
  )
    a(l[e]);
  return a;
})(
  {
    1: [
      function (e, t, n) {
        "use strict";
        var o = e("@babel/runtime/helpers/interopRequireDefault"),
          i = o(e("@babel/runtime/helpers/classCallCheck")),
          r = o(e("@babel/runtime/helpers/defineProperty")),
          l = o(e("@babel/runtime/helpers/classPrivateFieldGet")),
          a = new WeakMap(),
          s = new WeakMap(),
          e = function e() {
            var o = this;
            (0, i.default)(this, e),
              (0, r.default)(this, "start", function () {
                document.body.classList.contains("no-lightbox") ||
                  ((0, l.default)(o, a).call(o),
                  o.initSingleImageLightbox(),
                  o.initGalleryLightbox());
              }),
              (0, r.default)(this, "initSingleImageLightbox", function () {
                var e;
                null !== (e = document.querySelectorAll(".oceanwp-lightbox")) &&
                  void 0 !== e &&
                  e.forEach(function (e) {
                    e.addEventListener("click", function (e) {
                      e.preventDefault(), e.stopPropagation();
                    });
                  }),
                  jQuery(".oceanwp-lightbox").magnificPopup({
                    type: "image",
                    mainClass: "mfp-with-zoom",
                    zoom: {
                      enabled: !0,
                      duration: 300,
                      easing: "ease-in-out",
                      opener: function (e) {
                        return e.is("img") ? e : e.find("img");
                      },
                    },
                  });
              }),
              (0, r.default)(this, "initGalleryLightbox", function () {
                jQuery(
                  ".wp-block-gallery, .gallery-format, .gallery"
                ).magnificPopup({
                  delegate: ".gallery-lightbox:not(.slick-cloned)",
                  type: "image",
                  mainClass: "mfp-fade",
                  gallery: { enabled: !0 },
                });
              }),
              a.set(this, {
                writable: !0,
                value: function () {
                  var e;
                  null !==
                    (e = document.querySelectorAll(
                      "body .entry-content a, body .entry a, body article .gallery-format a"
                    )) &&
                    void 0 !== e &&
                    e.forEach(function (t) {
                      var e, n;
                      t.querySelector("img") &&
                        ((e = (0, l.default)(o, s).call(o)),
                        (n = 0),
                        e.forEach(function (e) {
                          n += String(t.getAttribute("href")).indexOf("." + e);
                        }),
                        -13 === n && t.classList.add("no-lightbox"),
                        t.classList.contains("no-lightbox") ||
                          t.classList.contains("gallery-lightbox") ||
                          t.parentNode.classList.contains("gallery-icon") ||
                          t.classList.contains("woo-lightbox") ||
                          t.classList.contains("woo-thumbnail") ||
                          t.parentNode.classList.contains(
                            "woocommerce-product-gallery__image"
                          ) ||
                          t.closest(".wp-block-gallery") ||
                          t.getAttribute("data-elementor-open-lightbox") ||
                          t.classList.contains("yith_magnifier_thumbnail") ||
                          t.classList.contains("gg-link") ||
                          t.classList.add("oceanwp-lightbox"),
                        t.classList.contains("no-lightbox") ||
                          ((t.parentNode.classList.contains("gallery-icon") ||
                            t.closest(".wp-block-gallery")) &&
                            t.classList.add("gallery-lightbox")));
                    });
                },
              }),
              s.set(this, {
                writable: !0,
                value: function () {
                  return [
                    "bmp",
                    "gif",
                    "jpeg",
                    "jpg",
                    "png",
                    "tiff",
                    "tif",
                    "jfif",
                    "jpe",
                    "svg",
                    "mp4",
                    "ogg",
                    "webm",
                  ];
                },
              }),
              this.start();
          };
        (window.oceanwp = window.oceanwp || {}), (oceanwp.owLightbox = new e());
      },
      {
        "@babel/runtime/helpers/classCallCheck": 3,
        "@babel/runtime/helpers/classPrivateFieldGet": 5,
        "@babel/runtime/helpers/defineProperty": 6,
        "@babel/runtime/helpers/interopRequireDefault": 7,
      },
    ],
    2: [
      function (e, t, n) {
        (t.exports = function (e, t) {
          return t.get ? t.get.call(e) : t.value;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {},
    ],
    3: [
      function (e, t, n) {
        (t.exports = function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {},
    ],
    4: [
      function (e, t, n) {
        (t.exports = function (e, t, n) {
          if (!t.has(e))
            throw new TypeError(
              "attempted to " + n + " private field on non-instance"
            );
          return t.get(e);
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {},
    ],
    5: [
      function (e, t, n) {
        var o = e("./classApplyDescriptorGet.js"),
          i = e("./classExtractFieldDescriptor.js");
        (t.exports = function (e, t) {
          return (t = i(e, t, "get")), o(e, t);
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {
        "./classApplyDescriptorGet.js": 2,
        "./classExtractFieldDescriptor.js": 4,
      },
    ],
    6: [
      function (e, t, n) {
        (t.exports = function (e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {},
    ],
    7: [
      function (e, t, n) {
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
