/* Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12. */


//Answer

function howManydays(month){
  var days;
  switch (month){
  case 1:
      return 31
      break;
  case 2:
      return 28;
  case 3:
      return 31
      break;
  case 4:
      return 30;
      break;
  case 5:
      return 31
      break;
  case 6:
      return 30
      break;
  case 7:
      return 31
      break;
  case 8:
      return 31
      break;
  case 9:
      return 30
      break;
  case 10:
      return 31
      break;
  case 11:
      return 30
      break;
  case 12:
      return 31;
      break;
  }
  return days;
}
