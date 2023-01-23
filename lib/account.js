class Account {
  constructor(accountChange) {
    this.accountChange = accountChange
    this.deposits = []
  }

  deposit() {
    if (this.accountChange.includes("deposit")) {
      //split deposit string into deposit and sum to add
      let deposit = this.accountChange.replaceAll(" ", "").split(',')
      //add the deposit amount to the deposits array
      this.deposits.push(deposit[1])

      return this.deposits
    }

  }

}

module.exports = Account
