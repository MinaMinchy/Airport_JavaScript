function Airport() {
}

Airport.prototype.instructsToLand = function(plane) {
  plane.land()
  return [plane]
}
