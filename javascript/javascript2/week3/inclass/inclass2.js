const firstButton = document.getElementById("firstButton");
const secondButton = document.getElementById("secondButton");
const delayButton = document.getElementById("delayButton");

let counter = 0;
firstButton.addEventListener("click", () => console.log(counter++));
secondButton.addEventListener("click", () => console.log(counter++));

const setTime = () => {
    setTimeout(() => console.log("This text was delayed by 3 seconds"), 3000);
};
delayButton.addEventListener("click", setTime);

const callbackFunction = () => console.log("DOM fully loaded and parsed");
document.addEventListener("DOMContentLoaded", callbackFunction);

// ! Mouse position

// ... will be here soon

// ============================================================================================================================================

// ! REDUCE

const movies = [{}, {}, {}];

const ex = {
    old: [],
    mid: [],
    new: [],
};

const moviesGroupped = movies.reduce((previousIteration, currentValue) => {
    if (currentValue.year < 2000) {
        return {
            ...previousIteration,
            old: [...previousIteration.old, currentValue],
        };
    }
    if (currentValue.year >= 2000 && currentValue.year < 2010) {
        return {
            ...previousIteration,
            mid: [...previousIteration.mid, currentValue],
        };
    }
    return {
        ...previousIteration,
        new: [...previousIteration.new, currentValue],
    };
});

console.log(moviesGroupped);

// ============================================================================================================================================
