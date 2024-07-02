const toyota = {
    horn: function () {
        console.log("Beeeep");
    },
};

const prius = Object.create(toyota);
prius.color = "green";

class Platform {
    platform = "someRandomName";
    // constructor() {}
}

class Car extends Platform {
    color = "blue";
    wheels = 4;
    name = "";
    introduce() {
        console.log("This is the name", this.name);
    }

    constructor(name) {
        super(); // ? What?
        this.name = name;
    }
}

const car2 = new Car("Camry");
const car3 = new Car("Prius");
console.log(car2);
console.log(car3);
