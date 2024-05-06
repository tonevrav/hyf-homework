const clothingTemp = [
    ["extra-warm jumpsuit", -20],
    ["warm jumpsuit", -10],
    ["warm trousers", 5],
    ["light jacket", 15],
    ["shirt and shorts", 25],
    ["sunglasses", Infinity]
];

function whatToPutOnWithArray(temperature) {
    for(let i = 0; i < clothingTemp.length; i+=1) {
        if(temperature <= clothingTemp[i][1]){
            return `Put ${clothingTemp[i][0]} on!`;
        }
    }
    return "Ooops...";
}

console.log(whatToPutOnWithArray(14));