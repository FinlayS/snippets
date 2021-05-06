import { fibMe } from "src/myFibSolution"

describe("fib tests", () =>{
  it("result is 0 for sequence 0", () => {
    expect(fibMe(0)).toEqual(0)
  })

  it("result is 1 for sequence 1", () => {
    expect(fibMe(1)).toEqual(1)
  })

  it("result is 1 for sequence 2", () => {
    expect(fibMe(2)).toEqual(1)
  })

  it("result is 2 for sequence 3", () => {
    expect(fibMe(3)).toEqual(2)
  })

  it("result is 3 for sequence 1", () => {
    expect(fibMe(4)).toEqual(3)
  })

  it("result is 5 for sequence 5", () => {
    expect(fibMe(5)).toEqual(5)
  })

  it("result is 8 for sequence 6", () => {
    expect(fibMe(6)).toEqual(8)
  })

  it("result is 9227465 for sequence 35", () => {
    expect(fibMe(35)).toEqual(9227465)
  })


})