function getTransformedArray(array, increment){
var newArray = [];
	forEach(array, function(num){
		newArray.push(increment(num));
	})
	return newArray;
}