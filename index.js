function produceDrivingRange(blockDistance) {
    return function(starting, ending) {
        let blocks = Math.abs(parseInt(ending) - parseInt(starting));
        let delta = blockDistance - blocks;
        if (delta > 0) {
            return `within range by ${delta}`;
        } else {
            return `${Math.abs(delta)} blocks out of range`;
        }
    }
}

const produceTipCalculator = percentage => rideFare => rideFare * percentage;

  
  function createDriver(){
    let driverId = 0
    return class {
      constructor(name){
        this.id = ++driverId
        this.name = name
      }
    }
  }