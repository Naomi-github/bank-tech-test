const Account = require('../lib/account')

describe('account deposits and withdraws', () => {
  it('returns a single depoist and withdrawal', () => {
    account = new Account()
    mockDeposits = [ '01/01/2023, 1000' ]
    mockWithdrawals = [ '02/01/2023, 500' ]

    account.addBalance(mockDeposits)
    account.addDeposits(mockDeposits)
    account.removeBalance(mockWithdrawals)
    account.addWithdrawals(mockWithdrawals)

    expect(account.returnAccount()).toEqual([ '01/01/2023, 1000 1000', '02/01/2023, 500 500' ])
  });

  it('returns multiple depoists and withdrawals', () => {
    account = new Account()
    mockDeposits = [ '01/01/2023, 1000' ]
    mockWithdrawals = [ '02/01/2023, 500' ]
    mockDeposits1 = [ '03/01/2023, 2000' ]
    mockWithdrawals1 = [ '04/01/2023, 1000' ]

    account.addBalance(mockDeposits)
    account.addDeposits(mockDeposits)
    account.removeBalance(mockWithdrawals)
    account.addWithdrawals(mockWithdrawals)
    account.addBalance(mockDeposits1)
    account.addDeposits(mockDeposits1)
    account.removeBalance(mockWithdrawals1)
    account.addWithdrawals(mockWithdrawals1)

    expect(account.returnAccount()).toEqual([
      '01/01/2023, 1000 1000',
      '02/01/2023, 500 500',
      '03/01/2023, 2000 2500',
      '04/01/2023, 1000 1500'
    ])
  });
});
