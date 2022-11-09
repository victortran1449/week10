// for (i=1; i<11; i++) {
//     console.log(Math.pow(2, i)) //2**i
// }

// i = 1
// while (i<11) {
//     console.log(Math.pow(2, i)) //2**i
//     i++
// }

// let input;
// let numberedInput;
// do {
//   input = prompt("What is your name?"); //always return a string
// } while (!isNaN(Number(input))); //users enters a number the result of Number() is a number, else it is Nan

// // alert("Hello " + input);
// alert(`Hello ${input}`);

// let fruits = ['Apple', 'Banana'];

// fruits.push('Orange');
// // console.log(fruits);

// // fruits.pop();
// // console.log(fruits);

// fruits.unshift('Mango');
// // console.log(fruits);

// // fruits.shift();
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (let item of fruits) {
//     console.log(item);
// }

// const person = {
//     name:['Bob', 'Smith'],
//     age:32,
//     gender:'male',
//     hobbies :['music', 'skiing']
// }

// console.log(`my name is ${person.name[0]} ${person.name[1]}. I am interested in ${person.hobbies[0]} and ${person.hobbies[1]}`)

let student1 = {
  ID: "A00022",
  GPA: 3.0,
  program: "CIT",
};

let student2 = {
  ID: "A01000",
  GPA: 3.1,
  program: "CST",
};

let student3 = {
  ID: "A00114",
  GPA: 3.2,
  program: "CIT",
};
let students = [student1, student2, student3];
counter = 0;
for (let student of students) {
  if (student.program == "CIT" && student.GPA > 3) {
    console.log(student);
    counter = counter + 1;
  }
}
console.log(counter);
