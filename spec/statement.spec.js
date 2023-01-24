const Statement = require('../lib/statement')

describe('statement credit', () => {
  it('returns a single credit', () => {
    const mockaccount = ['1000']
    const statement = new Statement()

    statement.addDeposits(mockaccount)

    expect(statement.returnStatement()).toContain ("credit ||\n1000 ||\n")
  });

  it('returns two credits', () => {
    const mockAccount = ['2000', '1000']
    const statement = new Statement()

    statement.addDeposits(mockAccount)


    expect(statement.returnStatement()).toContain ("credit ||\n2000 ||\n1000 ||\n")
  });
});

describe('statements debit', () => {
  it('returns a single debit', () => {
    const mockaccount = ['500']
    const statement = new Statement()

    statement.addWithdrawals(mockaccount)

    expect(statement.returnStatement()).toContain ("debit ||\n500 ||\n")
  });

  it('returns two debits', () => {
    const mockaccount = ['500', '100']
    const statement = new Statement()

    statement.addWithdrawals(mockaccount)

    expect(statement.returnStatement()).toContain ("debit ||\n500 ||\n100 ||\n")
  });

  it('returns multiple debits', () => {
    const mockaccount = ['500', '100', '900']
    const statement = new Statement()

    statement.addWithdrawals(mockaccount)

    expect(statement.returnStatement()).toContain ("debit ||\n500 ||\n100 ||\n900 ||\n")
  });
});

