let PEG, coffee, grammar, parser, r;
PEG = require('pegjs');
grammar = `
 {                             
   let util = require("util")     
   let g = "visible variable" 
   console.log("Inside Initializer! options = "+util.inspect(options))
 }                             
 start = 'a' {  console.log(g); return 1 } 
       / c:'c' '\\n' &   { 
                     console.log("inside predicate: g = "+g+" c = "+c);
                     console.log("options = "+util.inspect(options));
                     console.log("location = "+util.inspect(location()));
                     return true 
                   } 'b' { return 2 }

`;
parser = PEG.generate(grammar);
r = parser.parse('a', { x: 'hello' });
console.log(r);
r = parser.parse("c\nb", { y: 'world' });
console.log(r);
