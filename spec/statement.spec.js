const Statement = require('../lib/statement')

describe('statement credit', () => {
  it('returns a single credit', () => {
    // const account = a
    const statement = new Statement()

    statement.addDeposits(['1000'])

    expect(statement.returnStatement()).toEqual ("credit ||\n1000 ||\n")
  });

  it('returns two credits', () => {
    const statement = new Statement()

    statement.addDeposits(['1000'])
    statement.addDeposits(['2000'])

    expect(statement.returnStatement()).toEqual ("credit ||\n1000 ||\n2000 ||\n")
  });


});
