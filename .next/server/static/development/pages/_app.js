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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/apollo.js":
/*!**************************!*\
  !*** ./config/apollo.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-context */ "apollo-link-context");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const httpLink = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["createHttpLink"])({
  uri: 'http://localhost:4000',
  fetch: (node_fetch__WEBPACK_IMPORTED_MODULE_1___default())
});
const authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_2__["setContext"])((_, {
  headers
}) => {
  // Leer el storage almacenado
  const token = localStorage.getItem('token'); // console.log(token);

  return {
    headers: _objectSpread({}, headers, {
      authorization: token ? `Bearer ${token}` : ''
    })
  };
});
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
  connectToDevTools: true,
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"](),
  link: authLink.concat(httpLink)
});
/* harmony default export */ __webpack_exports__["default"] = (client);

/***/ }),

/***/ "./context/pedidos/PedidoContext.js":
/*!******************************************!*\
  !*** ./context/pedidos/PedidoContext.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PedidoContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (PedidoContext);

/***/ }),

/***/ "./context/pedidos/PedidoReducer.js":
/*!******************************************!*\
  !*** ./context/pedidos/PedidoReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./types/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ((state, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SELECCIONAR_CLIENTE"]:
      return _objectSpread({}, state, {
        cliente: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SELECCIONAR_PRODUCTO"]:
      return _objectSpread({}, state, {
        productos: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CANTIDAD_PRODUCTOS"]:
      return _objectSpread({}, state, {
        productos: state.productos.map(producto => producto.id === action.payload.id ? producto = action.payload : producto)
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["ACTUALIZAR_TOTAL"]:
      return _objectSpread({}, state, {
        total: state.productos.reduce((nuevoTotal, articulo) => nuevoTotal += articulo.precio * articulo.cantidad, 0)
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./context/pedidos/PedidoState.js":
/*!****************************************!*\
  !*** ./context/pedidos/PedidoState.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PedidoContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PedidoContext */ "./context/pedidos/PedidoContext.js");
/* harmony import */ var _PedidoReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PedidoReducer */ "./context/pedidos/PedidoReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./types/index.js");
var _jsxFileName = "C:\\Users\\arp93\\Downloads\\crmcliente\\crmcliente\\context\\pedidos\\PedidoState.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const PedidoState = ({
  children
}) => {
  // State de Pedidos
  const initialState = {
    cliente: {},
    productos: [],
    total: 0
  };
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_PedidoReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState); // Modifica el Cliente

  const agregarCliente = cliente => {
    // console.log(cliente);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["SELECCIONAR_CLIENTE"],
      payload: cliente
    });
  }; // Modifica los productos


  const agregarProducto = productosSeleccionados => {
    let nuevoState;

    if (state.productos.length > 0) {
      // Tomar del segundo arreglo, una copia para asignarlo al primero
      nuevoState = productosSeleccionados.map(producto => {
        const nuevoObjeto = state.productos.find(productoState => productoState.id === producto.id);
        return _objectSpread({}, producto, {}, nuevoObjeto);
      });
    } else {
      nuevoState = productosSeleccionados;
    }

    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["SELECCIONAR_PRODUCTO"],
      payload: nuevoState
    });
  }; // Modifica las cantidades de los productos


  const cantidadProductos = nuevoProducto => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["CANTIDAD_PRODUCTOS"],
      payload: nuevoProducto
    });
  };

  const actualizarTotal = () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["ACTUALIZAR_TOTAL"]
    });
  };

  return __jsx(_PedidoContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      cliente: state.cliente,
      productos: state.productos,
      total: state.total,
      agregarCliente,
      agregarProducto,
      cantidadProductos,
      actualizarTotal
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, " ", children);
};

/* harmony default export */ __webpack_exports__["default"] = (PedidoState);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/apollo */ "./config/apollo.js");
/* harmony import */ var _context_pedidos_PedidoState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/pedidos/PedidoState */ "./context/pedidos/PedidoState.js");
var _jsxFileName = "C:\\Users\\arp93\\Downloads\\crmcliente\\crmcliente\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const MyApp = ({
  Component,
  pageProps
}) => {
  return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloProvider"], {
    client: _config_apollo__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_context_pedidos_PedidoState__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./types/index.js":
/*!************************!*\
  !*** ./types/index.js ***!
  \************************/
/*! exports provided: SELECCIONAR_CLIENTE, SELECCIONAR_PRODUCTO, CANTIDAD_PRODUCTOS, ACTUALIZAR_TOTAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECCIONAR_CLIENTE", function() { return SELECCIONAR_CLIENTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECCIONAR_PRODUCTO", function() { return SELECCIONAR_PRODUCTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANTIDAD_PRODUCTOS", function() { return CANTIDAD_PRODUCTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTUALIZAR_TOTAL", function() { return ACTUALIZAR_TOTAL; });
const SELECCIONAR_CLIENTE = 'SELECCIONAR_CLIENTE';
const SELECCIONAR_PRODUCTO = 'SELECCIONAR_PRODUCTO';
const CANTIDAD_PRODUCTOS = 'CANTIDAD_PRODUCTOS';
const ACTUALIZAR_TOTAL = 'ACTUALIZAR_TOTAL';

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "apollo-link-context":
/*!**************************************!*\
  !*** external "apollo-link-context" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map