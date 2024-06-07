// Reduce function
const array = [1, 2, 3, 4];

const output = array.reduce((accumulator, currentValue, index) => {
    const curr = currentValue * 3; // whatever I need
    accumulator[index] = curr; // modify accumulator
    return accumulator; // add an array
}, []);

console.log(output);

const obj = {
    a: 2,
    b: 3,
};

const obj3 = {
    ...obj,
    c: 4,
};

// console.log(obj3);

array.forEach(function (el) {
    // console.log(el);
});

const dog = {
    ears: 2,
};

// Structure -> accessing elements = functions (logic) = eventListeners

// ===============================================================================================================

console.log("First console");
