const Statement = require('../lib/statement')

describe('statement credit', () => {
  it('returns a single credit', () => {
    const mockAccount = ['1000']
    const statement = new Statement()

    statement.addDeposits(mockAccount)

    expect(statement.returnStatement()).toContain ("credit")
    expect(statement.returnStatement()).toContain ("1000")
  });

  it('returns two credits', () => {
    const mockAccount = ['2000', '1000']
    const statement = new Statement()

    statement.addDeposits(mockAccount)


    expect(statement.returnStatement()).toContain ("credit")
    expect(statement.returnStatement()).toContain ("2000")
    expect(statement.returnStatement()).toContain ("1000")
  });
});

describe('statements debit', () => {
  it('returns a single debit', () => {
    const mockAccount = ['500']
    const statement = new Statement()

    statement.addWithdrawals(mockAccount)

    expect(statement.returnStatement()).toContain ("debit")
    expect(statement.returnStatement()).toContain ("500")
  });

  it('returns two debits', () => {
    const mockAccount = ['500', '100']
    const statement = new Statement()

    statement.addWithdrawals(mockAccount)

    expect(statement.returnStatement()).toContain ("debit")
    expect(statement.returnStatement()).toContain ("500")
    expect(statement.returnStatement()).toContain ("100")
  });

  it('returns multiple debits', () => {
    const mockAccount = ['500', '100', '900']
    const statement = new Statement()

    statement.addWithdrawals(mockAccount)

    expect(statement.returnStatement()).toContain ("debit")
    expect(statement.returnStatement()).toContain ("500")
    expect(statement.returnStatement()).toContain ("100")
    expect(statement.returnStatement()).toContain ("900")
  });
});

describe('statement returns debit and credit', () => {
  it('returns a debit and a credit in one statement', () => {
    const mockAccountCredit = ['1000']
    const mockAccountDebit = ['500']
    const statement  = new Statement()

    statement.addDeposits(mockAccountCredit)
    statement.addWithdrawals(mockAccountDebit)

    expect(statement.returnStatement()).toContain("credit")
    expect(statement.returnStatement()).toContain("1000")
    expect(statement.returnStatement()).toContain("debit")
    expect(statement.returnStatement()).toContain("500")
  });

  it('returns multiple debits and credits in one statement', () => {
    const mockAccountCredit = ['1000', '500']
    const mockAccountDebit = ['500', '700']
    const statement  = new Statement()

    statement.addDeposits(mockAccountCredit)
    statement.addWithdrawals(mockAccountDebit)

    expect(statement.returnStatement()).toContain("credit")
    expect(statement.returnStatement()).toContain("1000")
    expect(statement.returnStatement()).toContain("500")
    expect(statement.returnStatement()).toContain("debit")
    expect(statement.returnStatement()).toContain("500")
    expect(statement.returnStatement()).toContain("700")
  });
});

describe('statement returns balance', () => {
  it('returns balance of a single credit', () => {
    const mockAccount = ['1000']
    const statement = new Statement()

    statement.addDeposits(mockAccount)

    expect(statement.returnStatement()).toContain ('credit')
    expect(statement.returnStatement()).toContain ('1000')
    expect(statement.returnStatement()).toContain("balance")
    expect(statement.returnStatement()).toContain("1000")
  });

  it('returns balance for multiple credits', () => {
    const mockAccount = ['1000', '1000']
    const statement = new Statement()

    statement.addDeposits(mockAccount)

    expect(statement.returnStatement()).toContain ('credit')
    expect(statement.returnStatement()).toContain ('1000')
    expect(statement.returnStatement()).toContain("balance")
    expect(statement.returnStatement()).toContain("1000")
    expect(statement.returnStatement()).toContain("2000")
  });

  it('returns balance for credits and debits ', () => {
    const mockAccountDeposit = ['1000', '1000']
    const mockAccountWithdrawal = ['500', '500']
    const statement = new Statement()

    statement.addDeposits(mockAccountDeposit)
    statement.addWithdrawals(mockAccountWithdrawal)

    expect(statement.returnStatement()).toContain ('credit')
    expect(statement.returnStatement()).toContain ('debit')
    expect(statement.returnStatement()).toContain ('1000')
    expect(statement.returnStatement()).toContain("balance")
    expect(statement.returnStatement()).toContain("2000")
    expect(statement.returnStatement()).toContain("1500")
  });
});

describe('statement returns date of credit / debit', () => {
  it('returns date for a single credit', () => {
    const mockAccountDeposit = ['1000']
    const mockAccountDate = ['12-01-2023']
    const statement = new Statement()

    statement.addDeposits(mockAccountDeposit)
    statement.addDate(mockAccountDate)

    expect(statement.returnStatement()).toContain("date")
    expect(statement.returnStatement()).toContain("12-01-2023")
  });

  it('returns date for a multiple credits', () => {
    const mockAccountDeposit = ['1000', '2000']
    const mockAccountDate = ['12-01-2023', '13-01-2023']
    const statement = new Statement()

    statement.addDeposits(mockAccountDeposit)
    statement.addDate(mockAccountDate)

    expect(statement.returnStatement()).toContain("date")
    expect(statement.returnStatement()).toContain("12-01-2023")
    expect(statement.returnStatement()).toContain("13-01-2023")
  });

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




