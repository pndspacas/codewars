/* Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case). */



//Answer

function capitalizeWord(word) {
  let a = word[0].toUpperCase();
  let b = word.slice(1,word.length)
  let c = a.concat(b)
  return c
}
