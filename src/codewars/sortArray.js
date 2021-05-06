// Todo You will be given an array of numbers.
//  You have to sort the odd numbers in ascending order while
//  leaving the even numbers at their original positions.


function sortArray(array) {
  let oddArraySorted = []

  // save indexes of even numbers create new sorted array of odd numbers
  // remove odd numbers from array
  array.map((x, i) => {
    return (x % 2)
      ? (oddArraySorted.push(x),  array.splice(i, 1, null))
      : null
  })

  // sort odd numbers
    oddArraySorted.sort((a, b) => {
      return a - b
    })

  // map back odd numbers
  oddArraySorted.map(x => {
    for  (let i =0 ; i < array.length; i++ ){
      if (array[i] === null) {
        array.splice(i, 1, x)
        break
      }
    }
  })

  return array
}

// short answer!
// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//   return array.map((x) => x % 2 ? odd.shift() : x);
// }


// console.log(sortArray([24, 4, -49, 42, 26, -2, -49, 46, -9, -7, 44, 49, 46]))
console.log(sortArray([5, 3, 2, -2, -5, 8, 1, 4]))