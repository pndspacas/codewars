/* In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times. */

//Answer 

function move (position, roll) {
  return position + roll * 2
}
