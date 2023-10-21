var fruits = [];
var n = prompt('How many fruits do you want to enter? (minimum:3 maximum:10)');

if (n < 3 || n > 10) {
    alert('minimum is 3 and maximum is 10');
} else {
    for (var i = 0; i < n; i++) {
    var ask = prompt('Name of fruit:')
    fruits.push(ask)
    }
}

console.log(fruits)
console.log('first fruit:',fruits[0],'\nlast fruit:',fruits[(n - 1)])
console.log(fruits.reverse())
console.log(fruits[1])
console.log(fruits.splice(0,1)) 
console.log(fruits.splice(1,1))
console.log(fruits)

var vegetables = [];
var o = prompt('How many vegetables do you want to enter? (minimum:3 maximum:10)')

if (o < 3 || o > 10) {
    alert('minimum is 3 and maximum is 10');
} else {
    for (var j = 0; j < o; j++) {
    var ask2 = prompt('Name of vegetable:')
    vegetables.push(ask2)
    }
}

console.log(vegetables)
console.log('first vegetable:',vegetables[0],'\nlast vegetable:',vegetables[(o - 1)])
console.log(vegetables.reverse())
console.log(vegetables[1])
console.log(vegetables.splice(0,1)) 
console.log(vegetables.splice(1,1))
console.log(vegetables)

var food = []
food = fruits.concat(vegetables);
console.log(food)

for (let k = 0; k < food.length; k++) {
    item = food[k];
    even = k % 2 == 0
    itemLength = item.length;
    secondLetter = item[1];
    reversedItem = item.split("").reverse().join("");
    console.log(`Index ${k} is ${even ? "even" : "odd"} and the food inside it is called ${item}. The word ${item} has ${itemLength} letters, and the second letter is ${secondLetter}. If you reverse it, it becomes ${reversedItem}.`);
}

var searchFood = prompt("Search a food:");
var foodIndex = food.indexOf(searchFood);

if (foodIndex !== -1) {
    alert(`Food is found at index ${foodIndex}`);
} else {
    alert("Food not found");
}

(food[0]) = "START";
(food[(food.length - 1)]) = "END";
food = food.map(item => item.toUpperCase());

console.log(food);