function produceDrivingRange(blockRange) {
  return function(starting, ending) {
    let start = parseInt(starting)
    let end = parseInt(ending)
    let distanceTravelled = Math.abs(start - end)
    let diff = blockRange - distanceTravelled

     if (diff > 0) {
      return `within range by ${diff}`
    } else {
      return `${Math.abs(diff)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return total => total * percent
}