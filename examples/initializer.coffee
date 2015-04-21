PEG = require('pegjs')
coffee = require 'pegjs-coffee-plugin'
grammar = '''
{ 
  util = require 'util'
  console.log "Inside Initializer! options = #{util.inspect options}"
  @g = "visible variable"
}
start = 'a' { 
              console.log(@g) 
              1 
            } 
      / &   { console.log('inside predicate: '+@g); true } 'b' 
            { 2 }
'''
console.log 'GRAMMAR:\n' + grammar
parser = PEG.buildParser(grammar, plugins: [coffee])
r = parser.parse('a')
console.log r
parser = PEG.buildParser(grammar, plugins: [coffee], e: 'chuchu')
r = parser.parse('b')
console.log r
