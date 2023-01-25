class Deposit {
  constructor() {
    this.deposits = []
  }

  addDeposit(deposit) {
    this.deposits.push(deposit)
  }

  returnDeposit() {
    return this.deposits
  }
}

module.exports = Deposit
