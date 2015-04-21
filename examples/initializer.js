var PEG = require("pegjs");
var grammar = [
' {                             ',
'   util = require("util");     ',
'                               ',
'   var g = "visible variable"; ',
'   console.log("Inside Initializer! options = "+util.inspect(options)); ',
' }                             ',
" start = 'a' { console.log(g); return 1; } ",
"       / &   { console.log('inside predicate: '+g); return true; } 'b' { return 2; }"
];

grammar = grammar.join('\n');
console.log("GRAMMAR:\n"+grammar);

var parser = PEG.buildParser(grammar);
var r = parser.parse("a", { x: 'hello' });
console.log(r); 
r = parser.parse("b");
console.log(r); 
