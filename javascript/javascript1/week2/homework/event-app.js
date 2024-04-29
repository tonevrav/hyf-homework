function getEventWeekday(numbersOfDays) { // 15

    const currentDay = new Date().getDay(); // e.g. 6 (Saturday)

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const remainingDays = numbersOfDays % 7; // 15 % 7 = 1

    let indexOfEventDay = currentDay + remainingDays; // 6 + 1 = 7

    if(indexOfEventDay >= 7) { // true
    indexOfEventDay -= 7; // 7 - 7 = 0
    }

    return days[indexOfEventDay]; // days[0] (Sunday)
}

console.log(getEventWeekday(1));
console.log(getEventWeekday(3));
console.log(getEventWeekday(14));