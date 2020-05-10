"use strict"
const PEG = require('pegjs');
const grammar = `start = a: 'a'i `;
const parser = PEG.generate(grammar);
let r = parser.parse('A');
console.log(r);
