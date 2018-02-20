function getFilteredArray(array, predicateFunction){
var newArray = [];	
	forEach(array, function(num){
		if(predicateFunction(num)){
	   		newArray.push(num);
		}	
	}); 
     return newArray;
}
