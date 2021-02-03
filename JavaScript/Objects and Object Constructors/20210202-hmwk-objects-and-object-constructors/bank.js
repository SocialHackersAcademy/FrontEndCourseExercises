function Account(fullName, IBAN, balance) {
    this.fullName = fullName;
    this.IBAN = IBAN;
    this.balance = balance;
}

const kostasMinaidis = new Account("Kostas Minaidis", "GR00010003", 0);

Account.prototype.getBalance = function() {
    console.log(this.balance);
    return this.balance;
};

Account.prototype.deposit = function(depositAmount) {
    this.balance += depositAmount;
    return this.balance;
};

Account.prototype.withdraw = function(withdrawalAmount) {

    if (this.balance - withdrawalAmount < 0) {
        console.log("Insufficient balance!");
        return "Insufficient balance!"
    }
    if (withdrawalAmount < 0 || typeof withdrawalAmount !== "number") {
        console.log("Invalid amount");
        return "Invalid amount"
    }
    this.balance -= withdrawalAmount;
    return this.balance;
}

kostasMinaidis.getBalance();
kostasMinaidis.deposit(100);
kostasMinaidis.getBalance();
kostasMinaidis.withdraw(50);
kostasMinaidis.getBalance();

kostasMinaidis.withdraw(500);
kostasMinaidis.withdraw("50");
kostasMinaidis.withdraw(-150);
