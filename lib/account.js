const deposit = require('./deposit')
const withdrawal = require('./withdrawal')

class Account {
  constructor() {
    this.balance = 0
    this.account = []
  }

  addDeposits(deposits) {
    deposits.forEach(deposit => {
      const depositArray = deposit.split(',')
      this.balance += Number(depositArray.at(-1))
      this.account.push(`${depositArray[0]} || ${depositArray[1]}.00 |||| ${this.balance}.00`)
    });
  }

  addWithdrawals(withdrawals) {
    withdrawals.forEach(withdrawal => {
      const withdrawalArray = withdrawal.split(',')
      this.balance -= Number(withdrawalArray.at(-1))
      this.account.push(`${withdrawalArray[0]} |||| ${withdrawalArray[1]}.00 || ${this.balance}.00`)
    });
  }

  returnAccount() {
    return this.account
  }
}

module.exports = Account
