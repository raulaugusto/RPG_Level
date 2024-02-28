/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Character.js":
/*!**************************!*\
  !*** ./src/Character.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Character: () => (/* binding */ Character)\n/* harmony export */ });\nclass Character {\r\n  constructor(nome, pv, pa, pd) {\r\n    this.nome = nome;\r\n    this.pv = pv;\r\n    this.pa = pa;\r\n    this.pd = pd;\r\n  }\r\n  atacar(target) {\r\n    target.pv -= this.pa - target.pd;\r\n    if (target.pv < 0) {\r\n      console.log(`${target.nome} morreu!`);\r\n    } else {\r\n      console.log(`Ataque bem sucedido!\r\n          Vida de ${target.nome}: ${target.pv}`);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://rpg_level/./src/Character.js?");

/***/ }),

/***/ "./src/Mage.js":
/*!*********************!*\
  !*** ./src/Mage.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Mage: () => (/* binding */ Mage)\n/* harmony export */ });\n/* harmony import */ var _Character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character.js */ \"./src/Character.js\");\n\r\nclass Mage extends _Character_js__WEBPACK_IMPORTED_MODULE_0__.Character {\r\n  constructor(nome, pv, pa, pd, magia) {\r\n    super(nome, pv, pa, pd);\r\n    this.magia = magia;\r\n  }\r\n  atacar(target) {\r\n    target.pv -= this.pa + this.magia - target.pd;\r\n    if (target.pv < 0) {\r\n      console.log(`${target.nome} morreu!`);\r\n    } else {\r\n      console.log(`Ataque bem sucedido!\r\n          Vida de ${target.nome}: ${target.pv}`);\r\n    }\r\n  }\r\n  curar(...targets) {\r\n    targets.forEach((target) => {\r\n      target.pv += 2 * (this.magia / targets.length);\r\n      console.log(`Curou ${target.nome}, vida: ${target.pv}`);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://rpg_level/./src/Mage.js?");

/***/ }),

/***/ "./src/Main.js":
/*!*********************!*\
  !*** ./src/Main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Mage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mage.js */ \"./src/Mage.js\");\n/* harmony import */ var _Thief_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Thief.js */ \"./src/Thief.js\");\n/* harmony import */ var _Warrior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Warrior.js */ \"./src/Warrior.js\");\n\r\n\r\n\r\n\r\nconst raul = new _Mage_js__WEBPACK_IMPORTED_MODULE_0__.Mage(\"Raul\", 500, 15, 20, 60);\r\nconst ryan = new _Warrior_js__WEBPACK_IMPORTED_MODULE_2__.Warrior(\"Ryan\", 650, 40, 30, 30, \"ataque\");\r\nconst pedro = new _Thief_js__WEBPACK_IMPORTED_MODULE_1__.Thief(\"Pedro\", 380, 60, 20);\r\n\r\nraul.atacar(ryan);\r\nryan.atacar(pedro);\r\npedro.atacar(raul);\r\n\r\nryan.mudarPosicao();\r\nryan.atacar(pedro);\r\n\r\nraul.curar(raul, ryan, pedro);\r\nraul.curar(raul);\r\n\n\n//# sourceURL=webpack://rpg_level/./src/Main.js?");

/***/ }),

/***/ "./src/Thief.js":
/*!**********************!*\
  !*** ./src/Thief.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Thief: () => (/* binding */ Thief)\n/* harmony export */ });\n/* harmony import */ var _Character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character.js */ \"./src/Character.js\");\n\r\n\r\nclass Thief extends _Character_js__WEBPACK_IMPORTED_MODULE_0__.Character {\r\n  constructor(nome, pv, pa, pd) {\r\n    super(nome, pv, pa, pd);\r\n  }\r\n  atacar(target) {\r\n    target.pv -= 2 * (this.pa - target.pd);\r\n    if (target.pv < 0) {\r\n      console.log(`${target.nome} morreu!`);\r\n    } else {\r\n      console.log(`Ataque bem sucedido! \r\n        Vida de ${target.nome}: ${target.pv}`);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://rpg_level/./src/Thief.js?");

/***/ }),

/***/ "./src/Warrior.js":
/*!************************!*\
  !*** ./src/Warrior.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Warrior: () => (/* binding */ Warrior)\n/* harmony export */ });\n/* harmony import */ var _Character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character.js */ \"./src/Character.js\");\n\r\nclass Warrior extends _Character_js__WEBPACK_IMPORTED_MODULE_0__.Character {\r\n  constructor(nome, pv, pa, pd, escudo, posicao) {\r\n    super(nome, pv, pa, pd);\r\n    this.escudo = escudo;\r\n    if (posicao !== \"ataque\" && posicao !== \"defesa\") {\r\n      console.log(`A posição deve ser de ataque ou de defesa`);\r\n    } else {\r\n      this.posicao = posicao;\r\n    }\r\n  }\r\n  atacar(target) {\r\n    if (this.posicao === \"ataque\") {\r\n      target.pv -= this.pa - target.pd;\r\n      if (target.pv < 0) {\r\n        console.log(`${target.nome} morreu!`);\r\n      } else {\r\n        console.log(`Ataque bem sucedido!\r\n          Vida de ${target.nome}: ${target.pv}`);\r\n      }\r\n    } else {\r\n      console.log(`O personagem deve estar em posição de ataque para atacar`);\r\n    }\r\n  }\r\n  mudarPosicao() {\r\n    if (this.posicao === \"ataque\") {\r\n      this.posicao = \"defesa\";\r\n      this.pd += this.escudo;\r\n      console.log(\"Em posição de defesa\");\r\n    } else {\r\n      this.posicao = \"ataque\";\r\n      this.pd -= this.escudo;\r\n      console.log(\"Em posição de ataque\");\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://rpg_level/./src/Warrior.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Main.js");
/******/ 	
/******/ })()
;