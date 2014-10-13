(function() {
"use strict";
var root = this; // Establish the root: window is browser, exports is server
var previous = root.mguid; // Save previous
var mguid = previous || {}; // New module or merge with previous
mguid["version"] = '{{VERSION}}'; // version updated by gulpfile.js build process

// Export module for Node and the browser.
if(typeof module !== 'undefined' && module.exports) {
  module.exports = mguid;
} else {
  this.mguid = mguid;
}
