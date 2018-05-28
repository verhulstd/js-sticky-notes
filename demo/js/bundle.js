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

parcelRequire = function (e, r, n, t) {
  function i(n, t) {
    function o(e) {
      return i(o.resolve(e));
    }function c(r) {
      return e[n][1][r] || r;
    }if (!r[n]) {
      if (!e[n]) {
        var l = "function" == typeof parcelRequire && parcelRequire;if (!t && l) return l(n, !0);if (u) return u(n, !0);if (f && "string" == typeof n) return f(n);var p = new Error("Cannot find module '" + n + "'");throw p.code = "MODULE_NOT_FOUND", p;
      }o.resolve = c;var a = r[n] = new i.Module(n);e[n][0].call(a.exports, o, a, a.exports, this);
    }return r[n].exports;
  }function o(e) {
    this.id = e, this.bundle = i, this.exports = {};
  }var u = "function" == typeof parcelRequire && parcelRequire,
      f = "function" == typeof require && require;i.isParcelRequire = !0, i.Module = o, i.modules = e, i.cache = r, i.parent = u;for (var c = 0; c < n.length; c++) {
    i(n[c]);
  }if (n.length) {
    var l = i(n[n.length - 1]);"object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : t && (this[t] = l);
  }return i;
}({ 4: [function (require, module, exports) {}, {}], 3: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var t = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
      }return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    }();function e(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }var n = function () {
      function n(t) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];e(this, n), this.msg = t, this.bgImage = this.getRandomBgImg(), this.rotation = this.getRandomRotation(), this.position = this.getRandomPosition(), this.htmlElement = "", this.init(), this.setUpEventListeners();
      }return t(n, [{ key: "init", value: function value() {
          document.body.insertAdjacentHTML("afterbegin", '\n    <div class="postit">\n      <strong class="close"></strong>\n      <strong class="drag"></strong>\n      ' + this.msg + "\n    </div>"), this.htmlElement = document.querySelector("div"), Object.assign(this.htmlElement.style, { left: this.position.x + "px", top: this.position.y + "px", transform: "rotate(" + this.rotation + "deg)", backgroundImage: "url('images/" + this.bgImage + ".png')" });
        } }, { key: "setUpEventListeners", value: function value() {
          this.htmlElement.querySelector(".close").addEventListener("click", this.handleClose.bind(this));
        } }, { key: "handleClose", value: function value(t) {
          this.htmlElement.remove();
        } }, { key: "getRandomBgImg", value: function value() {
          return ["pink", "yellow", "green"][Math.floor(3 * Math.random())];
        } }, { key: "getRandomRotation", value: function value() {
          return Math.floor(30 * Math.random()) - 15;
        } }, { key: "getRandomPosition", value: function value() {
          var t = this.getResolution();return { x: Math.floor(Math.random() * (t.width - 370)) + 185, y: Math.floor(Math.random() * (t.height - 400)) + 200 };
        } }, { key: "getResolution", value: function value() {
          return { width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight };
        } }]), n;
    }();exports.default = n;
  }, {}], 1: [function (require, module, exports) {
    "use strict";
    var e = require("fs"),
        t = r(e),
        o = require("./StickyNotes"),
        i = r(o);function r(e) {
      return e && e.__esModule ? e : { default: e };
    }var s = '@charset "UTF-8";@import url("icons.88c54b86.css");@import url("https://fonts.googleapis.com/css?family=Cedarville+Cursive");*{-webkit-box-sizing:border-box;box-sizing:border-box}a{text-decoration:none}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,input,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;vertical-align:baseline;border:none;outline:none;font-family:Roboto}.fix:after{display:block;content:"";clear:both}.responsive{width:100%;height:auto}.responsive,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}body,html{width:100%;min-height:100%}.postit{opacity:1;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;-khtml-user-drag:element;-webkit-user-drag:element;font-family:Cedarville Cursive,cursive;font-size:40px;color:rgba(0,0,0,.65);position:absolute;width:370px;height:400px;padding:103px 53px 53px 41px;line-height:40px;margin-left:-185px;margin-top:-200px;-webkit-transition:opacity .3s;transition:opacity .3s}.postit strong.close,.postit strong.drag{position:absolute;top:57px;width:20px;height:20px;right:41px;line-height:20px;cursor:pointer}.postit strong.close:before,.postit strong.drag:before{content:"";display:block;position:absolute;font-family:icons;font-size:17px;color:rgba(0,0,0,.65);-webkit-transition:all .3s;transition:all .3s}.postit strong.close:hover:before,.postit strong.drag:hover:before{color:#000}.postit strong.drag{right:auto;left:27px}.postit strong.drag:before{content:"";display:block;position:absolute;font-family:icons}',
        n = document.createElement("style");n.type = "text/css", n.appendChild(document.createTextNode(s)), document.head.appendChild(n), module.exports = i.default;
  }, { "fs": 4, "./StickyNotes": 3 }] }, {}, [1], "StickyNotes");
//# sourceMappingURL=index.map
},{}],1:[function(require,module,exports) {
"use strict";

var _index = require("../../dist/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// importing using require
// var StickyNotes = require("../../dist/index");

var allPostitInstances = {}; // ES6 import

var quotes = ["Genius is one percent inspiration and ninety-nine percent perspiration.", "Fate is in your hands and no one elses", "Nothing happens unless first we dream.", "Life is change. Growth is optional. Choose wisely.", "Never mistake activity for achievement.", "Who sows virtue reaps honour.", "What worries you masters you.", "Wisdom begins in wonder.", "What you fear is that which requires action to overcome.", "Courage is going from failure to failure without losing enthusiasm."];
var arr = [];
while (arr.length < 5) {
  var randomnumber = Math.floor(Math.random() * 9) + 1;
  if (arr.indexOf(randomnumber) > -1) continue;
  arr[arr.length] = randomnumber;
}
for (var i = 0; i < 5; i++) {
  allPostitInstances["element-" + i] = new _index2.default(quotes[arr[i]]);
}
},{"../../dist/index":3}]},{},[1], null)
//# sourceMappingURL=bundle.map