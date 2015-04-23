var PEG = require("./notpredicate.js");
var input = process.argv[2] || "// one comment\n"+
                               "// another comment \t/\n"+
                               "/* a\n"+
                               "   third comment */";
console.log("\n*****\n"+input+"\n*****\n");
var r = PEG.parse(input);
console.log(r);
