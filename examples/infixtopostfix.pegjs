{ 
  const util = require('util');

  function reduce(left, right) {
    console.log(`left = ${util.inspect(left)} right = ${util.inspect(right)}`); 
    var sum = left;
    // console.log("sum = "+sum);
    right.forEach((r,_) => {
      let [op, num] = r; // node --harmony_destructuring
       sum += ` ${num} ${op}`;
    });
    return sum;
  }
}

sum     = left:product right:($[+-] product)* { return reduce(left, right); }
product = left:value   right:($[*/] value)*   { return reduce(left, right); }
value   = number:$[0-9]+                      { return number; }
        / '(' sum:sum ')'                     { return sum; }



