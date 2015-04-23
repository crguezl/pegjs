/*
 * Classic example grammar, which recognizes simple arithmetic expressions like
 * "2*(3+4)". The parser generated from this grammar then computes their value.
 */
{
util = require('util');
}
start
  = additive

additive
  =  first:primary rest:(MINUS primary)* {  
       console.log(first+"\n"+util.inspect(rest));
      
   }

primary
  = integer
  / LEFTPAR additive:additive RIGHTPAR { return additive; }

integer "integer"
  = NUMBER

_ = $[ \t\n\r]*

PLUS = _"+"_
MINUS = _ minus:"-" _  { return '-'; }
MULT = _"*"_
DIV = _ div:"/"_       { return '/'; }
LEFTPAR = _"("_
RIGHTPAR = _")"_
NUMBER = _ digits:$[0-9]+ _ { return parseInt(digits, 10); }
