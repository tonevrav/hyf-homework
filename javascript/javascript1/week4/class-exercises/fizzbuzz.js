function fizzBuzz(a, b) {
    let output = "";

    for(let i = 1; i <= 100; i++) {

        if (i % a === 0 && i % b === 0) {
            output += "FizzBuzz" + "\n";
        } else if (i % a === 0) {
            output += "Fizz" + "\n";
        } else if(i % b === 0) {
            output += "Buzz" + "\n";
        } else {
            output += i + "\n";
        }
    }

    return output;
}

console.log(fizzBuzz(4, 12));