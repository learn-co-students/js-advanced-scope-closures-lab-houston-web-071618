function produceDrivingRange(blockRange) {
	return function(start, end) {
		start = parseInt(start);
		end = parseInt(end);
		let distance = (end - start);
		let diff = (blockRange - distance);

		if (diff > 0) {
			return `within range by ${diff}`
		} else {
			return `${Math.abs(diff)} blocks out of range` 
		}
	}
}

function produceTipCalculator(percent) {
	return function(total) {
		return (total * percent);
	}
}