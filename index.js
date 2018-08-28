function produceDrivingRange(blockRange) {
  return function(firstBlock, secondBlock) {
    let num1 = firstBlock.slice(0, 2)
    let num2 = secondBlock.slice(0, 2)
    let value = Math.abs(num1 - num2)
    let rangeVal = Math.abs(blockRange - value)
    if (value <= blockRange) {
      return `within range by ${rangeVal}`
    } else {
      return `${rangeVal} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function (total) {
    return percentage * total
  }
}

function createDriver () {
  let driverId = 0

  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
