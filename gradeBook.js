/* Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade. 

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'

*/


//Answer 

function getGrade (s1, s2, s3) {
  let total = (s1 + s2 + s3) / 3
  if (total >= 90 && total <=100){
    return "A"
  } else if (total >= 80 && total < 90){
    return "B"
  } else if (total >=70 && total  < 80){
  return "C"
  } else if (total >= 60 && total <70){
    return "D"
  } else if (total >= 0 && total <60 ) {
    return "F"
  }
}
