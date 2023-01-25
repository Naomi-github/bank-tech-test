const Account = require('../lib/account')

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

describe('account date', () => {
  it('returns the date of a single deposit', () => {
      accountChange = new Account()
      accountChange.addDeposit("12-01-2023, deposit, 1000")
      accountChange.addDate("12-01-2023, deposit, 1000")

      expect(accountChange.returnDate()).toContain ('12-01-2023')
  });

  it('returns the date of multiple deposits', () => {
      accountChange = new Account()
      accountChange.addDeposit("12-01-2023, deposit, 1000")
      accountChange.addDate("12-01-2023, deposit, 1000")
      accountChange.addDeposit("12-01-2023, deposit, 1000")
      accountChange.addDate("13-01-2023, deposit, 1000")

      expect(accountChange.returnDate()).toContain ('12-01-2023')
      expect(accountChange.returnDate()).toContain ('13-01-2023')
  });

  it('returns the date of multiple deposits and withdrawals', () => {
      accountChange = new Account()
      accountChange.addDeposit("12-01-2023, deposit, 1000")
      accountChange.addDate("12-01-2023, deposit, 1000")
      accountChange.addDeposit("13-01-2023, deposit, 1000")
      accountChange.addDate("13-01-2023, deposit, 1000")
      accountChange.addWithdrawal("14-01-2023, deposit, 500")
      accountChange.addDate("14-01-2023, deposit, 500")
      accountChange.addWithdrawal("15-01-2023, deposit, 500")
      accountChange.addDate("15-01-2023, deposit, 500")

      expect(accountChange.returnDate()).toContain ('12-01-2023')
      expect(accountChange.returnDate()).toContain ('13-01-2023')

  });

  it('returns the date of multiple deposits and withdrawals', () => {
      accountChange = new Account()
      accountChange.addDeposit("12-01-2023, deposit, 1000")
      accountChange.addDate("12-01-2023, deposit, 1000")
      accountChange.addWithdrawal("14-01-2023, withdrawal, 500")

      accountChange.addDate("13-01-2023, withdrawal, 1000")
      accountChange.addDeposit("13-01-2023, deposit, 1000")
      accountChange.addDate("14-01-2023, deposit, 500")
      accountChange.addWithdrawal("15-01-2023, withdrawal, 500")
      accountChange.addDate("15-01-2023, withdrawal, 500")

      expect(accountChange.returnDate()).toContain ('12-01-2023')
      expect(accountChange.returnDate()).toContain ('13-01-2023')

  });

});





