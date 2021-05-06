// temporary array holds objects with position
// and length of element

let rivers = ['Nile', 'Amazon', 'Congo', 'Mississippi', 'Rio-Grande'];

var lengths = rivers.map(function (e, i) {
  return {index: i, value: e.length };
});

console.log(lengths)

// sorting the lengths array containing the lengths of
// river names
lengths.sort(function (a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// copy element back to the array
var sortedRivers = lengths.map(function (e) {
  return rivers[e.index];
});

console.log(sortedRivers);