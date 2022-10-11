/* You received an array with two strings. Create a function that will return their product as a string */

//Answer

function arrMultiply(arr){
  let convert = arr.reduce((acc,c) => acc * c)
  
  return convert.toString()
   
}
