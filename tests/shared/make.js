describe ("guid make mechanism - make", function() {   
   it ("should be a static mechanism", function() {
      expect(mguid.make).to.have.property('toString');
   });

   it ("should have correct properties", function() {
      var mech = mguid.make;
      expect(mech.isMech).to.be.true;
   });
   
   it ("should make a guid correctly", function() {
      expect(mguid.isValid(mguid.make).go).to.be.true;
   });

   it ("should make different guids", function() {
      var mech = mguid.make;
      
      for (var q=0; q<30; q++ ) {
         expect(mech.go).to.not.equal(mech.go);
         expect(mech.goStr).to.not.equal(mech.goStr);
      }
   });
   
   it ("can generate unique guid numbers", function() {
      var nums = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      var count = 10000;
      var divideby = 2/(32/31); // because pos #14 is always 4
      var mech = mguid.make;
      for (var i=0;i<count;i++) {
         var x = mech.go;
         // of form 56ee5d88-5a14-4ecc-966c-00bf2fcc7cd6
         nums[parseInt(x[0], 16)]++;
         nums[parseInt(x[1], 16)]++;
         nums[parseInt(x[2], 16)]++;
         nums[parseInt(x[3], 16)]++;
         nums[parseInt(x[4], 16)]++; 
         nums[parseInt(x[5], 16)]++;
         nums[parseInt(x[6], 16)]++;
         nums[parseInt(x[7], 16)]++;
         // - 8
         nums[parseInt(x[9], 16)]++;
         nums[parseInt(x[10], 16)]++;
         nums[parseInt(x[11], 16)]++;
         nums[parseInt(x[12], 16)]++;
         // - 13
         // nums[parseInt(x[14], 16)]++; // always 4
         nums[parseInt(x[15], 16)]++;
         nums[parseInt(x[16], 16)]++;
         nums[parseInt(x[17], 16)]++;
         // - 18
         nums[parseInt(x[19], 16)]++;
         nums[parseInt(x[20], 16)]++;
         nums[parseInt(x[21], 16)]++;
         nums[parseInt(x[22], 16)]++;
         // - 23
         nums[parseInt(x[24], 16)]++;
         nums[parseInt(x[25], 16)]++;
         nums[parseInt(x[26], 16)]++;
         nums[parseInt(x[27], 16)]++;
         nums[parseInt(x[28], 16)]++;
         nums[parseInt(x[29], 16)]++;
         nums[parseInt(x[30], 16)]++;
         nums[parseInt(x[31], 16)]++;
         nums[parseInt(x[32], 16)]++;
         nums[parseInt(x[33], 16)]++;
         nums[parseInt(x[34], 16)]++;
         nums[parseInt(x[35], 16)]++;
      }
      var numsc = _.map(nums, function(n){
         return n / count / divideby;
      });
      
      // hex 14 is always 4 V4 guid, and hex 19 is always between 8 and 11
      // from 0 - 7 sb between 0.94 and 1.0
      // from 8-12 sb between 1.00 and 1.10
      // from 13-17 between 0.94 and 1.0
      
      for (var k=0; k<8; k++) {
         expect(numsc[k]).to.be.within(0.90, 1.0);
      }
      for (var l=8; l<=11; l++) {
         expect(numsc[l]).to.be.within(1.0, 1.15);
      }
      for (var q=12; q<=15; q++) {
         expect(numsc[q]).to.be.within(0.90, 1.0);
      }
   });
   
});