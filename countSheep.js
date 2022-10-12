/* Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present). */

//Answer

function countSheeps(arrayOfSheep) {
  let sum = arrayOfSheep.reduce((acc, c) => acc + Boolean(c), 0)
  return sum
}
