/* From the Wikipedia
Value   ← [0-9]+ / '(' Expr ')'
Product ← Value (('*' / '/') Value)*
Sum     ← Product (('+' / '-') Product)*
Expr    ← Sum
*/
{ 
  function reduce(left, right) {
    // console.log(left); 
    // console.log(right); 
    var sum = left;
    // console.log("sum = "+sum);
    for(var i = 0; i < right.length;i++) {
      var t = right[i];
      var op = t[0];
      var num = t[1];
      // console.log(op);
      // console.log(num);
      eval(`sum ${op}= num`);
      /*
      switch(op) {
        case '+' : sum += num; break;
        case '-' : sum -= num; break;
        case '*' : sum *= num; break;
        case '/' : sum /= num; break;
        default : console.log("Error! "+op);
      }
      */
      // console.log("sum = "+sum);
    }
    return sum;
  }
}

sum     = left:product right:($[+-] product)* { return reduce(left, right); }
product = left:value   right:($[*/] value)*   { return reduce(left, right); }
value   = number:$[0-9]+                      { return parseInt(number,10); }
        / '(' sum:sum ')'                     { return sum; }


