webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./config/apollo.js":
/*!**************************!*\
  !*** ./config/apollo.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-context */ "./node_modules/apollo-link-context/lib/bundle.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var httpLink = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["createHttpLink"])({
  uri: 'https://http://localhost:4000',
  fetch: node_fetch__WEBPACK_IMPORTED_MODULE_2___default.a
});
var authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_3__["setContext"])(function (_, _ref) {
  var headers = _ref.headers;
  // Leer el storage almacenado
  var token = localStorage.getItem('token'); // console.log(token);

  return {
    headers: _objectSpread({}, headers, {
      authorization: token ? "Bearer ".concat(token) : ''
    })
  };
});
var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
  connectToDevTools: true,
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"](),
  link: authLink.concat(httpLink)
});
/* harmony default export */ __webpack_exports__["default"] = (client);

/***/ })

})
//# sourceMappingURL=_app.js.70546fb50eea4899342d.hot-update.js.map