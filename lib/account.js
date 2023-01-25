class Account {
  constructor() {
    this.deposits = []
    this.withdrawals = []
    this.dates = []
    this.accountChangeNumber = 0
  }

  addDeposit(accountChange) {
    if (accountChange.includes("deposit")) {
      let deposit = accountChange.replaceAll(" ","").split(",")
      this.deposits.push(deposit.at(-1))
      this.accountChangeNumber++
    }
    console.log(this.deposits);
  }

  returnDeposit() {
    return this.deposits
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
