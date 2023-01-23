const Account = require('../lib/account')

describe('account deposit', () => {
  it('returns array of one deposit', () => {
    accountChange = new Account()
    accountChange.addDeposit("deposit, 1000")

    expect(accountChange.returnDeposit()).toEqual (['1000'])
  });

  it('returns array of two deposits', () => {
    accountChange = new Account()

    accountChange.addDeposit("deposit, 1000")
    accountChange.addDeposit("deposit, 2000")

    expect(accountChange.returnDeposit()).toEqual (['2000', '1000'])
  });

});
