// LOGIC

function getCardInfo(cardNumber) {

    let messageToPrint = "Please provide a correct card number";

    cardNumber = cardNumber.toString();

    if(cardNumber.length === 16) {
        switch(cardNumber[0]) {
            case '2':
            case '5':
                messageToPrint = "Mastercard";
                break;
            case '3':
                messageToPrint = "American Express";
                break;
            case '4':
                messageToPrint = "Visa";
                break;
            default:
                messageToPrint = "Ensure the card number has been typed correctly";
        }
    }

    return messageToPrint;
}

// RENDER

console.log(getCardInfo(5178321334789876));