describe("the modules were built correctly", function() {
   it ("should have the libary", function() {
      expect(m.guid).to.not.be.undefined;
   });
   
   it ("should have the correct version", function() {
      expect(m.guid["version-guid"]).to.equal('0.1.3');
   });
});
