function produceDrivingRange (range) {
  return function (beginning, end) {
    let dist = Math.abs(parseInt(end) - parseInt(beginning))
    let diff = range - dist
    return diff > 0 ? `within range by ${diff}` : `${diff / -1} blocks out of range`
  }
}

function produceTipCalculator (percent) {
  return function (amount) {
    return amount * percent
  }
}

function createDriver () {
  let driverID = 0;

  return class {
    constructor (name) {
      this.id = ++driverID
      this.name = name
    }
  }
}