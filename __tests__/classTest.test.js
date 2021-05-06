class SavingsAccount {

  constructor(initialBalance = 0) {
    this.balance = initialBalance;
    this.interest = 1.05
    this.overdrawnCharges = 1.20
  }

  checkBalance() {
    return this.balance
  }

  deposit(amountToDeposit) {
    return this.balance = amountToDeposit + this.balance
  }

  withdraw(amountToWithdraw) {
    return this.balance = this.balance - amountToWithdraw
  }

  calcBalanceWithInterest() {
    return this.balance > 0
      ? this.balance = this.balance * this.interest
      : this.balance = this.balance * this.overdrawnCharges
  }
}

describe("savings account" , () =>{
  it("can set a new instance of SavingsAccount", () => {
    const s = new SavingsAccount()
    expect(s).toBeInstanceOf(SavingsAccount)
  })

  it("should set initial constructor values", () => {
    const s = new SavingsAccount()
    expect(s.balance).toEqual(0)
    expect(s.interest).toEqual(1.05)
    expect(s.overdrawnCharges).toEqual(1.20)
  })

  it("check initial balance", () => {
    const s = new SavingsAccount(12.99)
    expect(s.balance).toEqual(12.99)
  })

  it("can set & check initial balance", () => {
    const s = new SavingsAccount(45.99)
    expect(s.checkBalance()).toEqual(45.99)
  })

  it("should show updated balance after deposit", () => {
    const s = new SavingsAccount()
    s.deposit(5000)
    expect(s.checkBalance()).toEqual(5000)
  })

  it("should update balance after withdrawal", () => {
    const s = new SavingsAccount(5000)
    s.withdraw(199)
    expect(s.checkBalance()).toEqual(4801)
  })

  it('should return negative balance when overdraw', () => {
    const s = new SavingsAccount(200)
    s.withdraw(250)
    expect(s.checkBalance()).toEqual(-50)
  })

  it("should not calc interest on zero balance", () => {
    const s = new SavingsAccount()
    expect(s.calcBalanceWithInterest()).toEqual(0)
  })

  it("should calc interest on balance", () => {
    const s = new SavingsAccount(50)
    expect(s.calcBalanceWithInterest()).toEqual(52.5)
  })

  it("should update balance after interest calc", () => {
    const s = new SavingsAccount(150)
    s.calcBalanceWithInterest()
    expect(s.checkBalance()).toEqual(157.5)
  })

  it("should calc overdrawn charges on negative balance", () => {
    const s = new SavingsAccount(-50)
    expect(s.calcBalanceWithInterest()).toEqual(-60)
  })

  it("should update balance after overdrawn charges", () => {
    const s = new SavingsAccount(-100)
    s.calcBalanceWithInterest()
    expect(s.checkBalance()).toEqual(-120)
  })

  it("should update balance after setting as string", () => {
    const s = new SavingsAccount("dd")
    expect(s.calcBalanceWithInterest()).toBeNaN()
    // expect(s.checkBalance()).toThrow()
    // expect(s.checkBalance()).toEqual(45)
  })
})
