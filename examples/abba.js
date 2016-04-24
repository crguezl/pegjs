var PEG = require ("pegjs");
var grammar = `
s = ('a' / 'b')+
`;
var parser = PEG.buildParser(grammar);
var input = process.argv[2] || 'abba';
console.log(parser.parse(input));
