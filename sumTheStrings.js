/* Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string): */

//Answer

function sumStr(a,b) {
  let numberOne = Number(a)
  let numberTwo = Number(b)
  let sum = numberOne + numberTwo
  return sum.toString()
}
