function list(names) {
  let i = 0
  let str = ""

  const getPunctuation = (count, length) => count === length ? " & " : ", "

  names.forEach(n => {
      i++
      names.length >= 1
        ? !str ? str = n.name : (str = str.concat(getPunctuation(i, names.length), n.name))
        : null
    }
  )
  return str
}

// nice solution
// var list = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]))


