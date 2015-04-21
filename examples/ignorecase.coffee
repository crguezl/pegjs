PEG = require('pegjs')
coffee = require 'pegjs-coffee-plugin'
grammar = '''
start = a:'a'i 
'''
parser = PEG.buildParser(grammar, plugins: [coffee])
r = parser.parse('A')
console.log r
parser = PEG.buildParser(grammar, plugins: [coffee])
r = parser.parse('a')
console.log r
