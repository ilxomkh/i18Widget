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
    const savedLocale = localStorage.getItem('exb_user_locale');
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
        // window.location.reload()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9sYW5ndWFnZWkxOC9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7SUFDYixZQUFZLEVBQUUsYUFBYTtJQUMzQixXQUFXLEVBQUUscURBQXFEO0lBQ2xFLGNBQWMsRUFBRSxpQkFBaUI7Q0FDbEM7Ozs7Ozs7Ozs7OztBQ0pEOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCxlQUFlO0FBQ3FDO0FBQ1o7QUFDRztBQUNDO0FBQ1E7QUFFcEQscURBQXFEO0FBQ3JELE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxNQUFjLEVBQVUsRUFBRTtJQUNyRCxRQUFRLE1BQU0sRUFBRSxDQUFDO1FBQ2YsS0FBSyxPQUFPO1lBQ1YsT0FBTyxJQUFJO1FBQ2IsS0FBSyxPQUFPO1lBQ1YsT0FBTyxJQUFJO1FBQ2IsS0FBSyxpQkFBaUI7WUFDcEIsT0FBTyxRQUFRO1FBQ2pCO1lBQ0UsT0FBTyxJQUFJO0lBQ2YsQ0FBQztBQUNILENBQUM7QUFFRCxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQTBCLEVBQUUsRUFBRTtJQUM1QyxNQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0lBQzNELE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcsK0NBQVEsQ0FBQyxXQUFXLENBQUM7SUFFakQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUF1QyxFQUFFLEVBQUU7UUFDL0QsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQ2hDLFNBQVMsQ0FBQyxTQUFTLENBQUM7UUFFcEIsMkJBQTJCO1FBQzNCLFlBQVksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDO1FBRWxELDhDQUE4QztRQUM5QyxNQUFNLGNBQWMsR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLENBQUM7UUFDckQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsY0FBYztRQUV6QywyQ0FBMkM7UUFDM0MsMkJBQTJCO0lBQzdCLENBQUM7SUFFRCxnREFBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsMERBQTBELEVBQUUsTUFBTSxDQUFDO0lBQ2pGLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTixPQUFPLENBQ0wsd0RBQUssU0FBUyxFQUFDLGlCQUFpQjtRQUM5QjtZQUFJLCtDQUFDLHVEQUFnQixJQUFDLEVBQUUsRUFBQyxjQUFjLEVBQUMsY0FBYyxFQUFFLDZEQUFlLENBQUMsWUFBWSxHQUFJLENBQUs7UUFDN0YsMERBQU8sU0FBUyxFQUFDLE1BQU07WUFBQywrQ0FBQyx1REFBZ0IsSUFBQyxFQUFFLEVBQUMsZ0JBQWdCLEVBQUMsY0FBYyxFQUFFLDZEQUFlLENBQUMsY0FBYyxHQUFJLENBQVE7UUFDeEgsK0NBQUMsMkNBQU0sSUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxZQUFZO1lBQzNDLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFDLE9BQU8saURBQWlCO1lBQ3RDLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFDLE9BQU8scUJBQW1CO1lBQ3hDLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFDLGlCQUFpQixrRkFBeUIsQ0FDakQsQ0FDTCxDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE1BQU07QUFFYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9sYW5ndWFnZWkxOC9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9sYW5ndWFnZWkxOC9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgX3dpZGdldExhYmVsOiAnVGVzdCBXaWRnZXQnLFxuICBkZXNjcmlwdGlvbjogJ1RoaXMgdGV4dCB3aWxsIGNoYW5nZSB3aGVuIHlvdSBzd2l0Y2ggdGhlIGxhbmd1YWdlLicsXG4gIGNob29zZUxhbmd1YWdlOiAnQ2hvb3NlIExhbmd1YWdlJ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIHR5cGUgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBTZWxlY3QsIE9wdGlvbiB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xuXG4vLyDwn5GHINCc0LDQv9C/0LjQvdCzINGE0L7RgNC80LDRgtCwIEVYQiAtPiDQstC90YPRgtGA0LXQvdC90LjQuSDRhNC+0YDQvNCw0YIg0LvQvtC60LDQu9C4XG5jb25zdCBtYXBUb0ludGVybmFsTG9jYWxlID0gKGxvY2FsZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgc3dpdGNoIChsb2NhbGUpIHtcbiAgICBjYXNlICdydS1SVSc6XG4gICAgICByZXR1cm4gJ3J1J1xuICAgIGNhc2UgJ3V6LVVaJzpcbiAgICAgIHJldHVybiAndXonXG4gICAgY2FzZSAndXpfY3J5bC1VWl9DUllMJzpcbiAgICAgIHJldHVybiAndXpjcnlsJ1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJ2VuJ1xuICB9XG59XG5cbmNvbnN0IFdpZGdldCA9IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8YW55PikgPT4ge1xuICBjb25zdCBzYXZlZExvY2FsZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdleGJfdXNlcl9sb2NhbGUnKSBcbiAgY29uc3QgW2xvY2FsZSwgc2V0TG9jYWxlXSA9IHVzZVN0YXRlKHNhdmVkTG9jYWxlKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBuZXdMb2NhbGUgPSBlLnRhcmdldC52YWx1ZVxuICAgIHNldExvY2FsZShuZXdMb2NhbGUpXG5cbiAgICAvLyDinIUg0KHQvtGF0YDQsNC90Y/QtdC8INCyIEVYQi3Qu9C+0LrQsNC70LhcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZXhiX3VzZXJfbG9jYWxlJywgbmV3TG9jYWxlKVxuXG4gICAgLy8g4pyFINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC60L7RgNGA0LXQutGC0L3Rg9GOINGB0LjRgdGC0LXQvNC90YPRjiDQu9C+0LrQsNC70YxcbiAgICBjb25zdCBpbnRlcm5hbExvY2FsZSA9IG1hcFRvSW50ZXJuYWxMb2NhbGUobmV3TG9jYWxlKVxuICAgIHdpbmRvdy5qaW11Q29uZmlnLmxvY2FsZSA9IGludGVybmFsTG9jYWxlXG5cbiAgICAvLyDwn5SEINCf0LXRgNC10LfQsNCz0YDRg9C30LrQsCDQtNC70Y8g0L/RgNC40LzQtdC90LXQvdC40Y8g0L/QtdGA0LXQstC+0LTQvtCyXG4gICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdbTGFuZ3VhZ2UgU3dpdGNoZXJdIEluaXRpYWwgbG9jYWxlIGZyb20gZXhiX3VzZXJfbG9jYWxlOicsIGxvY2FsZSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0IHAtM1wiPlxuICAgICAgPGg0PjxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiX3dpZGdldExhYmVsXCIgZGVmYXVsdE1lc3NhZ2U9e2RlZmF1bHRNZXNzYWdlcy5fd2lkZ2V0TGFiZWx9IC8+PC9oND5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi0yXCI+PEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJjaG9vc2VMYW5ndWFnZVwiIGRlZmF1bHRNZXNzYWdlPXtkZWZhdWx0TWVzc2FnZXMuY2hvb3NlTGFuZ3VhZ2V9IC8+PC9sYWJlbD5cbiAgICAgIDxTZWxlY3QgdmFsdWU9e2xvY2FsZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgIDxPcHRpb24gdmFsdWU9XCJydS1SVVwiPtCg0YPRgdGB0LrQuNC5PC9PcHRpb24+XG4gICAgICAgIDxPcHRpb24gdmFsdWU9XCJ1ei1VWlwiPk/igJh6YmVrY2hhPC9PcHRpb24+XG4gICAgICAgIDxPcHRpb24gdmFsdWU9XCJ1el9jcnlsLVVaX0NSWUxcIj7QjtC30LHQtdC60YfQsCAo0JrQuNGA0LjQuyk8L09wdGlvbj5cbiAgICAgIDwvU2VsZWN0PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpZGdldFxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==