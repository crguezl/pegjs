#!/usr/bin/env coffee
PEG = require 'pegjs'
coffee = require 'pegjs-coffee-plugin'
grammar = """
a = 'hello' _ b { console.log 1 }
b = 'world'     { console.log 2 }
_ = [ \t]+      { console.log 3 }
"""
parser = PEG.buildParser grammar, plugins: [coffee]
r = parser.parse "hello world"
console.log(r)
