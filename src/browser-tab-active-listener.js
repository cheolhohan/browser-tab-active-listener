"use strict";

/**
 * Adds a listener to the document that will dispatch a "tabActivate" & "tabDeactivate" events
 */
function addBrowserTabActiveListener() {
  if (typeof document.hidden !== "undefined") {
    // Add the appropriate event listener based on browser support
    var visibilityChangeEvent = 
      typeof document.visibilityState !== "undefined" ? "visibilitychange" :
      typeof document.msHidden !== "undefined" ? "msvisibilitychange" :
      typeof document.webkitHidden !== "undefined" ? "webkitvisibilitychange" : null;

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
