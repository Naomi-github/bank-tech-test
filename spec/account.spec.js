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

  it('returns array of multiple deposits', () => {
    accountChange = new Account()

    accountChange.addDeposit("deposit, 1000")
    accountChange.addDeposit("deposit, 2000")
    accountChange.addDeposit("deposit, 500")

    expect(accountChange.returnDeposit()).toEqual (['500', '2000', '1000'])
  });
});

describe('accounts withdrawal', () => {
  it('returns array of a single withdrawal ', () => {
    accountChange = new Account()
    accountChange.addWithdrawal("withdrawal, 500")

    expect(accountChange.returnWithdrawal()).toEqual (['500'])
  });

});

