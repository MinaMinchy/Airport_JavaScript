function Airport() {
}

Airport.prototype.instructToLand = function(plane) {
  plane.land()
  return [plane]
}

Airport.prototype.instructToTakeOff = function(plane) {
  plane.takeOff()
}
