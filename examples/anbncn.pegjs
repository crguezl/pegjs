/*
  The following parsing expression grammar describes the classic 
  non-context-free language : 
               { a^nb^nc^n / n >= 1 }
*/

S = &(A 'c') 'a'+ B !('a'/[^a])
A = 'a' A? 'b'
B = 'b' B? 'c'
