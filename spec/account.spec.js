const Account = require('../lib/account')

describe('account deposit', () => {
  it('returns array of one deposit', () => {
    accountChange = new Account()
    accountChange.addDeposit("deposit, 1000")

    expect(accountChange.returnDeposit()).toContain ('1000')
  });

  it('returns array of two deposits', () => {
    accountChange = new Account()

    accountChange.addDeposit("deposit, 1000")
    accountChange.addDeposit("deposit, 2000")

    expect(accountChange.returnDeposit()).toContain ('2000', '1000')
  });

  it('returns array of multiple deposits', () => {
    accountChange = new Account()

    accountChange.addDeposit("deposit, 1000")
    accountChange.addDeposit("deposit, 2000")
    accountChange.addDeposit("deposit, 500")

    expect(accountChange.returnDeposit()).toContain ('500', '2000', '1000')
  });
});

describe('account withdrawal', () => {
  it('returns array of a single withdrawal ', () => {
    accountChange = new Account()
    accountChange.addWithdrawal("withdrawal, 500")

    expect(accountChange.returnWithdrawal()).toContain ('500')
  });

  it('returns array of two withdrawals ', () => {
    accountChange = new Account()
    accountChange.addWithdrawal("withdrawal, 100")
    accountChange.addWithdrawal("withdrawal, 500")

    expect(accountChange.returnWithdrawal()).toContain ('500', '100')
  });

  it('returns array of two withdrawals ', () => {
    accountChange = new Account()
    accountChange.addWithdrawal("withdrawal, 100")
    accountChange.addWithdrawal("withdrawal, 500")
    accountChange.addWithdrawal("withdrawal, 600")

    expect(accountChange.returnWithdrawal()).toContain ('600', '500', '100')
  });
});

describe('account deposits and withdraws', () => {
  it('returns a single depoist and withdrawal', () => {
    accountChange = new Account()
    accountChange.addDeposit("deposit, 1000")
    accountChange.addWithdrawal("withdrawal, 500")
    expect(accountChange.returnDeposit()).toContain('1000')
    expect(accountChange.returnWithdrawal()).toContain('500')
  });

  it('returns multiple depoists and withdrawals', () => {
    accountChange = new Account()
    accountChange.addDeposit("deposit, 1000")
    accountChange.addDeposit("deposit, 3000")
    accountChange.addWithdrawal("withdrawal, 500")
    accountChange.addWithdrawal("withdrawal, 900")
    expect(accountChange.returnDeposit()).toContain('3000', '1000')
    expect(accountChange.returnWithdrawal()).toContain('900', '500')
  });

});


