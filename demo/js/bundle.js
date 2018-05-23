// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({3:[function(require,module,exports) {
var define;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
}({ 3: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
      }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
      };
    }();

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var StickyNotes = exports.StickyNotes = function () {
      function StickyNotes(msg) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, StickyNotes);

        this.msg = msg;
        this.bgImage = this.getRandomBgImg();
        this.rotation = this.getRandomRotation();
        this.position = this.getRandomPosition();
        this.htmlElement = "";
        this.init();
        this.setUpEventListeners();
      }

      _createClass(StickyNotes, [{
        key: 'init',
        value: function init() {
          document.body.insertAdjacentHTML('afterbegin', '\n    <div class="postit">\n      <strong class="close"></strong>\n      <strong class="drag"></strong>\n      ' + this.msg + '\n    </div>');
          this.htmlElement = document.querySelector('div');
          Object.assign(this.htmlElement.style, {
            left: this.position.x + 'px',
            top: this.position.y + 'px',
            transform: 'rotate(' + this.rotation + 'deg)',
            backgroundImage: 'url(\'images/' + this.bgImage + '.png\')'
          });
        }
      }, {
        key: 'setUpEventListeners',
        value: function setUpEventListeners() {
          this.htmlElement.querySelector('.close').addEventListener('click', this.handleClose.bind(this));
          /*
          Draggable.create(this.htmlElement, {
            type: "x,y",
            trigger: this.htmlElement.querySelector('.drag'),
            edgeResistance: 0.65,
            bounds: "body",
            onDragStart: function () {
              this.target.style.opacity = '.4';
              this.target.style.transform = 'scale(1.1)';
            },
            onDragEnd: function () {
              this.target.style.opacity = '1';
            }
          });
          */
        }
      }, {
        key: 'handleClose',
        value: function handleClose(e) {
          this.htmlElement.remove();
        }
      }, {
        key: 'getRandomBgImg',
        value: function getRandomBgImg() {
          var colors = ['pink', 'yellow', 'green'];
          return colors[Math.floor(Math.random() * 3)];
        }
      }, {
        key: 'getRandomRotation',
        value: function getRandomRotation() {
          return Math.floor(Math.random() * 30) - 15;
        }
      }, {
        key: 'getRandomPosition',
        value: function getRandomPosition() {
          var resolution = this.getResolution();
          var position = {
            x: Math.floor(Math.random() * (resolution.width - 370)) + 370 / 2,
            y: Math.floor(Math.random() * (resolution.height - 400)) + 400 / 2
          };
          return position;
        }
      }, {
        key: 'getResolution',
        value: function getResolution() {
          var resolution = {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
          };
          return resolution;
        }
      }]);

      return StickyNotes;
    }();
  }, {}], 1: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _StickyNotes = require('./StickyNotes');

    //export StickyNotes
    exports.default = _StickyNotes.StickyNotes; // this file bundles css + js and exports to build UMD

    //import styling for sticky-notes
    //import styles from '../css/styles';

    //import class sticky-notes library
  }, { "./StickyNotes": 3 }] }, {}, [1], "StickNotes");
//# sourceMappingURL=index.map
},{}],1:[function(require,module,exports) {
"use strict";

var _index = require("../../dist/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allPostitInstances = {};
var quotes = ["Genius is one percent inspiration and ninety-nine percent perspiration.", "Fate is in your hands and no one elses", "Nothing happens unless first we dream.", "Life is change. Growth is optional. Choose wisely.", "Never mistake activity for achievement.", "Who sows virtue reaps honour.", "What worries you masters you.", "Wisdom begins in wonder.", "What you fear is that which requires action to overcome.", "Courage is going from failure to failure without losing enthusiasm."];
var arr = [];
while (arr.length < 5) {
    var randomnumber = Math.floor(Math.random() * 9) + 1;
    if (arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
}
for (var i = 0; i < 5; i++) {
    allPostitInstances['element-' + i] = new _index2.default(quotes[arr[i]]);
}
},{"../../dist/index":3}]},{},[1], null)
//# sourceMappingURL=bundle.map