#!/usr/local/bin/node
var arguments = process.argv.splice(2);
console.log(arguments);
var module = arguments[0];
var input  = arguments[1];
var PEG = require("./"+module+".js");
console.log(PEG);
input = input.toString().trim();
console.log(input);
var r = PEG.parse(input);
console.log(r);
