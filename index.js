function produceDrivingRange(blockRange){
  return function (start,finish){
    value = Math.abs(parseInt(start)-parseInt(finish));
    range = Math.abs(value-blockRange);
    return value > blockRange? `${range} blocks out of range` : `within range by ${range}`;
  }
 }

function produceTipCalculator(percentTip){
  return function (amount){
    return amount*percentTip;
  }
}
