var length = 23;
var width = 10;
var height = 15;

var product = length*width*height
console.log(product)

if (product % 2 != 0) {
    console.log('product is odd number')
} else {
    console.log('product is even number')
}

if (product % 3 == 0) {
    console.log('divisible by 3')
} else {
    console.log('not divisible by 3')
}

//a for loop that print 'kael' 10 times
for (var y = 0; y <= 10; y++) {
    console.log('Kael', y);
}

for (var x = 0; x <= 10; x++) {
    if (x % 2 == 0) {
        console.log(x,'EVEN')
    } else {
        console.log(x,'ODD')
    }
}

for (var goingdown = 20; goingdown >= 3; goingdown--) {
    console.log("going down in ",goingdown)
}

// a while loop that prints 'num 0-10' 10 times
var z = 0;
while (z <= 10) {
    console.log('num',z);
    z+=1;//z++
}

// a pop up box
if (confirm('Press a button')) {
    console.log('You pressed OK1')
} else {
    console.log(' you pressed cancel')
}
console.log('end')

var confirmedoutput = confirm('Trying out confirm box')
console.log('checking confirmed output')

if (confirmedoutput == true) {
    console.log('It is true')
} else {
    console.log('false')
}
console.log('end2')

var personname = prompt('Please enter your name so ican address you')

if (personname == 'Nikolas') {
    alert('Welcome to my site,'+ personname);
} else {
    alert('Only niks can enter here!')
}

