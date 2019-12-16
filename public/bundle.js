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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nconst object = {\n  listEl: document.querySelector(\"#lista\"),\n  inputEl: document.querySelector(\"input[name=username]\"),\n  botao: document.querySelector(\"#botao\"),\n  repos: [],\n  alredyAdd: [],\n\n  adicionar() {\n    var _this = this;\n\n    return _asyncToGenerator(function* () {\n      _this.setSpan(\"Carregando...\");\n\n      let userName = _this.inputEl.value;\n      let URL = `https://api.github.com/users/${userName}`;\n      const response = yield fetch(URL);\n      const resposta = yield response.json();\n\n      if (response.status !== 200) {\n        _this.setSpan(\"O repositório não existe\");\n\n        return;\n      }\n\n      const is = _this.verify(resposta.login, _this.alredyAdd);\n\n      if (is === true) {\n        _this.setSpan(\"Repositório já adicionado\");\n      } else {\n        _this.repos.push(resposta);\n\n        _this.alredyAdd.push(resposta.login);\n\n        _this.setSpan();\n\n        _this.renderRepos();\n      }\n    })();\n  },\n\n  renderRepos() {\n    this.listEl.innerHTML = \"\";\n    this.inputEl.value = \"\";\n\n    for (let i = 0; i < this.repos.length; i++) {\n      var listItem = this.createListItem(this.repos[i]);\n      this.listEl.appendChild(listItem);\n    }\n  },\n\n  createListItem(repo) {\n    let li = document.createElement(\"li\");\n    let link = document.createElement(\"a\");\n    let strong = document.createElement(\"strong\");\n    let img = document.createElement(\"img\");\n    let linkContent = document.createTextNode(\"Acesse\");\n    let strongContent = document.createTextNode(repo.login);\n    img.setAttribute(\"src\", repo.avatar_url);\n    strong.appendChild(strongContent);\n    link.setAttribute(\"href\", repo.html_url);\n    link.setAttribute(\"target\", \"_blank\");\n    link.appendChild(linkContent);\n    li.appendChild(img);\n    li.appendChild(strong);\n    li.appendChild(link);\n    return li;\n  },\n\n  setSpan(message = \"\") {\n    let span = document.querySelector(\".temp_span\");\n    span.innerText = message;\n  },\n\n  verify(username, list) {\n    let alredy = list.find(item => item === username);\n    return alredy ? true : false;\n  }\n\n}; //end object\n\nobject.botao.onclick = object.adicionar.bind(object);\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ })

/******/ });