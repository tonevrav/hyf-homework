class ShoppingCard {
    items = [];
    totalAmount = 0;

    addItem(item) {
        this.items.push(item);
        this.totalAmount += item.price * item.quantity;
    }

    removeItem(itemToRemove) {
        let inx;

        this.items.forEach((item) => {
            const name = item.name;
            if (itemToRemove === name) {
                inx = this.items.indexOf(item);

                this.items.splice(inx, 1);

                this.totalAmount -= item.price * item.quantity;
            }
        });
    }

    getTotalCard() {
        console.log(this.totalAmount);
    }
    checkout() {
        this.items = [];
    }
}

const myShoppingCard = new ShoppingCard();
myShoppingCard.name = "My shopping card";

myShoppingCard.addItem({
    name: "milk",
    price: 100,
    quantity: 1,
});
myShoppingCard.addItem({
    name: "cheese",
    price: 25,
    quantity: 2,
});
myShoppingCard.addItem({
    name: "vodka",
    price: 110,
    quantity: 1,
});
myShoppingCard.removeItem("vodka");

myShoppingCard.getTotalCard();

console.log(myShoppingCard);
