function line() {
    console.log();
}

// Superclasse
function Account(name, agency, account, balance) {
    this.name = name;
    this.agency = agency;
    this.account = account;
    this.balance = balance;
}

Account.prototype.withdraw = function (value) {
    if (this.balance < value) {
        console.log('Not enough money.');
        this.seeBalance();
        line();
        return;
    };

    this.balance -= value;
    console.log(`$${value} withdrawed.`);
    this.seeBalance();
    line();
}

Account.prototype.deposit = function (value) {
    this.balance += value
    console.log(`$${value} deposited.`);
    this.seeBalance();
    line();
}

Account.prototype.seeBalance = function () {
    console.log(`Current balance: $${this.balance}`);
}

Account.prototype.seeInfo = function () {
    console.log(`Name: ${this.name}`);
    console.log(`Agency: ${this.agency}`);
    console.log(`Account: ${this.account}`);
    line();
}

function CheckingAccount(name, agency, account, balance, limit) {
    Account.call(this, name, agency, account, balance);
    this.limit = limit;
}
CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;

CheckingAccount.prototype.withdraw = function (value) {
    if ((this.balance + this.limit) < (value)) {
        console.log('Not enough money.');
        this.seeBalance();
        line();
        return;
    };

    this.balance -= value;
    console.log(`$${value} withdrawed.`);
    this.seeBalance();
    line();
}

const cc1 = new CheckingAccount('Cecília Oliveira', 'Nubank', 2412, 50, 20);
cc1.withdraw(60);

function SavingsAccount(name, agency, account, balance) {
    Account.call(this, name, agency, account, balance);
}
SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

const cp1 = new SavingsAccount('Raul Cabral', 'Nubank', 2412, 50);
cp1.withdraw(60);
