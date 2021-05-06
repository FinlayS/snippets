export function fib(n) {
  if (n < 2){
    console.log("bob", n)
    return n
  }
  console.log(fib(n - 1) + fib(n - 2))
  return fib(n - 1) + fib (n - 2)
}

console.log(fib(7))