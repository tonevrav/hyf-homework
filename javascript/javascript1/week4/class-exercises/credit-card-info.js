// LOGIC

function getCardInfo(cardNumber) {

    let type = "Please provide a correct card number";

    cardNumber = cardNumber.toString();

    if(cardNumber.length === 16) {
        switch(cardNumber[0]) {
            case '2':
            case '5':
                type = "Mastercard";
                break;
            case '3':
                type = "American Express";
                break;
            case '4':
                type = "Visa";
                break;
            default:
                type = "Ensure the card number has been typed correctly";
        }
    }

    return type;
}

// RENDER

console.log(getCardInfo(5178321334789876));