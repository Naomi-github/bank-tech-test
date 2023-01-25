const account = require('./account')

class Statement {
  constructor() {
    this.statement = []
    this.headers = [`date || credit || debit || balance`]
    this.totalBalance = 0
  }


  addDeposits(deposits) {
    console.log(deposits);
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


  addDate(dates) {
    let index = 0
    dates.forEach(date => {
      this.statement.splice(index, 0, (`${date} ||`))
      index += 2
    });
  }



  returnStatement() {
    let statement = this.statement.join('').split('\n').reverse().join('\n')
    console.log(this.headers + statement);
    return this.headers + statement
  }


}

module.exports = Statement
