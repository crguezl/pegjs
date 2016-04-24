"use strict";
const PEG = require("pegjs");
const grammar = `
  a = 'hello' b
  b = 'world'
`; 
console.log(grammar);

const parser = PEG.buildParser(grammar,{ allowedStartRules: ['a', 'b'] });

let r = parser.parse("helloworld", { startRule: 'a' });
console.log(r); // [ 'hello', 'world' ]

r = parser.parse("helloworld")
console.log(r); // [ 'hello', 'world' ]

r =  parser.parse("world", { startRule: 'b' })
console.log(r); // 'world'

try {
  r = parser.parse("world"); // Throws an exception
}
catch(e) {
  r = e;
  console.log("Error!!!!");
}
console.log(r);
/*
{ message: 'Expected "hello" but "w" found.',
  expected: [ { type: 'literal', value: 'hello', description: '"hello"' } ],
  found: 'w',
  offset: 0,
  line: 1,
  column: 1,
  name: 'SyntaxError' }
*/
