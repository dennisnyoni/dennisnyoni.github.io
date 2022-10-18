class CheckingAccount extends Account {

    constructor(number, overdraftLimit) {
        super(number);
        this.overdraftLimit = overdraftLimit;
    }

    setOverdraftLimit(overdraftLimit) {
        this.overdraftLimit = overdraftLimit;
    }

    getOverdraftLimit() {
        return this.overdraftLimit;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (this.getBalance() - amount < this.getOverdraftLimit()) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    toString() {
        return "Checking Account " + this.getNumber + " : balance " + this.getBalance();
    }
}