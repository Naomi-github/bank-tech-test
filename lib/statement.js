const account = require('./account')

class Statement {
  constructor() {
    this.statement = []
    this.headers = [`credit || debit || balance ||\n`]
    this.balanceArray = []
    this.totalBalance = 0
  }

  addDeposits(deposits) {
    deposits.forEach(deposit => {
      this.totalBalance += Number(deposit)
      this.statement.push(`${deposit} |||| ${this.totalBalance}\n`)
    });
    console.log(this.statement);
  }

  addWithdrawals(withdrawals) {
    withdrawals.forEach(withdrawal => {
      this.statement.push(`   |||| ${withdrawal} ||\n`)
    });

  }

  returnStatement() {
    console.log(this.headers + this.statement.join(''));
    return this.headers + this.statement.join('')
  }


}

module.exports = Statement
