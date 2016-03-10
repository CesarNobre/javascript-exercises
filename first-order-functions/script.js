var arrays = [[1,2,3],[4,5],[6]];
arrays.reduce(function(previousValue, currentValue){
	return previousValue.concat(currentValue);
});

document.write("testing reduce -> " + arrays);