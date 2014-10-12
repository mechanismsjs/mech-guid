describe ("guid validation mechanism - isValid", function() {   
   // it ("should be a static mechanism", function() {
   //    var mech = mguid.isValid();
   //    expect(mech).to.have.property('toString');
   // });
   // 
   // it ("should have correct properties", function() {
   //    var mech = mguid.isValid();
   //    expect(mech.isMech).to.be.true;
   // });
   
   it ("should consider a valid guid mechanism as valid", function() {
      var mech = mguid.isValid(mguid.make);
      expect(mech.go).to.be.true;
   });

   it ("should consider a valid guid as valid", function() {
      var mech = mguid.isValid("56ee5d88-5a14-4ecc-966c-00bf2fcc7cd6");
      expect(mech.go).to.be.true;
   });

   it ("should consider an empty guid as valid", function() {
      var mech = mguid.isValid(mguid.empty.go);
      expect(mech.go).to.be.true;
   });

   
   it ("should consider an empty parameter list as invalid", function() {
      var mech = mguid.isValid();
      expect(mech.go).to.be.false;
   });

   it ("should consider an undefined value as invalid", function() {
      var mech = mguid.isValid(undefined);
      expect(mech.go).to.be.false;
   });

   it ("should consider a null value as invalid", function() {
      var mech = mguid.isValid(null);
      expect(mech.go).to.be.false;
   });

   it ("should consider an invalid guid as invalid", function() {
      expect(mguid.isValid(0).go).to.be.false;
      expect(mguid.isValid(23).go).to.be.false;
      expect(mguid.isValid("23").go).to.be.false;
      expect(mguid.isValid("56ee5d88B5a14B4eccB966cB00bf2fcc7cd6").go).to.be.false;      
      expect(mguid.isValid("56ee5d88-5a14-4ecc-966cZ00bf2fcc7cd6").go).to.be.false;      
      expect(mguid.isValid("56ee5d88-5a14-4eccZ966c-00bf2fcc7cd6").go).to.be.false;      
      expect(mguid.isValid("56ee5d88-5a14Z4ecc-966c-00bf2fcc7cd6").go).to.be.false;      
      expect(mguid.isValid("56ee5d88Z5a14-4ecc-966c-00bf2fcc7cd6").go).to.be.false;      
      expect(mguid.isValid("56ee5d88-5a14-Qecc-966c-00bf2fcc7cd6").go).to.be.false; // no 4 in 14 pos
      expect(mguid.isValid("56ee5d88-5a14-4ecc-966c-00bf2fcc7cd6").go).to.be.true;
      expect(mguid.isValid("Q6ee5d88-5a14-4ecc-966c-00bf2fcc7cd6").go).to.be.false;
      expect(mguid.isValid("56EE5d88-5a14-4ecc-966c-00bf2fcc7cd6").go).to.be.true; // upper/lower case ok.
   });
   
});