function reverseNumber(a){
            var res = a.toString().split("").reverse().join("");
            return Math.sign(a)*parseInt(res);
}
