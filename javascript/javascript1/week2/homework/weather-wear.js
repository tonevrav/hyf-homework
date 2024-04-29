function whatToPutOn(temperature) {
    if(temperature < -20) {
        return "Extra-warm jumpsuit";
    } else if(temperature < -10) {
        return "Warm jumpsuit";
    } else if(temperature < 5) {
        return "Warm trausers";
    } else if(temperature < 15) {
        return "Light jacket";
    } else if(temperature < 25) {
        return "Shirt and shorts";
    } else if(temperature >= 25) {
        return "Sunglases";
    } else{
        return "Ooops...";
    }
}

console.log(whatToPutOn(-2));