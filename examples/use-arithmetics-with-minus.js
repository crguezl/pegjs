var PEG = require("./arithmetics-with-minus.js");
var input = process.argv[2] || "5+3*2";
console.log(`Processing <${input}>`);
var r = PEG.parse(input);
console.log(r);
