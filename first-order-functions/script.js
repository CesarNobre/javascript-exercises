var arrays = [[1,2,3],[4,5],[6]];
arrays.reduce(function(firstItem, secondItem){
	return firstItem.concat(secondItem);
});

document.write("testing reduce -> " + arrays);