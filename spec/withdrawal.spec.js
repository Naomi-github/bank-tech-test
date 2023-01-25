Withdrawal = require('../lib/withdrawal')

describe('account withdrawal', () => {
  it('returns array of a single withdrawal ', () => {
    withdrawal = new Withdrawal()
    withdrawal.addWithdrawal('01/01/2023, 500')

    expect(withdrawal.returnWithdrawal()).toContain ('01/01/2023, 500')
  });

  it('returns array of two withdrawals ', () => {
    withdrawal = new Withdrawal()
    withdrawal.addWithdrawal('01/01/2023, 100')
    withdrawal.addWithdrawal('02/01/2023, 500')

    expect(withdrawal.returnWithdrawal()).toContain ('01/01/2023, 100', '02/01/2023, 500')
  });

  it('returns array of two withdrawals ', () => {
    withdrawal = new Withdrawal()
    withdrawal.addWithdrawal('01/01/2023, 100')
    withdrawal.addWithdrawal('02/01/2023, 500')
    withdrawal.addWithdrawal('03/01/2023, 600')

    expect(withdrawal.returnWithdrawal()).toContain ('01/01/2023, 100', '02/01/2023, 500', '100')
  });
});
