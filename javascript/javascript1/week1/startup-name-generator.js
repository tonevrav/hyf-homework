const firstWords = ["Easy", "Awesome", "Beautiful", "High", "Magic", "Great", "Wonderful", "Big", "Fast", "Green"];
const secondWords = ["Dogs", "Cats", "Cows", "Lizards", "Snakes", "Eagels", "Wolves", "Solutions", "Decisions", "Opportunities"];

const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);

const startupName = `${firstWords[randomNumber1]} ${secondWords[randomNumber2]}`;

console.log(`The startup: "${startupName}" contains ${startupName.length} characters`);