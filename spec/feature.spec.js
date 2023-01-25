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

describe('account statement returns balance', () => {
  it('returns balance of a single credit', () => {
    const account = new Account()
    const statement = new Statement()

    account.addDeposit("deposit, 500")
    let depoist = account.returnDeposit()
    statement.addDeposits(depoist)

    expect(statement.returnStatement()).toContain ("debit")
    expect(statement.returnStatement()).toContain ("balance")
    expect(statement.returnStatement()).toContain ("500")
  });

  it('returns balance of a single credit', () => {
    const account = new Account()
    const statement = new Statement()

    account.addDeposit("deposit, 1000")
    account.addWithdrawal("withdrawal, 500")
    account.addDeposit("deposit, 2000")
    account.addWithdrawal("withdrawal, 600")

    let depoist = account.returnDeposit()
    let withdrawal = account.returnWithdrawal()

    statement.addDeposits(depoist)
    statement.addWithdrawals(withdrawal)

    expect(statement.returnStatement()).toContain ("debit")
    expect(statement.returnStatement()).toContain ("balance")
    expect(statement.returnStatement()).toContain ("500")
    expect(statement.returnStatement()).toContain ("1000")
    expect(statement.returnStatement()).toContain ("2500")
  });

});

describe('returns date', () => {
  it('returns date for a multiple credits and debits', () => {
    const mockAccountDeposit = ['1000', '2000']
    const mockAccountWithdrawal = ['500', '600']
    const mockAccountDate = ['12-01-2023', '13-01-2023', '14-01-2023', '15-01-2023']
    const statement = new Statement()

    statement.addDeposits(mockAccountDeposit)
    statement.addWithdrawals(mockAccountWithdrawal)
    statement.addDate(mockAccountDate)

    expect(statement.returnStatement()).toContain("date")
    expect(statement.returnStatement()).toContain("12-01-2023")
    expect(statement.returnStatement()).toContain("13-01-2023")
    expect(statement.returnStatement()).toContain("14-01-2023")
    expect(statement.returnStatement()).toContain("15-01-2023")
  });
});



