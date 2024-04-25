// Peter's case

const widthOfHouse = 8;
const deepthOfHouse = 10;
const heightOfHouse = 10;
const volumeInMeters = widthOfHouse * deepthOfHouse * heightOfHouse;

const gardenSizeInM2 = 100;

const priceForFriend = 2500000;

const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if(housePrice <= priceForFriend) {
    console.log("Take it asap!");
} else if(priceForFriend > housePrice) {
    console.log("Do not pay too much!");
} else {
    console.log("Oooops, sorry, something went wrong!");
}

// Julia's case

/*

const widthOfHouse = 5;
const deepthOfHouse = 11;
const heightOfHouse = 8;
const volumeInMeters = widthOfHouse * deepthOfHouse * heightOfHouse;

const gardenSizeInM2 = 70;

const priceForFriend = 1000000;

const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if(housePrice <= priceForFriend) {
    console.log("Take it asap!");
} else if(priceForFriend > housePrice) {
    console.log("Do not pay too much!");
} else {
    console.log("Oooops, sorry, something went wrong!");
}

*/
