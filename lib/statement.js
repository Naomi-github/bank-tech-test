const account = require('./account')

class Statement {
  constructor() {
    this.deposits = []
  }

  addDeposits(deposits) {
    console.log(deposits);
    deposits.forEach(deposit => {
      this.deposits.push(`${deposit} ||\n`)
    });
    return this.deposits = this.deposits.join('');
  }

  returnStatement() {
    console.log(this.deposits);
    console.log(`credit ||\n${this.deposits}`);

    return `credit ||\n${this.deposits}`
  }

}

module.exports = Statement
