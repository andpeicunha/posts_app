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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\nconst connectMongo = async ()=>{\n    try {\n        const { connection  } = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://admin:Wqd1W5UffbWX2ISs@cluster0.zcxjukj.mongodb.net/PrecoCerto?retryWrites=true&w=majority\", {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        if (connection.readyState === 1) {\n            console.log(\"CONECTOU MONGODB\");\n        }\n    } catch (error) {\n        return Promise.reject(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY29ubmVjdE1vbmdvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQ0EsbURBQVksQ0FBQyxlQUFlLElBQUk7QUFFaEMsTUFBTUUsZUFBZSxVQUFZO0lBQ2hDLElBQUk7UUFDSCxNQUFNLEVBQUVDLFdBQVUsRUFBRSxHQUFHLE1BQU1ILHVEQUFnQixDQUFDSywwR0FBbUMsRUFBRTtZQUNsRkcsaUJBQWlCLElBQUk7WUFDckJDLG9CQUFvQixJQUFJO1FBQ3pCO1FBRUEsSUFBSU4sV0FBV08sVUFBVSxLQUFLLEdBQUc7WUFDaENDLFFBQVFDLEdBQUcsQ0FBQztRQUNiLENBQUM7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZixPQUFPQyxRQUFRQyxNQUFNLENBQUNGO0lBQ3ZCO0FBQ0Q7QUFFQSxpRUFBZVgsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9jb25uZWN0TW9uZ28uanM/MzlmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5tb25nb29zZS5zZXQoXCJzdHJpY3RRdWVyeVwiLCB0cnVlKTtcclxuXHJcbmNvbnN0IGNvbm5lY3RNb25nbyA9IGFzeW5jICgpID0+IHsgLy9GVU7Dh8ODTyBQQVJBIENPTkVDVEFSIENPTSBPIEJBTkNPIERFIERBRE9TXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHsgY29ubmVjdGlvbiB9ID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT0RCX1VSSSwge1xyXG5cdFx0XHR1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcblx0XHRcdHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmIChjb25uZWN0aW9uLnJlYWR5U3RhdGUgPT09IDEpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJDT05FQ1RPVSBNT05HT0RCXCIpO1xyXG5cdFx0fVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RNb25nbztcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwic2V0IiwiY29ubmVjdE1vbmdvIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTU9OR09EQl9VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/connectMongo.js\n");

/***/ }),

/***/ "(api)/./lib/controller.js":
/*!***************************!*\
  !*** ./lib/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUser\": () => (/* binding */ getUser),\n/* harmony export */   \"postUser\": () => (/* binding */ postUser),\n/* harmony export */   \"putUser\": () => (/* binding */ putUser)\n/* harmony export */ });\n/* harmony import */ var _models_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/users */ \"(api)/./models/users.js\");\n// CONTROLLER\n\n//post user\nasync function getUser(req, res) {\n    try {\n        const users = await _models_users__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({});\n        if (!users) return res.status(404).json({\n            error: \"User not Found\"\n        });\n        res.status(200).json(users); //FEZ A CHAMADA GET, SE TIVER SUCESSO RETORNA O JSON\n    } catch (error1) {\n        res.status(404).json({\n            error: `Method PUT getUser | Mensagem de Erro: ${error1.message}`\n        }); //SE DER ERRO RETORNA O JSON COM A MENSAGEM DE ERRO\n    }\n}\n//post user\nasync function postUser(req, res) {\n    try {\n        const formData = req.body;\n        // console.log(req.body);\n        if (!formData) return res.status(404).json({\n            error: `formData Erro: ${error.message}`\n        });\n        _models_users__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(formData, function(err, data) {\n            return res.status(200).json(data);\n        });\n    } catch (error1) {\n        res.status(404).json({\n            error: `Method PUT postUser | Mensagem de Erro: ${error1.message}`\n        });\n    }\n}\n//Put user\nasync function putUser(req, res) {\n    try {\n        const { userId  } = req.query;\n        const formData = req.body;\n        if (userId && formData) {\n            const user = await _models_users__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(userId, formData);\n            res.status(200).json(user);\n        }\n        res.status(404).json({\n            error: \"Usu\\xe1rio n\\xe3o Selecionado\"\n        });\n    } catch (error1) {\n        res.status(404).json({\n            error: `Method PUT putUser | Mensagem de Erro: ${error1.message}`\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY29udHJvbGxlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsYUFBYTtBQUV1QjtBQUVwQyxXQUFXO0FBQ0osZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDcEMsSUFBSTtRQUNBLE1BQU1DLFFBQVEsTUFBTUosMERBQVUsQ0FBQyxDQUFDO1FBRWhDLElBQUksQ0FBQ0ksT0FBTyxPQUFPRCxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBaUI7UUFDbEVMLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNILFFBQVEsb0RBQW9EO0lBQ3JGLEVBQUUsT0FBT0ksUUFBTztRQUNaTCxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sQ0FBQyx1Q0FBdUMsRUFBRUEsT0FBTUMsT0FBTyxDQUFDLENBQUM7UUFBQyxJQUFJLG1EQUFtRDtJQUNuSjtBQUNKLENBQUM7QUFFRCxXQUFXO0FBQ0osZUFBZUMsU0FBU1IsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDckMsSUFBSTtRQUNBLE1BQU1RLFdBQVdULElBQUlVLElBQUk7UUFDekIseUJBQXlCO1FBRXpCLElBQUksQ0FBQ0QsVUFBVSxPQUFPUixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sQ0FBQyxlQUFlLEVBQUVBLE1BQU1DLE9BQU8sQ0FBQyxDQUFDO1FBQUM7UUFFdEZULDREQUFZLENBQUNXLFVBQVUsU0FBVUcsR0FBRyxFQUFFQyxJQUFJLEVBQUU7WUFDeEMsT0FBT1osSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1E7UUFDaEM7SUFFSixFQUFFLE9BQU9QLFFBQU87UUFDWkwsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPLENBQUMsd0NBQXdDLEVBQUVBLE9BQU1DLE9BQU8sQ0FBQyxDQUFDO1FBQUM7SUFDN0Y7QUFDSixDQUFDO0FBRUQsVUFBVTtBQUNILGVBQWVPLFFBQVFkLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3BDLElBQUk7UUFDQSxNQUFNLEVBQUVjLE9BQU0sRUFBRSxHQUFHZixJQUFJZ0IsS0FBSztRQUM1QixNQUFNUCxXQUFXVCxJQUFJVSxJQUFJO1FBRXpCLElBQUlLLFVBQVVOLFVBQVU7WUFDcEIsTUFBTVEsT0FBTyxNQUFNbkIsdUVBQXVCLENBQUNpQixRQUFRTjtZQUNuRFIsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1k7UUFDekIsQ0FBQztRQUVEaEIsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQTBCO0lBRTVELEVBQUUsT0FBT0EsUUFBTztRQUNaTCxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sQ0FBQyx1Q0FBdUMsRUFBRUEsT0FBTUMsT0FBTyxDQUFDLENBQUM7UUFBQztJQUM1RjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY29udHJvbGxlci5qcz85OTg0Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBDT05UUk9MTEVSXHJcblxyXG5pbXBvcnQgVXNlcnMgZnJvbSBcIi4uL21vZGVscy91c2Vyc1wiO1xyXG5cclxuLy9wb3N0IHVzZXJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIocmVxLCByZXMpIHsgLy9GVU7Dh8ODTyBQQVJBIEJVU0NBUiBVU1VBUklPUyBOTyBCQU5DTyBERSBEQURPU1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IFVzZXJzLmZpbmQoe30pXHJcblxyXG4gICAgICAgIGlmICghdXNlcnMpIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiBcIlVzZXIgbm90IEZvdW5kXCIgfSlcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih1c2Vycyk7IC8vRkVaIEEgQ0hBTUFEQSBHRVQsIFNFIFRJVkVSIFNVQ0VTU08gUkVUT1JOQSBPIEpTT05cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogYE1ldGhvZCBQVVQgZ2V0VXNlciB8IE1lbnNhZ2VtIGRlIEVycm86ICR7ZXJyb3IubWVzc2FnZX1gIH0pOyAvL1NFIERFUiBFUlJPIFJFVE9STkEgTyBKU09OIENPTSBBIE1FTlNBR0VNIERFIEVSUk9cclxuICAgIH1cclxufVxyXG5cclxuLy9wb3N0IHVzZXJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RVc2VyKHJlcSwgcmVzKSB7IC8vRlVOw4fDg08gUEFSQSBDUklBUiBVU1VBUklPUyBOTyBCQU5DTyBERSBEQURPU1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcclxuXHJcbiAgICAgICAgaWYgKCFmb3JtRGF0YSkgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6IGBmb3JtRGF0YSBFcnJvOiAke2Vycm9yLm1lc3NhZ2V9YCB9KTtcclxuXHJcbiAgICAgICAgVXNlcnMuY3JlYXRlKGZvcm1EYXRhLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7IC8vQ1JJQSBVTSBOT1ZPIFVTVUFSSU8gQ09NIEJBU0UgTk8gTU9ERUwgU0NIRU1BXHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiBgTWV0aG9kIFBVVCBwb3N0VXNlciB8IE1lbnNhZ2VtIGRlIEVycm86ICR7ZXJyb3IubWVzc2FnZX1gIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL1B1dCB1c2VyXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwdXRVc2VyKHJlcSwgcmVzKSB7IC8vRlVOw4fDg08gUEFSQSBBVFVBTElaQVIgVVNVQVJJT1MgTk8gQkFOQ08gREUgREFET1NcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VySWQgfSA9IHJlcS5xdWVyeTtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IHJlcS5ib2R5O1xyXG5cclxuICAgICAgICBpZiAodXNlcklkICYmIGZvcm1EYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2Vycy5maW5kQnlJZEFuZFVwZGF0ZSh1c2VySWQsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiBcIlVzdcOhcmlvIG7Do28gU2VsZWNpb25hZG9cIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6IGBNZXRob2QgUFVUIHB1dFVzZXIgfCBNZW5zYWdlbSBkZSBFcnJvOiAke2Vycm9yLm1lc3NhZ2V9YCB9KTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiVXNlcnMiLCJnZXRVc2VyIiwicmVxIiwicmVzIiwidXNlcnMiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsInBvc3RVc2VyIiwiZm9ybURhdGEiLCJib2R5IiwiY3JlYXRlIiwiZXJyIiwiZGF0YSIsInB1dFVzZXIiLCJ1c2VySWQiLCJxdWVyeSIsInVzZXIiLCJmaW5kQnlJZEFuZFVwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/controller.js\n");

/***/ }),

/***/ "(api)/./models/users.js":
/*!*************************!*\
  !*** ./models/users.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: String,\n    avatar: String,\n    email: String,\n    salary: Number,\n    date: String,\n    status: String\n});\nconst Users = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.user || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"user\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBRWpELE1BQU1HLGFBQWEsSUFBSUgsNENBQU1BLENBQUM7SUFDMUJJLE1BQU1DO0lBQ05DLFFBQVFEO0lBQ1JFLE9BQU9GO0lBQ1BHLFFBQVFDO0lBQ1JDLE1BQU1MO0lBQ05NLFFBQVFOO0FBQ1o7QUFHQSxNQUFNTyxRQUFRWCxpREFBVyxJQUFJQywrQ0FBS0EsQ0FBQyxRQUFRQztBQUMzQyxpRUFBZVMsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZGVscy91c2Vycy5qcz83M2YwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWxzLCBtb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICAgIG5hbWU6IFN0cmluZyxcclxuICAgIGF2YXRhcjogU3RyaW5nLFxyXG4gICAgZW1haWw6IFN0cmluZyxcclxuICAgIHNhbGFyeTogTnVtYmVyLFxyXG4gICAgZGF0ZTogU3RyaW5nLFxyXG4gICAgc3RhdHVzOiBTdHJpbmdcclxufSk7XHJcblxyXG5cclxuY29uc3QgVXNlcnMgPSBtb2RlbHMudXNlciB8fCBtb2RlbCgndXNlcicsIHVzZXJTY2hlbWEpO1xyXG5leHBvcnQgZGVmYXVsdCBVc2VyczsiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWxzIiwibW9kZWwiLCJ1c2VyU2NoZW1hIiwibmFtZSIsIlN0cmluZyIsImF2YXRhciIsImVtYWlsIiwic2FsYXJ5IiwiTnVtYmVyIiwiZGF0ZSIsInN0YXR1cyIsIlVzZXJzIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/users.js\n");

/***/ }),

/***/ "(api)/./pages/api/Inputs/index.js":
/*!***********************************!*\
  !*** ./pages/api/Inputs/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_connectMongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/connectMongo */ \"(api)/./lib/connectMongo.js\");\n/* harmony import */ var _lib_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/controller */ \"(api)/./lib/controller.js\");\n// ingredientes\n\n\nasync function handler(req, res) {\n    (0,_lib_connectMongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const { method  } = req;\n    switch(method){\n        case \"GET\":\n            (0,_lib_controller__WEBPACK_IMPORTED_MODULE_1__.getUser)(req, res);\n            break;\n        case \"POST\":\n            (0,_lib_controller__WEBPACK_IMPORTED_MODULE_1__.postUser)(req, res);\n            break;\n        case \"PUT\":\n            (0,_lib_controller__WEBPACK_IMPORTED_MODULE_1__.putUser)(req, res);\n            break;\n        case \"DELETE\":\n            res.status(200).json({\n                name: `Method: ${method}`\n            });\n            break;\n        default:\n            res.setHeader(\"Allow\", [\n                \"GET\",\n                \"POST\",\n                \"PUT\",\n                \"DELETE\"\n            ]);\n            res.status(405).end(`Method ${method} Not Allowed`);\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvSW5wdXRzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGVBQWU7QUFFc0M7QUFDZ0I7QUFFdEQsZUFBZUksUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0NOLDZEQUFZQTtJQUVaLE1BQU0sRUFBRU8sT0FBTSxFQUFFLEdBQUdGO0lBRW5CLE9BQVFFO1FBQ1AsS0FBSztZQUNKTix3REFBT0EsQ0FBQ0ksS0FBS0M7WUFDYixLQUFNO1FBQ1AsS0FBSztZQUNKSix5REFBUUEsQ0FBQ0csS0FBS0M7WUFDZCxLQUFNO1FBQ1AsS0FBSztZQUNKSCx3REFBT0EsQ0FBQ0UsS0FBS0M7WUFDYixLQUFNO1FBQ1AsS0FBSztZQUNKQSxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxNQUFNLENBQUMsUUFBUSxFQUFFSCxPQUFPLENBQUM7WUFBQztZQUNqRCxLQUFNO1FBQ1A7WUFDQ0QsSUFBSUssU0FBUyxDQUFDLFNBQVM7Z0JBQUM7Z0JBQU87Z0JBQVE7Z0JBQU87YUFBUztZQUN2REwsSUFBSUUsTUFBTSxDQUFDLEtBQUtJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRUwsT0FBTyxZQUFZLENBQUM7WUFDbEQsS0FBTTtJQUNSO0FBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9JbnB1dHMvaW5kZXguanM/MTViMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmdyZWRpZW50ZXNcclxuXHJcbmltcG9ydCBjb25uZWN0TW9uZ28gZnJvbSBcIi4uLy4uLy4uL2xpYi9jb25uZWN0TW9uZ29cIjtcclxuaW1wb3J0IHsgZ2V0VXNlciwgcG9zdFVzZXIsIHB1dFVzZXIgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2NvbnRyb2xsZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuXHRjb25uZWN0TW9uZ28oKTtcclxuXHJcblx0Y29uc3QgeyBtZXRob2QgfSA9IHJlcTtcclxuXHJcblx0c3dpdGNoIChtZXRob2QpIHtcclxuXHRcdGNhc2UgXCJHRVRcIjpcclxuXHRcdFx0Z2V0VXNlcihyZXEsIHJlcyk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIlBPU1RcIjpcclxuXHRcdFx0cG9zdFVzZXIocmVxLCByZXMpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJQVVRcIjpcclxuXHRcdFx0cHV0VXNlcihyZXEsIHJlcyk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIkRFTEVURVwiOlxyXG5cdFx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7IG5hbWU6IGBNZXRob2Q6ICR7bWV0aG9kfWAgfSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmVzLnNldEhlYWRlcihcIkFsbG93XCIsIFtcIkdFVFwiLCBcIlBPU1RcIiwgXCJQVVRcIiwgXCJERUxFVEVcIl0pO1xyXG5cdFx0XHRyZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHttZXRob2R9IE5vdCBBbGxvd2VkYCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsiY29ubmVjdE1vbmdvIiwiZ2V0VXNlciIsInBvc3RVc2VyIiwicHV0VXNlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibmFtZSIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/Inputs/index.js\n");

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