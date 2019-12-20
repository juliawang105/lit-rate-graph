/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/chart_area.js":
/*!***************************!*\
  !*** ./src/chart_area.js ***!
  \***************************/
/*! exports provided: margin, height, width, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"margin\", function() { return margin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"height\", function() { return height; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"width\", function() { return width; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"g\", function() { return g; });\nconst margin = { left: 80, right: 20, top: 50, bottom: 100 };\nconst height = 800 - margin.top - margin.bottom;\nconst width = 900 - margin.left - margin.right;\n\nconst g = d3\n         .select(\"#chart-area\")\n         .append(\"svg\")\n         .attr(\"width\", width + margin.left + margin.right)\n         .attr(\"height\", height + margin.top + margin.bottom)\n         .append(\"g\")\n         .attr(\n           \"transform\",\n           \"translate(\" + margin.left + \", \" + margin.top + \")\"\n         );\n\n//# sourceURL=webpack:///./src/chart_area.js?");

/***/ }),

/***/ "./src/graph.js":
/*!**********************!*\
  !*** ./src/graph.js ***!
  \**********************/
/*! exports provided: line, xLabel, yLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"line\", function() { return line; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"xLabel\", function() { return xLabel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yLabel\", function() { return yLabel; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart_area.js */ \"./src/chart_area.js\");\n/* harmony import */ var _scales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scales */ \"./src/scales.js\");\n\n\n// //Diagonal Line \nconst line = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"]\n  .append(\"line\")\n  .attr(\"x1\", 760)\n  .attr(\"y1\", 0)\n  .attr(\"x2\", 0)\n  .attr(\"y2\", 650)\n  .attr(\"stroke\", \"silver\")\n  .attr(\"stroke-width\", \"1\");\n\n//   //X Label\nconst xLabel = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"]\n  .append(\"text\")\n  .attr(\"y\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"] + 50)\n  .attr(\"x\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"width\"] / 2)\n  .attr(\"font-size\", \"20px\")\n  .attr(\"text-anchor\", \"middle\")\n  .text(\"Youth Literacy Rate\");\n\n// //Y Label\nconst yLabel = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"]\n  .append(\"text\")\n  .attr(\"y\", -40)\n  .attr(\"x\", -170)\n  .attr(\"font-size\", \"20px\")\n  .attr(\"text-anchor\", \"middle\")\n  .attr(\"transform\", \"rotate(-90)\")\n  .text(\"Elderly Literacy Rate\");\n\nconst xAxis = d3\n    .axisBottom(_scales__WEBPACK_IMPORTED_MODULE_1__[\"xScale\"])\n    .ticks(10)\n    .tickFormat(function(d) {\n    return +d;\n    });\n\nlet yAxis = d3\n    .axisLeft(_scales__WEBPACK_IMPORTED_MODULE_1__[\"yScale\"])\n    .ticks(10)\n    .tickFormat(function(d) {\n    return +d;\n    });\n\n_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"g\")\n  .attr(\"class\", \"x axis\")\n  .attr(\"transform\", \"translate(0,\" + _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"] + \")\")\n  .call(xAxis);\n\n_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"g\")\n  .attr(\"class\", \"y axis\")\n  .call(yAxis);\n\n\n\n//# sourceURL=webpack:///./src/graph.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _literacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./literacy.js */ \"./src/literacy.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    console.log(\"webpack is working\");\n  Object(_literacy_js__WEBPACK_IMPORTED_MODULE_0__[\"Literacy\"])();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/literacy.js":
/*!*************************!*\
  !*** ./src/literacy.js ***!
  \*************************/
/*! exports provided: Literacy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Literacy\", function() { return Literacy; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart_area.js */ \"./src/chart_area.js\");\n/* harmony import */ var _graph_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graph.js */ \"./src/graph.js\");\n/* harmony import */ var _scales_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scales.js */ \"./src/scales.js\");\n\n\n\n\nconst Literacy = () => {\n    // g\n    // line;\n    // xLabel;\n    // yLabel;\n    // xScale;\n    // yScale\n}\n\n//# sourceURL=webpack:///./src/literacy.js?");

/***/ }),

/***/ "./src/scales.js":
/*!***********************!*\
  !*** ./src/scales.js ***!
  \***********************/
/*! exports provided: xScale, yScale, area */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"xScale\", function() { return xScale; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yScale\", function() { return yScale; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"area\", function() { return area; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart_area.js */ \"./src/chart_area.js\");\n\n\nconst xScale = d3\n  .scaleLinear()\n  .range([0, _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"width\"] - 40])\n  .domain([1, 100]);\n\nconst yScale = d3\n    .scaleLinear()\n    //   .base(10)\n    .range([_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"], 0])\n    .domain([0, 100]);\n\nconst area = d3\n    .scaleLinear()\n    .range([2 * Math.PI, 20 * Math.PI])\n    .domain([1, 1400000000]);\n\n\n\n//# sourceURL=webpack:///./src/scales.js?");

/***/ })

/******/ });