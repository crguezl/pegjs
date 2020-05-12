"use strict";
const PEG = require("pegjs");
const grammar = `
 {
   const ins = require("util").inspect;
   const g = "visible variable";
   console.log("Inside Initializer! options = "+ins(options));
 }
 start = 'a' { console.log('g = '+g); return 1; }
       /  &  { console.log('inside predicate: g = '+ins(g)+' options = '+ins(options)); 
               return true; 
             } 
         'b' { return 2; }
`;

const parser = PEG.generate(grammar);
console.log("PARSING 'a'");
let r = parser.parse("a", { x: 'hello' });
console.log(r);

console.log("PARSING 'b'");
r = parser.parse("b");
console.log(r);

