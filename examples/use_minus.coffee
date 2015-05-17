PEG = require("./minus.js")
input = process.argv[2] || "5-1-2"
r = PEG.parse(input)
console.log(r)


