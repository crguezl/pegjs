var PEG = require("./arithmetics-parser.js");
var r = PEG.parse("2+3*8");
console.log(r);
