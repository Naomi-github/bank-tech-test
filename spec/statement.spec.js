const Statement = require('../lib/statement')

describe('statement credit', () => {
  it('statement with a withdrawal and a deposit', () => {
    const mockAccount = ['01/01/2023 ||  1000 |||| 1000', '02/01/2023 ||||  500 || 500']
    const statement = new Statement()

    statement.addAccount(mockAccount)

    expect(statement.returnStatement()).toEqual("date || credit || debit || balance\n02/01/2023 ||||  500 || 500 \n01/01/2023 ||  1000 |||| 1000 ")
  })

  it('statement with multiple withdrawals and  deposits', () => {
    const mockAccount = ['01/01/2023 ||  1000 |||| 1000', '02/01/2023 ||||  500 || 500', '03/01/2023 ||  2000 |||| 2500', '04/01/2023 ||||  700 || 1800']
    const statement = new Statement()

    statement.addAccount(mockAccount)

    expect(statement.returnStatement()).toEqual("date || credit || debit || balance\n04/01/2023 ||||  700 || 1800 \n03/01/2023 ||  2000 |||| 2500 \n02/01/2023 ||||  500 || 500 \n01/01/2023 ||  1000 |||| 1000 ")
  })
});
