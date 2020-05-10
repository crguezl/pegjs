const PEG = require('pegjs');
const grammar = 'start = a: ..';
const parser = PEG.generate(grammar);
const r = parser.parse("\n\t");
console.log(r);
