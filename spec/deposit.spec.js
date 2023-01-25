const Deposit = require("../lib/deposit");

describe('deposit', () => {
  it('returns array of one deposit', () => {
  deposit = new Deposit()

  deposit.addDeposit('12/01/2023 1000')

  expect(deposit.returnDeposit()).toContain ('12/01/2023 1000')

});

  it('returns array of multiple deposits', () => {
  deposit = new Deposit()

  deposit.addDeposit('13/01/2023 2000')
  deposit.addDeposit('14/01/2023 1000')

  expect(deposit.returnDeposit()).toContain ('14/01/2023 1000')
  expect(deposit.returnDeposit()).toContain ('13/01/2023 2000')
});

it('returns array of multiple deposits', () => {
  deposit = new Deposit()

  deposit.addDeposit('01/01/2023, 1000')
  deposit.addDeposit('02/01/2023, 2000')
  deposit.addDeposit('03/01/2023, 500')

  expect(deposit.returnDeposit()).toContain ('01/01/2023, 1000', '02/01/2023, 2000"', '03/01/2023, 500')
});
});
