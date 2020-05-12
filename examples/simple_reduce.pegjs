{ 
  const reduce = 
    (left, right) => right.reduce((sum, [op, num]) => eval(`sum ${op}= num`), left);
}

sum     = left:product right:($[+-] product)* { return reduce(left, right); }
product = left:value   right:($[*/] value)*   { return reduce(left, right); }
value   = number:$[0-9]+                      { return parseInt(number,10); }
        / '(' sum:sum ')'                     { return sum; }


