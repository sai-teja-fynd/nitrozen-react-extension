"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("react");
require("./breadcrumb.scss.js");
var r = require("./BreadCrumbItem.js");
function t(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var a = t(e);
let l = [];
(exports.default = function () {
  const e = l.length;
  return a.default.createElement(
    "div",
    { className: "bread-crumb" },
    a.default.createElement(
      "nav",
      { className: "bread-crumb-nav" },
      a.default.createElement(
        "ul",
        null,
        l.map((t, l) =>
          a.default.createElement(
            "li",
            null,
            a.default.createElement(r, {
              key: "idx",
              BreadCrumb: t,
              separator: ">",
              isLast: l === e - 1,
            })
          )
        )
      )
    )
  );
}),
  (exports.setBreadCrumpsItems = function (e, r) {
    l.forEach((r, t) => {
      r.label === e && l.splice(t);
    }),
      l.push({ label: e, link: r }),
      console.log("BreadCrumbItemsAll", l);
  });
//# sourceMappingURL=BreadCrumb.js.map
