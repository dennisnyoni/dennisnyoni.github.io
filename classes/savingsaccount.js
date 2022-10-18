class SavingsAccount extends Account {

    constructor(number, interest) {
        super(number);
        this.interest = interest;
    };

    setInterest(interest) {
        this.interest = interest;
    }

    getInterest() {
        return this.interest;
    }

    addInterest(interest) {
        this.deposit(this.getBalance() * interest / 100);
    }

    toString() {
        return "Savings Account " + this.getNumber + " : balance " + this.getBalance();
    }

    endOfMonth() {
        this.toString
    }
};