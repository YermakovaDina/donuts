// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
      localRequire.cache = {};

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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\header_hero\\desktop_donuts.png":[["desktop_donuts.c5ce02d5.png","images/header_hero/desktop_donuts.png"],"images/header_hero/desktop_donuts.png"],"./..\\images\\header_hero\\spoon.png":[["spoon.a41d9a18.png","images/header_hero/spoon.png"],"images/header_hero/spoon.png"],"./..\\images\\bg_top_desktop.png":[["bg_top_desktop.88679caf.png","images/bg_top_desktop.png"],"images/bg_top_desktop.png"],"./..\\images\\flour_desktop.png":[["flour_desktop.03111793.png","images/flour_desktop.png"],"images/flour_desktop.png"],"./..\\images\\bg_bottom_desktop.png":[["bg_bottom_desktop.bcab3fa8.png","images/bg_bottom_desktop.png"],"images/bg_bottom_desktop.png"],"./..\\images\\header_hero\\desktop_donuts@2x.png":[["desktop_donuts@2x.4f412d8d.png","images/header_hero/desktop_donuts@2x.png"],"images/header_hero/desktop_donuts@2x.png"],"./..\\images\\header_hero\\spoon@2x.png":[["spoon@2x.c9965242.png","images/header_hero/spoon@2x.png"],"images/header_hero/spoon@2x.png"],"./..\\images\\bg_top_desktop@2x.png":[["bg_top_desktop@2x.32a6ab27.png","images/bg_top_desktop@2x.png"],"images/bg_top_desktop@2x.png"],"./..\\images\\flour_desktop@2x.png":[["flour_desktop@2x.325e6850.png","images/flour_desktop@2x.png"],"images/flour_desktop@2x.png"],"./..\\images\\bg_bottom_desktop@2x.png":[["bg_bottom_desktop@2x.3474615d.png","images/bg_bottom_desktop@2x.png"],"images/bg_bottom_desktop@2x.png"],"./..\\images\\header_hero\\tablet_donut.png":[["tablet_donut.27d79f62.png","images/header_hero/tablet_donut.png"],"images/header_hero/tablet_donut.png"],"./..\\images\\bg_top_tablet.png":[["bg_top_tablet.fee4fc3c.png","images/bg_top_tablet.png"],"images/bg_top_tablet.png"],"./..\\images\\flour_tablet.png":[["flour_tablet.8f9ab448.png","images/flour_tablet.png"],"images/flour_tablet.png"],"./..\\images\\bg_tablet_bottom.png":[["bg_tablet_bottom.b3cee29a.png","images/bg_tablet_bottom.png"],"images/bg_tablet_bottom.png"],"./..\\images\\header_hero\\tablet_donut@2x.png":[["tablet_donut@2x.9ad63295.png","images/header_hero/tablet_donut@2x.png"],"images/header_hero/tablet_donut@2x.png"],"./..\\images\\bg_top_tablet@2x.png":[["bg_top_tablet@2x.2784608c.png","images/bg_top_tablet@2x.png"],"images/bg_top_tablet@2x.png"],"./..\\images\\flour_tablet@2x.png":[["flour_tablet@2x.7f8083b8.png","images/flour_tablet@2x.png"],"images/flour_tablet@2x.png"],"./..\\images\\bg_tablet_bottom@2x.png":[["bg_tablet_bottom@2x.6cee910c.png","images/bg_tablet_bottom@2x.png"],"images/bg_tablet_bottom@2x.png"],"./..\\images\\header_hero\\mobile_donut.png":[["mobile_donut.c5698cc9.png","images/header_hero/mobile_donut.png"],"images/header_hero/mobile_donut.png"],"./..\\images\\bg_top_mobile.png":[["bg_top_mobile.e944889a.png","images/bg_top_mobile.png"],"images/bg_top_mobile.png"],"./..\\images\\flour_mobile.png":[["flour_mobile.7a660a4f.png","images/flour_mobile.png"],"images/flour_mobile.png"],"./..\\images\\bg_mobile_bottom.png":[["bg_mobile_bottom.407734c0.png","images/bg_mobile_bottom.png"],"images/bg_mobile_bottom.png"],"./..\\images\\header_hero\\mobile_donut@2x.png":[["mobile_donut@2x.1e421ad7.png","images/header_hero/mobile_donut@2x.png"],"images/header_hero/mobile_donut@2x.png"],"./..\\images\\bg_top_mobile@2x.png":[["bg_top_mobile@2x.96bfbc62.png","images/bg_top_mobile@2x.png"],"images/bg_top_mobile@2x.png"],"./..\\images\\flour_mobile@2x.png":[["flour_mobile@2x.7dc69405.png","images/flour_mobile@2x.png"],"images/flour_mobile@2x.png"],"./..\\images\\bg_mobile_bottom@2x.png":[["bg_mobile_bottom@2x.15d8505c.png","images/bg_mobile_bottom@2x.png"],"images/bg_mobile_bottom@2x.png"],"./..\\images\\confetti_desktop.png":[["confetti_desktop.5f246a2a.png","images/confetti_desktop.png"],"images/confetti_desktop.png"],"./..\\images\\confetti_desktop@2x.png":[["confetti_desktop@2x.2bb0a4f4.png","images/confetti_desktop@2x.png"],"images/confetti_desktop@2x.png"],"./..\\images\\confetti_tablet.png":[["confetti_tablet.b3be9bd9.png","images/confetti_tablet.png"],"images/confetti_tablet.png"],"./..\\images\\confetti_tablet@2x.png":[["confetti_tablet@2x.955f05cd.png","images/confetti_tablet@2x.png"],"images/confetti_tablet@2x.png"],"./..\\fonts\\montserrat-v15-latin-regular.eot":[["montserrat-v15-latin-regular.6b11e256.eot","fonts/montserrat-v15-latin-regular.eot"],"fonts/montserrat-v15-latin-regular.eot"],"./..\\fonts\\montserrat-v15-latin-regular.woff2":[["montserrat-v15-latin-regular.59caf6e5.woff2","fonts/montserrat-v15-latin-regular.woff2"],"fonts/montserrat-v15-latin-regular.woff2"],"./..\\fonts\\montserrat-v15-latin-regular.woff":[["montserrat-v15-latin-regular.a5c102ba.woff","fonts/montserrat-v15-latin-regular.woff"],"fonts/montserrat-v15-latin-regular.woff"],"./..\\fonts\\montserrat-v15-latin-regular.ttf":[["montserrat-v15-latin-regular.1c6c9fd2.ttf","fonts/montserrat-v15-latin-regular.ttf"],"fonts/montserrat-v15-latin-regular.ttf"],"./..\\fonts\\montserrat-v15-latin-regular.svg":[["montserrat-v15-latin-regular.747fa233.svg","fonts/montserrat-v15-latin-regular.svg"],"fonts/montserrat-v15-latin-regular.svg"],"./..\\fonts\\montserrat-v15-latin-500.eot":[["montserrat-v15-latin-500.3cc6303e.eot","fonts/montserrat-v15-latin-500.eot"],"fonts/montserrat-v15-latin-500.eot"],"./..\\fonts\\montserrat-v15-latin-500.woff2":[["montserrat-v15-latin-500.147801a8.woff2","fonts/montserrat-v15-latin-500.woff2"],"fonts/montserrat-v15-latin-500.woff2"],"./..\\fonts\\montserrat-v15-latin-500.woff":[["montserrat-v15-latin-500.205e0df6.woff","fonts/montserrat-v15-latin-500.woff"],"fonts/montserrat-v15-latin-500.woff"],"./..\\fonts\\montserrat-v15-latin-500.ttf":[["montserrat-v15-latin-500.378742ab.ttf","fonts/montserrat-v15-latin-500.ttf"],"fonts/montserrat-v15-latin-500.ttf"],"./..\\fonts\\montserrat-v15-latin-500.svg":[["montserrat-v15-latin-500.bc1b9476.svg","fonts/montserrat-v15-latin-500.svg"],"fonts/montserrat-v15-latin-500.svg"],"./..\\fonts\\caveat-brush-v6-latin-regular.eot":[["caveat-brush-v6-latin-regular.1167129d.eot","fonts/caveat-brush-v6-latin-regular.eot"],"fonts/caveat-brush-v6-latin-regular.eot"],"./..\\fonts\\caveat-brush-v6-latin-regular.woff2":[["caveat-brush-v6-latin-regular.5dcb6d72.woff2","fonts/caveat-brush-v6-latin-regular.woff2"],"fonts/caveat-brush-v6-latin-regular.woff2"],"./..\\fonts\\caveat-brush-v6-latin-regular.woff":[["caveat-brush-v6-latin-regular.5c06b791.woff","fonts/caveat-brush-v6-latin-regular.woff"],"fonts/caveat-brush-v6-latin-regular.woff"],"./..\\fonts\\caveat-brush-v6-latin-regular.ttf":[["caveat-brush-v6-latin-regular.fea21aa8.ttf","fonts/caveat-brush-v6-latin-regular.ttf"],"fonts/caveat-brush-v6-latin-regular.ttf"],"./..\\fonts\\caveat-brush-v6-latin-regular.svg":[["caveat-brush-v6-latin-regular.d1d62dda.svg","fonts/caveat-brush-v6-latin-regular.svg"],"fonts/caveat-brush-v6-latin-regular.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56159" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map