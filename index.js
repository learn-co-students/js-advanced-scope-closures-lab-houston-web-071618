const produceDrivingRange = blockRange => (startingBlock, endingBlock) => {
  let start = parseInt(startingBlock);
  let end = parseInt(endingBlock);
  let distanceToTravel = Math.abs(end - start);
  let difference = blockRange - distanceToTravel;

  return difference > 0
    ? `within range by ${difference}`
    : `${Math.abs(difference)} blocks out of range`;
};

const produceTipCalculator = percentage => rideFare => rideFare * percentage;

const createDriver = () => {
  let driverId = 0;
  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  };
};
