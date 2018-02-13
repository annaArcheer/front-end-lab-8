var user = parseInt(prompt("enter natural number from 1 to 20 "), 0);
var block = "[~]";
var space = " ";
var str = "";
var u = -1;

if (user%1 != 0 || user <= 0 || user > 20){
    console.error("Incorrect!");
}else{
    for (var i = 1; i <= user; i++){
        u +=2;
        for (var k = 1; k <= user-i; k++){
            str = str + space + space + space;
        }
        for (var j = 1; j <= u; j++){
            str += block;
        }
        console.log(str);
        str = '';
    } 
}