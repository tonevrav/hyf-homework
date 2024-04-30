const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {
    switch(candyType) {
        case "Sweet":
            boughtCandyPrices.push(0.5 * weight);
        break;
        case "Chocolate":
            boughtCandyPrices.push(0.7 * weight);
        break;
        case "Toffee":
            boughtCandyPrices.push(1.1 * weight);
        break;
        case "Chewing-gum":
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
    } else {
        console.log("You can buy more, so please do!");
        return true;
    }
}

addCandy("Sweet", 2);
addCandy("Chocolate", 50);
addCandy("Chewing-gum", 1000);
// addCandy("Chewing-gum", 1000);
// addCandy("Chewing-gum", 1000);
// addCandy("Chewing-gum", 1000);

console.log(canBuyMoreCandy());
console.log(boughtCandyPrices);