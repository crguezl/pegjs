const PEG = require ("pegjs");
const grammar1 = `
start = "test" / "test ;"
`;
let parser = PEG.generate(grammar1);
let input = 'test';
console.log("OK: "+parser.parse(input)); // OK: test
try {
  // This input will not be accepted 
  const input = 'test ;';
  console.log(parser.parse(input));
}
catch (e) { // Expected end of input but " " found
  console.log(e.message);
}
const grammar2 = `
start = "test" !" ;" / "test ;"
`;
parser = PEG.generate(grammar2);
input = 'test ;';
console.log("OK: "+parser.parse(input)); // OK: test ;
