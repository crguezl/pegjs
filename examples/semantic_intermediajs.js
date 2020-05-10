const PEG = require('pegjs');

const grammar = `
a = a:$'a'+ 
    & { console.log("acción intermedia. a = "+a); return true; } 
    b:$'b'+ { 
             console.log("acción final. b = "+b); 
             return text();
          }
`;

parser = PEG.generate(grammar);
r = parser.parse("aabb");
console.log("r = " + r);

