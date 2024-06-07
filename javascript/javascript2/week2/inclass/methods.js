// const form = document.getElementById("form");
// const field = document.getElementById("field");

// form.querySelector(".field").innerHTML = "Title";

// =========================================================================================================

// Arrow Fucntion

// function myFunction(parameter) {
//     console.log(parameter);
// }
// myFunction("Hello");

// const myArrowFunction = (parameter) => {
//     console.log(parameter);
// }

// myArrowFunction("Hello arrow!");

// const myShortArrowFunction = (a,b) => a + b;
// console.log(myShortArrowFunction(1,2));

// Array Functions

// const anArray = ["apple", "banana", "pear"];
// anArray.forEach((fruit, index, array) => console.log(fruit));

// ==========================================================================================================

/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings 
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
    const listings = [];

    const listingType = ['House', 'Apartment', 'Shed', 'Dorm', 'Farm'];
    const listingFacilities = ['Parkering', 'Elevator', 'Altan', 'Have', 'Husdyr'];
    
    for (let i = 0; i < numberOfListings; i++) {
        const listing = {};
        const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
        const numberOfFacilities = randomIntFromInterval(1, listingFacilities.length - 1);
        const facilities = [];
        for(let i = 0; i < numberOfFacilities; i++) {
            const randomIndexFacilities = randomIntFromInterval(0, listingFacilities.length - 1);
            const randomFacility = listingFacilities[randomIndexFacilities];
            
            if (!(facilities.includes(randomFacility))) {
                facilities.push(randomFacility);
            }
        }

        listing.type = listingType[randomTypeIndex];
        listing.facilities = facilities;
        listing.price = randomIntFromInterval(1, 10000);
        listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
        listing.size = randomIntFromInterval(12, 1000);
        listing.img = `https://loremflickr.com/200/200/${listing.type}`

        listings.push(listing);
    }

    // console.log(listings.forEach((list => console.log(list.size))));

    // const prices = listings.map();
    // console.log(prices);

    return listings;
}

const generatedListings = generateListings(37);
// generatedListings.forEach((list) => console.log(list.size));

generatedListings.map((list) => {
    // console.log(list.price);
});

const cheapest = generatedListings.filter((list) => list.price <= 1000);
// console.log(cheapest);

const expensivePricesListings = generatedListings.filter((list) => list.price > 4000); // return an array of lists with prices which are bigger than 4000;
const expensivePrices = expensivePricesListings.map((listing) => listing.price);
console.log(expensivePrices);

const listeningsWithParking = generatedListings.filter(generatedListings => generatedListings.facilities.includes("Parkering"));
// console.log(listeningsWithParking);

// =========================================================================================================

const filter = {
    type: "House",
    minPrice: 200,
    minSize: 300,
};

function filterListings(listings, filter) {
    
    let filteredListings = listings;

    if(filter.type) {
        filteredListings = listings.filter((listing) => listing.type === filter.type);
    }

    if(filter.hasGarden !== undefined) {
        filteredListings = filteredListings.filter((listing) => listing.hasGarden);
    }

    if(filter.minSize) {
        filterListings = filteredListings.filter((listing) => listing.size >= listing.minSize);
    }

    return filteredListings;
}

// console.log(filterListings(generatedListings, filter));

// ==================================================================================================================================