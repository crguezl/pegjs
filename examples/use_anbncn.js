var PEG = require("./anbncn.js");
var r = PEG.parse("aabbcc");
console.log(r);

try {
  r = PEG.parse("aabbc");
  console.log(r);
}
catch (e) {
  console.log("Grr...."+e);
}


