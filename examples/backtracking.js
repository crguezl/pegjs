var PEG = require ("pegjs");
var grammar1 = `
start = "test" / "test ;"
`;
var parser = PEG.buildParser(grammar1);
var input = 'test';
console.log("OK: "+parser.parse(input));
try {
  // This input will not be accepted 
  var input = 'test ;';
  console.log(parser.parse(input));
}
catch (e) {
  console.log(e);
}
var grammar2 = `
start = "test" !" ;" / "test ;"
`;
var parser = PEG.buildParser(grammar2);
var input = 'test ;';
console.log("OK: "+parser.parse(input));
