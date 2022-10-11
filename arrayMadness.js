/* Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b. */


//Answer

function arrayMadness(a, b) {
  let sumA = a.reduce ((acc,c) => acc + Math.pow(c,2),0)
  let sumB = b.reduce ((acc,c) => acc + Math.pow(c,3),0)
  if (sumA > sumB){
    return true
  } else {
    return false
  }
}
