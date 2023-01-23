class Account {
  constructor() {
    this.deposits = []
  }

  addDeposit(accountChange) {
    if (accountChange.includes("deposit")) {
      //split deposit string into deposit and sum to add
      let deposit = accountChange.replaceAll(" ", "").split(',')
      //add the deposit amount to the deposits array
      this.deposits.push(deposit[1])

      console.log(this.deposits);
    }
  }

  returnDeposit() {
    console.log(this.deposits);
    return this.deposits.reverse()
  }

}

module.exports = Account
