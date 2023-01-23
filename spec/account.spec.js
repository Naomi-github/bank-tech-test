const Account = require('../lib/account')

describe('account', () => {
  it('returns array of one deposit', () => {
    account = new Account("deposit, 1000")

    expect(account.deposit()).toEqual (['1000'])
  });

});
