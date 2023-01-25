class Withdrawal {
  constructor() {
    this.withdrawals = []
  }

  addWithdrawal(withdrawal) {
    this.withdrawals.push(withdrawal)
    console.log(this.withdrawals);
  }

  returnWithdrawal() {
    console.log(this.withdrawals);
    return this.withdrawals
  }
}

module.exports = Withdrawal
