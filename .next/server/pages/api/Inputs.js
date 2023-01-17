"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/Inputs";
exports.ids = ["pages/api/Inputs"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/connectMongo.js":
/*!*****************************!*\
  !*** ./lib/connectMongo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\nconst connectMongo = async ()=>{\n    try {\n        console.log(`ARQUIVO ENV: ${\"mongodb+srv://admin:Wqd1W5UffbWX2ISs@cluster0.zcxjukj.mongodb.net/?retryWrites=true&w=majority\"}`);\n        const { connection  } = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://admin:Wqd1W5UffbWX2ISs@cluster0.zcxjukj.mongodb.net/?retryWrites=true&w=majority\", {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        if (connection.readyState === 1) {\n            console.log(\"CONECTOU MONGODB\");\n        }\n    } catch (error) {\n        return Promise.reject(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY29ubmVjdE1vbmdvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQ0EsbURBQVksQ0FBQyxlQUFlLElBQUk7QUFFaEMsTUFBTUUsZUFBZSxVQUFZO0lBQ2hDLElBQUk7UUFDSEMsUUFBUUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFQyxnR0FBbUMsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sRUFBRUcsV0FBVSxFQUFFLEdBQUcsTUFBTVIsdURBQWdCLENBQUNLLGdHQUFtQyxFQUFFO1lBQ2xGSyxpQkFBaUIsSUFBSTtZQUNyQkMsb0JBQW9CLElBQUk7UUFDekI7UUFFQSxJQUFJSCxXQUFXSSxVQUFVLEtBQUssR0FBRztZQUNoQ1QsUUFBUUMsR0FBRyxDQUFDO1FBQ2IsQ0FBQztJQUNGLEVBQUUsT0FBT1MsT0FBTztRQUNmLE9BQU9DLFFBQVFDLE1BQU0sQ0FBQ0Y7SUFDdkI7QUFDRDtBQUVBLGlFQUFlWCxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2Nvbm5lY3RNb25nby5qcz8zOWYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbm1vbmdvb3NlLnNldChcInN0cmljdFF1ZXJ5XCIsIHRydWUpO1xyXG5cclxuY29uc3QgY29ubmVjdE1vbmdvID0gYXN5bmMgKCkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zb2xlLmxvZyhgQVJRVUlWTyBFTlY6ICR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9VUkl9YCk7XHJcblx0XHRjb25zdCB7IGNvbm5lY3Rpb24gfSA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9VUkksIHtcclxuXHRcdFx0dXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG5cdFx0XHR1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAoY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSAxKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiQ09ORUNUT1UgTU9OR09EQlwiKTtcclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0TW9uZ287XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInNldCIsImNvbm5lY3RNb25nbyIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTU9OR09EQl9VUkkiLCJjb25uZWN0aW9uIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInJlYWR5U3RhdGUiLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/connectMongo.js\n");

/***/ }),

/***/ "(api)/./pages/api/Inputs/index.js":
/*!***********************************!*\
  !*** ./pages/api/Inputs/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_connectMongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/connectMongo */ \"(api)/./lib/connectMongo.js\");\n// ingredientes\n\nasync function handler(req, res) {\n    (0,_lib_connectMongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const { method  } = req;\n    switch(method){\n        case \"GET\":\n            res.status(200).json({\n                name: `Method: ${method}`\n            });\n            break;\n        case \"POST\":\n            res.status(200).json({\n                name: `Method: ${method}`\n            });\n            break;\n        case \"PUT\":\n            res.status(200).json({\n                name: `Method: ${method}`\n            });\n            break;\n        case \"DELETE\":\n            res.status(200).json({\n                name: `Method: ${method}`\n            });\n            break;\n        default:\n            res.setHeader(\"Allow\", [\n                \"GET\",\n                \"POST\",\n                \"PUT\",\n                \"DELETE\"\n            ]);\n            res.status(405).end(`Method ${method} Not Allowed`);\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvSW5wdXRzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZUFBZTtBQUVzQztBQUV0QyxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQ0gsNkRBQVlBO0lBRVosTUFBTSxFQUFFSSxPQUFNLEVBQUUsR0FBR0Y7SUFFbkIsT0FBUUU7UUFDUCxLQUFLO1lBQ0pELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLE1BQU0sQ0FBQyxRQUFRLEVBQUVILE9BQU8sQ0FBQztZQUFDO1lBQ2pELEtBQU07UUFDUCxLQUFLO1lBQ0pELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLE1BQU0sQ0FBQyxRQUFRLEVBQUVILE9BQU8sQ0FBQztZQUFDO1lBQ2pELEtBQU07UUFDUCxLQUFLO1lBQ0pELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLE1BQU0sQ0FBQyxRQUFRLEVBQUVILE9BQU8sQ0FBQztZQUFDO1lBQ2pELEtBQU07UUFDUCxLQUFLO1lBQ0pELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLE1BQU0sQ0FBQyxRQUFRLEVBQUVILE9BQU8sQ0FBQztZQUFDO1lBQ2pELEtBQU07UUFDUDtZQUNDRCxJQUFJSyxTQUFTLENBQUMsU0FBUztnQkFBQztnQkFBTztnQkFBUTtnQkFBTzthQUFTO1lBQ3ZETCxJQUFJRSxNQUFNLENBQUMsS0FBS0ksR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFTCxPQUFPLFlBQVksQ0FBQztZQUNsRCxLQUFNO0lBQ1I7QUFDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL0lucHV0cy9pbmRleC5qcz8xNWIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGluZ3JlZGllbnRlc1xyXG5cclxuaW1wb3J0IGNvbm5lY3RNb25nbyBmcm9tIFwiLi4vLi4vLi4vbGliL2Nvbm5lY3RNb25nb1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG5cdGNvbm5lY3RNb25nbygpO1xyXG5cclxuXHRjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xyXG5cclxuXHRzd2l0Y2ggKG1ldGhvZCkge1xyXG5cdFx0Y2FzZSBcIkdFVFwiOlxyXG5cdFx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7IG5hbWU6IGBNZXRob2Q6ICR7bWV0aG9kfWAgfSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIlBPU1RcIjpcclxuXHRcdFx0cmVzLnN0YXR1cygyMDApLmpzb24oeyBuYW1lOiBgTWV0aG9kOiAke21ldGhvZH1gIH0pO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJQVVRcIjpcclxuXHRcdFx0cmVzLnN0YXR1cygyMDApLmpzb24oeyBuYW1lOiBgTWV0aG9kOiAke21ldGhvZH1gIH0pO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJERUxFVEVcIjpcclxuXHRcdFx0cmVzLnN0YXR1cygyMDApLmpzb24oeyBuYW1lOiBgTWV0aG9kOiAke21ldGhvZH1gIH0pO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJlcy5zZXRIZWFkZXIoXCJBbGxvd1wiLCBbXCJHRVRcIiwgXCJQT1NUXCIsIFwiUFVUXCIsIFwiREVMRVRFXCJdKTtcclxuXHRcdFx0cmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7bWV0aG9kfSBOb3QgQWxsb3dlZGApO1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbm5lY3RNb25nbyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibmFtZSIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/Inputs/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/Inputs/index.js"));
module.exports = __webpack_exports__;

})();