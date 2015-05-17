sum   = left:value right:('-' value)* 
     { 
        s = left
        right.forEach((x)->
            n = x[1]
            s -= n
        )
        s
     }
value   = number:$[0-9]+            { parseInt(number,10); }
        / '(' sum:sum ')'           { sum }


