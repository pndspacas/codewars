/* Write a function that finds the sum of all its arguments. */


//Answer

function sum(...xs) {
  return xs.reduce((acc,c) => acc +c)
}
