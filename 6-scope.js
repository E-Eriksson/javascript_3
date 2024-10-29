// JavaScript scope determines the accessibility of variables within different parts of the code.

// Task 1: Declare a variable called `globalVar` with the value "I am global".
let globalVar = "I am global";
// Task 2: Create a function called `testScope` that declares a variable called
// `localVar` with the value "I am local".
testScope = () => {
  let localVar = "I am local";
  console.log(globalVar, localVar);
};
// Task 3: Inside `testScope`, print both `globalVar` and `localVar`.
testScope(); //skriver ut båda variablerna
// Task 4: Outside of the function, try to print `localVar` and observe the result.
console.log(localVar); // "Uncaught ReferenceError: localVar is not defined at <anonymous>:1:13" error i chrome
