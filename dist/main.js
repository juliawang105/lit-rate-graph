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

/***/ "./src/button.js":
/*!***********************!*\
  !*** ./src/button.js ***!
  \***********************/
/*! exports provided: button, resetButton, selectRegion, selectColor, slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"button\", function() { return button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetButton\", function() { return resetButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectRegion\", function() { return selectRegion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectColor\", function() { return selectColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slider\", function() { return slider; });\n/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update */ \"./src/update.js\");\n/* harmony import */ var _literacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./literacy */ \"./src/literacy.js\");\n\n\n\nlet time = 0;\nlet interval;\n\n//Play and Pause Buttons\nconst button = () => {\n    let button = document.getElementById(\"play-button\");\n    \n    function step() {\n        time = time < 15 ? time + 1 : 0;\n        output.innerHTML = time + 2000;\n        rangeslider.value = time + 2000;\n        Object(_update__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(_literacy__WEBPACK_IMPORTED_MODULE_1__[\"finalData\"][time], time);\n    };\n\n    // let interval;\n    button.addEventListener(\"click\", function(event) {\n\n    if (button.innerHTML === \"Play\") {\n        interval = setInterval(step, 200);\n        button.innerHTML = \"Pause\";\n    } else if (button.innerHTML === \"Pause\") {\n        clearInterval(interval);\n        button.innerHTML = \"Play\";\n    }\n    });  \n};\n\n//Reset Button\nlet reset = document.getElementById(\"reset-button\");\nlet play = document.getElementById(\"play-button\");\n\nconst resetButton = () => {\n    reset.addEventListener(\"click\", function(event) {\n    time = 0;\n    clearInterval(interval);\n    Object(_update__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(_literacy__WEBPACK_IMPORTED_MODULE_1__[\"finalData\"][0], time);\n    play.innerHTML = \"Play\";\n    output.innerHTML = 2000;\n    rangeslider.value = 2000;\n    });\n};\n\nlet select = document.getElementById(\"continent-select\");\n\n//Display by Regions \nconst selectRegion = () => {\n    select.addEventListener(\"change\", function() {\n    Object(_update__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(_literacy__WEBPACK_IMPORTED_MODULE_1__[\"finalData\"][time], time);\n    });\n};\n\nconst selectColor = (arr) => {\n    let region = select.value; \n    arr = arr.filter( d => {\n         if(region === 'all'){\n             return true; \n         } else {\n             return d.region === region;\n         }\n     });   \n     return arr;\n};\n\nlet year;\nlet rangeslider = document.getElementById(\"sliderRange\");\nlet output = document.getElementById(\"demo\");\noutput.innerHTML = rangeslider.value;\n\nconst slider = arr => {\n    rangeslider.addEventListener('input', function(event){\n        year = event.target.value - 2000;\n        output.innerHTML = event.target.value;\n        Object(_update__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(_literacy__WEBPACK_IMPORTED_MODULE_1__[\"finalData\"][year], year)\n    });\n};\n\n//# sourceURL=webpack:///./src/button.js?");

/***/ }),

/***/ "./src/chart_area.js":
/*!***************************!*\
  !*** ./src/chart_area.js ***!
  \***************************/
/*! exports provided: margin, height, width, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"margin\", function() { return margin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"height\", function() { return height; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"width\", function() { return width; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"g\", function() { return g; });\nconst margin = { left: 80, right: 20, top: 50, bottom: 100 };\nconst height = 700 - margin.top - margin.bottom;\nconst width = 900 - margin.left - margin.right;\n\nconst g = d3\n         .select(\"#chart-area\")\n         .append(\"svg\")\n         .attr(\"width\", width + margin.left + margin.right)\n         .attr(\"height\", height + margin.top + margin.bottom)\n         .append(\"g\")\n         .attr(\n           \"transform\",\n           \"translate(\" + margin.left + \", \" + margin.top + \")\"\n         );\n\n//# sourceURL=webpack:///./src/chart_area.js?");

/***/ }),

/***/ "./src/graph.js":
/*!**********************!*\
  !*** ./src/graph.js ***!
  \**********************/
/*! exports provided: line, xLabel, yLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"line\", function() { return line; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"xLabel\", function() { return xLabel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yLabel\", function() { return yLabel; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart_area.js */ \"./src/chart_area.js\");\n/* harmony import */ var _scales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scales */ \"./src/scales.js\");\n\n\n\n//Diagonal Line \nconst line = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"]\n  .append(\"line\")\n  .attr(\"x1\", 685)\n  .attr(\"y1\", 0)\n  .attr(\"x2\", 0)\n  .attr(\"y2\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"])\n  .attr(\"stroke\", \"silver\")\n  .attr(\"stroke-width\", \"1\");\n\n//X Label\nconst xLabel = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"]\n  .append(\"text\")\n  .attr(\"y\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"] + 50)\n  .attr(\"x\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"width\"] / 2)\n  .attr(\"font-size\", \"20px\")\n  .attr(\"text-anchor\", \"middle\")\n  .text(\"Youth Literacy Rate, Population 15-24 years (%)\")\n  .attr(\"font-family\", \"Karla\")\n  .style(\"fill\", \"#545454\");\n\n//Y Label\nconst yLabel = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"]\n  .append(\"text\")\n  .attr(\"y\", -40)\n  .attr(\"x\", -261)\n  .attr(\"font-size\", \"20px\")\n  .attr(\"text-anchor\", \"middle\")\n  .attr(\"transform\", \"rotate(-90)\")\n  .text(\"Elderly Literacy Rate, Population 65+ years (%)\")\n  .attr(\"font-family\", \"Karla\")\n  .style(\"fill\", \"#545454\");\n\n//X Axis\nconst xAxis = d3\n  .axisBottom(_scales__WEBPACK_IMPORTED_MODULE_1__[\"xScale\"])\n  .ticks(10)\n  .tickFormat(function(d) {\n    return +d;\n  });\n  \n_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"g\")\n  .attr(\"font-family\", \"Karla\")\n  .style(\"stroke\", \"#545454\")\n  .attr(\"class\", \"x axis\")\n  .attr(\"transform\", \"translate(0,\" + _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"] + \")\")\n  .call(xAxis);\n\n\n//Y Axis\nconst yAxis = d3\n    .axisLeft(_scales__WEBPACK_IMPORTED_MODULE_1__[\"yScale\"])\n    .ticks(10)\n    .tickFormat(function(d) {\n    return +d;\n    });\n\n_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"g\")\n  .attr(\"font-family\", \"Karla\")\n  .style(\"stroke\", \"#545454\")\n  .attr(\"class\", \"y axis\")\n  .call(yAxis);\n\n\n\n//# sourceURL=webpack:///./src/graph.js?");

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

/***/ "./src/legend.js":
/*!***********************!*\
  !*** ./src/legend.js ***!
  \***********************/
/*! exports provided: regions, regionColor, regionLegend, timeLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"regions\", function() { return regions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"regionColor\", function() { return regionColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"regionLegend\", function() { return regionLegend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timeLabel\", function() { return timeLabel; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart_area.js */ \"./src/chart_area.js\");\n\n\nconst regions = [\"Europe\", \"Asia\", \"Americas\", \"Africa\", \"Oceania\"];\n\nconst regionColor = d3.scaleOrdinal(d3.schemeTableau10);\n\nlet legend = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"]\n  .append(\"g\")\n  .attr(\n  \"transform\",\n  \"translate(\" + 810 + \",\" + (425) + \")\"\n  );\n\nconst regionLegend = regions.forEach(function(region, i) {\n  let legendRow = legend\n    .append(\"g\")\n    .attr(\"transform\", \"translate(0, \" + i * 20 + \")\");\n\n  legendRow\n    .append(\"rect\")\n    .attr(\"width\", 10)\n    .attr(\"height\", 10)\n    .attr(\"fill\", regionColor(region))\n    .attr(\"opacity\", \"70%\")\n\n  legendRow\n    .append(\"text\")\n    .attr(\"x\", -10)\n    .attr(\"y\", 10)\n    .attr(\"text-anchor\", \"end\")\n    .style(\"text-transform\", \"capitalize\")\n    .attr(\"font-family\", \"Karla\")\n    .text(region)\n    .style(\"fill\", \"#545454\")\n    .attr(\"opacity\", \"0.8\");\n\n});\n\nconst timeLabel = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"]\n  .append(\"text\")\n  .attr(\"y\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"])\n  .attr(\"x\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"width\"] - 20)\n  .attr(\"font-size\", \"35px\")\n  .attr(\"opacity\", \"0.6\")\n  .attr(\"text-anchor\", \"middle\")\n  .attr(\"font-family\", \"Karla\")\n  .text(\"2000\")\n  .style(\"fill\", \"#545454\");\n\n//# sourceURL=webpack:///./src/legend.js?");

/***/ }),

/***/ "./src/literacy.js":
/*!*************************!*\
  !*** ./src/literacy.js ***!
  \*************************/
/*! exports provided: finalData, Literacy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"finalData\", function() { return finalData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Literacy\", function() { return Literacy; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart_area.js */ \"./src/chart_area.js\");\n/* harmony import */ var _graph_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graph.js */ \"./src/graph.js\");\n/* harmony import */ var _scales_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scales.js */ \"./src/scales.js\");\n/* harmony import */ var _legend_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legend.js */ \"./src/legend.js\");\n/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update */ \"./src/update.js\");\n/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button.js */ \"./src/button.js\");\n\n\n\n\n\n\n\nlet finalData;\n\nconst Literacy = () => {\n    Object(_button_js__WEBPACK_IMPORTED_MODULE_5__[\"button\"])();\n    Object(_button_js__WEBPACK_IMPORTED_MODULE_5__[\"slider\"])();\n    Object(_button_js__WEBPACK_IMPORTED_MODULE_5__[\"selectRegion\"])();\n    Object(_button_js__WEBPACK_IMPORTED_MODULE_5__[\"resetButton\"])();\n  \n  //Parsing Data \n   d3.csv(\"data/literacy.csv\").then(data => {\n     let sortedData = [\n       { year: 2000, countries: [] },\n       { year: 2001, countries: [] },\n       { year: 2002, countries: [] },\n       { year: 2003, countries: [] },\n       { year: 2004, countries: [] },\n       { year: 2005, countries: [] },\n       { year: 2006, countries: [] },\n       { year: 2007, countries: [] },\n       { year: 2008, countries: [] },\n       { year: 2009, countries: [] },\n       { year: 2010, countries: [] },\n       { year: 2011, countries: [] },\n       { year: 2012, countries: [] },\n       { year: 2013, countries: [] },\n       { year: 2014, countries: [] },\n       { year: 2015, countries: [] }\n     ];\n\n     for (let i = 0; i < data.length; i++) {\n       let pojo = data[i];\n\n       for (let j = 0; j < sortedData.length; j++) {\n         if (parseInt(pojo.Year) === sortedData[j].year) {\n           sortedData[j].countries.push(pojo);\n         }\n       }\n     }\n\n     finalData = sortedData.map(function(year) {\n       return year[\"countries\"]\n         .filter(function(country) {\n           let dataExists = (country.Elderly !== \"NA\" && country.Youth !== \"NA\") && country.Pop;\n           return dataExists;\n         })\n         .map(function(country) {\n           country.Elderly = +country.Elderly;\n           country.Youth = +country.Youth;\n           country.Pop = +country.Pop;\n           return country;\n         });\n     });\n\n     //Updating data display \n     Object(_update__WEBPACK_IMPORTED_MODULE_4__[\"update\"])(finalData[0], 0)\n   });\n\n\n}\n\n\n\n//# sourceURL=webpack:///./src/literacy.js?");

/***/ }),

/***/ "./src/scales.js":
/*!***********************!*\
  !*** ./src/scales.js ***!
  \***********************/
/*! exports provided: xScale, yScale, area */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"xScale\", function() { return xScale; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yScale\", function() { return yScale; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"area\", function() { return area; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart_area.js */ \"./src/chart_area.js\");\n\n\nconst xScale = d3\n  .scaleLinear()\n  .range([0, _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"width\"] - 110])\n  .domain([1, 100]);\n\nconst yScale = d3\n    .scaleLinear()\n    //   .base(10)\n    .range([_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"], 0])\n    .domain([0, 100]);\n\nconst area = d3\n    .scaleLinear()\n    .range([3 * Math.PI, 30 * Math.PI])\n    .domain([1, 1400000000]);\n\n\n\n//# sourceURL=webpack:///./src/scales.js?");

/***/ }),

/***/ "./src/tooltip.js":
/*!************************!*\
  !*** ./src/tooltip.js ***!
  \************************/
/*! exports provided: tip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tip\", function() { return tip; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart_area.js */ \"./src/chart_area.js\");\n\n\nconst tip = d3\n   .tip()\n     .attr(\"class\", \"d3-tip\")\n     .html(function(d) {\n       let text =\n         \"<strong>Country:</strong> <span >\" +\n         d.name +\n         \"</span><br>\";\n       text +=\n         \"<strong>Region:</strong> <span>\" +\n         d.region +\n         \"</span><br>\";\n       text +=\n         \"<strong>Eldery Literacy Rate:</strong> <span>\" +\n         d3.format(\".0%\")(d.Elderly/100) +\n         \"</span><br>\";\n       text +=\n         \"<strong>Youth Literacy Rate:</strong> <span>\" +\n         d3.format(\".0%\")(d.Youth/100) +\n         \"</span><br>\";\n       text +=\n         \"<strong>Population:</strong> <span>\" +\n         d3.format(\",.0f\")(d.Pop) +\n         \"</span><br>\";\n       return text;\n     });\n\n _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].call(tip);\n\n//# sourceURL=webpack:///./src/tooltip.js?");

/***/ }),

/***/ "./src/update.js":
/*!***********************!*\
  !*** ./src/update.js ***!
  \***********************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony import */ var _legend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legend.js */ \"./src/legend.js\");\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart_area.js */ \"./src/chart_area.js\");\n/* harmony import */ var _scales_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scales.js */ \"./src/scales.js\");\n/* harmony import */ var _tooltip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.js */ \"./src/tooltip.js\");\n/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button.js */ \"./src/button.js\");\n\n\n\n\n\n\nconst update = (arr, time) => {     \n    let t = d3.transition().duration(100);\n\n    arr = Object(_button_js__WEBPACK_IMPORTED_MODULE_4__[\"selectColor\"])(arr);\n\n    let circles = _chart_area_js__WEBPACK_IMPORTED_MODULE_1__[\"g\"].selectAll(\"circle\").data(arr, function(d) {\n    return d.name;\n    });\n\n    circles.exit().remove();\n\n    circles\n      .enter()\n      .append(\"circle\")\n      .attr(\"fill\", function(d) {\n        return Object(_legend_js__WEBPACK_IMPORTED_MODULE_0__[\"regionColor\"])(d.region);\n      })\n      .merge(circles)\n      .attr(\"cy\", function(d) {\n        return Object(_scales_js__WEBPACK_IMPORTED_MODULE_2__[\"yScale\"])(d.Elderly);\n      })\n      .attr(\"cx\", function(d) {\n        return Object(_scales_js__WEBPACK_IMPORTED_MODULE_2__[\"xScale\"])(d.Youth);\n      })\n      .attr(\"r\", function(d) {\n        return Object(_scales_js__WEBPACK_IMPORTED_MODULE_2__[\"area\"])(d.Pop);\n      })\n      .attr(\"opacity\", \"70%\")\n      .style(\"cursor\", \"pointer\")\n      .on(\"mouseover\", _tooltip_js__WEBPACK_IMPORTED_MODULE_3__[\"tip\"].show)\n      .on(\"mouseout\", _tooltip_js__WEBPACK_IMPORTED_MODULE_3__[\"tip\"].hide);\n      \n    _legend_js__WEBPACK_IMPORTED_MODULE_0__[\"timeLabel\"].text(+(time + 2000));\n    \n}\n\n//# sourceURL=webpack:///./src/update.js?");

/***/ })

/******/ });