class Account {
  constructor() {
    this.deposits = []
    this.withdrawals = []
  }

  addDeposit(accountChange) {
    if (accountChange.includes("deposit")) {
      let deposit = accountChange.replaceAll(" ", "").split(',')
      this.deposits.push(deposit[1])
    }
  }

  returnDeposit() {
    return this.deposits.reverse()
  }

  addWithdrawal(accountChange) {
    console.log(accountChange);
    if (accountChange.includes("withdrawal")) {
      let withdrawal = accountChange.replaceAll(" ","").split(",")
      this.withdrawals.push(withdrawal[1])
      console.log(withdrawal);
    }
  }

  returnWithdrawal() {
    return this.withdrawals.reverse()
  }

}

module.exports = Account
