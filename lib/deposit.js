class Deposit {
  constructor() {
    this.deposits = []
  }

  addDeposit(deposit) {
    console.log(deposit.split(' '));
    this.deposits.push(deposit)
    console.log(this.deposits);
  }

  returnDeposit() {
    console.log(this.deposits);
    return this.deposits
  }
}

module.exports = Deposit
