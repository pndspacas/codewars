/* Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

Find the errors in the code to get the celsius converter working properly. */

//Answer

function weatherInfo (fahrenheit) {
  let temp = (fahrenheit - 32) * (5/9)
  
  if (temp <= 0){
    return (temp + " is freezing temperature");
    }
  else{
    return (temp + " is above freezing temperature");
    }
}
