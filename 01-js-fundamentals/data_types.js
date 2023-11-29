// Number
console.log(1 / 0); // Infinity
console.log(typeof (Infinity)); // number

console.log("Hello" / 2); // NaN
console.log("4" / 2); // 2
console.log(NaN + 1); // NaN
console.log(NaN + 1 * 3); // NaN
console.log(NaN ** 0); // 1
console.log(NaN ** 0 + 1); // 2
console.log(typeof (NaN)); // number

// BigInt
console.log(2e53 - 1);
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
console.log(9007199254740991n + 9007199254740991n); // 18014398509481982n
// console.log(9007199254740991n + 2); // TypeError: Cannot mix BigInt and other types, use explicit conversions

// String
console.log("Hello", 2024); // Hello 2024
console.log("Bye" + 2023); //Bye2023
let hi = "Hi";
console.log(`${hi}, How are you?`);
console.log(`3 * 4 = ${3 * 4}`);

console.log('E\'tiboringiz uchun rahmat');
console.log('Kino nomi \"Qasoskorlar\"');
console.log('Kino nomi "Qasoskorlar"');
console.log("Kino nomi 'Qasoskorlar'");
console.log("the result is ${1 + 2}");

// Boolean
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

// null
let age = null; // In JavaScript, null is not a “reference to a non-existing object” 
                // or a “null pointer” like in some other languages.
                // It’s just a special value which represents “nothing”, “empty” or “value unknown”.
console.log(age);

// undefined
let ism;
console.log(ism); // undefined

// Object & Symbols

console.log(typeof 10); // number
console.log(typeof 10n); // bigint
console.log(typeof "10"); // string
console.log(typeof true); // boolean
console.log(typeof null); // object, typeoff error
console.log(typeof undefined); // undefined
console.log(typeof Symbol()); // symbol
console.log(typeof Object()); // object

// let name = prompt("What is your name?")
// alert(name);