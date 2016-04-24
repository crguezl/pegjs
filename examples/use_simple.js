var input = process.argv[2] || "2-3-4";
var PEG = require("./simple.js");
var r = PEG.parse(input);
console.log(r);

