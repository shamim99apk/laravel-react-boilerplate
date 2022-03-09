/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "laravel-mix":
/*!******************************!*\
  !*** external "laravel-mix" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("laravel-mix");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-node-externals");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./resources/js/ssr.js ***!
  \*****************************/
var path = __webpack_require__(/*! path */ "path");

var mix = __webpack_require__(/*! laravel-mix */ "laravel-mix");

var nodeExternals = __webpack_require__(/*! webpack-node-externals */ "webpack-node-externals");

mix.options({
  manifest: false
}).js("resources/js/ssr.js", "public/js").react().alias({
  "@": path.resolve("resources/js")
}).webpackConfig({
  target: "node",
  externals: [nodeExternals()]
});
})();

/******/ })()
;