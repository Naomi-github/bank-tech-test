class Deposit {
  constructor() {
    this.deposits = []
  }

  addDeposit(deposit) {
    this.deposits.push(deposit)
    console.log(this.deposits);
  }

  returnDeposit() {
    console.log(this.deposits);
    return this.deposits
  }
}

module.exports = Deposit
