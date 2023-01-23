const Account = require('./account')

class Statement {
  constructor() {
    this.Statement = []
    this.deposits = []
  }

  addDeposits(deposits) {
    this.deposits.push(`${deposits} ||\n`)
  }

  returnStatement() {
    console.log(`credit ||\n${this.deposits.join('')}`);
    return `credit ||\n${this.deposits.join('')}`
  }

}

module.exports = Statement
