webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/brickfaced/React Projects/coding-portfolio/pages/index.js";





function getProjects() {
  return [{
    id: 'pyface',
    title: 'PyFace',
    description: 'A face-scanning verficiation program built on Raspberry Pi',
    technology: ''
  }, {
    id: 'artsy',
    title: 'ARTSY',
    description: 'An iOS art marketplace with emphasis on the "ar" in art. As long as you have an augmented reality supported device, you can preview all the art true to scale in your house',
    technology: ''
  }, {
    id: 'awsom',
    title: 'AWSOM',
    description: 'Want to get into music? AWSOM is a top of the line music teaching service that pairs you with great mentors that revolve around your needs',
    technology: ''
  }, {
    id: 'lendme',
    title: 'LendMe',
    description: '',
    technology: ''
  }];
}

var ProjectLink = function ProjectLink(_ref) {
  var project = _ref.project;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3950785544",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    as: "/p/".concat(project.id),
    href: "/project?title=".concat(project.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3950785544",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, project.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3950785544",
    css: "li.jsx-3950785544{list-style:none;margin:5px 0;}a.jsx-3950785544{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:\"Arial\";}a.jsx-3950785544:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlja2ZhY2VkL1JlYWN0IFByb2plY3RzL2NvZGluZy1wb3J0Zm9saW8vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNnQixBQUd5QixBQUtLLEFBTVQsWUFDZCxJQVhlLGFBQ2YscUJBSWEsV0FDUyxvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL2JyaWNrZmFjZWQvUmVhY3QgUHJvamVjdHMvY29kaW5nLXBvcnRmb2xpby9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZnVuY3Rpb24gZ2V0UHJvamVjdHMgKCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGlkOiAncHlmYWNlJyxcbiAgICAgIHRpdGxlOiAnUHlGYWNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQSBmYWNlLXNjYW5uaW5nIHZlcmZpY2lhdGlvbiBwcm9ncmFtIGJ1aWx0IG9uIFJhc3BiZXJyeSBQaScsXG4gICAgICB0ZWNobm9sb2d5OiAnJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdhcnRzeScsXG4gICAgICB0aXRsZTogJ0FSVFNZJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQW4gaU9TIGFydCBtYXJrZXRwbGFjZSB3aXRoIGVtcGhhc2lzIG9uIHRoZSBcImFyXCIgaW4gYXJ0LiBBcyBsb25nIGFzIHlvdSBoYXZlIGFuIGF1Z21lbnRlZCByZWFsaXR5IHN1cHBvcnRlZCBkZXZpY2UsIHlvdSBjYW4gcHJldmlldyBhbGwgdGhlIGFydCB0cnVlIHRvIHNjYWxlIGluIHlvdXIgaG91c2UnLFxuICAgICAgdGVjaG5vbG9neTogJydcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnYXdzb20nLFxuICAgICAgdGl0bGU6ICdBV1NPTScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1dhbnQgdG8gZ2V0IGludG8gbXVzaWM/IEFXU09NIGlzIGEgdG9wIG9mIHRoZSBsaW5lIG11c2ljIHRlYWNoaW5nIHNlcnZpY2UgdGhhdCBwYWlycyB5b3Ugd2l0aCBncmVhdCBtZW50b3JzIHRoYXQgcmV2b2x2ZSBhcm91bmQgeW91ciBuZWVkcycsXG4gICAgICB0ZWNobm9sb2d5OiAnJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdsZW5kbWUnLFxuICAgICAgdGl0bGU6ICdMZW5kTWUnLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdGVjaG5vbG9neTogJydcbiAgICB9XG4gIF1cbn1cblxuY29uc3QgUHJvamVjdExpbmsgPSAoeyBwcm9qZWN0IH0pID0+IChcbiAgPGxpPlxuICAgIDxMaW5rIGFzPXtgL3AvJHtwcm9qZWN0LmlkfWB9IGhyZWY9e2AvcHJvamVjdD90aXRsZT0ke3Byb2plY3QudGl0bGV9YH0+XG4gICAgICA8YT57cHJvamVjdC50aXRsZX08L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2xpPlxuKVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPk15IFByb2plY3RzPC9oMT5cbiAgICA8dWw+XG4gICAgICB7Z2V0UHJvamVjdHMoKS5tYXAoKHByb2plY3QpID0+IChcbiAgICAgICAgPFByb2plY3RMaW5rIGtleT17cHJvamVjdC5pZH0gcHJvamVjdD17cHJvamVjdH0gLz5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDEsIGEge1xuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbilcbiJdfQ== */\n/*@ sourceURL=/Users/brickfaced/React Projects/coding-portfolio/pages/index.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2987328901",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "My Projects"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2987328901",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, getProjects().map(function (project) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectLink, {
      key: project.id,
      project: project,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2987328901",
    css: "h1.jsx-2987328901,a.jsx-2987328901{font-family:\"Arial\";}ul.jsx-2987328901{padding:0;}li.jsx-2987328901{list-style:none;margin:5px 0;}a.jsx-2987328901{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2987328901:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlja2ZhY2VkL1JlYWN0IFByb2plY3RzL2NvZGluZy1wb3J0Zm9saW8vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0VnQixBQUc2QixBQUlWLEFBSU0sQUFLSyxBQUtULFVBYmQsRUFjQSxJQVZlLElBUmYsU0FTQSxxQkFJYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9icmlja2ZhY2VkL1JlYWN0IFByb2plY3RzL2NvZGluZy1wb3J0Zm9saW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmZ1bmN0aW9uIGdldFByb2plY3RzICgpIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBpZDogJ3B5ZmFjZScsXG4gICAgICB0aXRsZTogJ1B5RmFjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0EgZmFjZS1zY2FubmluZyB2ZXJmaWNpYXRpb24gcHJvZ3JhbSBidWlsdCBvbiBSYXNwYmVycnkgUGknLFxuICAgICAgdGVjaG5vbG9neTogJydcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnYXJ0c3knLFxuICAgICAgdGl0bGU6ICdBUlRTWScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FuIGlPUyBhcnQgbWFya2V0cGxhY2Ugd2l0aCBlbXBoYXNpcyBvbiB0aGUgXCJhclwiIGluIGFydC4gQXMgbG9uZyBhcyB5b3UgaGF2ZSBhbiBhdWdtZW50ZWQgcmVhbGl0eSBzdXBwb3J0ZWQgZGV2aWNlLCB5b3UgY2FuIHByZXZpZXcgYWxsIHRoZSBhcnQgdHJ1ZSB0byBzY2FsZSBpbiB5b3VyIGhvdXNlJyxcbiAgICAgIHRlY2hub2xvZ3k6ICcnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2F3c29tJyxcbiAgICAgIHRpdGxlOiAnQVdTT00nLFxuICAgICAgZGVzY3JpcHRpb246ICdXYW50IHRvIGdldCBpbnRvIG11c2ljPyBBV1NPTSBpcyBhIHRvcCBvZiB0aGUgbGluZSBtdXNpYyB0ZWFjaGluZyBzZXJ2aWNlIHRoYXQgcGFpcnMgeW91IHdpdGggZ3JlYXQgbWVudG9ycyB0aGF0IHJldm9sdmUgYXJvdW5kIHlvdXIgbmVlZHMnLFxuICAgICAgdGVjaG5vbG9neTogJydcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnbGVuZG1lJyxcbiAgICAgIHRpdGxlOiAnTGVuZE1lJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHRlY2hub2xvZ3k6ICcnXG4gICAgfVxuICBdXG59XG5cbmNvbnN0IFByb2plY3RMaW5rID0gKHsgcHJvamVjdCB9KSA9PiAoXG4gIDxsaT5cbiAgICA8TGluayBhcz17YC9wLyR7cHJvamVjdC5pZH1gfSBocmVmPXtgL3Byb2plY3Q/dGl0bGU9JHtwcm9qZWN0LnRpdGxlfWB9PlxuICAgICAgPGE+e3Byb2plY3QudGl0bGV9PC9hPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9saT5cbilcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxoMT5NeSBQcm9qZWN0czwvaDE+XG4gICAgPHVsPlxuICAgICAge2dldFByb2plY3RzKCkubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgIDxQcm9qZWN0TGluayBrZXk9e3Byb2plY3QuaWR9IHByb2plY3Q9e3Byb2plY3R9IC8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgxLCBhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pXG4iXX0= */\n/*@ sourceURL=/Users/brickfaced/React Projects/coding-portfolio/pages/index.js */",
    __self: this
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.c19cb3f493cc7ff39291.hot-update.js.map