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
  it('returns balance of a single deposit', () => {
    const mockAccount = ['1000']
    const statement = new Statement()

    statement.addDeposits(mockAccount)
    // statement.addBalance()

    expect(statement.returnStatement()).toContain ('credit')
    expect(statement.returnStatement()).toContain ('1000')
    expect(statement.returnStatement(mockAccount)).toContain("balance")
    expect(statement.returnStatement(mockAccount)).toContain("1000")
});
});



