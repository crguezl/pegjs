var PEG = require("./danglingelse.js");
var r = PEG.parse("ifcthen if c then o else o");
console.log(r);



