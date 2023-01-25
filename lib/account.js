class Account {
  constructor() {
    this.deposits = []
    this.withdrawals = []
    this.dates = []
  }

  addDeposit(accountChange) {
    if (accountChange.includes("deposit")) {
      let deposit = accountChange.replaceAll(" ","").split(",")
      this.deposits.push(deposit.at(-1))
    }

  }

  returnDeposit() {
    return this.deposits.reverse()
  }

  addWithdrawal(accountChange) {
    if (accountChange.includes("withdrawal")) {
      let withdrawal = accountChange.replaceAll(" ","").split(",")
      this.withdrawals.push(withdrawal.at(-1))

    }
  }

  returnWithdrawal() {
    return this.withdrawals
  }

  addDate(accountChange) {
    let date = accountChange.replaceAll(" ","").split(",")
    this.dates.push(date[0])
  }

  returnDate() {
    console.log(this.dates);
    return this.dates
  }
}

module.exports = Account
