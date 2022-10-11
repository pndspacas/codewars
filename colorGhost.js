/* Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated */

//Answer

let Ghost = class {
  constructor(){
  this.color = ""
  let random = Math.random()
  if (random < .25){
    return this.color = "red"
  } else if (random > .25 && random < .50){
    return this.color = "white"
  } else if (random >.50 && random < .75){
    return this.color = "purple"
  } else {
    return this.color = "yellow"
  }}
};
