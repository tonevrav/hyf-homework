const fruits = ["apple", "banana", "orange"];

// pop, push, shift, unshift

fruits.push("kiwi");
console.log(fruits);

console.log(fruits.pop());
console.log(fruits);

fruits.push("dragonfruit", "elderberry");
console.log(fruits);

if(fruits.includes("banana")) {
    console.log("Banana in fruit basket");
} else {
    console.log("No banana in fruit basket");
}

fruits.unshift("strawberry");
console.log(fruits);

const strawberryFromArray = fruits.shift();

console.log(fruits);
console.log(strawberryFromArray);

const anOrangeFromArray = fruits.splice(2, 1).toString();
console.log(anOrangeFromArray);
console.log(fruits);

fruits.splice(2, 1, "bluberry");
console.log(fruits);