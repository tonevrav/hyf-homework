const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {
    candyType = candyType.toLowerCase();

    switch(candyType) {
        case "sweet":
            boughtCandyPrices.push(0.5 * weight);
        break;
        case "chocolate":
            boughtCandyPrices.push(0.7 * weight);
        break;
        case "toffee":
            boughtCandyPrices.push(1.1 * weight);
        break;
        case "chewing-gum":
            boughtCandyPrices.push(0.03 * weight);
        break;
        default:
            console.log("Sorry, something went wrong :(");
    }
}

function canBuyMoreCandy() {
    let total = 0;

    for(let price of boughtCandyPrices) {
        total += price;
    }

    if(total > amountToSpend) {
        console.log("Enough candy for you!");
        return false;
    }
    
    console.log("You can buy more, so please do!");
    return true;
}