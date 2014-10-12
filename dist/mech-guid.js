// mech-guid.js
// version: 0.1.1
// author: Eric Hosick <erichosick@gmail.com> (http://www.erichosick.com/)
// license: MIT
(function() {
"use strict";
var root = this; // Establish the root: window is browser, exports is server
var previous = root.mguid; // Save previous
var mguid = previous || {}; // New module or merge with previous
mguid["version"] = '0.1.1'; // version updated by gulpfile.js build process

// Export module for Node and the browser.
if(typeof module !== 'undefined' && module.exports) {
  module.exports = mguid;
} else {
  this.mguid = mguid;
}

function guid(guid,valid) {
   var f = Object.create(GuidF.prototype);
   f._v = valid;   
   f.g = guid;
   return f;
};
function GuidF() {};
GuidF.prototype = Object.create ( Object.prototype, {
   isMech: { get: function() { return true; }},
   isEmpty: { get: function() { return this._g.isMech ? this._g.isEmpty : (this._g === empty.go); }},
   g: {
      set: function(d) {
         if ( this._v ) {
            if (!isValid(d).goBool) {
               d = empty.go;
            }
         }
         this._g = ((null === d) || (undefined === d)) ? make.go : d;
      }
   },
   go: { get: function() { return this._g.isMech ? this._g.go : this._g; } },
   goStr: { get: function() { return this._g.isMech ? this._g.goStr : this._g; } }
});
mguid.guid = guid;
mguid.GuidF = GuidF;

var _guidLut = []; for (var i=0; i<256; i++) { _guidLut[i] = (i<16?'0':'')+(i).toString(16); }
var make = {
   get isMech() { return true; },
   get goStr() { return this.go; },
   get go() {
      var d0 = Math.random()*0xffffffff|0;
      var d1 = Math.random()*0xffffffff|0;
      var d2 = Math.random()*0xffffffff|0;
      var d3 = Math.random()*0xffffffff|0;
      return _guidLut[d0&0xff]+_guidLut[d0>>8&0xff]+_guidLut[d0>>16&0xff]+_guidLut[d0>>24&0xff]+'-'+
        _guidLut[d1&0xff]+_guidLut[d1>>8&0xff]+'-'+_guidLut[d1>>16&0x0f|0x40]+_guidLut[d1>>24&0xff]+'-'+
        _guidLut[d2&0x3f|0x80]+_guidLut[d2>>8&0xff]+'-'+_guidLut[d2>>16&0xff]+_guidLut[d2>>24&0xff]+
        _guidLut[d3&0xff]+_guidLut[d3>>8&0xff]+_guidLut[d3>>16&0xff]+_guidLut[d3>>24&0xff];
   }
};
mguid.make = make;

var empty = {
   get isMech() { return true; },
   get isEmpty() { return true; },   
   get goStr() { return "00000000-0000-0000-0000-000000000000"; },
   get go() { return "00000000-0000-0000-0000-000000000000"; }
};
mguid.empty = empty;
function isValid(guid) {
   var f = Object.create(IsValidF.prototype);
   f._g = guid;
   return f;
};
function IsValidF() {};
// TODO: Only does 'all'. Need to allow validation of ver: 3,4,5
IsValidF.prototype = Object.create ( Object.prototype, {
   isMech: { get: function() { return true; }},
   go: { get: function() { return this.goBool; }},
   goBool: { get: function() {
     return ((this._g === null) || (this._g === undefined)) ?
       false :
       /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i.test(this._g.isMech ? this._g.go : this._g);
   }}
});
mguid.isValid = isValid;
mguid.IsValidF = IsValidF;

}.call(this));