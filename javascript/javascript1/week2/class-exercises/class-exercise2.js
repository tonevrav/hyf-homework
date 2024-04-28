// Todo: Create a function called getCircleArea. It should have the radius of the circle as parameter and return the circle area. What happens if we dont return anything in the function?

function getCircleArea(radius) {
    return Math.PI * radius * radius;
}

// Create a function called celciusToFahreneit it should have a parameter called celcius. It should return the temperature in fahrenheit.

function celciusToFahreneit(celcius) {
    return (celcius * 1.8) + 32;
}

// Try call the function and check with google if the function returns the right value.

console.log(getCircleArea(8));
console.log(celciusToFahreneit(22));
