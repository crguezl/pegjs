"use strict"
const PEG, grammar, parser;
let r;

PEG = require('pegjs');

grammar = `start = a: 'a'i `;

parser = PEG.buildParser(grammar);
r = parser.parse('A');
console.log(r);

parser = PEG.buildParser(grammar);
r = parser.parse('a');
console.log(r);

