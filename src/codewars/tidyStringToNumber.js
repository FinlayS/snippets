const strToNum = (str) => {
  return str.trim().split(' ')
    .map(num => num.replace(/[^0-9.]+/g, ""))
}

console.log(strToNum('   4.77 stars out of 6')[0])
