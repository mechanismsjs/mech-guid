describe ("guid validation mechanism - isValid", function() {   
   it ("should be a static mechanism", function() {
      var mech = m.guid.isValid();
      expect(mech).to.have.property('toString');
      expect(m.guid._.IsValidF).to.not.be.undefined;
   });

   it ("should have correct properties", function() {
      var mech = m.guid.isValid();
      expect(mech.isMech).to.be.true;
   });
   
   it ("should consider a valid guid mechanism as valid", function() {
      var mech = m.guid.isValid(m.guid.make);
      expect(mech.go).to.be.true;
   });

   it ("should consider a valid guid as valid", function() {
      var mech = m.guid.isValid("56ee5d88-5a14-4ecc-966c-00bf2fcc7cd6");
      expect(mech.go).to.be.true;
   });

   it ("should consider an empty guid as valid", function() {
      var mech = m.guid.isValid(m.guid.empty.go);
      expect(mech.go).to.be.true;
   });

   
   it ("should consider an empty parameter list as invalid", function() {
      var mech = m.guid.isValid();
      expect(mech.go).to.be.false;
   });

   it ("should consider an undefined value as invalid", function() {
      var mech = m.guid.isValid(undefined);
      expect(mech.go).to.be.false;
   });

   it ("should consider a null value as invalid", function() {
      var mech = m.guid.isValid(null);
      expect(mech.go).to.be.false;
   });

   it ("should consider an invalid guid as invalid", function() {
      expect(m.guid.isValid(0).go).to.be.false;
      expect(m.guid.isValid(23).go).to.be.false;
      expect(m.guid.isValid("23").go).to.be.false;
      expect(m.guid.isValid("56ee5d88B5a14B4eccB966cB00bf2fcc7cd6").go).to.be.false;      
      expect(m.guid.isValid("56ee5d88-5a14-4ecc-966cZ00bf2fcc7cd6").go).to.be.false;      
      expect(m.guid.isValid("56ee5d88-5a14-4eccZ966c-00bf2fcc7cd6").go).to.be.false;      
      expect(m.guid.isValid("56ee5d88-5a14Z4ecc-966c-00bf2fcc7cd6").go).to.be.false;      
      expect(m.guid.isValid("56ee5d88Z5a14-4ecc-966c-00bf2fcc7cd6").go).to.be.false;      
      expect(m.guid.isValid("56ee5d88-5a14-Qecc-966c-00bf2fcc7cd6").go).to.be.false; // no 4 in 14 pos
      expect(m.guid.isValid("56ee5d88-5a14-4ecc-966c-00bf2fcc7cd6").go).to.be.true;
      expect(m.guid.isValid("Q6ee5d88-5a14-4ecc-966c-00bf2fcc7cd6").go).to.be.false;
      expect(m.guid.isValid("56EE5d88-5a14-4ecc-966c-00bf2fcc7cd6").go).to.be.true; // upper/lower case ok.
   });
   
});