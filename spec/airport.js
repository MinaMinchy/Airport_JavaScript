describe('Airport', function() {
  var plane, airport;
  
  beforeEach(function() {
    plane = {
      land: function() {},
      takeOff: function() {}
    }

    spyOn(plane, 'land')
    spyOn(plane, 'takeOff')
   
    airport = new Airport()
  })

  describe('plane lands', function() {
    it('instructs a plane to land', function() {
      expect(airport.instructToLand(plane)).toEqual([plane])
      expect(plane.land).toHaveBeenCalled()
    });
  });

  describe('plane takes off', function() {
    it('instructs a plane to take off', function() {
      airport.instructToTakeOff(plane)
      expect(plane.takeOff).toHaveBeenCalled()
    });
  });
});