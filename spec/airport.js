describe('Airport', function() {
  var plane, airport;
  
  beforeEach(function() {
    plane = {
      land: function() {}
    }

    spyOn(plane, 'land')
   
    airport = new Airport()
  })

  describe('plane lands', function() {
    it('instructs a plane to land', function() {
      expect(airport.instructsToLand(plane)).toEqual([plane])
      expect(plane.land).toHaveBeenCalled()
    });
  });
});