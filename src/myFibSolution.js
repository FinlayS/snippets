export const fibMe = (seq) => {

  let fib = 0, nTwo = 1, nOne = 0;

  for (let i = 0; i <= seq-1; i++) {
    fib = nTwo + nOne;
    // console.log(nTwo, nOne, fib)
    nTwo = nOne;
    nOne = fib;
  }
  return fib
}

// console.log(fibMe(35))