(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/**
 * Adds a listener to the document that will dispatch a "tabActivate" & "tabDeactivate" events
 */
function addBrowserTabActiveListener() {
  if (typeof document.hidden !== "undefined") {
    // Add the appropriate event listener based on browser support
    var visibilityChangeEvent = typeof document.visibilityState !== "undefined" ? "visibilitychange" : typeof document.msHidden !== "undefined" ? "msvisibilitychange" : typeof document.webkitHidden !== "undefined" ? "webkitvisibilitychange" : null;
    if (visibilityChangeEvent) {
      // Add event listener to handle visibility change
      document.addEventListener(visibilityChangeEvent, () => {
        if (document.hidden || document.msHidden || document.webkitHidden) {
          document.dispatchEvent(new CustomEvent("tabDeactivate"));
        } else {
          document.dispatchEvent(new CustomEvent("tabActivate"));
        }
      });
    }
  }
}

// export default addBrowserTabActiveListener;
module.exports = addBrowserTabActiveListener;

},{}],2:[function(require,module,exports){
require('./browser-tab-active-listener')();

},{"./browser-tab-active-listener":1}]},{},[2]);
