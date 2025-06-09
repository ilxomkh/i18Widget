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
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        const internalLocale = mapToInternalLocale(savedLocale);
        // ✅ Устанавливаем jimuConfig.locale до рендера
        window.jimuConfig.locale = internalLocale;
        // ✅ Проверка, был ли reload уже сделан
        const alreadyApplied = sessionStorage.getItem('locale_applied');
        if (!alreadyApplied) {
            sessionStorage.setItem('locale_applied', 'true');
            window.location.reload();
        }
        console.log('[Language Switcher] Loaded locale:', savedLocale);
    }, [savedLocale]);
    const handleChange = (e) => {
        const newLocale = e.target.value;
        setLocale(newLocale);
        localStorage.setItem('exb_user_locale', newLocale);
        const internalLocale = mapToInternalLocale(newLocale);
        window.jimuConfig.locale = internalLocale;
        // ❗ Удаляем флаг перед reload, чтобы язык применился один раз
        sessionStorage.removeItem('locale_applied');
        window.location.reload();
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9sYW5ndWFnZWkxOC9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7SUFDYixZQUFZLEVBQUUsYUFBYTtJQUMzQixXQUFXLEVBQUUscURBQXFEO0lBQ2xFLGNBQWMsRUFBRSxpQkFBaUI7Q0FDbEM7Ozs7Ozs7Ozs7OztBQ0pEOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCxlQUFlO0FBQ3FDO0FBQ1o7QUFDRztBQUNDO0FBQ1E7QUFFcEQscURBQXFEO0FBQ3JELE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxNQUFjLEVBQVUsRUFBRTtJQUNyRCxRQUFRLE1BQU0sRUFBRSxDQUFDO1FBQ2YsS0FBSyxPQUFPO1lBQ1YsT0FBTyxJQUFJO1FBQ2IsS0FBSyxPQUFPO1lBQ1YsT0FBTyxJQUFJO1FBQ2IsS0FBSyxpQkFBaUI7WUFDcEIsT0FBTyxRQUFRO1FBQ2pCO1lBQ0UsT0FBTyxJQUFJO0lBQ2YsQ0FBQztBQUNILENBQUM7QUFFRCxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQTBCLEVBQUUsRUFBRTtJQUM1QyxNQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksT0FBTztJQUN0RSxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUFHLCtDQUFRLENBQUMsV0FBVyxDQUFDO0lBRWpELGdEQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsTUFBTSxjQUFjLEdBQUcsbUJBQW1CLENBQUMsV0FBVyxDQUFDO1FBRXZELCtDQUErQztRQUMvQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxjQUFjO1FBRXpDLHVDQUF1QztRQUN2QyxNQUFNLGNBQWMsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1FBRS9ELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNwQixjQUFjLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQztZQUNoRCxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtRQUMxQixDQUFDO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxXQUFXLENBQUM7SUFDaEUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFakIsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUF1QyxFQUFFLEVBQUU7UUFDL0QsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQ2hDLFNBQVMsQ0FBQyxTQUFTLENBQUM7UUFFcEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUM7UUFFbEQsTUFBTSxjQUFjLEdBQUcsbUJBQW1CLENBQUMsU0FBUyxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLGNBQWM7UUFFekMsOERBQThEO1FBQzlELGNBQWMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7UUFDM0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7SUFDMUIsQ0FBQztJQUVELE9BQU8sQ0FDTCx3REFBSyxTQUFTLEVBQUMsaUJBQWlCO1FBQzlCO1lBQUksK0NBQUMsdURBQWdCLElBQUMsRUFBRSxFQUFDLGNBQWMsRUFBQyxjQUFjLEVBQUUsNkRBQWUsQ0FBQyxZQUFZLEdBQUksQ0FBSztRQUM3RiwwREFBTyxTQUFTLEVBQUMsTUFBTTtZQUFDLCtDQUFDLHVEQUFnQixJQUFDLEVBQUUsRUFBQyxnQkFBZ0IsRUFBQyxjQUFjLEVBQUUsNkRBQWUsQ0FBQyxjQUFjLEdBQUksQ0FBUTtRQUN4SCwrQ0FBQywyQ0FBTSxJQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFlBQVk7WUFDM0MsK0NBQUMsMkNBQU0sSUFBQyxLQUFLLEVBQUMsT0FBTyxpREFBaUI7WUFDdEMsK0NBQUMsMkNBQU0sSUFBQyxLQUFLLEVBQUMsT0FBTyxxQkFBbUI7WUFDeEMsK0NBQUMsMkNBQU0sSUFBQyxLQUFLLEVBQUMsaUJBQWlCLGtGQUF5QixDQUNqRCxDQUNMLENBQ1A7QUFDSCxDQUFDO0FBRUQsaUVBQWUsTUFBTTtBQUViLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2xhbmd1YWdlaTE4L3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2xhbmd1YWdlaTE4L3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBfd2lkZ2V0TGFiZWw6ICdUZXN0IFdpZGdldCcsXG4gIGRlc2NyaXB0aW9uOiAnVGhpcyB0ZXh0IHdpbGwgY2hhbmdlIHdoZW4geW91IHN3aXRjaCB0aGUgbGFuZ3VhZ2UuJyxcbiAgY2hvb3NlTGFuZ3VhZ2U6ICdDaG9vc2UgTGFuZ3VhZ2UnXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgdHlwZSBBbGxXaWRnZXRQcm9wcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IFNlbGVjdCwgT3B0aW9uIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXG5cbi8vIPCfkYcg0JzQsNC/0L/QuNC90LMg0YTQvtGA0LzQsNGC0LAgRVhCIC0+INCy0L3Rg9GC0YDQtdC90L3QuNC5INGE0L7RgNC80LDRgiDQu9C+0LrQsNC70LhcbmNvbnN0IG1hcFRvSW50ZXJuYWxMb2NhbGUgPSAobG9jYWxlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBzd2l0Y2ggKGxvY2FsZSkge1xuICAgIGNhc2UgJ3J1LVJVJzpcbiAgICAgIHJldHVybiAncnUnXG4gICAgY2FzZSAndXotVVonOlxuICAgICAgcmV0dXJuICd1eidcbiAgICBjYXNlICd1el9jcnlsLVVaX0NSWUwnOlxuICAgICAgcmV0dXJuICd1emNyeWwnXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnZW4nXG4gIH1cbn1cblxuY29uc3QgV2lkZ2V0ID0gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxhbnk+KSA9PiB7XG4gIGNvbnN0IHNhdmVkTG9jYWxlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2V4Yl91c2VyX2xvY2FsZScpIHx8ICdlbi1VUydcbiAgY29uc3QgW2xvY2FsZSwgc2V0TG9jYWxlXSA9IHVzZVN0YXRlKHNhdmVkTG9jYWxlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJuYWxMb2NhbGUgPSBtYXBUb0ludGVybmFsTG9jYWxlKHNhdmVkTG9jYWxlKVxuXG4gICAgLy8g4pyFINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8IGppbXVDb25maWcubG9jYWxlINC00L4g0YDQtdC90LTQtdGA0LBcbiAgICB3aW5kb3cuamltdUNvbmZpZy5sb2NhbGUgPSBpbnRlcm5hbExvY2FsZVxuXG4gICAgLy8g4pyFINCf0YDQvtCy0LXRgNC60LAsINCx0YvQuyDQu9C4IHJlbG9hZCDRg9C20LUg0YHQtNC10LvQsNC9XG4gICAgY29uc3QgYWxyZWFkeUFwcGxpZWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsb2NhbGVfYXBwbGllZCcpXG5cbiAgICBpZiAoIWFscmVhZHlBcHBsaWVkKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsb2NhbGVfYXBwbGllZCcsICd0cnVlJylcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdbTGFuZ3VhZ2UgU3dpdGNoZXJdIExvYWRlZCBsb2NhbGU6Jywgc2F2ZWRMb2NhbGUpXG4gIH0sIFtzYXZlZExvY2FsZV0pXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IG5ld0xvY2FsZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgc2V0TG9jYWxlKG5ld0xvY2FsZSlcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdleGJfdXNlcl9sb2NhbGUnLCBuZXdMb2NhbGUpXG5cbiAgICBjb25zdCBpbnRlcm5hbExvY2FsZSA9IG1hcFRvSW50ZXJuYWxMb2NhbGUobmV3TG9jYWxlKVxuICAgIHdpbmRvdy5qaW11Q29uZmlnLmxvY2FsZSA9IGludGVybmFsTG9jYWxlXG5cbiAgICAvLyDinZcg0KPQtNCw0LvRj9C10Lwg0YTQu9Cw0LMg0L/QtdGA0LXQtCByZWxvYWQsINGH0YLQvtCx0Ysg0Y/Qt9GL0Log0L/RgNC40LzQtdC90LjQu9GB0Y8g0L7QtNC40L0g0YDQsNC3XG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnbG9jYWxlX2FwcGxpZWQnKVxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0IHAtM1wiPlxuICAgICAgPGg0PjxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiX3dpZGdldExhYmVsXCIgZGVmYXVsdE1lc3NhZ2U9e2RlZmF1bHRNZXNzYWdlcy5fd2lkZ2V0TGFiZWx9IC8+PC9oND5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi0yXCI+PEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJjaG9vc2VMYW5ndWFnZVwiIGRlZmF1bHRNZXNzYWdlPXtkZWZhdWx0TWVzc2FnZXMuY2hvb3NlTGFuZ3VhZ2V9IC8+PC9sYWJlbD5cbiAgICAgIDxTZWxlY3QgdmFsdWU9e2xvY2FsZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgIDxPcHRpb24gdmFsdWU9XCJydS1SVVwiPtCg0YPRgdGB0LrQuNC5PC9PcHRpb24+XG4gICAgICAgIDxPcHRpb24gdmFsdWU9XCJ1ei1VWlwiPk/igJh6YmVrY2hhPC9PcHRpb24+XG4gICAgICAgIDxPcHRpb24gdmFsdWU9XCJ1el9jcnlsLVVaX0NSWUxcIj7QjtC30LHQtdC60YfQsCAo0JrQuNGA0LjQuyk8L09wdGlvbj5cbiAgICAgIDwvU2VsZWN0PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpZGdldFxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==