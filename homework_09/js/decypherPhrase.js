function decypherPhrase(object, string){
	var newObj = {};
	for (var key in object){
		newObj[object[key]] = key;
	}
	return cypherPhrase(newObj, string);
}
