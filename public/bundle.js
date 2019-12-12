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

eval("var object = {\n  listEl: document.querySelector(\"#lista\"),\n  inputEl: document.querySelector(\"input[name=username]\"),\n  botao: document.querySelector(\"#botao\"),\n  repos: [],\n  alredyAdd: [],\n  clicar: function clicar() {\n    var _this = this;\n\n    this.setSpan(\"Carregando...\");\n    this.adicionar().then(function (message) {\n      _this.setSpan(message);\n\n      _this.renderRepos();\n    })[\"catch\"](function (erro) {\n      _this.setSpan(erro);\n    });\n  },\n  adicionar: function adicionar() {\n    var _this2 = this;\n\n    var user = this.inputEl.value;\n    var URL = \"https://api.github.com/users/\".concat(user);\n    return new Promise(function (resolve, reject) {\n      var xhr = new XMLHttpRequest();\n      xhr.open(\"GET\", URL);\n      xhr.send(null);\n      self = _this2;\n\n      xhr.onreadystatechange = function () {\n        if (xhr.readyState === 4) {\n          if (xhr.status === 200) {\n            var resposta = JSON.parse(xhr.responseText);\n            var is = self.verify(resposta.login, self.alredyAdd);\n\n            if (is === true) {\n              resolve(\"repositório ja adicionado\");\n              return;\n            } else {\n              self.repos.push(resposta);\n              self.alredyAdd.push(resposta.login);\n              resolve();\n            }\n          } else {\n            reject(\"O repositório não existe\");\n          }\n        }\n      };\n    });\n  },\n  renderRepos: function renderRepos() {\n    this.listEl.innerHTML = \"\";\n    this.inputEl.value = \"\";\n\n    for (var i = 0; i < this.repos.length; i++) {\n      var listItem = this.createListItem(this.repos[i]);\n      this.listEl.appendChild(listItem);\n    }\n  },\n  createListItem: function createListItem(repo) {\n    var li = document.createElement(\"li\");\n    var link = document.createElement(\"a\");\n    var strong = document.createElement(\"strong\");\n    var img = document.createElement(\"img\");\n    var linkContent = document.createTextNode(\"Acesse\");\n    var strongContent = document.createTextNode(repo.login);\n    img.setAttribute(\"src\", repo.avatar_url);\n    strong.appendChild(strongContent);\n    link.setAttribute(\"href\", repo.html_url);\n    link.setAttribute(\"target\", \"_blank\");\n    link.appendChild(linkContent);\n    li.appendChild(img);\n    li.appendChild(strong);\n    li.appendChild(link);\n    return li;\n  },\n  setSpan: function setSpan() {\n    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n    var span = document.querySelector(\".temp_span\");\n    span.innerText = message;\n  },\n  verify: function verify(username, list) {\n    var alredy = list.find(function (item) {\n      return item === username;\n    });\n    return alredy ? true : false;\n  }\n}; //end object\n\nobject.botao.onclick = object.clicar.bind(object);\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ })

/******/ });