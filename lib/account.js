class Account {
  constructor() {
    this.deposits = []
    this.withdrawals = []
    this.balance = 0
    this.balanceArray = []
  }

  addDeposit(accountChange) {
    if (accountChange.includes("deposit")) {
      let deposit = accountChange.replaceAll(" ","").split(",")
      this.deposits.push(deposit[1])
      this.balance += Number(deposit[1])
      console.log(this.balance);
    }
  }

  returnDeposit() {
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

  balanceTotal() {
    this.balanceArray.push(this.balance)
    console.log(this.balanceArray);
    return this.balanceArray
  }

}

module.exports = Account
