"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/login/login.js":
/*!********************************!*\
  !*** ./src/app/login/login.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst { createClient } = __webpack_require__(/*! @supabase/supabase-js */ \"(app-pages-browser)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\nconst supabaseURL = \"https://fricdlpilwnfjdmtvvle.supabase.co\";\nconst supabaseKEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyaWNkbHBpbHduZmpkbXR2dmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MzQ1NzEsImV4cCI6MjAyNDIxMDU3MX0.PWWh9fYaHNEOoEC61p7k4TcdmrYwe-M5EWV5mwBC-Xk\";\nconst supabase = createClient(supabaseURL, supabaseKEY);\nconst logIn = async (user_email, user_password)=>{\n    console.log(\"login called!\");\n    const { data: userData, error: userError } = await supabase.from(\"User Profile V1a\").select(\"email, password\").eq(\"email\", user_email);\n    // console.log(userData);\n    if (userError) {\n        return {\n            status: \"Error\",\n            msg: \"\".concat(userError.message)\n        };\n    }\n    if (userData.length == 0) {\n        return {\n            status: \"Error\",\n            msg: \"User not found\"\n        };\n    }\n    let password = userData.at(0).password;\n    if (password != user_password) {\n        return {\n            status: \"Error\",\n            msg: \"Incorrect password\"\n        };\n    }\n    return {\n        status: \"Success\",\n        msg: \"Logged in successfully\"\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (logIn);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vbG9naW4uanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sRUFBRUEsWUFBWSxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDO0FBRWpDLE1BQU1DLGNBQWNDLDBDQUF3QjtBQUM1QyxNQUFNRyxjQUFjSCxrTkFBd0I7QUFDNUMsTUFBTUssV0FBV1IsYUFBYUUsYUFBYUk7QUFFM0MsTUFBTUcsUUFBUSxPQUFPQyxZQUFZQztJQUMvQkMsUUFBUUMsR0FBRyxDQUFDO0lBRVosTUFBTSxFQUFFQyxNQUFNQyxRQUFRLEVBQUVDLE9BQU9DLFNBQVMsRUFBRSxHQUFHLE1BQU1ULFNBQ2hEVSxJQUFJLENBQUMsb0JBQ0xDLE1BQU0sQ0FBQyxtQkFDUEMsRUFBRSxDQUFDLFNBQVNWO0lBRWYseUJBQXlCO0lBQ3pCLElBQUlPLFdBQVc7UUFDYixPQUFPO1lBQUVJLFFBQVE7WUFBU0MsS0FBSyxHQUFxQixPQUFsQkwsVUFBVU0sT0FBTztRQUFHO0lBQ3hEO0lBRUEsSUFBSVIsU0FBU1MsTUFBTSxJQUFJLEdBQUc7UUFDeEIsT0FBTztZQUFFSCxRQUFRO1lBQVNDLEtBQUs7UUFBaUI7SUFDbEQ7SUFDQSxJQUFJRyxXQUFXVixTQUFTVyxFQUFFLENBQUMsR0FBR0QsUUFBUTtJQUV0QyxJQUFJQSxZQUFZZCxlQUFlO1FBQzdCLE9BQU87WUFBRVUsUUFBUTtZQUFTQyxLQUFLO1FBQXFCO0lBQ3REO0lBRUEsT0FBTztRQUFFRCxRQUFRO1FBQVdDLEtBQUs7SUFBeUI7QUFDNUQ7QUFDQSwrREFBZWIsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xvZ2luL2xvZ2luLmpzPzUyNWUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjcmVhdGVDbGllbnQgfSA9IHJlcXVpcmUoJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcycpO1xuXG5jb25zdCBzdXBhYmFzZVVSTCA9IHByb2Nlc3MuZW52LlNVUEFCQVNFX1VSTDtcbmNvbnN0IHN1cGFiYXNlS0VZID0gcHJvY2Vzcy5lbnYuU1VQQUJBU0VfS0VZO1xuY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVUkwsIHN1cGFiYXNlS0VZKTtcblxuY29uc3QgbG9nSW4gPSBhc3luYyAodXNlcl9lbWFpbCwgdXNlcl9wYXNzd29yZCkgPT4ge1xuICBjb25zb2xlLmxvZygnbG9naW4gY2FsbGVkIScpO1xuXG4gIGNvbnN0IHsgZGF0YTogdXNlckRhdGEsIGVycm9yOiB1c2VyRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ1VzZXIgUHJvZmlsZSBWMWEnKVxuICAgIC5zZWxlY3QoJ2VtYWlsLCBwYXNzd29yZCcpXG4gICAgLmVxKCdlbWFpbCcsIHVzZXJfZW1haWwpO1xuXG4gIC8vIGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcbiAgaWYgKHVzZXJFcnJvcikge1xuICAgIHJldHVybiB7IHN0YXR1czogJ0Vycm9yJywgbXNnOiBgJHt1c2VyRXJyb3IubWVzc2FnZX1gIH07XG4gIH1cblxuICBpZiAodXNlckRhdGEubGVuZ3RoID09IDApIHtcbiAgICByZXR1cm4geyBzdGF0dXM6ICdFcnJvcicsIG1zZzogJ1VzZXIgbm90IGZvdW5kJyB9O1xuICB9XG4gIGxldCBwYXNzd29yZCA9IHVzZXJEYXRhLmF0KDApLnBhc3N3b3JkO1xuXG4gIGlmIChwYXNzd29yZCAhPSB1c2VyX3Bhc3N3b3JkKSB7XG4gICAgcmV0dXJuIHsgc3RhdHVzOiAnRXJyb3InLCBtc2c6ICdJbmNvcnJlY3QgcGFzc3dvcmQnIH07XG4gIH1cblxuICByZXR1cm4geyBzdGF0dXM6ICdTdWNjZXNzJywgbXNnOiAnTG9nZ2VkIGluIHN1Y2Nlc3NmdWxseScgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBsb2dJbjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJyZXF1aXJlIiwic3VwYWJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiU1VQQUJBU0VfVVJMIiwic3VwYWJhc2VLRVkiLCJTVVBBQkFTRV9LRVkiLCJzdXBhYmFzZSIsImxvZ0luIiwidXNlcl9lbWFpbCIsInVzZXJfcGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInVzZXJEYXRhIiwiZXJyb3IiLCJ1c2VyRXJyb3IiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJzdGF0dXMiLCJtc2ciLCJtZXNzYWdlIiwibGVuZ3RoIiwicGFzc3dvcmQiLCJhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/login.js\n"));

/***/ })

});