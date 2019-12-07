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
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascript/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/script.js":
/*!******************************!*\
  !*** ./javascript/script.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var listEl = document.querySelector(\"#lista\");\nvar inputEl = document.querySelector(\"input[name=username]\");\nvar botao = document.querySelector(\"#botao\");\nvar repos = [];\nbotao.onclick = clicar;\n\nfunction clicar() {\n  setSpan('carregando...');\n  adicionar().then(function () {\n    setSpan();\n    renderRepos();\n  })[\"catch\"](function (erro) {\n    setSpan(erro);\n    console.log(erro);\n  });\n}\n\nfunction adicionar() {\n  var user = inputEl.value;\n  var URL = \"https://api.github.com/users/\".concat(user);\n  console.log(URL);\n  return new Promise(function (resolve, reject) {\n    var xhr = new XMLHttpRequest();\n    xhr.open(\"GET\", URL);\n    xhr.send(null);\n\n    xhr.onreadystatechange = function () {\n      if (xhr.readyState === 4) {\n        if (xhr.status === 200) {\n          repos.push(JSON.parse(xhr.responseText));\n          resolve();\n        } else {\n          reject(\"O repositório não existe\");\n        }\n      }\n    };\n  });\n}\n\nfunction renderRepos() {\n  listEl.innerHTML = \"\";\n  inputEl.value = \"\";\n\n  for (var i = 0; i < repos.length; i++) {\n    var listItem = createListItem(repos[i]);\n    listEl.appendChild(listItem);\n  }\n}\n\nfunction createListItem(repo) {\n  var li = document.createElement(\"li\");\n  var link = document.createElement(\"a\");\n  var strong = document.createElement(\"strong\");\n  var img = document.createElement(\"img\");\n  var linkContent = document.createTextNode(\"Acesse\");\n  var strongContent = document.createTextNode(repo.login);\n  img.setAttribute(\"src\", repo.avatar_url);\n  strong.appendChild(strongContent);\n  link.setAttribute(\"href\", repo.html_url);\n  link.setAttribute(\"target\", \"_blank\");\n  link.appendChild(linkContent);\n  li.appendChild(img);\n  li.appendChild(strong);\n  li.appendChild(link);\n  return li;\n}\n\nfunction setSpan() {\n  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var span = document.querySelector(\".temp_span\");\n  span.innerText = message;\n}\n\n//# sourceURL=webpack:///./javascript/script.js?");

/***/ })

/******/ });