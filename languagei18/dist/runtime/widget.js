System.register(["jimu-core","jimu-ui","jimu-core/react"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/languagei18/src/runtime/translations/default.ts":
/*!*********************************************************************************!*\
  !*** ./your-extensions/widgets/languagei18/src/runtime/translations/default.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Test Widget',
    description: 'This text will change when you switch the language.',
    chooseLanguage: 'Choose Language'
});


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!********************************************************************!*\
  !*** ./your-extensions/widgets/languagei18/src/runtime/widget.tsx ***!
  \********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/languagei18/src/runtime/translations/default.ts");
/** @jsx jsx */





// 👇 Маппинг формата EXB -> внутренний формат локали
const mapToInternalLocale = (locale) => {
    switch (locale) {
        case 'ru-RU':
            return 'ru';
        case 'uz-UZ':
            return 'uz';
        case 'uz_cryl-UZ_CRYL':
            return 'uzcryl';
        default:
            return 'en';
    }
};
const Widget = (props) => {
    const savedLocale = localStorage.getItem('exb_user_locale') || 'en-US';
    const [locale, setLocale] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(savedLocale);
    const handleChange = (e) => {
        const newLocale = e.target.value;
        setLocale(newLocale);
        // ✅ Сохраняем в EXB-локали
        localStorage.setItem('exb_user_locale', newLocale);
        // ✅ Устанавливаем корректную системную локаль
        const internalLocale = mapToInternalLocale(newLocale);
        window.jimuConfig.locale = internalLocale;
        // 🔄 Перезагрузка для применения переводов
        window.location.reload();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        console.log('[Language Switcher] Initial locale from exb_user_locale:', locale);
    }, []);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "jimu-widget p-3" },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "_widgetLabel", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"]._widgetLabel })),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "mb-2" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "chooseLanguage", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].chooseLanguage })),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { value: locale, onChange: handleChange },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "ru-RU" }, "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "uz-UZ" }, "O\u2018zbekcha"),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "uz_cryl-UZ_CRYL" }, "\u040E\u0437\u0431\u0435\u043A\u0447\u0430 (\u041A\u0438\u0440\u0438\u043B)"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9sYW5ndWFnZWkxOC9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7SUFDYixZQUFZLEVBQUUsYUFBYTtJQUMzQixXQUFXLEVBQUUscURBQXFEO0lBQ2xFLGNBQWMsRUFBRSxpQkFBaUI7Q0FDbEM7Ozs7Ozs7Ozs7OztBQ0pEOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCxlQUFlO0FBQ3FDO0FBQ1o7QUFDRztBQUNDO0FBQ1E7QUFFcEQscURBQXFEO0FBQ3JELE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxNQUFjLEVBQVUsRUFBRTtJQUNyRCxRQUFRLE1BQU0sRUFBRSxDQUFDO1FBQ2YsS0FBSyxPQUFPO1lBQ1YsT0FBTyxJQUFJO1FBQ2IsS0FBSyxPQUFPO1lBQ1YsT0FBTyxJQUFJO1FBQ2IsS0FBSyxpQkFBaUI7WUFDcEIsT0FBTyxRQUFRO1FBQ2pCO1lBQ0UsT0FBTyxJQUFJO0lBQ2YsQ0FBQztBQUNILENBQUM7QUFFRCxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQTBCLEVBQUUsRUFBRTtJQUM1QyxNQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksT0FBTztJQUN0RSxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUFHLCtDQUFRLENBQUMsV0FBVyxDQUFDO0lBRWpELE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBdUMsRUFBRSxFQUFFO1FBQy9ELE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztRQUNoQyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBRXBCLDJCQUEyQjtRQUMzQixZQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQztRQUVsRCw4Q0FBOEM7UUFDOUMsTUFBTSxjQUFjLEdBQUcsbUJBQW1CLENBQUMsU0FBUyxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLGNBQWM7UUFFekMsMkNBQTJDO1FBQzNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO0lBQzFCLENBQUM7SUFFRCxnREFBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsMERBQTBELEVBQUUsTUFBTSxDQUFDO0lBQ2pGLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTixPQUFPLENBQ0wsd0RBQUssU0FBUyxFQUFDLGlCQUFpQjtRQUM5QjtZQUFJLCtDQUFDLHVEQUFnQixJQUFDLEVBQUUsRUFBQyxjQUFjLEVBQUMsY0FBYyxFQUFFLDZEQUFlLENBQUMsWUFBWSxHQUFJLENBQUs7UUFDN0YsMERBQU8sU0FBUyxFQUFDLE1BQU07WUFBQywrQ0FBQyx1REFBZ0IsSUFBQyxFQUFFLEVBQUMsZ0JBQWdCLEVBQUMsY0FBYyxFQUFFLDZEQUFlLENBQUMsY0FBYyxHQUFJLENBQVE7UUFDeEgsK0NBQUMsMkNBQU0sSUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxZQUFZO1lBQzNDLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFDLE9BQU8saURBQWlCO1lBQ3RDLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFDLE9BQU8scUJBQW1CO1lBQ3hDLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFDLGlCQUFpQixrRkFBeUIsQ0FDakQsQ0FDTCxDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE1BQU07QUFFYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9sYW5ndWFnZWkxOC9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9sYW5ndWFnZWkxOC9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgX3dpZGdldExhYmVsOiAnVGVzdCBXaWRnZXQnLFxuICBkZXNjcmlwdGlvbjogJ1RoaXMgdGV4dCB3aWxsIGNoYW5nZSB3aGVuIHlvdSBzd2l0Y2ggdGhlIGxhbmd1YWdlLicsXG4gIGNob29zZUxhbmd1YWdlOiAnQ2hvb3NlIExhbmd1YWdlJ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIHR5cGUgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBTZWxlY3QsIE9wdGlvbiB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xuXG4vLyDwn5GHINCc0LDQv9C/0LjQvdCzINGE0L7RgNC80LDRgtCwIEVYQiAtPiDQstC90YPRgtGA0LXQvdC90LjQuSDRhNC+0YDQvNCw0YIg0LvQvtC60LDQu9C4XG5jb25zdCBtYXBUb0ludGVybmFsTG9jYWxlID0gKGxvY2FsZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgc3dpdGNoIChsb2NhbGUpIHtcbiAgICBjYXNlICdydS1SVSc6XG4gICAgICByZXR1cm4gJ3J1J1xuICAgIGNhc2UgJ3V6LVVaJzpcbiAgICAgIHJldHVybiAndXonXG4gICAgY2FzZSAndXpfY3J5bC1VWl9DUllMJzpcbiAgICAgIHJldHVybiAndXpjcnlsJ1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJ2VuJ1xuICB9XG59XG5cbmNvbnN0IFdpZGdldCA9IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8YW55PikgPT4ge1xuICBjb25zdCBzYXZlZExvY2FsZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdleGJfdXNlcl9sb2NhbGUnKSB8fCAnZW4tVVMnXG4gIGNvbnN0IFtsb2NhbGUsIHNldExvY2FsZV0gPSB1c2VTdGF0ZShzYXZlZExvY2FsZSlcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgbmV3TG9jYWxlID0gZS50YXJnZXQudmFsdWVcbiAgICBzZXRMb2NhbGUobmV3TG9jYWxlKVxuXG4gICAgLy8g4pyFINCh0L7RhdGA0LDQvdGP0LXQvCDQsiBFWEIt0LvQvtC60LDQu9C4XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2V4Yl91c2VyX2xvY2FsZScsIG5ld0xvY2FsZSlcblxuICAgIC8vIOKchSDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQutC+0YDRgNC10LrRgtC90YPRjiDRgdC40YHRgtC10LzQvdGD0Y4g0LvQvtC60LDQu9GMXG4gICAgY29uc3QgaW50ZXJuYWxMb2NhbGUgPSBtYXBUb0ludGVybmFsTG9jYWxlKG5ld0xvY2FsZSlcbiAgICB3aW5kb3cuamltdUNvbmZpZy5sb2NhbGUgPSBpbnRlcm5hbExvY2FsZVxuXG4gICAgLy8g8J+UhCDQn9C10YDQtdC30LDQs9GA0YPQt9C60LAg0LTQu9GPINC/0YDQuNC80LXQvdC10L3QuNGPINC/0LXRgNC10LLQvtC00L7QslxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnW0xhbmd1YWdlIFN3aXRjaGVyXSBJbml0aWFsIGxvY2FsZSBmcm9tIGV4Yl91c2VyX2xvY2FsZTonLCBsb2NhbGUpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqaW11LXdpZGdldCBwLTNcIj5cbiAgICAgIDxoND48Rm9ybWF0dGVkTWVzc2FnZSBpZD1cIl93aWRnZXRMYWJlbFwiIGRlZmF1bHRNZXNzYWdlPXtkZWZhdWx0TWVzc2FnZXMuX3dpZGdldExhYmVsfSAvPjwvaDQ+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWItMlwiPjxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiY2hvb3NlTGFuZ3VhZ2VcIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdE1lc3NhZ2VzLmNob29zZUxhbmd1YWdlfSAvPjwvbGFiZWw+XG4gICAgICA8U2VsZWN0IHZhbHVlPXtsb2NhbGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICA8T3B0aW9uIHZhbHVlPVwicnUtUlVcIj7QoNGD0YHRgdC60LjQuTwvT3B0aW9uPlxuICAgICAgICA8T3B0aW9uIHZhbHVlPVwidXotVVpcIj5P4oCYemJla2NoYTwvT3B0aW9uPlxuICAgICAgICA8T3B0aW9uIHZhbHVlPVwidXpfY3J5bC1VWl9DUllMXCI+0I7Qt9Cx0LXQutGH0LAgKNCa0LjRgNC40LspPC9PcHRpb24+XG4gICAgICA8L1NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXaWRnZXRcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=