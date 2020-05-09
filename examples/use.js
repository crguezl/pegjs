#!/usr/bin/env node

const [peg, input] = process.argv.splice(2);

const parse = require('./'+peg).parse;
console.log(`Processing <${input}>`);
try {
  const r = parse(input);
  console.log(r);
} catch(e) {
  console.log(e.message)
}  

