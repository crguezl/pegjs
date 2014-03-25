var PEG = require("pegjs");
var grammar = "a = 'hello' b\nb = 'world'"; 
console.log(grammar);

var parser = PEG.buildParser(grammar,{ allowedStartRules: ['a', 'b'] });
var r = parser.parse("helloworld", { startRule: 'a' });
console.log(r); // [ 'hello', 'world' ]
r = parser.parse("helloworld")
console.log(r); // [ 'hello', 'world' ]

r =  parser.parse("world", { startRule: 'b' })
console.log(r); // 'world'

try {
  r = parser.parse("world"); // Throws an exception
}
catch(e) {
  console.log("Error!!!!");
  console.log(e);
    /*
    { message: 'Expected "hello" but "w" found.',
      expected: [ { type: 'literal', value: 'hello', description: '"hello"' } ],
      found: 'w',
      offset: 0,
      line: 1,
      column: 1,
      name: 'SyntaxError' }
    */
}
