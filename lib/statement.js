const account = require('./account')

class Statement {
  constructor() {
    this.statement = []
    this.headers = [`credit || debit || balance ||\n`]
    this.totalBalance = 0
  }

  addDeposits(deposits) {
    deposits.forEach(deposit => {
      this.totalBalance += Number(deposit)
      this.statement.push(`${deposit} |||| ${this.totalBalance}\n`)
    });
  }

  addWithdrawals(withdrawals) {
    withdrawals.forEach(withdrawal => {
      this.totalBalance -= Number(withdrawal)
      this.statement.push(`   |||| ${withdrawal} || ${this.totalBalance}\n`)
    });

  }

  returnStatement() {
    console.log(this.headers + this.statement.reverse().join(''));
    return this.headers + this.statement.reverse().join('')
  }


}

module.exports = Statement
