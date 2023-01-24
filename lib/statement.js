const account = require('./account')

class Statement {
  constructor() {
    this.statement = []
    this.headers = [`credit || debit ||\n`]
  }

  addDeposits(deposits) {
    deposits.forEach(deposit => {
      this.statement.push(`${deposit} ||||\n`)
    });
    // return this.deposits = this.deposits.join('');
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
