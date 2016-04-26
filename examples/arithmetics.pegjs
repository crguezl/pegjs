/*
 * Classic example grammar, which recognizes simple arithmetic expressions like
 * "2*(3+4)". The parser generated from this grammar then computes their value.
 */

start
  = additive

additive
  = left:multiplicative rest:(ADDOP multiplicative)* { 
       let sum = left;
       rest.forEach( (x) => {
         eval(`sum ${x[0]}= ${x[1]}`);
       });
       return sum;
    }
  / multiplicative

multiplicative
  = left:primary rest:(MULOP primary)* { 
      return rest.reduce((prod, [op, num])=>{ return eval(prod+op+num); },left);
    }
  / primary

primary
  = integer
  / LEFTPAR additive:additive RIGHTPAR { return additive; }

/* A rule can also contain human-readable name that is used in error messages (in our example, only the integer rule has a human-readable name). */
integer "integer"
  = NUMBER

_ = $[ \t\n\r]*

ADDOP = PLUS / MINUS
MULOP = MULT / DIV
PLUS = _"+"_  { return '+'; }
MINUS = _"-"_ { return '-'; }
MULT = _"*"_  { return '*'; }
DIV = _"/"_   { return '/'; }
LEFTPAR = _"("_
RIGHTPAR = _")"_
NUMBER = _ digits:$[0-9]+ _ { return parseInt(digits, 10); }
