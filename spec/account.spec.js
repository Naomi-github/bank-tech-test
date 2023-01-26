const Account = require('../lib/account')

describe('account deposits and withdraws', () => {
  it('returns a single depoist and withdrawal', () => {
    account = new Account()
    mockDeposits = [ '01/01/2023, 1000' ]
    mockWithdrawals = [ '02/01/2023, 500' ]

    account.addDeposits(mockDeposits)
    account.addWithdrawals(mockWithdrawals)

    expect(account.returnAccount()).toEqual([ '01/01/2023 ||  1000.00 |||| 1000.00', '02/01/2023 ||||  500.00 || 500.00' ])
  });

  it('returns multiple depoists and withdrawals', () => {
    account = new Account()
    mockDeposits = [ '01/01/2023, 1000' ]
    mockWithdrawals = [ '02/01/2023, 500' ]
    mockDeposits1 = [ '03/01/2023, 2000' ]
    mockWithdrawals1 = [ '04/01/2023, 1000' ]

    account.addDeposits(mockDeposits)
    account.addWithdrawals(mockWithdrawals)
    account.addDeposits(mockDeposits1)
    account.addWithdrawals(mockWithdrawals1)

    expect(account.returnAccount()).toEqual([
      '01/01/2023 ||  1000.00 |||| 1000.00',
      '02/01/2023 ||||  500.00 || 500.00',
      '03/01/2023 ||  2000.00 |||| 2500.00',
      '04/01/2023 ||||  1000.00 || 1500.00'
    ])
  });
});
