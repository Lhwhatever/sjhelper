webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/link.jsx":
/*!*****************************!*\
  !*** ./components/link.jsx ***!
  \*****************************/
/*! exports provided: Link, ButtonLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Link\", function() { return Link; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonLink\", function() { return ButtonLink; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/mnt/d/Programming/sjhelper/components/link.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar NextComposed = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(_c = function _c(_ref, ref) {\n  var as = _ref.as,\n      href = _ref.href,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"as\", \"href\"]);\n\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 72\n    }\n  });\n});\n_c2 = NextComposed;\n\nvar Link = function Link(_ref2) {\n  var to = _ref2.to,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, [\"to\"]);\n\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    href: to\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 36\n    }\n  }));\n};\n\n_c3 = Link;\nLink.propTypes = {\n  to: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,\n  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node.isRequired\n};\n\nvar ButtonLink = function ButtonLink(_ref3) {\n  var to = _ref3.to,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref3, [\"to\"]);\n\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: to,\n    passHref: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    component: \"a\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  })));\n};\n\n_c4 = ButtonLink;\nButtonLink.propTypes = {\n  to: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,\n  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node.isRequired\n};\n\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"NextComposed$React.forwardRef\");\n$RefreshReg$(_c2, \"NextComposed\");\n$RefreshReg$(_c3, \"Link\");\n$RefreshReg$(_c4, \"ButtonLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xpbmsuanN4P2ZlZTciXSwibmFtZXMiOlsiTmV4dENvbXBvc2VkIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwicmVmIiwiYXMiLCJocmVmIiwicHJvcHMiLCJMaW5rIiwidG8iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJjaGlsZHJlbiIsIm5vZGUiLCJpc1JlcXVpcmVkIiwiQnV0dG9uTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyw0Q0FBSyxDQUFDQyxVQUFOLE1BQWlCLGtCQUF5QkMsR0FBekI7QUFBQSxNQUFHQyxFQUFILFFBQUdBLEVBQUg7QUFBQSxNQUFPQyxJQUFQLFFBQU9BLElBQVA7QUFBQSxNQUFnQkMsS0FBaEI7O0FBQUEsU0FBaUMsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWpDO0FBQUEsQ0FBakIsQ0FBckI7TUFBTU4sWTs7QUFDTixJQUFNTyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLE1BQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLE1BQVVGLEtBQVY7O0FBQUEsU0FBc0IsTUFBQyxnREFBRDtBQUFVLFFBQUksRUFBRUU7QUFBaEIsS0FBd0JGLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdEI7QUFBQSxDQUFiOztNQUFNQyxJO0FBRU5BLElBQUksQ0FBQ0UsU0FBTCxHQUFpQjtBQUNiRCxJQUFFLEVBQUVFLGlEQUFTLENBQUNDLE1BREQ7QUFFYkMsVUFBUSxFQUFFRixpREFBUyxDQUFDRyxJQUFWLENBQWVDO0FBRlosQ0FBakI7O0FBS0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxNQUFHUCxFQUFILFNBQUdBLEVBQUg7QUFBQSxNQUFVRixLQUFWOztBQUFBLFNBQ2YsTUFBQyxnREFBRDtBQUFVLFFBQUksRUFBRUUsRUFBaEI7QUFBb0IsWUFBUSxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRCx5RkFBWUYsS0FBWjtBQUFtQixhQUFTLEVBQUMsR0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURKLENBRGU7QUFBQSxDQUFuQjs7TUFBTVMsVTtBQU1OQSxVQUFVLENBQUNOLFNBQVgsR0FBdUI7QUFDbkJELElBQUUsRUFBRUUsaURBQVMsQ0FBQ0MsTUFESztBQUVuQkMsVUFBUSxFQUFFRixpREFBUyxDQUFDRyxJQUFWLENBQWVDO0FBRk4sQ0FBdkI7QUFLQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGluay5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IE5leHRDb21wb3NlZCA9IFJlYWN0LmZvcndhcmRSZWYoKHsgYXMsIGhyZWYsIC4uLnByb3BzIH0sIHJlZikgPT4gPE5leHRMaW5rPjwvTmV4dExpbms+KVxuY29uc3QgTGluayA9ICh7IHRvLCAuLi5wcm9wcyB9KSA9PiA8TmV4dExpbmsgaHJlZj17dG99IHsuLi5wcm9wc30gLz5cblxuTGluay5wcm9wVHlwZXMgPSB7XG4gICAgdG86IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG59XG5cbmNvbnN0IEJ1dHRvbkxpbmsgPSAoeyB0bywgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxOZXh0TGluayBocmVmPXt0b30gcGFzc0hyZWY+XG4gICAgICAgIDxCdXR0b24gey4uLnByb3BzfSBjb21wb25lbnQ9XCJhXCIgLz5cbiAgICA8L05leHRMaW5rPlxuKVxuXG5CdXR0b25MaW5rLnByb3BUeXBlcyA9IHtcbiAgICB0bzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IHsgTGluaywgQnV0dG9uTGluayB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/link.jsx\n");

/***/ })

})