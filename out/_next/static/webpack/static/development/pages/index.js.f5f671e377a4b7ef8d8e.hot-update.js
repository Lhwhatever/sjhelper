webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndexPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/metadata */ \"./components/metadata.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/link */ \"./components/link.jsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/mnt/d/Programming/sjhelper/pages/index.jsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      display: 'flex',\n      alignItems: 'center',\n      flexGrow: 1,\n      height: '100vh'\n    },\n    linkCol: {\n      flexGrow: 1,\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center'\n    },\n    btnLinks: {\n      display: 'flex',\n      flexDirection: 'column',\n      '& a': {\n        marginBottom: theme.spacing(1)\n      }\n    },\n    btnLinksCompact: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'center',\n      '& a': {\n        marginLeft: theme.spacing(1),\n        marginRight: theme.spacing(1)\n      }\n    },\n    imageContainer: {\n      flexGrow: 3\n    },\n    image: {\n      maxWidth: '100%'\n    },\n    smRoot: {\n      display: 'flex',\n      flexDirection: 'column'\n    },\n    linkSectHeaderBox: {\n      display: 'flex',\n      justifyContent: 'center',\n      minWidth: 175\n    }\n  };\n});\n\nvar LinkSectionHeader = function LinkSectionHeader(props) {\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    m: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, \"Shengji Helper\"));\n};\n\n_c = LinkSectionHeader;\n\nvar Links = function Links(_ref) {\n  _s();\n\n  var compact = _ref.compact;\n  var classes = useStyles();\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    className: compact ? classes.btnLinksCompact : classes.btnLinks,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"outlined\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, \"Calculator\"), __jsx(_components_link__WEBPACK_IMPORTED_MODULE_5__[\"ButtonLink\"], {\n    variant: \"outlined\",\n    to: \"/planner\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, \"Game Planner\"));\n};\n\n_s(Links, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c2 = Links;\nLinks.propTypes = {\n  compact: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool\n};\n\nvar Image = function Image() {\n  _s2();\n\n  var classes = useStyles();\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    className: classes.imageContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"index.png\",\n    className: classes.image,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s2(Image, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c3 = Image;\nfunction IndexPage() {\n  _s3();\n\n  var classes = useStyles();\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    className: classes.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  }, __jsx(_components_metadata__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Hidden\"], {\n    xsDown: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 17\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    className: classes.linkCol,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 21\n    }\n  }, __jsx(LinkSectionHeader, {\n    className: classes.linkSectHeaderBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 25\n    }\n  }), __jsx(Links, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 25\n    }\n  })), __jsx(Image, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 21\n    }\n  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Hidden\"], {\n    smUp: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    className: classes.smRoot,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 17\n    }\n  }, __jsx(Image, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 21\n    }\n  }), __jsx(LinkSectionHeader, {\n    className: classes.linkSectHeaderBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 21\n    }\n  }), __jsx(Links, {\n    compact: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 21\n    }\n  }))));\n}\n\n_s3(IndexPage, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c4 = IndexPage;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"LinkSectionHeader\");\n$RefreshReg$(_c2, \"Links\");\n$RefreshReg$(_c3, \"Image\");\n$RefreshReg$(_c4, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/NzBjNSJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4R3JvdyIsImhlaWdodCIsImxpbmtDb2wiLCJmbGV4RGlyZWN0aW9uIiwiYnRuTGlua3MiLCJtYXJnaW5Cb3R0b20iLCJzcGFjaW5nIiwiYnRuTGlua3NDb21wYWN0IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJpbWFnZUNvbnRhaW5lciIsImltYWdlIiwibWF4V2lkdGgiLCJzbVJvb3QiLCJsaW5rU2VjdEhlYWRlckJveCIsIm1pbldpZHRoIiwiTGlua1NlY3Rpb25IZWFkZXIiLCJwcm9wcyIsIkxpbmtzIiwiY29tcGFjdCIsImNsYXNzZXMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiSW1hZ2UiLCJJbmRleFBhZ2UiLCJjb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxRQUFJLEVBQUU7QUFDRkMsYUFBTyxFQUFFLE1BRFA7QUFFRkMsZ0JBQVUsRUFBRSxRQUZWO0FBR0ZDLGNBQVEsRUFBRSxDQUhSO0FBSUZDLFlBQU0sRUFBRTtBQUpOLEtBRCtCO0FBT3JDQyxXQUFPLEVBQUU7QUFDTEYsY0FBUSxFQUFFLENBREw7QUFFTEYsYUFBTyxFQUFFLE1BRko7QUFHTEssbUJBQWEsRUFBRSxRQUhWO0FBSUxKLGdCQUFVLEVBQUU7QUFKUCxLQVA0QjtBQWFyQ0ssWUFBUSxFQUFFO0FBQ05OLGFBQU8sRUFBRSxNQURIO0FBRU5LLG1CQUFhLEVBQUUsUUFGVDtBQUdOLGFBQU87QUFBRUUsb0JBQVksRUFBRVQsS0FBSyxDQUFDVSxP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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIENvbnRhaW5lciwgSGlkZGVuLCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgTWV0YWRhdGEgZnJvbSAnLi4vY29tcG9uZW50cy9tZXRhZGF0YSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbkxpbmsgfSBmcm9tICcuLi9jb21wb25lbnRzL2xpbmsnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICB9LFxuICAgIGxpbmtDb2w6IHtcbiAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgYnRuTGlua3M6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgJyYgYSc6IHsgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpIH0sXG4gICAgfSxcbiAgICBidG5MaW5rc0NvbXBhY3Q6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAnJiBhJzoge1xuICAgICAgICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgaW1hZ2VDb250YWluZXI6IHtcbiAgICAgICAgZmxleEdyb3c6IDMsXG4gICAgfSxcbiAgICBpbWFnZToge1xuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgc21Sb290OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgICBsaW5rU2VjdEhlYWRlckJveDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgbWluV2lkdGg6IDE3NSxcbiAgICB9LFxufSkpXG5cbmNvbnN0IExpbmtTZWN0aW9uSGVhZGVyID0gKHByb3BzKSA9PiAoXG4gICAgPEJveCB7Li4ucHJvcHN9IG09ezF9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5TaGVuZ2ppIEhlbHBlcjwvVHlwb2dyYXBoeT5cbiAgICA8L0JveD5cbilcblxuY29uc3QgTGlua3MgPSAoeyBjb21wYWN0IH0pID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjb21wYWN0ID8gY2xhc3Nlcy5idG5MaW5rc0NvbXBhY3QgOiBjbGFzc2VzLmJ0bkxpbmtzfT5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCI+Q2FsY3VsYXRvcjwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbkxpbmsgdmFyaWFudD1cIm91dGxpbmVkXCIgdG89XCIvcGxhbm5lclwiPlxuICAgICAgICAgICAgICAgIEdhbWUgUGxhbm5lclxuICAgICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbkxpbmtzLnByb3BUeXBlcyA9IHtcbiAgICBjb21wYWN0OiBQcm9wVHlwZXMuYm9vbCxcbn1cblxuY29uc3QgSW1hZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VDb250YWluZXJ9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbmRleC5wbmdcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9IC8+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxNZXRhZGF0YSAvPlxuICAgICAgICAgICAgPEhpZGRlbiB4c0Rvd24+XG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtDb2x9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtTZWN0aW9uSGVhZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rU2VjdEhlYWRlckJveH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rcyAvPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgICAgIDxIaWRkZW4gc21VcD5cbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5zbVJvb3R9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtTZWN0aW9uSGVhZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rU2VjdEhlYWRlckJveH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtzIGNvbXBhY3QgLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})