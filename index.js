const produceDrivingRange = function(rangee) {
  return function(startb, endb) {
    let start = parseInt(startb);
    let end = parseInt(endb);
    let range = parseInt(rangee);
    if (end - start < range) {
      return `within range by ${end - start}`
    } else {
        return `${end-start-range} blocks out of range`;
    }
  }
}

const produceTipCalculator = function(tipp) {
  return function (ammount) {
    return ammount * tipp
  }
}

const createDriver = function() {
  let driverId = 0
  return class {
    constructor(name){
      this.id = driverId++
      this.name = name
    }
  }
}
