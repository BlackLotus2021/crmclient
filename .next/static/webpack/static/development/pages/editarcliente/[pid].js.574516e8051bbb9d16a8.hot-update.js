webpackHotUpdate("static\\development\\pages\\editarcliente\\[pid].js",{

/***/ "./pages/editarcliente/[pid].js":
/*!**************************************!*\
  !*** ./pages/editarcliente/[pid].js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);





var _this = undefined,
    _jsxFileName = "C:\\Users\\arp93\\Downloads\\crmcliente\\crmcliente\\pages\\editarcliente\\[pid].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    mutation actualizarCliente($id: ID!, $input: ClienteInput) {\n        actualizarCliente(id: $id, input: $input) {\n            nombre\n            email\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    query obtenerCliente($id:ID!) {\n        obtenerCliente(id:$id) {\n            nombre\n            apellido\n            direccion\n            ciudad\n            pais\n            email\n            telefono\n            empresa\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var OBTENER_CLIENTE = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_7__["gql"])(_templateObject());
var ACTUALIZAR_CLIENTE = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_7__["gql"])(_templateObject2());

var EditarCliente = function EditarCliente() {
  var _Yup$object;

  // obtener el ID actual
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var id = router.query.id; // console.log(id)
  // Consultar para obtener el cliente

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_7__["useQuery"])(OBTENER_CLIENTE, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error; // Actualizar el cliente


  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_7__["useMutation"])(ACTUALIZAR_CLIENTE),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation, 1),
      actualizarCliente = _useMutation2[0]; // Schema de validacion


  var schemaValidacion = yup__WEBPACK_IMPORTED_MODULE_9__["object"]((_Yup$object = {
    nombre: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required('El nombre del cliente es obligatorio'),
    apellido: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required('El apellido del cliente es obligatorio'),
    empresa: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required('El campo empresa  es obligatorio'),
    email: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().email('Email no válido').required('El email del cliente es obligatorio'),
    direccion: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required('La direccion del cliente es obligatorio'),
    ciudad: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required('La direccion del cliente es obligatorio'),
    pais: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required('La direccion del cliente es obligatorio')
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_Yup$object, "pais", yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required('El pais del cliente es obligatorio')), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_Yup$object, "telefono", yup__WEBPACK_IMPORTED_MODULE_9__["string"]().matches(phoneRegex, "Número invalido").required("Telefono es obligatorio")), _Yup$object));
  if (loading) return 'Cargando...'; // console.log(data.obtenerCliente)

  var obtenerCliente = data.obtenerCliente; // Modifica el cliente en la BD

  var actualizarInfoCliente = function actualizarInfoCliente(valores) {
    var nombre, apellido, direccion, ciudad, pais, empresa, email, telefono, _await$actualizarClie, _data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function actualizarInfoCliente$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nombre = valores.nombre, apellido = valores.apellido, direccion = valores.direccion, ciudad = valores.ciudad, pais = valores.pais, empresa = valores.empresa, email = valores.email, telefono = valores.telefono;
            _context.prev = 1;
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(actualizarCliente({
              variables: {
                id: id,
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
            _await$actualizarClie = _context.sent;
            _data = _await$actualizarClie.data;
            // console.log(data);
            // Mostrar Alerta
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('Actualizado', 'El cliente se actualizó correctamente', 'success'); // Redireccionar

            router.push('/');
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 10]], Promise);
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "text-2xl text-gray-800 font-light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, "Editar Cliente"), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "w-full max-w-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Formik"], {
    validationSchema: schemaValidacion,
    enableReinitialize: true,
    initialValues: obtenerCliente,
    onSubmit: function onSubmit(valores) {
      actualizarInfoCliente(valores);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }, function (props) {
    // console.log(props);
    return __jsx("form", {
      className: "bg-white shadow-md px-8 pt-6 pb-8 mb-4",
      onSubmit: props.handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 37
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "nombre",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 41
      }
    }, "Nombre"), __jsx("input", {
      className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "nombre",
      type: "text",
      placeholder: "Nombre Cliente",
      onChange: props.handleChange,
      onBlur: props.handleBlur,
      value: props.values.nombre,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 41
      }
    })), props.touched.nombre && props.errors.nombre ? __jsx("div", {
      className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 41
      }
    }, __jsx("p", {
      className: "font-bold",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 45
      }
    }, "Error"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 45
      }
    }, props.errors.nombre)) : null, __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 37
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "apellido",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 41
      }
    }, "Apellido"), __jsx("input", {
      className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "apellido",
      type: "text",
      placeholder: "Apellido Cliente",
      onChange: props.handleChange,
      onBlur: props.handleBlur,
      value: props.values.apellido,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 41
      }
    })), props.touched.apellido && props.errors.apellido ? __jsx("div", {
      className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 41
      }
    }, __jsx("p", {
      className: "font-bold",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 45
      }
    }, "Error"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 45
      }
    }, props.errors.apellido)) : null, __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 37
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "nombre",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 41
      }
    }, "Direcci\xF3n"), __jsx("input", {
      className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "direccion",
      type: "text",
      placeholder: "Direcci\xF3n Cliente",
      onChange: props.handleChange,
      onBlur: props.handleBlur,
      value: props.values.direccion,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 41
      }
    })), props.touched.direccion && props.errors.direccion ? __jsx("div", {
      className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 41
      }
    }, __jsx("p", {
      className: "font-bold",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 45
      }
    }, "Error"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 45
      }
    }, props.errors.direccion)) : null, __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 37
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "ciudad",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 41
      }
    }, "Ciudad"), __jsx("input", {
      className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "ciudad",
      type: "text",
      placeholder: "Ciudad Cliente",
      onChange: props.handleChange,
      onBlur: props.handleBlur,
      value: props.values.ciudad,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 41
      }
    })), props.touched.ciudad && props.errors.ciudad ? __jsx("div", {
      className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 41
      }
    }, __jsx("p", {
      className: "font-bold",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 45
      }
    }, "Error"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 45
      }
    }, props.errors.ciudad)) : null, __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 37
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "pais",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 41
      }
    }, "Pais"), __jsx("input", {
      className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "pais",
      type: "text",
      placeholder: "Pais Cliente",
      onChange: props.handleChange,
      onBlur: props.handleBlur,
      value: props.values.pais,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 41
      }
    })), props.touched.nombre && props.errors.pais ? __jsx("div", {
      className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 41
      }
    }, __jsx("p", {
      className: "font-bold",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 45
      }
    }, "Error"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 45
      }
    }, props.errors.pais)) : null, __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 37
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "empresa",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 41
      }
    }, "Empresa"), __jsx("input", {
      className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "empresa",
      type: "text",
      placeholder: "Empresa Cliente",
      onChange: props.handleChange,
      onBlur: props.handleBlur,
      value: props.values.empresa,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 41
      }
    })), props.touched.empresa && props.errors.empresa ? __jsx("div", {
      className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 41
      }
    }, __jsx("p", {
      className: "font-bold",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 45
      }
    }, "Error"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 45
      }
    }, props.errors.empresa)) : null, __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 37
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 41
      }
    }, "Email"), __jsx("input", {
      className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "email",
      type: "email",
      placeholder: "Email Cliente",
      onChange: props.handleChange,
      onBlur: props.handleBlur,
      value: props.values.email,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 41
      }
    })), props.touched.email && props.errors.email ? __jsx("div", {
      className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 41
      }
    }, __jsx("p", {
      className: "font-bold",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 45
      }
    }, "Error"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 45
      }
    }, props.errors.email)) : null, __jsx("div", {
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 37
      }
    }, __jsx("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: "telefono",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 41
      }
    }, "Tel\xE9fono"), __jsx("input", {
      className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: "telefono",
      type: "tel",
      placeholder: "Tel\xE9fono Cliente",
      onChange: props.handleChange,
      onBlur: props.handleBlur,
      value: props.values.telefono,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 41
      }
    })), props.touched.telefono && props.errors.telefono ? __jsx("div", {
      className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 41
      }
    }, __jsx("p", {
      className: "font-bold",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 45
      }
    }, "Error"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 45
      }
    }, props.errors.telefono)) : null, __jsx("input", {
      type: "submit",
      className: "bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900",
      value: "Editar Cliente",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 37
      }
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (EditarCliente);

/***/ })

})
//# sourceMappingURL=[pid].js.574516e8051bbb9d16a8.hot-update.js.map