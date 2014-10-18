(function() {
"use strict";

var root = this; // window (browser) or exports (server)
var m = root.m || { guid : { _ : {} } }; // merge with previous or new module
m.guid = m.guid || { guid : { _ : {} } }; // merge with pervious or new sub-module
m.guid._ = m.guid._ || { _ : {}}; // merge with pervious or new sub-module
m.guid._["version-{{NAMESUB}}"] = '{{VERSION}}'; // version set through gulp build

// export module for node or the browser
if(typeof module !== 'undefined' && module.exports) {
  module.exports = m;
} else {
  root.m = m
}