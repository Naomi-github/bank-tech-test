const Statement = require('../lib/statement')

describe('statement credit', () => {
  it('returns a single credit', () => {
    const mockaccount = ['1000']
    const statement = new Statement()

    statement.addDeposits(mockaccount)

    expect(statement.returnStatement()).toEqual ("credit ||\n1000 ||\n")
  });

  it('returns two credits', () => {
    const mockAccount = ['2000', '1000']
    const statement = new Statement()

    statement.addDeposits(mockAccount)


    expect(statement.returnStatement()).toEqual ("credit ||\n2000 ||\n1000 ||\n")
  });


});
