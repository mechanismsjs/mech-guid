function isValid(guid) {
	var f = Object.create(IsValidF.prototype);
	f._g = guid;
	if (f._g && f._g.isMech) {
		f._g._parDir = f;
	}
	return f;
};

function IsValidF() {};
// TODO: Only validates 'all' type guids. Need to allow validation of ver: 3,4,5
IsValidF.prototype = Object.create(Object.prototype, {
	isMech: {
		get: function() {
			return true;
		}
	},
	go: {
		get: function() {
			return this.goBool;
		}
	},
	goBool: {
		get: function() {
			return ((this._g === null) || (this._g === undefined)) ?
				false :
				/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i.test(this._g.isMech ? this._g.go : this._g);
		}
	}
});
m.guid.isValid = isValid;
m.guid._.IsValidF = IsValidF;