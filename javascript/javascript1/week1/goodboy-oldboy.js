const dogYearOfBirth = 2025;
const dogYearFuture = 2030;
const dogYear = (dogYearFuture - dogYearOfBirth) * 7;

const shouldShowResultInDogYears = 2;

if(shouldShowResultInDogYears === true) {
    console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);
} else if(shouldShowResultInDogYears === false) {
    console.log(`Your dog will be ${dogYearFuture - dogYearOfBirth} human years old in ${dogYearFuture}`);
} else {
    console.log("Sorry, something went wrong.");
}