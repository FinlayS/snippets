function sortArray(array) {

  const newArray = new Array(array.length).fill(null);
  let evenObj ={}
  let oddArray = []

  // save indexes of even numbers and create new array of odd numbers
  array.map((x, i) => {
    return !(x % 2) ?
      evenObj[i] = x
      : oddArray.push(x)
  })

  // sort odd
  oddArray
    .sort((a, b) => {
      return a - b
    })

  console.log(oddArray)

  // put even numbers back in their original index
  for (const [i, key] of Object.entries(evenObj)) {
    newArray.splice(i, 1, Number(key))
  }

  // put odd numbers back in empty slots left to right
  oddArray.map(x => {
    for  (let i =0 ; i < newArray.length; i++ ){
      if (newArray[i] === null) {
        newArray.splice(i, 1, x)
        break
      }
    }
  })

  return newArray
}

console.log(sortArray([5, 3, 2, -2, -5, 8, 1, 4]))

// return  b.map((x) => { return  a.filter(f => f !== x ) })
