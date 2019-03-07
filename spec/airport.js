describe('Airport', function() {

  beforeEach(function() {
    airport = new Airport();
    plane1 = new Plane();
    plane2 = new Plane();
    plane3 = new Plane();
  })

  it('plane lands', function() {
    airport.land(plane1);
    expect(airport.planes_landed).toContain(plane1);
  })

  it('plane take off', function() {
  airport.takeOff(plane1)
  expect(airport.planes_landed).not.toContain(plane1)
  })

  it("plane can't take off if it's stormy", function() {
    airport.weather = "stormy";
    expect(airport.air_control(plane1)).toEqual("Plane can't take off")
  })

  it("prevents landing when airport is full", function() {
    airport.capacity = 2
    airport.land(plane1)
    airport.land(plane2)
    expect(airport.land(plane3)).toEqual("Sorry, airport is full!")
  })

});
