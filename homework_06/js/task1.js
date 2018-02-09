var a = parseInt(prompt("Please enter first side of triangle",1));
var b = parseInt(prompt("Please enter second side of triangle",1));
var c = parseInt(prompt("Please enter third side of triangle",1));
//формула Герона
var p = (a + b + c)/2;
var square = Math.sqrt(p* (p-a) * (p-b) * (p-c));

if (isNaN(a) || isNaN(b) || isNaN(c) || (a<=0) || (b<=0) || (c<=0)) {
    console.log ("Incorrect data");
} else if ((a==b) && (b==c) && (a==c)){
    console.log ("Type of trianle is equilateral and square is " + parseFloat(square.toFixed(2)) );
} else if ( (a==b) && (b==c) && (c!=a) || (a==b) && (b!=c) && (c==a) || (a!=b)&&(b==c)&&(c==a) ) {
    console.log ("Type of trianle is isosceles and square is " + parseFloat(square.toFixed(2)) );
} else if ( (a!=b) && (b!=c) && (a!=c) ) {
    if ( (a*a + b*b) == c*c || (a*a+c*c) == b*b || (b*b + c*c) == a*a ) {
        console.log ("Type of trianle is right triangle and square is " + parseFloat(square.toFixed(2)) );
    } else {
        console.log ("Type of trianle is scalene and square is " + parseFloat(square.toFixed(2)) );
    }
}