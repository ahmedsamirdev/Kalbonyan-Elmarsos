!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: o,
        });
    }),
    (n.r = function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 2));
})([
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.default = function (e) {
      return e.toUpperCase() + "!";
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    (t.add = function (e, t) {
      return e + t;
    }),
      (t.name = "ahmed"),
      (t.default = function (e) {
        return e * e;
      });
  },
  function (e, t, n) {
    "use strict";
    var o = n(1),
      r = c(o),
      u = c(n(0));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    console.log("index.js"),
      console.log((0, o.add)(32, 4)),
      console.log((0, u.default)(o.name)),
      console.log((0, r.default)(10));
  },
]);
