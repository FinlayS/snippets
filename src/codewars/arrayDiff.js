// Todo implement a difference function, which subtracts one list from another and returns the result.
//  It should remove all values from list a, which are present in list b.


// broke me
function arrayDiff(a, b) {
  a.map((x, i) => {
    b.filter((b) => {
      if (b !== x) {
        a.splice(i, 1)
      }
    })
  })
  return a
}

// answer

// function array_diff(a, b) {
//   return a.filter(e => !b.includes(e));
// }

// OR

// function array_diff(a, b) {
//   return a.filter(function(x) { return b.indexOf(x) == -1; });
// }

// OR even

// function array_diff(a, b) {
//   b = new Set(b)
//   return a.filter(v => !b.has(v))
// }

console.log(arrayDiff([9, -14, 4, 14, 2, -13, 14, 11, 3, 16], [9, -14, 16, 3, 2, 11]))
