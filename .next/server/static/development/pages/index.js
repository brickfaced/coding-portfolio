module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _presentational_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presentational/Header */ "./components/presentational/Header.js");
var _jsxFileName = "/Users/brickfaced/React Projects/coding-portfolio/components/MyLayout.js";




var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2983379535",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_presentational_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2983379535",
    css: "div.jsx-2983379535{margin:20px;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlja2ZhY2VkL1JlYWN0IFByb2plY3RzL2NvZGluZy1wb3J0Zm9saW8vY29tcG9uZW50cy9NeUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNZ0IsQUFHcUIsWUFDQyxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9icmlja2ZhY2VkL1JlYWN0IFByb2plY3RzL2NvZGluZy1wb3J0Zm9saW8vY29tcG9uZW50cy9NeUxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9wcmVzZW50YXRpb25hbC9IZWFkZXInXG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkZXIgLz5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgZGl2IHtcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgfSBcbiAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXX0= */\n/*@ sourceURL=/Users/brickfaced/React Projects/coding-portfolio/components/MyLayout.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/presentational/Header.js":
/*!*********************************************!*\
  !*** ./components/presentational/Header.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/brickfaced/React Projects/coding-portfolio/components/presentational/Header.js";




var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-562200554",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-562200554",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Ramon Mendoza")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "562200554",
    css: "a.jsx-562200554{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:\"Arial\";margin-right:1000px;}a.jsx-562200554:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlja2ZhY2VkL1JlYWN0IFByb2plY3RzL2NvZGluZy1wb3J0Zm9saW8vY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2dCLEFBRzhCLEFBT1QsWUFDZCxzQ0FQYSxXQUNTLG9CQUNBLG9CQUN0QiIsImZpbGUiOiIvVXNlcnMvYnJpY2tmYWNlZC9SZWFjdCBQcm9qZWN0cy9jb2RpbmctcG9ydGZvbGlvL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICA8YT5SYW1vbiBNZW5kb3phPC9hPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMDAwcHg7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXX0= */\n/*@ sourceURL=/Users/brickfaced/React Projects/coding-portfolio/components/presentational/Header.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
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
    css: "li.jsx-3950785544{list-style:none;margin:5px 0;}a.jsx-3950785544{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:\"Arial\";}a.jsx-3950785544:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlja2ZhY2VkL1JlYWN0IFByb2plY3RzL2NvZGluZy1wb3J0Zm9saW8vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNnQixBQUd5QixBQUtLLEFBTVQsWUFDZCxJQVhlLGFBQ2YscUJBSWEsV0FDUyxvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL2JyaWNrZmFjZWQvUmVhY3QgUHJvamVjdHMvY29kaW5nLXBvcnRmb2xpby9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZnVuY3Rpb24gZ2V0UHJvamVjdHMgKCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGlkOiAncHlmYWNlJyxcbiAgICAgIHRpdGxlOiAnUHlGYWNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQSBmYWNlLXNjYW5uaW5nIHZlcmZpY2lhdGlvbiBwcm9ncmFtIGJ1aWx0IG9uIFJhc3BiZXJyeSBQaScsXG4gICAgICB0ZWNobm9sb2d5OiAnJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdhcnRzeScsXG4gICAgICB0aXRsZTogJ0FSVFNZJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQW4gaU9TIGFydCBtYXJrZXRwbGFjZSB3aXRoIGVtcGhhc2lzIG9uIHRoZSBcImFyXCIgaW4gYXJ0LiBBcyBsb25nIGFzIHlvdSBoYXZlIGFuIGF1Z21lbnRlZCByZWFsaXR5IHN1cHBvcnRlZCBkZXZpY2UsIHlvdSBjYW4gcHJldmlldyBhbGwgdGhlIGFydCB0cnVlIHRvIHNjYWxlIGluIHlvdXIgaG91c2UnLFxuICAgICAgdGVjaG5vbG9neTogJydcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnYXdzb20nLFxuICAgICAgdGl0bGU6ICdBV1NPTScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1dhbnQgdG8gZ2V0IGludG8gbXVzaWM/IEFXU09NIGlzIGEgdG9wIG9mIHRoZSBsaW5lIG11c2ljIHRlYWNoaW5nIHNlcnZpY2UgdGhhdCBwYWlycyB5b3Ugd2l0aCBncmVhdCBtZW50b3JzIHRoYXQgcmV2b2x2ZSBhcm91bmQgeW91ciBuZWVkcycsXG4gICAgICB0ZWNobm9sb2d5OiAnJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdsZW5kbWUnLFxuICAgICAgdGl0bGU6ICdMZW5kTWUnLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdGVjaG5vbG9neTogJydcbiAgICB9XG4gIF1cbn1cblxuY29uc3QgUHJvamVjdExpbmsgPSAoeyBwcm9qZWN0IH0pID0+IChcbiAgPGxpPlxuICAgIDxMaW5rIGFzPXtgL3AvJHtwcm9qZWN0LmlkfWB9IGhyZWY9e2AvcHJvamVjdD90aXRsZT0ke3Byb2plY3QudGl0bGV9YH0+XG4gICAgICA8YT57cHJvamVjdC50aXRsZX08L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2xpPlxuKVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPlByb2plY3RzPC9oMT5cbiAgICA8dWw+XG4gICAgICB7Z2V0UHJvamVjdHMoKS5tYXAoKHByb2plY3QpID0+IChcbiAgICAgICAgPFByb2plY3RMaW5rIGtleT17cHJvamVjdC5pZH0gcHJvamVjdD17cHJvamVjdH0gLz5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDEsIGEge1xuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbilcbiJdfQ== */\n/*@ sourceURL=/Users/brickfaced/React Projects/coding-portfolio/pages/index.js */",
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
  }, "Projects"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
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
    css: "h1.jsx-2987328901,a.jsx-2987328901{font-family:\"Arial\";}ul.jsx-2987328901{padding:0;}li.jsx-2987328901{list-style:none;margin:5px 0;}a.jsx-2987328901{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2987328901:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlja2ZhY2VkL1JlYWN0IFByb2plY3RzL2NvZGluZy1wb3J0Zm9saW8vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0VnQixBQUc2QixBQUlWLEFBSU0sQUFLSyxBQUtULFVBYmQsRUFjQSxJQVZlLElBUmYsU0FTQSxxQkFJYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9icmlja2ZhY2VkL1JlYWN0IFByb2plY3RzL2NvZGluZy1wb3J0Zm9saW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmZ1bmN0aW9uIGdldFByb2plY3RzICgpIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBpZDogJ3B5ZmFjZScsXG4gICAgICB0aXRsZTogJ1B5RmFjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0EgZmFjZS1zY2FubmluZyB2ZXJmaWNpYXRpb24gcHJvZ3JhbSBidWlsdCBvbiBSYXNwYmVycnkgUGknLFxuICAgICAgdGVjaG5vbG9neTogJydcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnYXJ0c3knLFxuICAgICAgdGl0bGU6ICdBUlRTWScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FuIGlPUyBhcnQgbWFya2V0cGxhY2Ugd2l0aCBlbXBoYXNpcyBvbiB0aGUgXCJhclwiIGluIGFydC4gQXMgbG9uZyBhcyB5b3UgaGF2ZSBhbiBhdWdtZW50ZWQgcmVhbGl0eSBzdXBwb3J0ZWQgZGV2aWNlLCB5b3UgY2FuIHByZXZpZXcgYWxsIHRoZSBhcnQgdHJ1ZSB0byBzY2FsZSBpbiB5b3VyIGhvdXNlJyxcbiAgICAgIHRlY2hub2xvZ3k6ICcnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2F3c29tJyxcbiAgICAgIHRpdGxlOiAnQVdTT00nLFxuICAgICAgZGVzY3JpcHRpb246ICdXYW50IHRvIGdldCBpbnRvIG11c2ljPyBBV1NPTSBpcyBhIHRvcCBvZiB0aGUgbGluZSBtdXNpYyB0ZWFjaGluZyBzZXJ2aWNlIHRoYXQgcGFpcnMgeW91IHdpdGggZ3JlYXQgbWVudG9ycyB0aGF0IHJldm9sdmUgYXJvdW5kIHlvdXIgbmVlZHMnLFxuICAgICAgdGVjaG5vbG9neTogJydcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnbGVuZG1lJyxcbiAgICAgIHRpdGxlOiAnTGVuZE1lJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHRlY2hub2xvZ3k6ICcnXG4gICAgfVxuICBdXG59XG5cbmNvbnN0IFByb2plY3RMaW5rID0gKHsgcHJvamVjdCB9KSA9PiAoXG4gIDxsaT5cbiAgICA8TGluayBhcz17YC9wLyR7cHJvamVjdC5pZH1gfSBocmVmPXtgL3Byb2plY3Q/dGl0bGU9JHtwcm9qZWN0LnRpdGxlfWB9PlxuICAgICAgPGE+e3Byb2plY3QudGl0bGV9PC9hPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9saT5cbilcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxoMT5Qcm9qZWN0czwvaDE+XG4gICAgPHVsPlxuICAgICAge2dldFByb2plY3RzKCkubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgIDxQcm9qZWN0TGluayBrZXk9e3Byb2plY3QuaWR9IHByb2plY3Q9e3Byb2plY3R9IC8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgxLCBhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pXG4iXX0= */\n/*@ sourceURL=/Users/brickfaced/React Projects/coding-portfolio/pages/index.js */",
    __self: this
  }));
});

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map