"use strict";
const util = require('util');
const PEG = require("pegjs");
const grammar = `
  a = 'hello' b
  b = 'world'
`; 
console.log(grammar);

const parser = PEG.generate(grammar,{ allowedStartRules: ['a', 'b'] });

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
}
console.log(`The error object:`);
console.log(util.inspect(r, {depth: null}));
/*
{
  message: 'Expected "hello" but "w" found.',
  expected: [ { type: 'literal', text: 'hello', ignoreCase: false } ],
  found: 'w',
  location: {
    start: { offset: 0, line: 1, column: 1 },
    end: { offset: 1, line: 1, column: 2 }
  },
  name: 'SyntaxError'
}
*/
