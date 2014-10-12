describe ("guid empty mechanism - empty", function() {   
   it ("should be a static mechanism", function() {
      expect(mguid.empty).to.have.property('toString');
   });
   it ("should have correct properties", function() {
      var mech = mguid.empty;
      expect(mech.isMech).to.be.true;
      expect(mech.isEmpty).to.be.true;
   });
   it ("should return an empty guid", function() {
      var mech = mguid.empty;
      expect(mech.go).to.equal ("00000000-0000-0000-0000-000000000000");
      expect(mech.goStr).to.equal ("00000000-0000-0000-0000-000000000000");
      expect(mech.isEmpty).to.be.true;
   });
});