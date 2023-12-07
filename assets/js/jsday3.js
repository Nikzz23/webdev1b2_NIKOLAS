var arr = [4, 8, '16', 18, 23, 42];
console.log(arr);

console.log(arr[2]);
console.log('The value in 3rd index is',arr[3]);
var myName = 'Nikolas';
console.log(myName[5]);//shows the specific value of the index in a string
console.log(myName[10]);

var cars = ['honda','toyota','chevrolet','bently','isuzu'];
var cars2 = ['lamborghini','mitsubishi','ferrari'];
console.log(cars);

//like this: console.log(arr[4]);
console.log('Using at:',cars.at(4));

cars[4] = 'mercedes Benz';
console.log(cars);
console.log('concat:',cars.concat(cars2)); //adds the second list to the 1st list
console.log(cars);

cars = cars.concat(cars2);
console.log(cars);

console.log(cars.length);// shows the length of the list/array
console.log(cars2.length);

console.log('during sort', cars.sort()); // sort ascending by default
console.log('after sort', cars);
console.log('reverse', cars.reverse());//sorts in reverse
//cars.sort(function(a,b){return a-b}); //sorts in ascending order, its better for numbers

console.log('before push', cars2);
cars2.push('volkswagen');
console.log('after push:', cars2)

var removeCar = cars2.pop();// removes the last element
console.log('after pop', cars2);
console.log(removeCar);// shows the removed element

console.log(cars.splice(3,1)); //removes a specific value in a list, it removed lamborgini
console.log('updated list',cars);

cars.unshift('kia'); //adds an element in front of the list
console.log(cars);