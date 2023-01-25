const deposit = require('./deposit')
const withdrawal = require('./withdrawal')

class Account {
  constructor() {
    this.balance = 0
    this.account = []
  }

  addBalance(deposits) {
    deposits.forEach(deposit => {
      const depositAmount = deposit.split(',')
      this.balance += Number(depositAmount.at(-1))
    });
  }

  removeBalance(withdrawals) {
    withdrawals.forEach(withdrawal => {
      const withdrawalAmount = withdrawal.split(',')
      this.balance -= Number(withdrawalAmount.at(-1))
    })
  }

  addDeposits(deposits) {
    deposits.forEach(deposit => {
      const depositArray = deposit.split(',')
      this.account.push(`${depositArray[0]} || ${depositArray[1]} |||| ${this.balance}`)
    });
  }

  addWithdrawals(withdrawals) {
    withdrawals.forEach(withdrawal => {
      const withdrawalArray = withdrawal.split(',')
      this.account.push(`${withdrawalArray[0]} |||| ${withdrawalArray[1]} || ${this.balance}`)
    });
  }

  returnAccount() {
    console.log(this.account);
    return this.account
  }
}

module.exports = Account
