/* Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6] */

//Answer

function getEvenNumbers(numbersArray){
let arr = numbersArray.filter((num) => num % 2 === 0)
return arr
  
}
