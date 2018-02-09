var euro = parseInt(prompt("Please enter amount of euro "));
var dollar = parseInt(prompt("Please enter amount of dollars "));

var CourseEUR = 33.23;
var CourseUSD = 27.12;

var euroToUah = euro * CourseEUR;
var dollarToUah = dollar * CourseUSD;
var euroToUsd = CourseEUR / CourseUSD;

if (isNaN(euro) || isNaN(dollar) || euro < 0 || dollar < 0 ){
    console.log ("Incorrect data");
} else {
    console.log(`${euro} euros are equal ${parseFloat(euroToUah.toFixed(2))} UAH, ${dollar} dollars are equal ${parseFloat(dollarToUah.toFixed(2))} UAH, one euro is equal ${parseFloat(euroToUsd.toFixed(2))} dollars.`);
}