const account = require('./account')

class Statement {
  constructor() {
    this.deposits = []
    this.withdrawals = []
    this.statement = []
  }

  addDeposits(deposits) {
    deposits.forEach(deposit => {
      this.deposits.push(`${deposit} ||\n`)
    });
    return this.deposits = this.deposits.join('');
  }

  addWithdrawals(withdrawals) {
    withdrawals.forEach(withdrawal => {
      this.withdrawals.push(`${withdrawal} ||\n`)
    });
    return this.withdrawals = this.withdrawals.join('')

  }

  returnStatement() {
    //credit
    this.statement.push(`credit ||\n${this.deposits}`)

    //debit
    this.statement.push(`debit ||\n${this.withdrawals}`)

    return this.statement.join('')
  }



}

module.exports = Statement
