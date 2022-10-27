// 1. Use strict 
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2. Variable 
// 변수: 변경될 수 있는 값 
// let (added in ES6) 

let name = 'sein';
console.log(name)
name = 'hi'
console.log(name)


// 3. Constants 
const daysInWeek = 7;
const maxNumber = 3;

// 4.  4. Variable types
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//5. boolean
let num = null
console.log(num)

let num2;
console.log(num2)

// symbol
const Symbol1 = Symbol('id')
const Symbol2 = Symbol('id')
console.log(Symbol1 === Symbol2) // false
const gSymbol1 = Symbol.for('id')
const gSymbol2 = Symbol.for('id')
console.log(gSymbol1 === gSymbol2) // true
console.log(`valie: ${Symbol1.description}, type: ${typeof(Symbol1)}`)

// dynamic typing
let text = 'hello';
console.log(text.charAt(0))
text = 12 ;
console.log(text.charAt(0))


