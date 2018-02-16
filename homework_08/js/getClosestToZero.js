function getClosestToZero(){
    var res = Math.abs(arguments[0]);
    for(var i=0; i < arguments.length; i++){
        if (Math.abs(arguments[i]) < res) res = arguments[i];
    }
    return res;
}