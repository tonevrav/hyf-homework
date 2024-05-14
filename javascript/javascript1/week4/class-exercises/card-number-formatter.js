// LOGIC

function formatCreditCardNumber(cardNumber) {

    if(typeof cardNumber !== "number") {
        return "Please, make sure you type the correct card number!";
    }

    const numberToString = cardNumber.toString();
    let formatted = numberToString[0];

    for(let i = 1; i < numberToString.length; i += 1) {
        if(i % 4 === 0) {
            formatted += " " + numberToString[i];
        } else {
            formatted += numberToString[i];
        }
    }

    return {
        original: cardNumber,
        formatted,
    };
}

// DATA/RENDER

const formattedCreditCardObject = formatCreditCardNumber(1234567891123456);
console.log(formattedCreditCardObject);
/*
{
  original: 123456789,
  formatted: "1234 5678 9",
}
*/