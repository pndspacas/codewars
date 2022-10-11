/* Convert a hash into an array. Nothing more, Nothing less */

function convertHashToArray(hash){
  let arr = Object.entries(hash)
  return arr.sort()
}
