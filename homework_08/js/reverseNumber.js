function reverseNumber(a){
            var res = a.toString().split("").reverse().join("");
            if (a<0) return (parseInt(res)*-1);
            return parseInt(res);
}
