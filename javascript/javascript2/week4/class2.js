class BankAccount {
    accountNumber;
    ownerName;
    balance;

    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        return (this.balance += amount);
    }
    withdraw(amount) {
        return (this.balance -= amount);
    }
    getBalance() {
        console.log(this.balance);
    }
}

const myBank = new BankAccount("4432-13122495", "Tone Vrav", 3000);
myBank.deposit(2000);
console.log(myBank);

const yourBank = new BankAccount("3293-34243535", "Kugut Vasyl", 10000);
console.log(yourBank);
yourBank.withdraw(10);
yourBank.getBalance();
