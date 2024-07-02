// Pending
// Fulfilled
// Rejected

const pizzaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const dataProccesed = false;

        if (dataProccesed) {
            resolve("This is the proccesed data");
        } else {
            reject("something went wrong"); // Will be returned
        }
    }, 2000);
});

pizzaPromise
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
