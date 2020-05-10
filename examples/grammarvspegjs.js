const PEG = require('pegjs');
const grammar = `
  A =  B 'c'
  B = 'b' / 'b' 'a'
`;
const parser = PEG.generate(grammar);
let r = parser.parse("bc");
console.log("r = " + r);
try {
  r = parser.parse("bac");
  console.log("r = " + r);
} catch(e) { console.log(e.message); }

