alert('hello world');

/*
this is a comment
*/
//meiow

var x = 5, y = 6;
var z, a = 100;
var b = '5';
var firstName = 'Nikolas';
var lastname = 'Jon';
var sum = x + y;
var test = x + b
var fullname = firstName + ' ' + lastname;
var istrue= true;

console.log(x, y);
console.log(z);
console.log(a);
console.log(firstName);
console.log('Nikolas')
console.log(sum);
console.log(x + b);
console.log()
console.log(fullname);

// console.log('The opposite of isTrue is', false)
// // console.log('The value of isTrue is', isTrue)
// console.log(firstname * x);
// console.log(x ** y)
// var sum = 10 % 3;
// console.log('The new value of sum is', sum)
// console.log(x)
// console.log(x > y);
// console.log(x < y);

if (x == 5 && y == 6) {
    console.log('its true')
}

if (x == 5 && y != 6) {
    console.log('its true')
} else if (x >= 6) {
    console.log('x is not equal to 6')
} else {
    console.log("none all statements are false")
}

if (x % 2 == 0) {
    console.log("x is an even number")
} else {
    console.log( x, 'is an odd number')
}

if (firstName == 'Nikolas') {
    console.log('access granted')
}

if (lastname == 'jon') {
    console.log('acess is granted even if lowercase')
} else {
    console.log("Comparison is case sensitive")
}

if (firstName == 'Nikolas' || lastname == 'jon') {
    console.log('coach is in')
} else {
    console.log('coach is not in')
}