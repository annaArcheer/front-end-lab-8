function cypherPhrase(obj, str){
	var str = str.split("");
	return getTransformedArray(obj, function(num){
		Object.keys(obj).forEach(function(key){
			if (num === key){
				num = obj[num];
			}
		});
		return(num);
	}).join("");
}
