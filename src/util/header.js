(function() {
"use strict";

var root = this; // window (browser) or exports (server)
var m = root.m || { guid : { _ : {} } }; // new module or merge with previous
m.guid = m.guid || { guid : { _ : {} } }; // new sub-module or merge with pervious
m.guid._ = m.guid._ || { _ : {}}; // new sub-module or merge with pervious
m.guid["version-guid"] = '{{VERSION}}'; // New library OR to use existing library (m for example), please fork and add to that project.

// Export module for Node and the browser.
if(typeof module !== 'undefined' && module.exports) {
  module.exports = m;
} else {
  root.m = m
}