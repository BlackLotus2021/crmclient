webpackHotUpdate("static\\development\\pages\\nuevocliente.js",{

/***/ "./pages/nuevocliente.js":
/*!*******************************!*\
  !*** ./pages/nuevocliente.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);





var _this = undefined,
    _jsxFileName = "C:\\Users\\arp93\\Downloads\\crmcliente\\crmcliente\\pages\\nuevocliente.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    query obtenerClientesVendedor {\n        obtenerClientesVendedor {\n            id\n            nombre\n            apellido\n            direccion\n            ciudad\n            pais\n            empresa\n            email\n        }\n    }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    mutation nuevoCliente($input: ClienteInput) {\n        nuevoCliente(input: $input) {\n            id\n            nombre\n            apellido\n            direccion\n            ciudad\n            pais\n            empresa\n            email\n            telefono\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var NUEVO_CLIENTE = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__["gql"])(_templateObject());
var OBTENER_CLIENTES_USUARIO = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__["gql"])(_templateObject2());

var NuevoCliente = function NuevoCliente() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])(); // Mensaje de alerta

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      mensaje = _useState[0],
      guardarMensaje = _useState[1]; // Mutation para crear nuevos clientes


  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__["useMutation"])(NUEVO_CLIENTE, {
    update: function update(cache, _ref) {
      var nuevoCliente = _ref.data.nuevoCliente;

      // Obtener el objeto de cache que deseamos actualizar
      var _cache$readQuery = cache.readQuery({
        query: OBTENER_CLIENTES_USUARIO
      }),
          obtenerClientesVendedor = _cache$readQuery.obtenerClientesVendedor; // Reescribimos el cache ( el cache nunca se debe modificar )


      cache.writeQuery({
        query: OBTENER_CLIENTES_USUARIO,
        data: {
          obtenerClientesVendedor: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(obtenerClientesVendedor), [nuevoCliente])
        }
      });
    }
  }),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation, 1),
      nuevoCliente = _useMutation2[0];

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_6__["useFormik"])({
    initialValues: {
      nombre: '',
      apellido: '',
      direccion: '',
      ciudad: '',
      pais: '',
      empresa: '',
      email: '',
      telefono: ''
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_7__["object"]({
      nombre: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('El nombre del cliente es obligatorio'),
      apellido: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('El apellido del cliente es obligatorio'),
      empresa: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('El campo empresa  es obligatorio'),
      email: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().email('Email no válido').required('El email del cliente es obligatorio'),
      direccion: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('La dirección del cliente es obligatorio'),
      ciudad: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('La ciudad del cliente es obligatorio'),
      pais: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('El pais del cliente es obligatorio')
    }),
    onSubmit: function onSubmit(valores) {
      var nombre, apellido, direccion, ciudad, pais, empresa, email, telefono, _await$nuevoCliente, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function onSubmit$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              nombre = valores.nombre, apellido = valores.apellido, direccion = valores.direccion, ciudad = valores.ciudad, pais = valores.pais, empresa = valores.empresa, email = valores.email, telefono = valores.telefono;
              _context.prev = 1;
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(nuevoCliente({
                variables: {
                  input: {
                    nombre: nombre,
                    apellido: apellido,
                    direccion: direccion,
                    ciudad: ciudad,
                    pais: pais,
                    empresa: empresa,
                    email: email,
                    telefono: telefono
                  }
                }
              }));

            case 4:
              _await$nuevoCliente = _context.sent;
              data = _await$nuevoCliente.data;
              // console.log(data.nuevoCliente);
              router.push('/'); // redireccionar hacia clientes

              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              guardarMensaje(_context.t0.message.replace('GraphQL error: ', ''));
              setTimeout(function () {
                guardarMensaje(null);
              }, 2000);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 9]], Promise);
    }
  });

  var mostrarMensaje = function mostrarMensaje() {
    return __jsx("div", {
      className: "bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }
    }, mensaje));
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "text-2xl text-gray-800 font-light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, "Nuevo Cliente"), mensaje && mostrarMensaje(), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "w-full max-w-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, __jsx("form", {
    className: "bg-white shadow-md px-8 pt-6 pb-8 mb-4",
    onSubmit: formik.handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 25
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 29
    }
  }, "Nombre"), __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "nombre",
    type: "text",
    placeholder: "Nombre Cliente",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.nombre,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 29
    }
  })), formik.touched.nombre && formik.errors.nombre ? __jsx("div", {
    className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 33
    }
  }, formik.errors.nombre)) : null, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 25
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "apellido",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 29
    }
  }, "Apellido"), __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "apellido",
    type: "text",
    placeholder: "Apellido Cliente",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.apellido,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 29
    }
  })), formik.touched.apellido && formik.errors.apellido ? __jsx("div", {
    className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 33
    }
  }, formik.errors.apellido)) : null, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 25
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "direccion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 29
    }
  }, "Direcci\xF3n"), __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "direccion",
    type: "text",
    placeholder: "Direcci\xF3n Cliente",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.direccion,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 29
    }
  })), formik.touched.direccion && formik.errors.direccion ? __jsx("div", {
    className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 33
    }
  }, formik.errors.direccion)) : null, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 25
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "ciudad",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 29
    }
  }, "Ciudad"), __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "ciudad",
    type: "text",
    placeholder: "Ciudad Cliente",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.ciudad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 29
    }
  })), formik.touched.ciudad && formik.errors.ciudad ? __jsx("div", {
    className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 33
    }
  }, formik.errors.ciudad)) : null, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 25
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "pais",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 29
    }
  }, "Pais"), __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "pais",
    type: "text",
    placeholder: "Pais del Cliente",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.pais,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 29
    }
  })), formik.touched.pais && formik.errors.pais ? __jsx("div", {
    className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 33
    }
  }, formik.errors.pais)) : null, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 25
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "empresa",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 29
    }
  }, "Empresa"), __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "empresa",
    type: "text",
    placeholder: "Empresa Cliente",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.empresa,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 29
    }
  })), formik.touched.empresa && formik.errors.empresa ? __jsx("div", {
    className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 33
    }
  }, formik.errors.empresa)) : null, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 25
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 29
    }
  }, "Email"), __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "email",
    type: "email",
    placeholder: "Email Cliente",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 29
    }
  })), formik.touched.email && formik.errors.email ? __jsx("div", {
    className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 33
    }
  }, formik.errors.email)) : null, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 25
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "telefono",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 29
    }
  }, "Tel\xE9fono"), __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "telefono",
    type: "tel",
    placeholder: "Tel\xE9fono Cliente",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.telefono,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 29
    }
  })), __jsx("input", {
    type: "submit",
    className: "bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900",
    value: "Registrar Cliente",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (NuevoCliente);

/***/ })

})
//# sourceMappingURL=nuevocliente.js.4c70bc548ccc1061d518.hot-update.js.map