class Withdrawal {
  constructor() {
    this.withdrawals = []
  }

  addWithdrawal(withdrawal) {
    this.withdrawals.push(withdrawal)
  }

  returnWithdrawal() {
    return this.withdrawals
  }
}

module.exports = Withdrawal
