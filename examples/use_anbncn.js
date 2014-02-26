var PEG = require("./anbncn.js");
var inputs = ["aabbcc", 
              "aabbc",     // error
              "aaabbbccc"
             ];

for(var i = 0; i < inputs.length; i++) {
  var input = inputs[i];
  try {
    var r = PEG.parse(input);
    console.log("ok "+JSON.stringify(r));
  }
  catch (e) {
    console.log("Grr...."+e);
  }
}


