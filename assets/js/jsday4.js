var useinput = '500.00';
var multiplier = 5;

console.log(parseInt(useinput) * multiplier)

console.log(multiplier);
console.log(multiplier.toString());

var pi = 3.141592
var currencyConverted = useinput * pi
console.log(currencyConverted);
console.log(currencyConverted.toFixed(2));
console.log(currencyConverted.toFixed(0));

var firstName = 'Jane'
// var nameInput = prompt('What is your name?')

// if (nameInput.toLowerCase() == firstName.toLowerCase()) {
//     alert('The same!'+ nameInput);
// } else {
//     alert('Not the same');
// }

var fruits = ['Apple'.toLowerCase(),'banana','oranges'];

if (fruits.includes('apple')) { //to search inside an array
    console.log('apple is present')
} else {
    console.log('apple is not present')
}

//OBJECT
var person = {
    firstName: 'Shiela',
    lastName: 'Bangs',
    gender: 'F',
    age: '8',
};

console.log(person);
person.gender = 'M';
person.age = 21;
console.log(person);

console.log('the age is',person.firstName);

var phoneBook = [
    {
        name: 'Johnny Cash',
        number: 1285794
    },
    {
        name: 'John doe',
        number: 7894563
    },
    {
        name: 'Mary doe',
        number: 4561237
    },
    {
        name: 'Donald duderte',
        number: 3698527
    },
];

console.log(phoneBook);

phoneBook[1].name = 'Carlos james';
phoneBook[1].number = 124597543;

console.log(phoneBook);

console.log(phoneBook[2].name);
console.log(phoneBook[1]);

console.log(document.getElementById('companyName'));

document.getElementById('companyName').innerHTML = 'The Coding School';

var contentElement = document.getElementById('contentDiv');
contentElement.innerHTML = 'Coding for the future';