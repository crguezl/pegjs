#!/usr/local/bin/node
var fs = require('fs');
//var sys = require('sys');


var arguments = process.argv.splice(2);
//console.log(arguments);
var module = arguments[0];
var input  = arguments[1];
module = "./"+module;

/* compile grammar */
var FFI = require("node-ffi");
var libc = new FFI.Library(null, {
  "system": ["int32", ["string"]]
});
var run = libc.system;

fs.exists(module+".js", function(exists) {
  if (exists) {
    var PEG = require(module);
    //console.log(PEG);
    if (input) {
      input = input.toString().trim();
      console.log("input = "+input);
      var r = PEG.parse(input);
      console.log("result = "+JSON.stringify(r));
    }
  } else {
    console.log("Can't find "+module+".js Compiling "+module+'.pegjs');
    run("../bin/pegjs "+module+'.pegjs');
  }
});
