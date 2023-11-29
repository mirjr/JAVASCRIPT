// old school
console.log(a); // undifined
var a = 10;

console.log(b); // ReferenceError: Cannot access 'b' before initialization /terminal
let b = 11;

console.log(PI); // Uncaught ReferenceError: can't access lexical declaration 'c' before initialization /web
const PI = 3.14;