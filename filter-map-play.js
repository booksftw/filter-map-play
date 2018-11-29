var playArray = ['hello','cat','fun','awesome','yay'];


var shortWords = playArray.filter( el => el.length <= 3 );
console.log(shortWords);

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var playArray = ['hello','cat','fun','awesome','yay'];


//const result = words.filter(word => word.length > 6);
const result1 = playArray.filter( (el) => {el.length <= 3} ); // doesn't work
const result2 = playArray.filter( el => el.length <= 3 ); // works
const result3 = playArray.filter( function(el){el.length <= 3} ); //doensn't work
// console.log(result1);
// console.log(result2);
// console.log(result3);
// expected output: Array ["exuberant", "destruction", "present"]


// Pythagorean Theorem
//
var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

const result = input.map( (el) => {
  return Math.sqrt((el.x * el.x) + (el.y * el.y));
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);


