const Account = require("../lib/account");
const Statement = require("../lib/statement");

describe('account statement returns credits', () => {
  it('returns a single credit', () => {
    const account = new Account()
    const statement = new Statement()

    account.addDeposit("deposit, 1000")
    let deposit = account.returnDeposit()

    statement.addDeposits(deposit)

    expect(statement.returnStatement()).toContain ("credit")
    expect(statement.returnStatement()).toContain ("1000")
  });

  it('returns two credits', () => {
    const account = new Account()
    const statement = new Statement()

    account.addDeposit("deposit, 1000")
    account.addDeposit("deposit, 2000")
    let deposit = account.returnDeposit()

    statement.addDeposits(deposit)

    expect(statement.returnStatement()).toContain ("credit")
    expect(statement.returnStatement()).toContain ("2000")
    expect(statement.returnStatement()).toContain ("1000")
  });

  it('returns multiple credits', () => {
    const account = new Account()
    const statement = new Statement()

    account.addDeposit("deposit, 1000")
    account.addDeposit("deposit, 2000")
    account.addDeposit("deposit, 6000")
    let deposit = account.returnDeposit()

    statement.addDeposits(deposit)

    expect(statement.returnStatement()).toContain ("credit")
    expect(statement.returnStatement()).toContain ("6000")
    expect(statement.returnStatement()).toContain ("2000")
    expect(statement.returnStatement()).toContain ("1000")
  });
});

describe('account statement returns debits', () => {
  it('returns a single debit', () => {
    const account = new Account()
    const statement = new Statement()

    account.addWithdrawal("withdrawal, 500")
    let withdrawal = account.returnWithdrawal()

    statement.addWithdrawals(withdrawal)

    expect(statement.returnStatement()).toContain ("debit")
    expect(statement.returnStatement()).toContain ("500")
  });

  it('returns two debits', () => {
    const account = new Account()
    const statement = new Statement()

    account.addWithdrawal("withdrawal, 500")
    account.addWithdrawal("withdrawal, 100")
    let withdrawal = account.returnWithdrawal()

    statement.addWithdrawals(withdrawal)

    expect(statement.returnStatement()).toContain ("debit")
    expect(statement.returnStatement()).toContain ("100")
    expect(statement.returnStatement()).toContain ("500")
  });

  it('returns multiple debits', () => {
    const account = new Account()
    const statement = new Statement()

    account.addWithdrawal("withdrawal, 500")
    account.addWithdrawal("withdrawal, 100")
    account.addWithdrawal("withdrawal, 900")
    let withdrawal = account.returnWithdrawal()

    statement.addWithdrawals(withdrawal)

    expect(statement.returnStatement()).toContain ("debit")
    expect(statement.returnStatement()).toContain ("900")
    expect(statement.returnStatement()).toContain ("100")
    expect(statement.returnStatement()).toContain ("500")
  });
});

describe('account statement returns debit and credit', () => {
  it('returns a debit and a credit in one statement', () => {

    const account = new Account()
    const statement  = new Statement()

    account.addDeposit('deposit, 1000')
    account.addWithdrawal('withdrawal, 500')

    let depoist = account.returnDeposit()
    let withdrawal = account.returnWithdrawal()

    statement.addDeposits(depoist)
    statement.addWithdrawals(withdrawal)

    expect(statement.returnStatement()).toContain("credit")
    expect(statement.returnStatement()).toContain("1000")
    expect(statement.returnStatement()).toContain("debit")
    expect(statement.returnStatement()).toContain("500")
  });

  it('returns multiple debits and credits in one statement', () => {
    const account = new Account()
    const statement  = new Statement()

    account.addDeposit('deposit, 1000')
    account.addWithdrawal('withdrawal, 500')
    account.addDeposit('deposit, 5000')
    account.addWithdrawal('withdrawal, 3500')

    let depoist = account.returnDeposit()
    let withdrawal = account.returnWithdrawal()

    statement.addDeposits(depoist)
    statement.addWithdrawals(withdrawal)

    expect(statement.returnStatement()).toContain("credit")
    expect(statement.returnStatement()).toContain("1000")
    expect(statement.returnStatement()).toContain("debit")
    expect(statement.returnStatement()).toContain("500")
  });
});


