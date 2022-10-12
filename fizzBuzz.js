/* If a number is divisible by 3, the student says “fizz” rather than the number.
If a number is divisible by 5, they say “buzz” rather than the number.
If a number is divisible by both, they say “fizz buzz”
*/

//Answer

function FizzBuzz(num) {
    for (let i = 1; i<=num;i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        } else if (i % 3 === 0){
            console.log("Fizz")
        } else if (i % 5 === 0){
            console.log("Buzz")
    } else {
        console.log(i)
    }
}
}
