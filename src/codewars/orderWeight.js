// ToDo  modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.
//  For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

function orderWeight(strng) {

  const sumOf = (str) => {
    let sum =0;
    for(n of str)
      sum=sum+parseInt(n)
    return sum
  }

  return  strng
    .split(' ')
    .sort((a, b) => {return (
      sumOf(a) === sumOf(b) ?
        a - b  : sumOf(a) - sumOf(b)
    )})
    .join(' ')
}

//Broke me!!

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))
                            //11 11 2000 10003 22 123 1234000 44444444 9999 // Answer
                            //11 11 2000 22 10003 123 1234000 44444444 9999 // Me
//console.log(orderWeight("1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703"))