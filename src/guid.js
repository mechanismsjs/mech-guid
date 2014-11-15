function guid(guidp, valid) {
	var f = Object.create(GuidF.prototype);
	f._v = valid;
	f.g = guidp;
	if (guidp && guidp.isMech) {
		guidp._parDir = f;
	}
	return f;
}

function GuidF() {}
GuidF.prototype = Object.create(Object.prototype, {
	isMech: {
		get: function() {
			return true;
		}
	},
	isEmpty: {
		get: function() {
			return this._g.isMech ? this._g.isEmpty : (this._g === empty.go);
		}
	},
	g: {
		set: function(d) {
			if (this._v) {
				if (!isValid(d).goBool) {
					d = empty.go;
				}
			}
			this._g = ((null === d) || (undefined === d)) ? make.go : d;
		}
	},
	go: {
		get: function() {
			return this._g.isMech ? this._g.go : this._g;
		}
	},
	goStr: {
		get: function() {
			return this._g.isMech ? this._g.goStr : this._g;
		}
	}
});
m.guid.guid = guid;
m.guid._.GuidF = GuidF;