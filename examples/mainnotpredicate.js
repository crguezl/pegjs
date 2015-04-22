var PEG = require("./notpredicate.js");
var input = process.argv[2] || "\n\n532 \t";
var r = PEG.parse(input);
console.log(r);
