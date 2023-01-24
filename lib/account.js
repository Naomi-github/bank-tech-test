class Account {
  constructor() {
    this.deposits = []
    this.withdrawals = []
  }

  addDeposit(accountChange) {
    if (accountChange.includes("deposit")) {
      let deposit = accountChange.replaceAll(" ","").split(",")
      this.deposits.push(deposit[1])
    }
  }

  returnDeposit() {
    console.log(this.deposits);
    return this.deposits.reverse()
  }

  addWithdrawal(accountChange) {
    if (accountChange.includes("withdrawal")) {
      let withdrawal = accountChange.replaceAll(" ","").split(",")
      this.withdrawals.push(withdrawal[1])
    }
  }

  returnWithdrawal() {
    return this.withdrawals.reverse()
  }

}

module.exports = Account
