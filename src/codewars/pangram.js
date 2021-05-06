// Todo replace every letter with its position in the alphabet.
//  If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
  return text
    .replace(/[^a-z]/gi,"")
    .toLowerCase()
    .split("")
    .map(x => " abcdefghijklmnopqrstuvwxyz".indexOf(x))
    .join(" ")
}

// function alphabetPosition(text) {
//   return text
//     .toLowerCase()
//     .match(/[a-z]/gi)
//     .map(c => c.charCodeAt() - 96)
//     .join(' ');
// }

console.log(alphabetPosition("4jz2?-u:"))