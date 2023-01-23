const Account = require("../lib/account");
const Statement = require("../lib/statement");

describe('account statement returns deposits', () => {
  it('returns a single deposit', () => {
    const account = new Account()
    const statement = new Statement()

    account.addDeposit("deposit, 1000")
    let deposit = account.returnDeposit()

    statement.addDeposits(deposit)

    expect(statement.returnStatement()).toEqual ("credit ||\n1000 ||\n")
  });

  it('returns two deposits', () => {
    const account = new Account()
    const statement = new Statement()

    account.addDeposit("deposit, 1000")
    account.addDeposit("deposit, 2000")
    let deposit = account.returnDeposit()

    statement.addDeposits(deposit)

    expect(statement.returnStatement()).toEqual ("credit ||\n2000 ||\n1000 ||\n")
  });

  it('returns multiple deposits', () => {
    const account = new Account()
    const statement = new Statement()

    account.addDeposit("deposit, 1000")
    account.addDeposit("deposit, 2000")
    account.addDeposit("deposit, 6000")
    let deposit = account.returnDeposit()

    statement.addDeposits(deposit)

    expect(statement.returnStatement()).toEqual ("credit ||\n6000 ||\n2000 ||\n1000 ||\n")
  });

});

