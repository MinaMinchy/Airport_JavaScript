function Plane(isAirborne = false) {
  this.isAirborne = isAirborne
}
  Plane.prototype.land = function() {
    this.isAirborne = false
  }
