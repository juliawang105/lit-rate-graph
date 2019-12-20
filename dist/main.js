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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _literacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./literacy.js */ \"./src/literacy.js\");\n\n\nconsole.log(\"webpack is working\");\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  Object(_literacy_js__WEBPACK_IMPORTED_MODULE_0__[\"Literacy\"])();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/literacy.js":
/*!*************************!*\
  !*** ./src/literacy.js ***!
  \*************************/
/*! exports provided: Literacy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Literacy\", function() { return Literacy; });\nconst Literacy = () => {\n  let button = document.getElementById(\"play-button\");\n\n  function step() {\n    // At the end of our data, loop back\n    time = time < 15 ? time + 1 : 0;\n    update(finalData[time]);\n  }\n\n  // let interval = setInterval(step, 100);\n  let interval;\n  button.addEventListener(\"click\", function(event) {\n    // console.log(button.innerHTML === 'Play')\n\n    if (button.innerHTML === \"Play\") {\n      interval = setInterval(step, 100);\n      console.log(\"hit 1\");\n      button.innerHTML = \"Pause\";\n    } else if (button.innerHTML === \"Pause\") {\n      clearInterval(interval);\n      console.log(\"hit 2\");\n      button.innerHTML = \"Play\";\n    }\n  });\n\n  let margin = { left: 80, right: 20, top: 50, bottom: 100 };\n  let height = 800 - margin.top - margin.bottom,\n    width = 900 - margin.left - margin.right;\n\n  let time = 0;\n\n  let finalData;\n\n  let g = d3\n    .select(\"#chart-area\")\n    .append(\"svg\")\n    .attr(\"width\", width + margin.left + margin.right)\n    .attr(\"height\", height + margin.top + margin.bottom)\n    .append(\"g\")\n    .attr(\"transform\", \"translate(\" + margin.left + \", \" + margin.top + \")\");\n\n  let tip = d3\n    .tip()\n    .attr(\"class\", \"d3-tip\")\n    .html(function(d) {\n      let text = d.name;\n      // text += \" \" + d.region_name;\n      text += \" \" + d.Elderly;\n      text += \" \" + d.Youth;\n      return text;\n    });\n\n  g.call(tip);\n\n  let x = d3\n    .scaleLinear()\n    .range([0, width - 40])\n    .domain([1, 100]);\n\n  let y = d3\n    .scaleLinear()\n    //   .base(10)\n    .range([height, 0])\n    .domain([0, 100]);\n\n  let line = g\n    .append(\"line\")\n    .attr(\"x1\", 760)\n    .attr(\"y1\", 0)\n    .attr(\"x2\", 0)\n    .attr(\"y2\", 650)\n    .attr(\"stroke\", \"silver\")\n    .attr(\"stroke-width\", \"1\");\n\n  let area = d3\n    .scaleLinear()\n    .range([2 * Math.PI, 20 * Math.PI])\n    .domain([1, 1400000000]);\n\n  let xLabel = g\n    .append(\"text\")\n    .attr(\"y\", height + 50)\n    .attr(\"x\", width / 2)\n    .attr(\"font-size\", \"20px\")\n    .attr(\"text-anchor\", \"middle\")\n    .text(\"Youth Literacy Rate\");\n\n  //Y Label\n  let yLabel = g\n    .append(\"text\")\n    .attr(\"y\", -40)\n    .attr(\"x\", -170)\n    .attr(\"font-size\", \"20px\")\n    .attr(\"text-anchor\", \"middle\")\n    .attr(\"transform\", \"rotate(-90)\")\n    .text(\"Elderly Literacy Rate\");\n\n  let xAxis = d3\n    .axisBottom(x)\n    .ticks(10)\n    .tickFormat(function(d) {\n      return +d;\n    });\n\n  g.append(\"g\")\n    .attr(\"class\", \"x axis\")\n    .attr(\"transform\", \"translate(0,\" + height + \")\")\n    .call(xAxis);\n\n  let timeLabel = g\n    .append(\"text\")\n    .attr(\"y\", height - 10)\n    .attr(\"x\", width - 40)\n    .attr(\"font-size\", \"40px\")\n    .attr(\"opacity\", \"0.4\")\n    .attr(\"text-anchor\", \"middle\")\n    .text(\"2003\");\n\n  //Y-Axis\n  let yAxis = d3\n    .axisLeft(y)\n    .ticks(10)\n    .tickFormat(function(d) {\n      return +d;\n    });\n\n  g.append(\"g\")\n    .attr(\"class\", \"y axis\")\n    .call(yAxis);\n\n  let regions = [\"Europe\", \"Asia\", \"Americas\", \"Africa\", \"Oceania\"];\n\n  let regionColor = d3.scaleOrdinal(d3.schemeDark2);\n\n  let legend = g\n    .append(\"g\")\n    .attr(\n      \"transform\",\n      \"translate(\" + (width - 10) + \",\" + (height - 200) + \")\"\n    );\n\n  regions.forEach(function(region, i) {\n    let legendRow = legend\n      .append(\"g\")\n      .attr(\"transform\", \"translate(0, \" + i * 20 + \")\");\n\n    legendRow\n      .append(\"rect\")\n      .attr(\"width\", 10)\n      .attr(\"height\", 10)\n      .attr(\"fill\", regionColor(region));\n\n    legendRow\n      .append(\"text\")\n      .attr(\"x\", -10)\n      .attr(\"y\", 10)\n      .attr(\"text-anchor\", \"end\")\n      .style(\"text-transform\", \"capitalize\")\n      .text(region);\n  });\n  d3.csv(\"data/literacy.csv\").then(data => {\n    // console.log(data)\n\n    let sortedData = [\n      { year: 2000, countries: [] },\n      { year: 2001, countries: [] },\n      { year: 2002, countries: [] },\n      { year: 2003, countries: [] },\n      { year: 2004, countries: [] },\n      { year: 2005, countries: [] },\n      { year: 2006, countries: [] },\n      { year: 2007, countries: [] },\n      { year: 2008, countries: [] },\n      { year: 2009, countries: [] },\n      { year: 2010, countries: [] },\n      { year: 2011, countries: [] },\n      { year: 2012, countries: [] },\n      { year: 2013, countries: [] },\n      { year: 2014, countries: [] },\n      { year: 2015, countries: [] }\n    ];\n\n    for (let i = 0; i < data.length; i++) {\n      let pojo = data[i];\n\n      for (let j = 0; j < sortedData.length; j++) {\n        if (parseInt(pojo.Year) === sortedData[j].year) {\n          sortedData[j].countries.push(pojo);\n        }\n      }\n    }\n\n    finalData = sortedData.map(function(year) {\n      return year[\"countries\"]\n        .filter(function(country) {\n          let dataExists = country.Elderly !== \"NA\" && country.Youth !== \"NA\";\n          return dataExists;\n        })\n        .map(function(country) {\n          country.Elderly = +country.Elderly;\n          country.Youth = +country.Youth;\n          country.Pop = +country.Pop;\n          return country;\n        });\n    });\n\n    // console.log(finalData[])\n    update(finalData[0]);\n\n    // d3.interval(function() {\n    //    // At the end of our data, loop back\n    //    time = time < 15 ? time + 1 : 0;\n    //    update(finalData[time]);\n    //  }, 200);\n    // console.log(finalData);\n  });\n\n  function update(data) {\n    let t = d3.transition().duration(100);\n\n    let circles = g.selectAll(\"circle\").data(data, function(d) {\n      return d.Entity;\n    });\n\n    circles.exit().remove();\n\n    circles\n      .enter()\n      .append(\"circle\")\n      .attr(\"fill\", function(d) {\n        return regionColor(d.region);\n      })\n      .merge(circles)\n      .attr(\"cy\", function(d) {\n        return y(d.Elderly);\n      })\n      .attr(\"cx\", function(d) {\n        return x(d.Youth);\n      })\n      .attr(\"r\", function(d) {\n        return area(d.Pop);\n      })\n      .on(\"mouseover\", tip.show)\n      .on(\"mouseout\", tip.hide);\n\n    timeLabel.text(+(time + 2000));\n  }\n};\n\n\n//# sourceURL=webpack:///./src/literacy.js?");

/***/ })

/******/ });