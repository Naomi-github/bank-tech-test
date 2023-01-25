const Account = require("../lib/account");
const Deposit = require("../lib/deposit");
const Statement = require("../lib/statement");
const Withdrawal = require("../lib/withdrawal");

describe('account statement returns credits', () => {
  it('statement with a withdrawal and a deposit', () => {
    const deposit = new Deposit
    const withdrawal = new Withdrawal
    const account = new Account()
    const statement = new Statement()

    deposit.addDeposit('10/01/2023, 1000')
    deposit.addDeposit('13/01/2023, 2000')
    const deposit1 = deposit.returnDeposit()
    withdrawal.addWithdrawal('14/01/2023, 500')
    const withdrawal1 = withdrawal.returnWithdrawal()

    account.addDeposits(deposit1)
    account.addWithdrawals(withdrawal1)
    const account1 = account.returnAccount()

    statement.addAccount(account1)

    expect(statement.returnStatement()).toEqual("date || credit || debit || balance\n14/01/2023 ||||  500 || 2500 \n13/01/2023 ||  2000 |||| 3000 \n10/01/2023 ||  1000 |||| 1000 ")
  })
});



