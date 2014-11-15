var _guidLut = [];
for (var i = 0; i < 256; i++) {
	_guidLut[i] = (i < 16 ? '0' : '') + (i).toString(16);
}
var make = {
	get isMech() {
		return true;
	},
	get goStr() {
		return this.go;
	},
	get go() {
		var d0 = Math.random() * 0xffffffff | 0;
		var d1 = Math.random() * 0xffffffff | 0;
		var d2 = Math.random() * 0xffffffff | 0;
		var d3 = Math.random() * 0xffffffff | 0;
		return _guidLut[d0 & 0xff] + _guidLut[d0 >> 8 & 0xff] + _guidLut[d0 >> 16 & 0xff] + _guidLut[d0 >> 24 & 0xff] + '-' +
			_guidLut[d1 & 0xff] + _guidLut[d1 >> 8 & 0xff] + '-' + _guidLut[d1 >> 16 & 0x0f | 0x40] + _guidLut[d1 >> 24 & 0xff] + '-' +
			_guidLut[d2 & 0x3f | 0x80] + _guidLut[d2 >> 8 & 0xff] + '-' + _guidLut[d2 >> 16 & 0xff] + _guidLut[d2 >> 24 & 0xff] +
			_guidLut[d3 & 0xff] + _guidLut[d3 >> 8 & 0xff] + _guidLut[d3 >> 16 & 0xff] + _guidLut[d3 >> 24 & 0xff];
	}
};
m.guid.make = make;