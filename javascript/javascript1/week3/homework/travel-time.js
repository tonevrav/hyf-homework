// DATA

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
const travelInformation1 = {
    speed: 115,
    destinationDistance: 247,
}
  
const travelTime = calculateTravelTime(travelInformation);
const travelTime1 = calculateTravelTime(travelInformation1);

// LOGIC

function calculateTravelTime(travelInfo) {
    const time = travelInfo["destinationDistance"] / travelInfo["speed"];
    const hours = parseInt(time);
    const minutes = Math.round((time - hours) * 60);

    return `${hours} hours and ${minutes} minutes`;
}

// RENDER

console.log(travelTime); // 8 hours and 38 minutes
console.log(travelTime1);