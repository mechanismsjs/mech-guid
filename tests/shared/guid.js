describe("guid mechanism - guid", function() {
	it("should not wipeout Object prototype and be a mechanism", function() {
		var mech = m.guid.guid();
		expect(mech).to.have.property('toString');
		expect(m.guid._.GuidF).to.not.be.undefined;
	});

	it("should have correct properties", function() {
		var mech = m.guid.guid();
		expect(mech.isMech).to.be.true;
		expect(mech).to.have.property('_g'); // imagined privacy
	});

	it("should set _parDir of child mechanisms to parent", function() {
		var mech = m.guid.isValid();
		var mech3 = m.guid.guid(mech);
		expect(mech._parDir).to.equal(mech3);
	});

	it("should generate a new guid when nothing is passed", function() {
		var mech = m.guid.guid();
		expect(mech.goStr.length).to.equal(36);
		expect(mech.go.length).to.equal(36);
		expect(mech.isEmpty).to.be.false;
	});

	it("should accept a valid guid string", function() {
		var mech = m.guid.guid("00000000-0000-0000-0000-000000000000");
		expect(mech.go).to.equal("00000000-0000-0000-0000-000000000000");
		expect(mech.go.length).to.equal(36);
		expect(mech.goStr).to.equal("00000000-0000-0000-0000-000000000000");
		expect(mech.goStr.length).to.equal(36);
		expect(mech.isEmpty).to.be.true;
	});

	it("should accept a valid guid string", function() {
		var mech = m.guid.guid("8e41728c-e3fc-4d41-8d06-bf9e3a611e6f");
		expect(mech.go).to.equal("8e41728c-e3fc-4d41-8d06-bf9e3a611e6f");
		expect(mech.go.length).to.equal(36);
		expect(mech.goStr).to.equal("8e41728c-e3fc-4d41-8d06-bf9e3a611e6f");
		expect(mech.goStr.length).to.equal(36);
		expect(mech.isEmpty).to.be.false;
	});


	it("should accept an existing guid", function() {
		var mech = m.guid.guid(m.guid.guid("59bff7d1-c148-4a47-ad4e-2db684524ae0"));
		expect(mech.go).to.equal("59bff7d1-c148-4a47-ad4e-2db684524ae0");
		expect(mech.goStr).to.equal("59bff7d1-c148-4a47-ad4e-2db684524ae0");
		expect(mech.isEmpty).to.be.false;
	});

	it("should accept an empty guid", function() {
		var mech = m.guid.guid(m.guid.empty);
		expect(mech.go).to.equal("00000000-0000-0000-0000-000000000000");
		expect(mech.goStr).to.equal("00000000-0000-0000-0000-000000000000");
		expect(mech.isEmpty).to.be.true;
	});

	it("should not be empty when a non valid guid is passed and validate is set to true", function() {
		var mech = m.guid.guid("8e41728c");
		expect(mech.go).to.equal("8e41728c");
		expect(mech.goStr).to.equal("8e41728c");
		expect(mech.isEmpty).to.be.false;
	});

	it("should be empty when a non valid guid is passed and validate is set to true", function() {
		var mech = m.guid.guid("8e41728c", true);
		expect(mech.go).to.equal("00000000-0000-0000-0000-000000000000");
		expect(mech.goStr).to.equal("00000000-0000-0000-0000-000000000000");
		expect(mech.isEmpty).to.be.true;
	});
});
