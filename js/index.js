console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = "Mario";
console.log("The driver's name is", hacker1);

let hacker2 = "Gabriel";
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops

let capital = ``;
let space = ``;
for (let i = 0; i < hacker1.length; i++) {
  capital = hacker1.toUpperCase();
  space += capital[i] + ` `;
}
console.log(space);

let reverse = ``;
for (let i = hacker1.length - 1; i >= 0; i--) {
  reverse += hacker1[i];
}
console.log(reverse);

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
  } else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.")
  } else {
    console.log("What?! You both have the same name?")
  } 
