/* Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence [] */

//Answer

function first(arr, n=1) {
  return arr.slice(0,n)
}