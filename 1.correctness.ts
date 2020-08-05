/*
Question #1: Correctness

In TypeScript, write a function called "scriptAt". Prove that it's correct by providing a set of test cases. 
The function will do as follows.

Given a string as an input, find the index of the string "Script" within the input string. 

You can use Google to look up the method calls.

Questions:
1) How to ensure that the input is a string at compile time?
2) What did you learn from this exercise?
*/

function scriptAt(value: string): number {
    return value.indexOf('Script');
}
console.log(scriptAt('this is Script'));

/* Answer
1) We must define type for parameter and return, so typescript know what type to accept.
2) Always use type, so that it could prevent unexpected bugs.
*/
