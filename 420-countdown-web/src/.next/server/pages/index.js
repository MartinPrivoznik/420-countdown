module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./App.js":
/*!****************!*\
  !*** ./App.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TopBar_TopBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TopBar/TopBar */ "./components/TopBar/TopBar.js");
/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.module.css */ "./App.module.css");
/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Time_TimePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Time/TimePage */ "./components/Time/TimePage.js");
/* harmony import */ var _hooks_useTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useTime */ "./hooks/useTime.js");

var _jsxFileName = "C:\\Development\\OwnWork\\420-countdown\\420-countdown-web\\src\\App.js";






const App = () => {
  const {
    countdownDate,
    settings
  } = Object(_hooks_useTime__WEBPACK_IMPORTED_MODULE_5__["default"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _App_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["App"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TopBar_TopBar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Time_TimePage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        dateLeft: countdownDate
      }, settings.countToPM, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _App_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["rain-container"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./App.module.css":
/*!************************!*\
  !*** ./App.module.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"App": "App_App__3zJke",
	"rain-container": "App_rain-container__aoGEO"
};


/***/ }),

/***/ "./actions/toggleCountToPM.js":
/*!************************************!*\
  !*** ./actions/toggleCountToPM.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/types */ "./store/types.js");


const toggleCountToPM = countToPM => dispatch => {
  dispatch({
    type: _store_types__WEBPACK_IMPORTED_MODULE_0__["SET_COUNT_TO_PM"],
    payload: countToPM
  });
};

/* harmony default export */ __webpack_exports__["default"] = (toggleCountToPM);

/***/ }),

/***/ "./actions/updateCountdownDate.js":
/*!****************************************!*\
  !*** ./actions/updateCountdownDate.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/types */ "./store/types.js");


const updateCountdownDate = countdownDate => dispatch => {
  dispatch({
    type: _store_types__WEBPACK_IMPORTED_MODULE_0__["SET_COUNTDOWNDATE"],
    payload: countdownDate
  });
};

/* harmony default export */ __webpack_exports__["default"] = (updateCountdownDate);

/***/ }),

/***/ "./actions/updateRemainingTime.js":
/*!****************************************!*\
  !*** ./actions/updateRemainingTime.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/types */ "./store/types.js");


const updateRemainingTime = remainingTime => dispatch => {
  dispatch({
    type: _store_types__WEBPACK_IMPORTED_MODULE_0__["SET_REMAININGTIME"],
    payload: remainingTime
  });
};

/* harmony default export */ __webpack_exports__["default"] = (updateRemainingTime);

/***/ }),

/***/ "./components/Time/TimePage.js":
/*!*************************************!*\
  !*** ./components/Time/TimePage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TimePage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimePage.module.css */ "./components/Time/TimePage.module.css");
/* harmony import */ var _TimePage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TimePage_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-countdown */ "react-countdown");
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _renderers_CountdownClock_CountdownClock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../renderers/CountdownClock/CountdownClock */ "./renderers/CountdownClock/CountdownClock.js");
/* harmony import */ var _hooks_useTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useTime */ "./hooks/useTime.js");


var _jsxFileName = "C:\\Development\\OwnWork\\420-countdown\\420-countdown-web\\src\\components\\Time\\TimePage.js";






const TimePage = ({
  dateLeft
}) => {
  const {
    setRemainingTime
  } = Object(_hooks_useTime__WEBPACK_IMPORTED_MODULE_5__["default"])();

  const countdownClockRenderer = ({
    hours,
    minutes,
    seconds
  }) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_renderers_CountdownClock_CountdownClock__WEBPACK_IMPORTED_MODULE_4__["default"], {
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }, undefined);
  };

  const countdownClockOnTick = ({
    hours,
    minutes,
    seconds
  }) => {
    setRemainingTime({
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  };

  if (dateLeft) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_countdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
      date: dateLeft,
      renderer: countdownClockRenderer,
      onTick: countdownClockOnTick
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (TimePage);

/***/ }),

/***/ "./components/Time/TimePage.module.css":
/*!*********************************************!*\
  !*** ./components/Time/TimePage.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ "./components/TopBar/InfoTooltip/InfoTooltip.js":
/*!******************************************************!*\
  !*** ./components/TopBar/InfoTooltip/InfoTooltip.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InfoTooltip_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InfoTooltip.module.css */ "./components/TopBar/InfoTooltip/InfoTooltip.module.css");
/* harmony import */ var _InfoTooltip_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_InfoTooltip_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tooltip */ "react-tooltip");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Development\\OwnWork\\420-countdown\\420-countdown-web\\src\\components\\TopBar\\InfoTooltip\\InfoTooltip.js";





const TopBar = () => {
  const {
    0: showTooltip,
    1: setShowTooltip
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setShowTooltip(true);
  }, []);

  if (showTooltip) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _InfoTooltip_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["tooltip"],
      "data-tip": "This page is still in BETA version. <br/> \r Feel free to collaborate via github and make this page grow. <br/>\r The goal is to make this the best place to stay at before 4:20 hits the clock.",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tooltip__WEBPACK_IMPORTED_MODULE_3___default.a, {
        place: "bottom",
        multiline: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (TopBar);

/***/ }),

/***/ "./components/TopBar/InfoTooltip/InfoTooltip.module.css":
/*!**************************************************************!*\
  !*** ./components/TopBar/InfoTooltip/InfoTooltip.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tooltip": "InfoTooltip_tooltip__1h0IU"
};


/***/ }),

/***/ "./components/TopBar/TopBar.js":
/*!*************************************!*\
  !*** ./components/TopBar/TopBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TopBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopBar.module.css */ "./components/TopBar/TopBar.module.css");
/* harmony import */ var _TopBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TopBar_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_next_github_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-next-github-btn */ "react-next-github-btn");
/* harmony import */ var react_next_github_btn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_next_github_btn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-switch */ "react-switch");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _InfoTooltip_InfoTooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InfoTooltip/InfoTooltip */ "./components/TopBar/InfoTooltip/InfoTooltip.js");
/* harmony import */ var _hooks_useTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useTime */ "./hooks/useTime.js");

var _jsxFileName = "C:\\Development\\OwnWork\\420-countdown\\420-countdown-web\\src\\components\\TopBar\\TopBar.js";








const TopBar = () => {
  const {
    0: countUntilPM,
    1: setcountUntilPM
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    toggleCountToPMSwitch
  } = Object(_hooks_useTime__WEBPACK_IMPORTED_MODULE_6__["default"])();

  const setCounter = countUntilPMValue => {
    toggleCountToPMSwitch();
    setcountUntilPM(!countUntilPMValue);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _TopBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["top-bar"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "420 Countdown - BETA"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_InfoTooltip_InfoTooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TopBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["top-bar-switch-container"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "AM"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_switch__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: _TopBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["top-bar-switch-container-switch"],
        onChange: () => setCounter(countUntilPM),
        checked: countUntilPM,
        uncheckedIcon: false,
        checkedIcon: false,
        handleDiameter: 22,
        onColor: "#0E3C42",
        offColor: "#404040",
        onHandleColor: "#2AB5C7",
        offHandleColor: "#2AB5C7",
        boxShadow: "0 0 0 6px rgb(42, 181, 199, 0.33)",
        activeBoxShadow: "0 0 0 2px rgb(42, 181, 199, 0.66)",
        height: 23,
        width: 45
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "PM"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TopBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["top-bar-git"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_next_github_btn__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "https://github.com/MartinPrivoznik/420-countdown/tree/main/420-countdown-web",
        "data-color-scheme": "no-preference: dark; light: light; dark: dark;",
        "data-size": "large",
        "aria-label": "Watch MartinPrivoznik/420-countdown on GitHub",
        children: "Contribute to source"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TopBar);

/***/ }),

/***/ "./components/TopBar/TopBar.module.css":
/*!*********************************************!*\
  !*** ./components/TopBar/TopBar.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"top-bar": "TopBar_top-bar__2axBj",
	"top-bar-git": "TopBar_top-bar-git__2ToYx",
	"top-bar-switch-container": "TopBar_top-bar-switch-container__2bN1-",
	"top-bar-switch-container-switch": "TopBar_top-bar-switch-container-switch__2ZKeq",
	"top-bar-info": "TopBar_top-bar-info__3wdvO",
	"top-bar-info-img": "TopBar_top-bar-info-img__2zuv5"
};


/***/ }),

/***/ "./helpers/padStart.js":
/*!*****************************!*\
  !*** ./helpers/padStart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return padStart; });
function padStart(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

/***/ }),

/***/ "./hooks/useTime.js":
/*!**************************!*\
  !*** ./hooks/useTime.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_toggleCountToPM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/toggleCountToPM */ "./actions/toggleCountToPM.js");
/* harmony import */ var _actions_updateCountdownDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/updateCountdownDate */ "./actions/updateCountdownDate.js");
/* harmony import */ var _actions_updateRemainingTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/updateRemainingTime */ "./actions/updateRemainingTime.js");
/* harmony import */ var _models_TimeModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/TimeModel */ "./models/TimeModel.js");






const useTime = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
  const remainingTime = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.remainingTime);
  const countdownDate = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.countdownDate);
  const settings = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.settingsReducer);

  const setRemainingTime = time => {
    dispatch(Object(_actions_updateRemainingTime__WEBPACK_IMPORTED_MODULE_3__["default"])(time));
  };

  const setCountdownDate = countdownDate => {
    dispatch(Object(_actions_updateCountdownDate__WEBPACK_IMPORTED_MODULE_2__["default"])(countdownDate));
  };

  const toggleCountToPMSwitch = () => {
    const newCountToPM = !settings.countToPM;
    dispatch(Object(_actions_updateCountdownDate__WEBPACK_IMPORTED_MODULE_2__["default"])(_models_TimeModel__WEBPACK_IMPORTED_MODULE_4__["default"].getCountdownDateTime(newCountToPM)));
    dispatch(Object(_actions_toggleCountToPM__WEBPACK_IMPORTED_MODULE_1__["default"])(newCountToPM));
  };

  return {
    remainingTime,
    countdownDate,
    settings,
    setRemainingTime,
    setCountdownDate,
    toggleCountToPMSwitch
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useTime);

/***/ }),

/***/ "./models/TimeModel.js":
/*!*****************************!*\
  !*** ./models/TimeModel.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class TimeModel {
  getCountdownDateTime(countUntilPM) {
    var countDownDateTemp;
    const currDate = new Date();
    const today420 = countUntilPM ? new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate(), 16, 20, 0, 0) : new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate(), 4, 20, 0, 0);

    if (currDate < today420) {
      countDownDateTemp = today420;
    } else {
      countDownDateTemp = countUntilPM ? new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate() + 1, 16, 20, 0, 0) : new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate() + 1, 4, 20, 0, 0);
    }

    return countDownDateTemp.getTime();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new TimeModel());

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./App.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Development\\OwnWork\\420-countdown\\420-countdown-web\\src\\pages\\index.js";





const Index = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
  store: _store_store__WEBPACK_IMPORTED_MODULE_3__["store"],
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./reducers/countdownDateReducer.js":
/*!******************************************!*\
  !*** ./reducers/countdownDateReducer.js ***!
  \******************************************/
/*! exports provided: countdownDateReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countdownDateReducer", function() { return countdownDateReducer; });
/* harmony import */ var _models_TimeModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/TimeModel */ "./models/TimeModel.js");
/* harmony import */ var _store_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/types */ "./store/types.js");


const initialState = _models_TimeModel__WEBPACK_IMPORTED_MODULE_0__["default"].getCountdownDateTime();
const countdownDateReducer = (state, action) => {
  state = state || initialState;

  if (action.type === _store_types__WEBPACK_IMPORTED_MODULE_1__["SET_COUNTDOWNDATE"]) {
    return action.payload;
  } else {
    return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (countdownDateReducer);

/***/ }),

/***/ "./reducers/remainingTimeReducer.js":
/*!******************************************!*\
  !*** ./reducers/remainingTimeReducer.js ***!
  \******************************************/
/*! exports provided: remainingTimeReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remainingTimeReducer", function() { return remainingTimeReducer; });
/* harmony import */ var _store_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/types */ "./store/types.js");

const initialState = null;
const remainingTimeReducer = (state, action) => {
  state = state || initialState;

  if (action.type === _store_types__WEBPACK_IMPORTED_MODULE_0__["SET_REMAININGTIME"]) {
    return action.payload;
  } else {
    return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (remainingTimeReducer);

/***/ }),

/***/ "./reducers/settingsReducer.js":
/*!*************************************!*\
  !*** ./reducers/settingsReducer.js ***!
  \*************************************/
/*! exports provided: settingsReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsReducer", function() { return settingsReducer; });
/* harmony import */ var _store_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/types */ "./store/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  countToPM: false
};
const settingsReducer = (state, action) => {
  state = state || initialState;

  if (action.type === _store_types__WEBPACK_IMPORTED_MODULE_0__["SET_COUNT_TO_PM"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      countToPM: action.payload
    });
  } else {
    return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (settingsReducer);

/***/ }),

/***/ "./renderers/CountdownClock/CountdownClock.js":
/*!****************************************************!*\
  !*** ./renderers/CountdownClock/CountdownClock.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_padStart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/padStart */ "./helpers/padStart.js");
/* harmony import */ var _CountdownClock_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CountdownClock.module.css */ "./renderers/CountdownClock/CountdownClock.module.css");
/* harmony import */ var _CountdownClock_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CountdownClock_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Development\\OwnWork\\420-countdown\\420-countdown-web\\src\\renderers\\CountdownClock\\CountdownClock.js";




const CountdownClock = ({
  hours,
  minutes,
  seconds
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _CountdownClock_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["countdown-container"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: Object(_helpers_padStart__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, 2) + ":"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: Object(_helpers_padStart__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2) + ":"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: Object(_helpers_padStart__WEBPACK_IMPORTED_MODULE_2__["default"])(seconds, 2)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CountdownClock);

/***/ }),

/***/ "./renderers/CountdownClock/CountdownClock.module.css":
/*!************************************************************!*\
  !*** ./renderers/CountdownClock/CountdownClock.module.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"countdown-container": "CountdownClock_countdown-container__t7q5u"
};


/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: configureStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureStore", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _promiseMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promiseMiddleware */ "./store/promiseMiddleware.js");
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rootReducer */ "./store/rootReducer.js");



const configureStore = initialState => {
  const middleware = [_promiseMiddleware__WEBPACK_IMPORTED_MODULE_1__["default"]];
  const enhancers = [];
  const composer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware), ...enhancers);
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_rootReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, composer);
};
/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./store/configureStoreInitialState.js":
/*!*********************************************!*\
  !*** ./store/configureStoreInitialState.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const configureStoreInitialState = {};
/* harmony default export */ __webpack_exports__["default"] = (configureStoreInitialState);

/***/ }),

/***/ "./store/promiseMiddleware.js":
/*!************************************!*\
  !*** ./store/promiseMiddleware.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createMiddle(extraArgument) {
  return ({
    dispatch,
    getState
  }) => next => action => {
    if (typeof action === "function") {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const promiseMiddleware = createMiddle();
promiseMiddleware.withExtraArgument = createMiddle;
/* harmony default export */ __webpack_exports__["default"] = (promiseMiddleware);

/***/ }),

/***/ "./store/rootReducer.js":
/*!******************************!*\
  !*** ./store/rootReducer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_countdownDateReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/countdownDateReducer */ "./reducers/countdownDateReducer.js");
/* harmony import */ var _reducers_remainingTimeReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/remainingTimeReducer */ "./reducers/remainingTimeReducer.js");
/* harmony import */ var _reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/settingsReducer */ "./reducers/settingsReducer.js");




const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  remainingTime: _reducers_remainingTimeReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  countdownDate: _reducers_countdownDateReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  settingsReducer: _reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: store, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var _configureStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configureStore */ "./store/configureStore.js");
/* harmony import */ var _configureStoreInitialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configureStoreInitialState */ "./store/configureStoreInitialState.js");


const store = Object(_configureStore__WEBPACK_IMPORTED_MODULE_0__["default"])(_configureStoreInitialState__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./store/types.js":
/*!************************!*\
  !*** ./store/types.js ***!
  \************************/
/*! exports provided: SET_COUNTDOWNDATE, SET_REMAININGTIME, SET_COUNT_TO_PM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COUNTDOWNDATE", function() { return SET_COUNTDOWNDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_REMAININGTIME", function() { return SET_REMAININGTIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COUNT_TO_PM", function() { return SET_COUNT_TO_PM; });
//Time
const SET_COUNTDOWNDATE = "SET_COUNTDOWNDATE";
const SET_REMAININGTIME = "SET_REMAININGTIME"; //Settings

const SET_COUNT_TO_PM = "SET_COUNT_TO_PM";

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-countdown":
/*!**********************************!*\
  !*** external "react-countdown" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countdown");

/***/ }),

/***/ "react-next-github-btn":
/*!****************************************!*\
  !*** external "react-next-github-btn" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-next-github-btn");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-switch":
/*!*******************************!*\
  !*** external "react-switch" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-switch");

/***/ }),

/***/ "react-tooltip":
/*!********************************!*\
  !*** external "react-tooltip" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tooltip");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBwLmpzIiwid2VicGFjazovLy8uL0FwcC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2FjdGlvbnMvdG9nZ2xlQ291bnRUb1BNLmpzIiwid2VicGFjazovLy8uL2FjdGlvbnMvdXBkYXRlQ291bnRkb3duRGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3VwZGF0ZVJlbWFpbmluZ1RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaW1lL1RpbWVQYWdlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGltZS9UaW1lUGFnZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVG9wQmFyL0luZm9Ub29sdGlwL0luZm9Ub29sdGlwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVG9wQmFyL0luZm9Ub29sdGlwL0luZm9Ub29sdGlwLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub3BCYXIvVG9wQmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVG9wQmFyL1RvcEJhci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2hlbHBlcnMvcGFkU3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlVGltZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvVGltZU1vZGVsLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2NvdW50ZG93bkRhdGVSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3JlbWFpbmluZ1RpbWVSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3NldHRpbmdzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZW5kZXJlcnMvQ291bnRkb3duQ2xvY2svQ291bnRkb3duQ2xvY2suanMiLCJ3ZWJwYWNrOi8vLy4vcmVuZGVyZXJzL0NvdW50ZG93bkNsb2NrL0NvdW50ZG93bkNsb2NrLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmVJbml0aWFsU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcHJvbWlzZU1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcm9vdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb3VudGRvd25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1uZXh0LWdpdGh1Yi1idG5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN3aXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvb2x0aXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIl0sIm5hbWVzIjpbIkFwcCIsImNvdW50ZG93bkRhdGUiLCJzZXR0aW5ncyIsInVzZVRpbWUiLCJjbHMiLCJjb3VudFRvUE0iLCJ0b2dnbGVDb3VudFRvUE0iLCJkaXNwYXRjaCIsInR5cGUiLCJUWVBFUyIsInBheWxvYWQiLCJ1cGRhdGVDb3VudGRvd25EYXRlIiwidXBkYXRlUmVtYWluaW5nVGltZSIsInJlbWFpbmluZ1RpbWUiLCJUaW1lUGFnZSIsImRhdGVMZWZ0Iiwic2V0UmVtYWluaW5nVGltZSIsImNvdW50ZG93bkNsb2NrUmVuZGVyZXIiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiY291bnRkb3duQ2xvY2tPblRpY2siLCJUb3BCYXIiLCJzaG93VG9vbHRpcCIsInNldFNob3dUb29sdGlwIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjb3VudFVudGlsUE0iLCJzZXRjb3VudFVudGlsUE0iLCJ0b2dnbGVDb3VudFRvUE1Td2l0Y2giLCJzZXRDb3VudGVyIiwiY291bnRVbnRpbFBNVmFsdWUiLCJwYWRTdGFydCIsIm4iLCJ3aWR0aCIsInoiLCJsZW5ndGgiLCJBcnJheSIsImpvaW4iLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzZXR0aW5nc1JlZHVjZXIiLCJ0aW1lIiwic2V0Q291bnRkb3duRGF0ZSIsIm5ld0NvdW50VG9QTSIsIlRpbWVNb2RlbCIsImdldENvdW50ZG93bkRhdGVUaW1lIiwiY291bnREb3duRGF0ZVRlbXAiLCJjdXJyRGF0ZSIsIkRhdGUiLCJ0b2RheTQyMCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0VGltZSIsIkluZGV4Iiwic3RvcmUiLCJpbml0aWFsU3RhdGUiLCJjb3VudGRvd25EYXRlUmVkdWNlciIsImFjdGlvbiIsInJlbWFpbmluZ1RpbWVSZWR1Y2VyIiwiQ291bnRkb3duQ2xvY2siLCJjb25maWd1cmVTdG9yZSIsIm1pZGRsZXdhcmUiLCJwcm9taXNlTWlkZGxld2FyZSIsImVuaGFuY2VycyIsImNvbXBvc2VyIiwiY29tcG9zZSIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJjb25maWd1cmVTdG9yZUluaXRpYWxTdGF0ZSIsImNyZWF0ZU1pZGRsZSIsImV4dHJhQXJndW1lbnQiLCJnZXRTdGF0ZSIsIm5leHQiLCJ3aXRoRXh0cmFBcmd1bWVudCIsImNvbWJpbmVSZWR1Y2VycyIsIlNFVF9DT1VOVERPV05EQVRFIiwiU0VUX1JFTUFJTklOR1RJTUUiLCJTRVRfQ09VTlRfVE9fUE0iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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O0FDTFAsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVG9wQmFyIGZyb20gXCIuL2NvbXBvbmVudHMvVG9wQmFyL1RvcEJhclwiO1xyXG5pbXBvcnQgY2xzIGZyb20gXCIuL0FwcC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBUaW1lUGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL1RpbWUvVGltZVBhZ2VcIjtcclxuaW1wb3J0IHVzZVRpbWUgZnJvbSBcIi4vaG9va3MvdXNlVGltZVwiO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY291bnRkb3duRGF0ZSwgc2V0dGluZ3MgfSA9IHVzZVRpbWUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHNbXCJBcHBcIl19PlxyXG4gICAgICAgIDxUb3BCYXIgLz5cclxuICAgICAgICA8VGltZVBhZ2UgZGF0ZUxlZnQ9e2NvdW50ZG93bkRhdGV9IGtleT17c2V0dGluZ3MuY291bnRUb1BNfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc1tcInJhaW4tY29udGFpbmVyXCJdfT48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkFwcFwiOiBcIkFwcF9BcHBfXzN6SmtlXCIsXG5cdFwicmFpbi1jb250YWluZXJcIjogXCJBcHBfcmFpbi1jb250YWluZXJfX2FvR0VPXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBUWVBFUyBmcm9tIFwiLi4vc3RvcmUvdHlwZXNcIjtcclxuXHJcbmNvbnN0IHRvZ2dsZUNvdW50VG9QTSA9IChjb3VudFRvUE0pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IFRZUEVTLlNFVF9DT1VOVF9UT19QTSxcclxuICAgIHBheWxvYWQ6IGNvdW50VG9QTSxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZ2dsZUNvdW50VG9QTTtcclxuIiwiaW1wb3J0ICogYXMgVFlQRVMgZnJvbSBcIi4uL3N0b3JlL3R5cGVzXCI7XHJcblxyXG5jb25zdCB1cGRhdGVDb3VudGRvd25EYXRlID0gKGNvdW50ZG93bkRhdGUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IFRZUEVTLlNFVF9DT1VOVERPV05EQVRFLFxyXG4gICAgcGF5bG9hZDogY291bnRkb3duRGF0ZVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQ291bnRkb3duRGF0ZTtcclxuIiwiaW1wb3J0ICogYXMgVFlQRVMgZnJvbSBcIi4uL3N0b3JlL3R5cGVzXCI7XHJcblxyXG5jb25zdCB1cGRhdGVSZW1haW5pbmdUaW1lID0gKHJlbWFpbmluZ1RpbWUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IFRZUEVTLlNFVF9SRU1BSU5JTkdUSU1FLFxyXG4gICAgcGF5bG9hZDogcmVtYWluaW5nVGltZVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlUmVtYWluaW5nVGltZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xzIGZyb20gXCIuL1RpbWVQYWdlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IENvdW50ZG93biBmcm9tIFwicmVhY3QtY291bnRkb3duXCI7XHJcbmltcG9ydCBDb3VudGRvd25DbG9jayBmcm9tIFwiLi4vLi4vcmVuZGVyZXJzL0NvdW50ZG93bkNsb2NrL0NvdW50ZG93bkNsb2NrXCI7XHJcbmltcG9ydCB1c2VUaW1lIGZyb20gXCIuLi8uLi9ob29rcy91c2VUaW1lXCI7XHJcblxyXG5jb25zdCBUaW1lUGFnZSA9ICh7IGRhdGVMZWZ0IH0pID0+IHtcclxuICBjb25zdCB7IHNldFJlbWFpbmluZ1RpbWUgfSA9IHVzZVRpbWUoKTtcclxuXHJcbiAgY29uc3QgY291bnRkb3duQ2xvY2tSZW5kZXJlciA9ICh7IGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH0pID0+IHtcclxuICAgIHJldHVybiA8Q291bnRkb3duQ2xvY2sgaG91cnM9e2hvdXJzfSBtaW51dGVzPXttaW51dGVzfSBzZWNvbmRzPXtzZWNvbmRzfSAvPjtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb3VudGRvd25DbG9ja09uVGljayA9ICh7IGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH0pID0+IHtcclxuICAgIHNldFJlbWFpbmluZ1RpbWUoeyBob3VyczogaG91cnMsIG1pbnV0ZXM6IG1pbnV0ZXMsIHNlY29uZHM6IHNlY29uZHMgfSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGRhdGVMZWZ0KSB7XHJcbiAgICByZXR1cm4gPENvdW50ZG93biBkYXRlPXtkYXRlTGVmdH0gcmVuZGVyZXI9e2NvdW50ZG93bkNsb2NrUmVuZGVyZXJ9IG9uVGljaz17Y291bnRkb3duQ2xvY2tPblRpY2t9IC8+O1xyXG4gIH1cclxuICByZXR1cm4gPD48Lz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1lUGFnZTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbHMgZnJvbSBcIi4vSW5mb1Rvb2x0aXAubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gXCJyZWFjdC10b29sdGlwXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUb3BCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dUb29sdGlwLCBzZXRTaG93VG9vbHRpcF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTaG93VG9vbHRpcCh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmIChzaG93VG9vbHRpcCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzW1widG9vbHRpcFwiXX1cclxuICAgICAgICBkYXRhLXRpcD1cIlRoaXMgcGFnZSBpcyBzdGlsbCBpbiBCRVRBIHZlcnNpb24uIDxici8+IFxyXG4gICAgICAgICAgICAgICAgICAgIEZlZWwgZnJlZSB0byBjb2xsYWJvcmF0ZSB2aWEgZ2l0aHViIGFuZCBtYWtlIHRoaXMgcGFnZSBncm93LiA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBnb2FsIGlzIHRvIG1ha2UgdGhpcyB0aGUgYmVzdCBwbGFjZSB0byBzdGF5IGF0IGJlZm9yZSA0OjIwIGhpdHMgdGhlIGNsb2NrLlwiXHJcbiAgICAgID5cclxuICAgICAgICA8UmVhY3RUb29sdGlwIHBsYWNlPVwiYm90dG9tXCIgbXVsdGlsaW5lPXt0cnVlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiA8PjwvPjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BCYXI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRvb2x0aXBcIjogXCJJbmZvVG9vbHRpcF90b29sdGlwX18xaDBJVVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xzIGZyb20gXCIuL1RvcEJhci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBHaXRIdWJCdXR0b24gZnJvbSBcInJlYWN0LW5leHQtZ2l0aHViLWJ0blwiO1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gXCJyZWFjdC1zd2l0Y2hcIjtcclxuaW1wb3J0IEluZm9Ub29sdGlwIGZyb20gXCIuL0luZm9Ub29sdGlwL0luZm9Ub29sdGlwXCI7XHJcbmltcG9ydCB1c2VUaW1lIGZyb20gXCIuLi8uLi9ob29rcy91c2VUaW1lXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUb3BCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvdW50VW50aWxQTSwgc2V0Y291bnRVbnRpbFBNXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgeyB0b2dnbGVDb3VudFRvUE1Td2l0Y2ggfSA9IHVzZVRpbWUoKTtcclxuXHJcbiAgY29uc3Qgc2V0Q291bnRlciA9IChjb3VudFVudGlsUE1WYWx1ZSkgPT4ge1xyXG4gICAgdG9nZ2xlQ291bnRUb1BNU3dpdGNoKCk7XHJcbiAgICBzZXRjb3VudFVudGlsUE0oIWNvdW50VW50aWxQTVZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc1tcInRvcC1iYXJcIl19PlxyXG4gICAgICA8cD40MjAgQ291bnRkb3duIC0gQkVUQTwvcD5cclxuICAgICAgPEluZm9Ub29sdGlwIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHNbXCJ0b3AtYmFyLXN3aXRjaC1jb250YWluZXJcIl19PlxyXG4gICAgICAgIDxwPkFNPC9wPlxyXG4gICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzW1widG9wLWJhci1zd2l0Y2gtY29udGFpbmVyLXN3aXRjaFwiXX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRDb3VudGVyKGNvdW50VW50aWxQTSl9XHJcbiAgICAgICAgICBjaGVja2VkPXtjb3VudFVudGlsUE19XHJcbiAgICAgICAgICB1bmNoZWNrZWRJY29uPXtmYWxzZX1cclxuICAgICAgICAgIGNoZWNrZWRJY29uPXtmYWxzZX1cclxuICAgICAgICAgIGhhbmRsZURpYW1ldGVyPXsyMn1cclxuICAgICAgICAgIG9uQ29sb3I9XCIjMEUzQzQyXCJcclxuICAgICAgICAgIG9mZkNvbG9yPVwiIzQwNDA0MFwiXHJcbiAgICAgICAgICBvbkhhbmRsZUNvbG9yPVwiIzJBQjVDN1wiXHJcbiAgICAgICAgICBvZmZIYW5kbGVDb2xvcj1cIiMyQUI1QzdcIlxyXG4gICAgICAgICAgYm94U2hhZG93PVwiMCAwIDAgNnB4IHJnYig0MiwgMTgxLCAxOTksIDAuMzMpXCJcclxuICAgICAgICAgIGFjdGl2ZUJveFNoYWRvdz1cIjAgMCAwIDJweCByZ2IoNDIsIDE4MSwgMTk5LCAwLjY2KVwiXHJcbiAgICAgICAgICBoZWlnaHQ9ezIzfVxyXG4gICAgICAgICAgd2lkdGg9ezQ1fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHA+UE08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzW1widG9wLWJhci1naXRcIl19PlxyXG4gICAgICAgIDxHaXRIdWJCdXR0b25cclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTWFydGluUHJpdm96bmlrLzQyMC1jb3VudGRvd24vdHJlZS9tYWluLzQyMC1jb3VudGRvd24td2ViXCJcclxuICAgICAgICAgIGRhdGEtY29sb3Itc2NoZW1lPVwibm8tcHJlZmVyZW5jZTogZGFyazsgbGlnaHQ6IGxpZ2h0OyBkYXJrOiBkYXJrO1wiXHJcbiAgICAgICAgICBkYXRhLXNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiV2F0Y2ggTWFydGluUHJpdm96bmlrLzQyMC1jb3VudGRvd24gb24gR2l0SHViXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBDb250cmlidXRlIHRvIHNvdXJjZVxyXG4gICAgICAgIDwvR2l0SHViQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BCYXI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRvcC1iYXJcIjogXCJUb3BCYXJfdG9wLWJhcl9fMmF4QmpcIixcblx0XCJ0b3AtYmFyLWdpdFwiOiBcIlRvcEJhcl90b3AtYmFyLWdpdF9fMlRvWXhcIixcblx0XCJ0b3AtYmFyLXN3aXRjaC1jb250YWluZXJcIjogXCJUb3BCYXJfdG9wLWJhci1zd2l0Y2gtY29udGFpbmVyX18yYk4xLVwiLFxuXHRcInRvcC1iYXItc3dpdGNoLWNvbnRhaW5lci1zd2l0Y2hcIjogXCJUb3BCYXJfdG9wLWJhci1zd2l0Y2gtY29udGFpbmVyLXN3aXRjaF9fMlpLZXFcIixcblx0XCJ0b3AtYmFyLWluZm9cIjogXCJUb3BCYXJfdG9wLWJhci1pbmZvX18zd2R2T1wiLFxuXHRcInRvcC1iYXItaW5mby1pbWdcIjogXCJUb3BCYXJfdG9wLWJhci1pbmZvLWltZ19fMnp1djVcIlxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZFN0YXJ0KG4sIHdpZHRoLCB6KSB7XHJcbiAgeiA9IHogfHwgXCIwXCI7XHJcbiAgbiA9IG4gKyBcIlwiO1xyXG4gIHJldHVybiBuLmxlbmd0aCA+PSB3aWR0aCA/IG4gOiBuZXcgQXJyYXkod2lkdGggLSBuLmxlbmd0aCArIDEpLmpvaW4oeikgKyBuO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgdG9nZ2xlQ291bnRUb1BNIGZyb20gXCIuLi9hY3Rpb25zL3RvZ2dsZUNvdW50VG9QTVwiO1xyXG5pbXBvcnQgdXBkYXRlQ291bnRkb3duRGF0ZSBmcm9tIFwiLi4vYWN0aW9ucy91cGRhdGVDb3VudGRvd25EYXRlXCI7XHJcbmltcG9ydCB1cGRhdGVSZW1haW5pbmdUaW1lIGZyb20gXCIuLi9hY3Rpb25zL3VwZGF0ZVJlbWFpbmluZ1RpbWVcIjtcclxuXHJcbmltcG9ydCBUaW1lTW9kZWwgZnJvbSBcIi4uL21vZGVscy9UaW1lTW9kZWxcIjtcclxuXHJcbmNvbnN0IHVzZVRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlbWFpbmluZ1RpbWUpO1xyXG4gIGNvbnN0IGNvdW50ZG93bkRhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvdW50ZG93bkRhdGUpO1xyXG4gIGNvbnN0IHNldHRpbmdzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zZXR0aW5nc1JlZHVjZXIpO1xyXG5cclxuICBjb25zdCBzZXRSZW1haW5pbmdUaW1lID0gKHRpbWUpID0+IHtcclxuICAgIGRpc3BhdGNoKHVwZGF0ZVJlbWFpbmluZ1RpbWUodGltZSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldENvdW50ZG93bkRhdGUgPSAoY291bnRkb3duRGF0ZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2godXBkYXRlQ291bnRkb3duRGF0ZShjb3VudGRvd25EYXRlKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQ291bnRUb1BNU3dpdGNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3Q291bnRUb1BNID0gIXNldHRpbmdzLmNvdW50VG9QTTtcclxuICAgIGRpc3BhdGNoKHVwZGF0ZUNvdW50ZG93bkRhdGUoVGltZU1vZGVsLmdldENvdW50ZG93bkRhdGVUaW1lKG5ld0NvdW50VG9QTSkpKTtcclxuICAgIGRpc3BhdGNoKHRvZ2dsZUNvdW50VG9QTShuZXdDb3VudFRvUE0pKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVtYWluaW5nVGltZSxcclxuICAgIGNvdW50ZG93bkRhdGUsXHJcbiAgICBzZXR0aW5ncyxcclxuICAgIHNldFJlbWFpbmluZ1RpbWUsXHJcbiAgICBzZXRDb3VudGRvd25EYXRlLFxyXG4gICAgdG9nZ2xlQ291bnRUb1BNU3dpdGNoLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VUaW1lO1xyXG4iLCJjbGFzcyBUaW1lTW9kZWwge1xyXG4gIGdldENvdW50ZG93bkRhdGVUaW1lKGNvdW50VW50aWxQTSkge1xyXG4gICAgdmFyIGNvdW50RG93bkRhdGVUZW1wO1xyXG4gICAgY29uc3QgY3VyckRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgdG9kYXk0MjAgPSBjb3VudFVudGlsUE1cclxuICAgICAgPyBuZXcgRGF0ZShcclxuICAgICAgICAgIGN1cnJEYXRlLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgICAgICBjdXJyRGF0ZS5nZXRNb250aCgpLFxyXG4gICAgICAgICAgY3VyckRhdGUuZ2V0RGF0ZSgpLFxyXG4gICAgICAgICAgMTYsXHJcbiAgICAgICAgICAyMCxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICAwXHJcbiAgICAgICAgKVxyXG4gICAgICA6IG5ldyBEYXRlKFxyXG4gICAgICAgICAgY3VyckRhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgIGN1cnJEYXRlLmdldE1vbnRoKCksXHJcbiAgICAgICAgICBjdXJyRGF0ZS5nZXREYXRlKCksXHJcbiAgICAgICAgICA0LFxyXG4gICAgICAgICAgMjAsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgaWYgKGN1cnJEYXRlIDwgdG9kYXk0MjApIHtcclxuICAgICAgY291bnREb3duRGF0ZVRlbXAgPSB0b2RheTQyMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvdW50RG93bkRhdGVUZW1wID0gY291bnRVbnRpbFBNXHJcbiAgICAgICAgPyBuZXcgRGF0ZShcclxuICAgICAgICAgICAgY3VyckRhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgICAgY3VyckRhdGUuZ2V0TW9udGgoKSxcclxuICAgICAgICAgICAgY3VyckRhdGUuZ2V0RGF0ZSgpICsgMSxcclxuICAgICAgICAgICAgMTYsXHJcbiAgICAgICAgICAgIDIwLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgOiBuZXcgRGF0ZShcclxuICAgICAgICAgICAgY3VyckRhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgICAgY3VyckRhdGUuZ2V0TW9udGgoKSxcclxuICAgICAgICAgICAgY3VyckRhdGUuZ2V0RGF0ZSgpICsgMSxcclxuICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgMjAsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvdW50RG93bkRhdGVUZW1wLmdldFRpbWUoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBUaW1lTW9kZWwoKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuLi9BcHBcIjtcclxuXHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlL3N0b3JlXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IChcclxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgIDxBcHAgLz5cclxuICA8L1Byb3ZpZGVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsImltcG9ydCBUaW1lTW9kZWwgZnJvbSBcIi4uL21vZGVscy9UaW1lTW9kZWxcIjtcclxuaW1wb3J0ICogYXMgVFlQRVMgZnJvbSBcIi4uL3N0b3JlL3R5cGVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSBUaW1lTW9kZWwuZ2V0Q291bnRkb3duRGF0ZVRpbWUoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb3VudGRvd25EYXRlUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3RhdGUgPSBzdGF0ZSB8fCBpbml0aWFsU3RhdGU7XHJcblxyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gVFlQRVMuU0VUX0NPVU5URE9XTkRBVEUpIHtcclxuICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvdW50ZG93bkRhdGVSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgKiBhcyBUWVBFUyBmcm9tIFwiLi4vc3RvcmUvdHlwZXNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IG51bGw7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtYWluaW5nVGltZVJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN0YXRlID0gc3RhdGUgfHwgaW5pdGlhbFN0YXRlO1xyXG5cclxuICBpZiAoYWN0aW9uLnR5cGUgPT09IFRZUEVTLlNFVF9SRU1BSU5JTkdUSU1FKSB7XHJcbiAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW1haW5pbmdUaW1lUmVkdWNlcjtcclxuIiwiaW1wb3J0ICogYXMgVFlQRVMgZnJvbSBcIi4uL3N0b3JlL3R5cGVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgY291bnRUb1BNOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXR0aW5nc1JlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN0YXRlID0gc3RhdGUgfHwgaW5pdGlhbFN0YXRlO1xyXG5cclxuICBpZiAoYWN0aW9uLnR5cGUgPT09IFRZUEVTLlNFVF9DT1VOVF9UT19QTSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIGNvdW50VG9QTTogYWN0aW9uLnBheWxvYWQsXHJcbiAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2V0dGluZ3NSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwYWRTdGFydCBmcm9tIFwiLi4vLi4vaGVscGVycy9wYWRTdGFydFwiO1xyXG5pbXBvcnQgY2xzIGZyb20gXCIuL0NvdW50ZG93bkNsb2NrLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IENvdW50ZG93bkNsb2NrID0gKHsgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzW1wiY291bnRkb3duLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgIDxzcGFuPntwYWRTdGFydChob3VycywgMikgKyBcIjpcIn08L3NwYW4+XHJcbiAgICAgIDxzcGFuPntwYWRTdGFydChtaW51dGVzLCAyKSArIFwiOlwifTwvc3Bhbj5cclxuICAgICAgPHNwYW4+e3BhZFN0YXJ0KHNlY29uZHMsIDIpfTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd25DbG9jaztcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY291bnRkb3duLWNvbnRhaW5lclwiOiBcIkNvdW50ZG93bkNsb2NrX2NvdW50ZG93bi1jb250YWluZXJfX3Q3cTV1XCJcbn07XG4iLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5pbXBvcnQgcHJvbWlzZU1pZGRsZXdhcmUgZnJvbSBcIi4vcHJvbWlzZU1pZGRsZXdhcmVcIjtcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3Jvb3RSZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlndXJlU3RvcmUgPSAoaW5pdGlhbFN0YXRlKSA9PiB7XHJcbiAgY29uc3QgbWlkZGxld2FyZSA9IFtwcm9taXNlTWlkZGxld2FyZV07XHJcbiAgY29uc3QgZW5oYW5jZXJzID0gW107XHJcblxyXG4gIGNvbnN0IGNvbXBvc2VyID0gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSksIC4uLmVuaGFuY2Vycyk7XHJcblxyXG4gIHJldHVybiBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlLCBjb21wb3Nlcik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZTtcclxuIiwiY29uc3QgY29uZmlndXJlU3RvcmVJbml0aWFsU3RhdGUgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlSW5pdGlhbFN0YXRlO1xyXG4iLCJmdW5jdGlvbiBjcmVhdGVNaWRkbGUoZXh0cmFBcmd1bWVudCkge1xyXG4gIHJldHVybiAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgcmV0dXJuIGFjdGlvbihkaXNwYXRjaCwgZ2V0U3RhdGUsIGV4dHJhQXJndW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgcHJvbWlzZU1pZGRsZXdhcmUgPSBjcmVhdGVNaWRkbGUoKTtcclxucHJvbWlzZU1pZGRsZXdhcmUud2l0aEV4dHJhQXJndW1lbnQgPSBjcmVhdGVNaWRkbGU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9taXNlTWlkZGxld2FyZTtcclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBjb3VudGRvd25EYXRlUmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnMvY291bnRkb3duRGF0ZVJlZHVjZXJcIjtcclxuaW1wb3J0IHJlbWFpbmluZ1RpbWVSZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vycy9yZW1haW5pbmdUaW1lUmVkdWNlclwiO1xyXG5pbXBvcnQgc2V0dGluZ3NSZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vycy9zZXR0aW5nc1JlZHVjZXJcIjtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICByZW1haW5pbmdUaW1lOiByZW1haW5pbmdUaW1lUmVkdWNlcixcclxuICBjb3VudGRvd25EYXRlOiBjb3VudGRvd25EYXRlUmVkdWNlcixcclxuICBzZXR0aW5nc1JlZHVjZXI6IHNldHRpbmdzUmVkdWNlcixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gXCIuL2NvbmZpZ3VyZVN0b3JlXCI7XHJcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSBcIi4vY29uZmlndXJlU3RvcmVJbml0aWFsU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIiwiLy9UaW1lXHJcbmV4cG9ydCBjb25zdCBTRVRfQ09VTlRET1dOREFURSA9IFwiU0VUX0NPVU5URE9XTkRBVEVcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9SRU1BSU5JTkdUSU1FID0gXCJTRVRfUkVNQUlOSU5HVElNRVwiO1xyXG5cclxuLy9TZXR0aW5nc1xyXG5leHBvcnQgY29uc3QgU0VUX0NPVU5UX1RPX1BNID0gXCJTRVRfQ09VTlRfVE9fUE1cIjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY291bnRkb3duXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW5leHQtZ2l0aHViLWJ0blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zd2l0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9vbHRpcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==