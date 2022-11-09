// for (i=1; i<11; i++) {
//     console.log(Math.pow(2, i)) //2**i
// }

// i = 1
// while (i<11) {
//     console.log(Math.pow(2, i)) //2**i
//     i++
// }

let input;
let numberedInput;
do {
  input = prompt("What is your name?"); //always return a string
} while (!isNaN(Number(input))); //users enters a number the result of Number() is a number, else it is Nan

// alert("Hello " + input);
alert(`Hello ${input}`);
