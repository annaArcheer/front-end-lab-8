function getMin (){
    var res = arguments[0];
    for (var i = 0; i < arguments.length; i++){
        if (arguments[i] < res) res = arguments[i];
    }
    return res;
}