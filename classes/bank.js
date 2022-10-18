"use strict"

class Bank {

    static nextNumber = 0;
    constructor() {
        accounts = [];
    }

    addAccount() {
        let number = ++Bank.nextNumber;
        let account = new Account(number);
        this.accounts.push(account);
        return number;
    }

    addSavingsAccount(interest) {
        let number = Bank.nextNumber++;
        let savingsAcc = new SavingsAccount(number, interest);
        this.accounts.push(savingsAcc);
        return number;
    }

    addCheckingAccount(overdraft) {
        let number = ++Bank.nextNumber;
        let savingsAcc = new SavingsAccount(number, overdraft);
        this.accounts.push(savingsAcc);
        return number;
    }

    closeAccount(number) {
        for (let account of this.accounts) {
            if (account.number === number) {
                this.accounts.splice(this.accounts.indexOf(account), 1);
            }
        }

    }

    accountReport() {
        for (let account of this.accounts) {
            console.log("account number: " + account.number + " balance: " + account.balance + " \n");
        }
    }

    endOfMonth() {}
}