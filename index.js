function produceDrivingRange(blocks){
	return function(startb, endb){


		let start = parseInt(startb)
		let end = parseInt(endb)
		let distanceTravel = Math.abs(end - start)
		let difference = blocks - distanceTravel
		
		if(difference > 0){
			return `within range by ${difference}`
		}
		else {
			return `${Math.abs(difference)} blocks out of range`
		}
	}
}


function produceTipCalculator(tip){
	return function(amount){
		return amount*tip;
	}
}


function createDriver(){
	let DriverID = 0

	return class {
		constructor(name){
			this.name = name
			this.id = ++DriverID;
		}
	}
}