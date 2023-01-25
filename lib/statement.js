const account = require('./account')

class Statement {
  constructor() {
    this.statement = []
    this.headers = [`date || credit || debit || balance`]
  }

  addAccount(account) {
    account.forEach(transaction => {
      this.statement.push(`${transaction} \n`)
    });
  }


  returnStatement() {
    let statement = this.statement.join('').split('\n').reverse().join('\n')
    return this.headers + statement
  }
}

module.exports = Statement
