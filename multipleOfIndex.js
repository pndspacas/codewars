/* Return a new array consisting of elements which are multiple of their own index in input array (length > 1). */

//Answer

function multipleOfIndex(array) {
  let arr = array.filter((e,i) => e % i === 0)
  return arr
}
