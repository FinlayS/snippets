// Todo Given an array of integers, find the one that appears an odd number of times.
//  There will always be only one integer that appears an odd number of times.

const findOdd = (arr) => {
  let counts = {};

  arr.map(x => {
    counts[x] ? counts[x]++ : counts[x] =1
  })

  for(let n in counts) {
    if(counts[n] % 2) {
      return n
    }
  }
}

// one line answer!!!
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,1,1,2,4,20,4,-1,-2,5]))
