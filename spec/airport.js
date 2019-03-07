describe('Airport', function() {

  beforeEach(function() {
    airport = new Airport();
    plane1 = new Plane();
    plane2 = new Plane();
  })

  it('plane lands', function() {
    airport.land(plane1);
    expect(airport.planes_landed).toContain(plane1);
  })

  it('plane take off', function() {
  airport.takeOff(plane1)
  expect(airport.planes_landed).not.toContain(plane1)
  })

  it("says plane can't take off if it's stormy", function() {
    airport.weather = "stormy";
    expect(airport.air_control(plane1)).toEqual("Plane can't take off")
  })

});
