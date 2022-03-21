/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadEvents */ "./src/js/loadEvents.js");
/* harmony import */ var _stickyNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stickyNav */ "./src/js/stickyNav.js");
/* harmony import */ var _toggleMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleMenu */ "./src/js/toggleMenu.js");
/* harmony import */ var _articlesHover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articlesHover */ "./src/js/articlesHover.js");




var load = new _loadEvents__WEBPACK_IMPORTED_MODULE_0__.default();
var header = new _stickyNav__WEBPACK_IMPORTED_MODULE_1__.default();
var menu = new _toggleMenu__WEBPACK_IMPORTED_MODULE_2__.default();
var hover = new _articlesHover__WEBPACK_IMPORTED_MODULE_3__.default();

/***/ }),

/***/ "./src/js/articlesHover.js":
/*!*********************************!*\
  !*** ./src/js/articlesHover.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ArticlesHover)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ArticlesHover = /*#__PURE__*/function () {
  function ArticlesHover() {
    _classCallCheck(this, ArticlesHover);

    if (!this.vars()) return false;
    this.setupEvents();
  }

  _createClass(ArticlesHover, [{
    key: "vars",
    value: function vars() {
      this.selectors = {
        cards: 'data-card',
        activeClass: 'hover'
      };
      this.cards = document.querySelectorAll("[".concat(this.selectors.cards, "]"));
      if (!this.cards) return false;
      return true;
    }
    /* Cards event listeners */

  }, {
    key: "setupEvents",
    value: function setupEvents() {
      var _this = this;

      this.cards.forEach(function (card) {
        card.addEventListener('mouseenter', function (event) {
          return _this.fade(event);
        });
        card.addEventListener('mouseleave', function () {
          return _this.clear();
        });
      });
    }
    /* Add activeClass to cards that are not hovered */

  }, {
    key: "fade",
    value: function fade(event) {
      var _this2 = this;

      this.hoveredCard = event.target;
      this.cards.forEach(function (card) {
        _this2.hoveredCard != card ? card.classList.add("".concat(_this2.selectors.activeClass)) : null;
      });
    }
    /* Remove activeClass from every card */

  }, {
    key: "clear",
    value: function clear() {
      var _this3 = this;

      this.cards.forEach(function (card) {
        card.classList.remove("".concat(_this3.selectors.activeClass));
      });
    }
  }]);

  return ArticlesHover;
}();



/***/ }),

/***/ "./src/js/loadEvents.js":
/*!******************************!*\
  !*** ./src/js/loadEvents.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoadEvents)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LoadEvents = /*#__PURE__*/function () {
  function LoadEvents() {
    _classCallCheck(this, LoadEvents);

    if (!this.vars()) return false;
    this.setupEvents();
  }

  _createClass(LoadEvents, [{
    key: "vars",
    value: function vars() {
      this.selectors = {
        body: 'data-body',
        activeClass: 'loading'
      };
      this.body = document.querySelector("[".concat(this.selectors.body, "]"));
      if (!this.body) return false;
      return true;
    }
  }, {
    key: "setupEvents",
    value: function setupEvents() {
      var _this = this;

      window.addEventListener('load', function () {
        return _this.show();
      });
    }
  }, {
    key: "show",
    value: function show() {
      this.body.classList.remove("".concat(this.selectors.activeClass));
    }
  }]);

  return LoadEvents;
}();



/***/ }),

/***/ "./src/js/stickyNav.js":
/*!*****************************!*\
  !*** ./src/js/stickyNav.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StickyNav)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StickyNav = /*#__PURE__*/function () {
  function StickyNav() {
    _classCallCheck(this, StickyNav);

    if (!this.vars()) return false;
    this.setupEvents();
  }

  _createClass(StickyNav, [{
    key: "vars",
    value: function vars() {
      this.selectors = {
        body: 'data-body',
        header: 'data-header',
        sectionKv: 'data-kv',
        activeClass: 'header-scroll-in',
        inActiveClass: 'header-scroll-out'
      };
      this.body = document.querySelector("[".concat(this.selectors.body, "]"));
      this.header = document.querySelector("[".concat(this.selectors.header, "]"));
      this.sectionKv = document.querySelector("[".concat(this.selectors.sectionKv, "]"));
      if (!this.body || !this.header || !this.sectionKv) return false;
      this.isInitialized = false;
      this.animDuration = 300;
      return true;
    }
  }, {
    key: "setupEvents",
    value: function setupEvents() {
      this.navObserver(this.sectionKv);
    }
  }, {
    key: "navObserver",
    value: function navObserver(element) {
      var _this = this;

      this.options = {
        rootMargin: '0px',
        threshold: 0.15
      };
      this.observer = new IntersectionObserver(function (entries) {
        if (_this.isInitialized) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
              _this.header.classList.add("".concat(_this.selectors.activeClass));

              _this.body.classList.add("".concat(_this.selectors.activeClass));
            } else {
              _this.header.classList.add("".concat(_this.selectors.inActiveClass));

              window.setTimeout(function () {
                _this.header.classList.remove("".concat(_this.selectors.activeClass));

                _this.header.classList.remove("".concat(_this.selectors.inActiveClass));

                _this.body.classList.remove("".concat(_this.selectors.activeClass));
              }, _this.animDuration);
            }
          });
        }

        _this.isInitialized = true;
      }, this.options);
      this.observer.observe(element);
    }
  }]);

  return StickyNav;
}();



/***/ }),

/***/ "./src/js/toggleMenu.js":
/*!******************************!*\
  !*** ./src/js/toggleMenu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleMenu)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ToggleMenu = /*#__PURE__*/function () {
  function ToggleMenu() {
    _classCallCheck(this, ToggleMenu);

    if (!this.vars()) return false;
    this.setupEvents();
  }

  _createClass(ToggleMenu, [{
    key: "vars",
    value: function vars() {
      this.selectors = {
        body: 'data-body',
        header: 'data-header',
        nav: 'data-nav',
        menu: 'data-menu',
        overlay: 'data-overlay',
        menuOpenClass: 'menu-open',
        navOpenClass: 'nav-open',
        navCloseClass: 'nav-close',
        activeClass: 'active',
        overflowClass: 'overflow',
        headerClass: 'header-scroll-in'
      };
      this.body = document.querySelector("[".concat(this.selectors.body, "]"));
      this.header = document.querySelector("[".concat(this.selectors.header, "]"));
      this.nav = document.querySelector("[".concat(this.selectors.nav, "]"));
      this.menu = document.querySelector("[".concat(this.selectors.menu, "]"));
      this.overlay = document.querySelector("[".concat(this.selectors.overlay, "]"));
      if (!this.body || !this.header || !this.nav || !this.menu || !this.overlay) return false;
      this.expanded = this.menu.getAttribute('aria-expanded') === false ? false : true;
      this.open = false;
      this.duration = 1000;
      this.touchDuration = 1300;
      this.timer;
      this.touchEnabled = true;
      return true;
    } // Hamburger menu event listener

  }, {
    key: "setupEvents",
    value: function setupEvents() {
      var _this = this;

      this.menu.addEventListener('click', function () {
        return _this.toggle();
      });
      this.overlay.addEventListener('click', function () {
        return _this.hide();
      });
      window.addEventListener('resize', function () {
        return _this.disableOnDesktop();
      });
      window.addEventListener('touchstart', function (event) {
        _this.startPosition = Math.floor(event.touches[0].clientX);
      });
      window.addEventListener('touchmove', function (event) {
        _this.endPosition = Math.floor(event.touches[0].clientX);
      });
      window.addEventListener('touchend', function () {
        _this.onTouchEnd();
      });
    } // Toggle menu

  }, {
    key: "toggle",
    value: function toggle() {
      !this.open ? this.show() : this.hide();
    } // Show animation when menu is open

  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      this.menu.style.pointerEvents = 'none';
      this.nav.classList.add("".concat(this.selectors.menuOpenClass));
      this.nav.classList.add("".concat(this.selectors.navOpenClass));
      this.overlay.classList.add("".concat(this.selectors.activeClass));
      this.body.classList.add("".concat(this.selectors.overflowClass));
      this.body.classList.add("".concat(this.selectors.headerClass));
      this.header.classList.add("".concat(this.selectors.headerClass));
      this.expanded = true;
      this.menu.setAttribute('aria-expanded', this.expanded);
      this.open = true;
      this.timer = window.setTimeout(function () {
        _this2.menu.style.pointerEvents = 'all';
        _this2.timer = false;
      }, this.duration);
    } // Show animation when menu is close

  }, {
    key: "hide",
    value: function hide() {
      var _this3 = this;

      this.menu.style.pointerEvents = 'none';
      this.nav.classList.add("".concat(this.selectors.navCloseClass));
      this.nav.classList.remove("".concat(this.selectors.menuOpenClass));
      this.overlay.classList.remove("".concat(this.selectors.activeClass));
      this.expanded = false;
      this.menu.setAttribute('aria-expanded', this.expanded);
      this.timer = window.setTimeout(function () {
        _this3.nav.classList.remove("".concat(_this3.selectors.navOpenClass));

        _this3.nav.classList.remove("".concat(_this3.selectors.navCloseClass));

        _this3.body.classList.remove("".concat(_this3.selectors.overflowClass));

        _this3.timer = false;
        _this3.menu.style.pointerEvents = 'all';
      }, this.duration);
      this.open = false;
    } // Disable mobile menu on desktop

  }, {
    key: "disableOnDesktop",
    value: function disableOnDesktop() {
      this.windowWidth = window.innerWidth;
      this.tabletBreakpoint = 769;

      if (this.windowWidth >= this.tabletBreakpoint) {
        this.nav.classList.remove("".concat(this.selectors.menuOpenClass));
        this.nav.classList.remove("".concat(this.selectors.navOpenClass));
        this.nav.classList.remove("".concat(this.selectors.navCloseClass));
        this.overlay.classList.remove("".concat(this.selectors.activeClass));
        this.body.classList.remove("".concat(this.selectors.overflowClass));
        this.expanded = false;
        this.menu.setAttribute('aria-expanded', this.expanded);
        this.open = false;
      }
    } // Function to display mobile nav on mobile touch slide

  }, {
    key: "onTouchEnd",
    value: function onTouchEnd() {
      var _this4 = this;

      if (!this.touchEnabled) return false;
      this.positionChange = this.endPosition - this.startPosition;
      this.changeThreshold = 100;

      if (this.positionChange > this.changeThreshold) {
        this.toggle();
      }

      this.touchEnabled = false;
      window.setTimeout(function () {
        _this4.touchEnabled = true;
      }, this.touchDuration);
    }
  }]);

  return ToggleMenu;
}();



/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkeaasybank_landing_page"] = self["webpackChunkeaasybank_landing_page"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/sass/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;