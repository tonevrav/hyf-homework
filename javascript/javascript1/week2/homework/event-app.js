function getEventWeekday(numbersOfDays) {

    const currentDay = new Date().getDay();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const indexOfEventDay = (currentDay + numbersOfDays) % 7;

    return days[indexOfEventDay];
}