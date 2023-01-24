const Account = require("../lib/account");
const Statement = require("../lib/statement");

describe('account statement returns credits', () => {
  it('returns a single credit', () => {
    const account = new Account()
    const statement = new Statement()

    account.addDeposit("deposit, 1000")
    let deposit = account.returnDeposit()

    statement.addDeposits(deposit)

    expect(statement.returnStatement()).toContain ("credit ||\n1000 ||\n")
  });

  it('returns two credits', () => {
    const account = new Account()
    const statement = new Statement()

    account.addDeposit("deposit, 1000")
    account.addDeposit("deposit, 2000")
    let deposit = account.returnDeposit()

    statement.addDeposits(deposit)

    expect(statement.returnStatement()).toContain ("credit ||\n2000 ||\n1000 ||\n")
  });

  it('returns multiple credits', () => {
    const account = new Account()
    const statement = new Statement()

    account.addDeposit("deposit, 1000")
    account.addDeposit("deposit, 2000")
    account.addDeposit("deposit, 6000")
    let deposit = account.returnDeposit()

    statement.addDeposits(deposit)

    expect(statement.returnStatement()).toContain ("credit ||\n6000 ||\n2000 ||\n1000 ||\n")
  });
});

describe('account statement returns debits', () => {
  it('returns a single debit', () => {
    const account = new Account()
    const statement = new Statement()

    account.addWithdrawal("withdrawal, 500")
    let withdrawal = account.returnWithdrawal()

    statement.addWithdrawals(withdrawal)

    expect(statement.returnStatement()).toContain ("debit ||\n500 ||\n")
  });

  it('returns two debits', () => {
    const account = new Account()
    const statement = new Statement()

    account.addWithdrawal("withdrawal, 500")
    account.addWithdrawal("withdrawal, 100")
    let withdrawal = account.returnWithdrawal()

    statement.addWithdrawals(withdrawal)

    expect(statement.returnStatement()).toContain ("debit ||\n100 ||\n500 ||\n")
  });

  it('returns multiple debits', () => {
    const account = new Account()
    const statement = new Statement()

    account.addWithdrawal("withdrawal, 500")
    account.addWithdrawal("withdrawal, 100")
    account.addWithdrawal("withdrawal, 900")
    let withdrawal = account.returnWithdrawal()

    statement.addWithdrawals(withdrawal)

    expect(statement.returnStatement()).toContain ("debit ||\n900 ||\n100 ||\n500 ||\n")
  });

});


