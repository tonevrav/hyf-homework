class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(
            `Hello, my name is ${this.name} and I am ${this.age} years old`
        );
    }
}

const me = new Person("Rodion", 56);
console.log(me);
console.log(me.introduce());
